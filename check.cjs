const fs = require('fs');
const path = require('path');
const dir = 'src/app';

function walk(current) {
  let results = [];
  const files = fs.readdirSync(current);
  for (const file of files) {
    const full = path.join(current, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

const pages = walk(dir);
const needsMetadata = [];
const needsSchema = [];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  if (!content.includes('generateMetadata') && !content.includes('export const metadata')) {
    needsMetadata.push(p);
  }
  
  const folderName = path.basename(path.dirname(p));
  const isTreatmentPage = folderName.includes('therapy') || folderName.includes('treatment') || folderName.includes('counseling') || folderName.includes('management') || folderName.includes('evaluations') || folderName.includes('disorders') || folderName.includes('adhd') || folderName.includes('anxiety') || folderName.includes('depression') || folderName.includes('bipolar') || folderName.includes('ocd') || folderName.includes('ptsd') || folderName.includes('schizophrenia');
  
  // Also check layout.tsx for SchemaMarkup
  let hasSchema = content.includes('SchemaMarkup');
  if (!hasSchema) {
      const layoutPath = path.join(path.dirname(p), 'layout.tsx');
      if (fs.existsSync(layoutPath)) {
          const layoutContent = fs.readFileSync(layoutPath, 'utf8');
          if (layoutContent.includes('SchemaMarkup')) {
              hasSchema = true;
          }
      }
  }

  if (isTreatmentPage && !hasSchema) {
    needsSchema.push(p);
  }
});

console.log('Needs Metadata:', needsMetadata.map(p => path.relative('src/app', p)));
console.log('Needs Schema:', needsSchema.map(p => path.relative('src/app', p)));

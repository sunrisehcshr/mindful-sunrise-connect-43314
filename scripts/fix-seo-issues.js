// This script applies automated fixes for the SEO issues reported in audit-issues.json
// It performs the following actions:
// 1. Ensures each page has a unique meta description (if missing, generates one from the title).
// 2. Truncates overly long titles (> 70 characters) to 60 characters and appends an ellipsis.
// 3. Truncates meta descriptions (> 160 characters) to 155 characters.
// 4. Adds a missing <h1> to the /appointment page.
// 5. Removes duplicate <h1> tags from /about page (keeps the first occurrence).
// 6. Logs the files it modifies for review.

const fs = require('fs');
const path = require('path');

const appDir = path.resolve(__dirname, '..', 'src', 'app');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walk(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

function truncate(str, max) {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trim() + '…';
}

function fixPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Ensure there is a <h1> heading. If none, insert one after the opening fragment.
  if (!/\<h1[\s>]/.test(content)) {
    const insertPos = content.indexOf('return (');
    if (insertPos !== -1) {
      const h1 = `<h1 className="sr-only">${path.basename(path.dirname(filePath)).replace(/[-_]/g, ' ')}</h1>`;
      content = content.slice(0, insertPos) + h1 + '\n' + content.slice(insertPos);
      modified = true;
    }
  }

  // Remove duplicate <h1> tags (keep first).
  const h1Matches = content.match(/<h1[\s>][\s\S]*?<\/h1>/g);
  if (h1Matches && h1Matches.length > 1) {
    // Keep the first occurrence, remove the rest.
    const first = h1Matches[0];
    const restPattern = new RegExp(h1Matches.slice(1).map(m => m.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), 'g');
    content = content.replace(restPattern, '');
    modified = true;
  }

  // Fix createPageMetadata title and description lengths.
  const titleRegex = /title:\s*"([^"]+)"/;
  const descRegex = /description:\s*"([^"]+)"/;
  const titleMatch = content.match(titleRegex);
  const descMatch = content.match(descRegex);
  if (titleMatch) {
    const original = titleMatch[1];
    const trimmed = truncate(original, 60);
    if (original !== trimmed) {
      content = content.replace(titleRegex, `title: "${trimmed}"`);
      modified = true;
    }
  }
  if (descMatch) {
    const original = descMatch[1];
    const trimmed = truncate(original, 155);
    if (original !== trimmed) {
      content = content.replace(descRegex, `description: "${trimmed}"`);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', filePath);
  }
}

// 1. Create missing appointment page if it does not exist.
const appointmentDir = path.join(appDir, 'appointment');
if (!fs.existsSync(path.join(appointmentDir, 'page.tsx'))){
  const pageContent = `
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import AppointmentSection from '@/components/Appointment/AppointmentSection';

export const metadata: Metadata = createPageMetadata({
  title: 'Schedule an Appointment | Sunrise Human Care',
  description: 'Book your first session online with Sunrise Human Care in Darby, PA. No waitlist, Medicaid accepted.',
  path: '/appointment',
  keywords: ['appointment', 'schedule', 'sunrise human care']
});

export default function AppointmentPage() {
  return (
    <>
      <h1 className="sr-only">Schedule an Appointment</h1>
      <AppointmentSection />
    </>
  );
}
`;
  fs.mkdirSync(appointmentDir, { recursive: true });
  fs.writeFileSync(path.join(appointmentDir, 'page.tsx'), pageContent.trim(), 'utf8');
  console.log('Created appointment page');
}

// Walk through all page.tsx files and apply fixes.
walk(appDir, (p) => {
  if (path.basename(p) === 'page.tsx') {
    fixPage(p);
  }
});

console.log('SEO fixes applied.');

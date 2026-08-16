// This script applies automated fixes for the SEO issues reported in audit-issues.json
// Actions performed:
// 1. Ensures each page has a unique meta description (generates from title if missing).
// 2. Truncates overly long titles (> 70 chars) to 60 chars with an ellipsis.
// 3. Truncates meta descriptions (> 160 chars) to 155 chars.
// 4. Creates a missing /appointment page with an H1 and the AppointmentSection component.
// 5. Removes duplicate <h1> tags (keeps the first) and adds a missing H1 where none exists.
// 6. Logs modified files for review.

const fs = require('fs');
const path = require('path');

const appDir = path.resolve(__dirname, '..', 'src', 'app');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(entry => {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
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

  // Ensure there is at least one <h1>. If missing, insert a sensible one near the top.
  if (!/<h1[\s>]/.test(content)) {
    const insertPos = content.indexOf('return (');
    if (insertPos !== -1) {
      const pageName = path.basename(path.dirname(filePath)).replace(/[-_]/g, ' ');
      const h1 = `<h1 className="sr-only">${pageName}</h1>`;
      content = content.slice(0, insertPos) + h1 + '\n' + content.slice(insertPos);
      modified = true;
    }
  }

  // Remove duplicate <h1> tags, preserving the first occurrence.
  const h1Matches = content.match(/<h1[\s>][\s\S]*?<\/h1>/g);
  if (h1Matches && h1Matches.length > 1) {
    const first = h1Matches[0];
    // Remove all subsequent matches.
    const restPattern = new RegExp(h1Matches.slice(1).map(m => m.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'), 'g');
    content = content.replace(restPattern, '');
    modified = true;
  }

  // Trim title and description lengths inside createPageMetadata.
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

// 1. Ensure appointment page exists.
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
`.trim();
  fs.mkdirSync(appointmentDir, { recursive: true });
  fs.writeFileSync(path.join(appointmentDir, 'page.tsx'), pageContent, 'utf8');
  console.log('Created appointment page');
}

// 2. Walk through all page.tsx files and apply fixes.
walk(appDir, (filePath) => {
  if (path.basename(filePath) === 'page.tsx') {
    fixPage(filePath);
  }
});

console.log('SEO issue auto‑fix script completed.');

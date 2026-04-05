import re
import glob

files = glob.glob('/workspace/src/app/**/*Client.tsx', recursive=True)

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # 1. Fix Link tags to include smooth scroll
    # Replace `<Link href="#appointment">` or `<Link href="#appointment" className="...">`
    def replace_link(match):
        attributes = match.group(1) if match.group(1) else ""
        return f'<Link href="#appointment"{attributes} onClick={{(e) => {{ e.preventDefault(); document.getElementById(\'appointment\')?.scrollIntoView({{ behavior: \'smooth\' }}); }}}}>'

    content = re.sub(r'<Link\s+href="#appointment"([^>]*)>', replace_link, content)

    # 2. Fix button classes to prevent text breaking and make responsive
    # We look for `<button className="..."` inside the `Link` block, but safer to just globally find the "Schedule Your First Session" buttons and add the classes
    # Button classes usually contain: `font-barlow font-bold px-8 py-4` or `px-8 py-4 text-base`
    # Let's replace `px-8 py-4` with `px-6 sm:px-8 py-3 sm:py-4 whitespace-nowrap text-[13px] sm:text-base` for buttons wrapping "Schedule Your First Session" or "Book an Appointment"

    def fix_button_class(match):
        btn_tag = match.group(0)
        # Add the responsive classes if not already there
        if 'whitespace-nowrap' not in btn_tag:
            # Replace px-8 py-4 with responsive versions
            btn_tag = btn_tag.replace('px-8 py-4', 'px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap')
        return btn_tag

    # Match <button className="...Schedule Your First Session...
    # It's multi-line, so we can just target any button that has `px-8 py-4`
    content = re.sub(r'<button\s+className="[^"]*px-8 py-4[^"]*"', fix_button_class, content)

    with open(file, 'w') as f:
        f.write(content)
        print(f"Processed {file}")

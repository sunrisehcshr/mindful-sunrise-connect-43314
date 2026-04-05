import re
import glob

# 1. Fix anchors across all Client.tsx files in src/app
files = glob.glob('/workspace/src/app/**/*Client.tsx', recursive=True)

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    if 'href="/#appointment"' in content:
        content = content.replace('href="/#appointment"', 'href="#appointment"')
        with open(file, 'w') as f:
            f.write(content)
        print(f"Fixed anchor in {file}")

# 2. Update Why Choose Us content in ServicesClient.tsx
with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    services_content = f.read()

# Update Main Value Prop Card
old_main_title = """                      <h3 className="text-4xl md:text-5xl font-normal leading-[0.95] tracking-tighter text-stone-900">
                        Integrated healing <br />
                        <span className="font-instrument-serif italic text-orange-500">for mind and body.</span>
                      </h3>"""
new_main_title = """                      <h3 className="text-4xl md:text-5xl font-normal leading-[0.95] tracking-tighter text-stone-900">
                        Everything your family needs <br />
                        <span className="font-instrument-serif italic text-orange-500">under one roof.</span>
                      </h3>"""
services_content = services_content.replace(old_main_title, new_main_title)

old_main_desc = """                      <p className="max-w-md text-stone-500 text-sm leading-relaxed font-medium">
                        Whether you need compassionate talk therapy or precise medication management, our Darby clinic provides a unified approach. We eliminate the gap between diagnosis and recovery.
                      </p>"""
new_main_desc = """                      <p className="max-w-md text-stone-500 text-sm leading-relaxed font-medium">
                        Stop bouncing between different clinics for therapy and psychiatry. From children struggling with behavioral issues to adults navigating depression or relationship conflict, our Darby clinic provides a unified, expert team for your entire family.
                      </p>"""
services_content = services_content.replace(old_main_desc, new_main_desc)

# Update Medicaid Card
old_medicaid_title = '<h4 className="font-bold text-lg mb-1">100% Medicaid</h4>'
new_medicaid_title = '<h4 className="font-bold text-lg mb-1">Zero Financial Surprises</h4>'
services_content = services_content.replace(old_medicaid_title, new_medicaid_title)

old_medicaid_desc = '<p className="text-stone-400 text-xs leading-relaxed">Exclusively accepting Medicaid for all psychiatric and therapy services in Delaware County.</p>'
new_medicaid_desc = '<p className="text-stone-400 text-xs leading-relaxed">We proudly and exclusively accept Medicaid. Get premium psychiatric care without the out-of-pocket costs.</p>'
services_content = services_content.replace(old_medicaid_desc, new_medicaid_desc)

# Update Continuity Card
old_continuity_title = '<h4 className="font-bold text-lg mb-1">Local Continuity</h4>'
new_continuity_title = '<h4 className="font-bold text-lg mb-1">No More Starting Over</h4>'
services_content = services_content.replace(old_continuity_title, new_continuity_title)

old_continuity_desc = '<p className="text-stone-900/70 text-xs leading-relaxed font-medium">Work with the same psychiatrist and therapist every session for deep, meaningful healing.</p>'
new_continuity_desc = '<p className="text-stone-900/70 text-xs leading-relaxed font-medium">Your therapist and prescriber work together. Stop repeating your story to five different doctors.</p>'
services_content = services_content.replace(old_continuity_desc, new_continuity_desc)

# Change "The Sunrise Difference" pill to "All-In-One Care"
services_content = services_content.replace('The Sunrise Difference', 'All-In-One Care')

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(services_content)

print("Services page copywriting updated.")


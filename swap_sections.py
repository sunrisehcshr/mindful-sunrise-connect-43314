import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# Locate SECTION 2.5: The Process
# and SECTION 3: Local Context & Service Areas

process_pattern = re.compile(r'\{\/\* SECTION 2\.5: The Process \*\/\}.*?<\/section>', re.DOTALL)
community_pattern = re.compile(r'\{\/\* SECTION 3: Local Context & Service Areas \*\/\}.*?<\/section>', re.DOTALL)

process_match = process_pattern.search(content)
community_match = community_pattern.search(content)

if process_match and community_match:
    process_code = process_match.group(0)
    community_code = community_match.group(0)
    
    # We want to replace the whole block containing both with Community then Process
    # First, let's find the start and end of the combined block
    start_idx = min(process_match.start(), community_match.start())
    end_idx = max(process_match.end(), community_match.end())
    
    new_block = f"{community_code}\n\n          {process_code}"
    
    new_content = content[:start_idx] + new_block + content[end_idx:]
    
    with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
        f.write(new_content)
    print("Swapped sections.")
else:
    print("Could not find sections.")

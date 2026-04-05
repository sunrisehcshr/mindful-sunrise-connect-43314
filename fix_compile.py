import glob
import re

files = glob.glob('/workspace/src/app/**/*Client.tsx', recursive=True)

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Fix 1: Remove PlusIcon from @hugeicons/core-free-icons
    content = content.replace('PlusIcon, ', '')
    content = content.replace(', PlusIcon', '')

    # Fix 2: Remove 'as const' from scrollOffset
    content = content.replace('const scrollOffset = ["start center", "end center"] as const;', 'const scrollOffset: any = ["start center", "end center"];')
    
    with open(file, 'w') as f:
        f.write(content)

print("Compile issues fixed.")

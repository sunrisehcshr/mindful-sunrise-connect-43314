import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Remove the inline CurveTransition
curve_func_pattern = re.compile(r'function CurveTransition\(\{ fillColor \}: \{ fillColor: string \}\) \{.*?\n\}\n\n', re.DOTALL)
content = curve_func_pattern.sub('', content)

# 2. Add the import if missing
if 'import CurveTransition' not in content:
    # Find a good place to insert it
    content = content.replace("import SectionTag from '@/components/ui/section-tag';", "import SectionTag from '@/components/ui/section-tag';\nimport CurveTransition from '@/components/ui/CurveTransition';")

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

print("Fixed curve transition.")

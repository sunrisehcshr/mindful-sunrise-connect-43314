import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Add missing imports
if 'useEffect' not in content:
    content = content.replace("import React, { useState, useRef }", "import React, { useState, useRef, useEffect }")

if 'import { HugeiconsIcon }' not in content:
    content = content.replace("import { cn } from \"@/lib/utils\";", "import { cn } from \"@/lib/utils\";\nimport { HugeiconsIcon } from \"@hugeicons/react\";\nimport { Calendar01Icon, ArrowRight01Icon, CallIcon } from \"@hugeicons/core-free-icons\";")

# 2. Fix ArrowRightIcon
content = content.replace('ArrowRightIcon', 'ArrowRight01Icon')

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

print("Compile issues fixed.")

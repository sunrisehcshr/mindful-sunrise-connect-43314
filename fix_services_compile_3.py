import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Imports
if 'useEffect' not in content:
    content = content.replace("import React, { useState, useRef } from 'react';", "import React, { useState, useRef, useEffect } from 'react';")

if 'UiloraFrostedGlass' not in content[:1000]:
    content = content.replace(
        "import ClinicStatus from '@/components/ui/ClinicStatus';",
        "import ClinicStatus from '@/components/ui/ClinicStatus';\nimport dynamic from 'next/dynamic';\nconst UiloraFrostedGlass = dynamic(() => import('@/components/ui/uilora-frosted-glass'), { ssr: false });"
    )

if 'useScroll' not in content:
    content = content.replace(
        "import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';",
        "import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';"
    )

if 'import { HugeiconsIcon }' not in content:
    content = content.replace("import { cn } from \"@/lib/utils\";", "import { cn } from \"@/lib/utils\";\nimport { HugeiconsIcon } from \"@hugeicons/react\";\nimport { Calendar01Icon, ArrowRight01Icon, CallIcon } from \"@hugeicons/core-free-icons\";")

content = content.replace('ArrowRightIcon', 'ArrowRight01Icon')

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

print("Compile issues fixed.")

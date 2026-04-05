import re
import glob

files = [
    "src/app/adhd-treatment-darby-pa/ADHDClient.tsx",
    "src/app/anxiety-therapy-darby-pa/AnxietyClient.tsx",
    "src/app/betterhelp-alternatives-pa/BetterhelpAlternativesClient.tsx",
    "src/app/bipolar-disorder-therapy-darby-pa/BipolarClient.tsx",
    "src/app/bpd-treatment-darby-pa/BPDClient.tsx",
    "src/app/depression-therapy-darby-pa/DepressionClient.tsx",
    "src/app/dissociative-disorders-treatment-darby-pa/DissociativeDisordersClient.tsx",
    "src/app/eating-disorders-treatment-darby-pa/EatingDisordersClient.tsx",
    "src/app/ocd-therapy-darby-pa/OCDClient.tsx",
    "src/app/ptsd-therapy-darby-pa/PTSDClient.tsx",
    "src/app/schizophrenia-treatment-darby-pa/SchizophreniaClient.tsx",
    "src/app/sleep-disorders-treatment-darby-pa/SleepDisordersClient.tsx",
    "src/app/substance-use-treatment-darby-pa/SubstanceUseClient.tsx"
]

for path in files:
    with open(path, "r") as f:
        content = f.read()
        
    if "UiloraFrostedGlass" not in content[:1000]: # Check imports area
        if "import dynamic" not in content:
            content = content.replace('"use client";\n', '"use client";\nimport dynamic from "next/dynamic";\nconst UiloraFrostedGlass = dynamic(() => import("@/components/ui/uilora-frosted-glass"), { ssr: false });\n')
        else:
            content = content.replace('"use client";\n', '"use client";\nconst UiloraFrostedGlass = dynamic(() => import("@/components/ui/uilora-frosted-glass"), { ssr: false });\n')
            
    with open(path, "w") as f:
        f.write(content)


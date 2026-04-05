import os
import re

blogs = [
    "src/app/blog/adhd-treatment-darby-pa-comprehensive-guide/AdhdBlogClient.tsx",
    "src/app/blog/anxiety-treatment-delaware-county-pa/AnxietyBlogClient.tsx",
    "src/app/blog/depression-therapy-darby-pa-complete-guide/DepressionBlogClient.tsx",
    "src/app/blog/family-therapy-darby-pa-guide/FamilyBlogClient.tsx",
]

for path in blogs:
    if not os.path.exists(path):
        continue
    with open(path, "r") as f:
        content = f.read()
    
    if "CurveTransition" not in content:
        content = content.replace('import Script from "next/script";', 'import Script from "next/script";\nimport CurveTransition from "@/components/ui/CurveTransition";')
    
    with open(path, "w") as f:
        f.write(content)


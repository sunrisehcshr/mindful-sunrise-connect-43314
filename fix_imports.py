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
    
    # Fix the broken imports
    # Example broken: `import { Calendar, Clock3, Phone } ArrowLeft, MapPin } from "lucide-react";`
    content = re.sub(r'\} ArrowLeft, MapPin \} from ["\']lucide-react["\'];', r', ArrowLeft, MapPin } from "lucide-react";', content)
    
    with open(path, "w") as f:
        f.write(content)


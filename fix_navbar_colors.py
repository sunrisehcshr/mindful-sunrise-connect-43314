import re

path = "src/components/Navbar.tsx"
with open(path, "r") as f:
    content = f.read()

# Fix gradient text to remove amber and use orange
content = content.replace("bg-gradient-to-r from-orange-500 to-amber-500", "bg-orange-500")
content = content.replace("text-transparent bg-clip-text", "text-orange-500")

# Fix hover bg from amber-50 to orange-50
content = content.replace("bg-amber-50", "bg-orange-50")
content = content.replace("hover:bg-amber-50", "hover:bg-orange-50")

# Fix text colors from amber-700 to orange-600
content = content.replace("text-amber-700", "text-orange-600")
content = content.replace("hover:text-amber-800", "hover:text-orange-700")

# Fix border color from amber-200 to orange-200
content = content.replace("border-amber-200", "border-orange-200")

# Also let's check for any other yellow/amber things
# e.g., "hover:bg-stone-50" should probably be "hover:bg-orange-50" for the mobile nav items to feel cohesive
content = content.replace("hover:bg-stone-50", "hover:bg-orange-50")

with open(path, "w") as f:
    f.write(content)


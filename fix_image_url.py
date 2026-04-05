import re

path = "src/components/services/ServicesSection.tsx"
with open(path, "r") as f:
    content = f.read()

# Fix the replace logic to avoid duplicating if it already contains f_auto
old_replace = "item.image.includes('cloudinary') ? item.image.replace('/upload/', '/upload/f_auto,q_auto,w_800/') : item.image"
new_replace = "item.image.includes('cloudinary') ? (item.image.includes('f_auto') ? item.image : item.image.replace('/upload/', '/upload/f_auto,q_auto,w_800/')) : item.image"

content = content.replace(old_replace, new_replace)

with open(path, "w") as f:
    f.write(content)


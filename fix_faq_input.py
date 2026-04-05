import re

path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

content = re.sub(r'<input\s+type="text"\s+placeholder="Search for questions', r'<input id="search-faq" name="search-faq" type="text" placeholder="Search for questions', content)

with open(path, "w") as f:
    f.write(content)

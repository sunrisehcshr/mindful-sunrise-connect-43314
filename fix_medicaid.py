import re

path = "src/app/medicaid-therapy/page.tsx"
with open(path, "r") as f:
    content = f.read()

content = re.sub(r'<input\s+type="text"\s+name="honeypot"', r'<input id="medicaid-honeypot" type="text" name="honeypot"', content)

with open(path, "w") as f:
    f.write(content)

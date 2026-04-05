import re

path = "src/components/Footer/NewsletterForm.tsx"
with open(path, "r") as f:
    content = f.read()

content = re.sub(r'<input\s+type="email"\s+placeholder="Your email address"', r'<input id="newsletter-email" name="newsletter-email" type="email" placeholder="Your email address"', content)

with open(path, "w") as f:
    f.write(content)

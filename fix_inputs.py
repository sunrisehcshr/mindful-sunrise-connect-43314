import re

# Fix FAQ search input
path_faq = "src/app/faq/page.tsx"
with open(path_faq, "r") as f:
    content = f.read()
content = content.replace(
    '<input\n                      type="text"\n                      placeholder="Search for questions',
    '<input\n                      id="search-faq"\n                      name="search-faq"\n                      type="text"\n                      placeholder="Search for questions'
)
with open(path_faq, "w") as f:
    f.write(content)

# Fix Newsletter input
path_news = "src/components/Footer/NewsletterForm.tsx"
with open(path_news, "r") as f:
    content = f.read()
content = content.replace(
    '<input\n            type="email"\n            placeholder="Your email address"',
    '<input\n            id="newsletter-email"\n            name="newsletter-email"\n            type="email"\n            placeholder="Your email address"'
)
# Add id to honeypot
content = content.replace(
    '<input type="text" name="website"',
    '<input id="honeypot-website" type="text" name="website"'
)
with open(path_news, "w") as f:
    f.write(content)


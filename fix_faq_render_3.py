import re

path = "src/components/FAQSection.tsx"
with open(path, "r") as f:
    content = f.read()

# Try with re.sub just in case there are varying spaces
content = re.sub(
    r'<FAQItem\s*key=\{index\}\s*index=\{index\}\s*question=\{faq\.question\}\s*answer=\{faq\.answer\}\s*meta=\{faq\.meta\}\s*isOpen=\{openIndex === index\}\s*onClick=\{\(\) => toggleFAQ\(index\)\}\s*/>',
    """<SpotlightItem
                key={index}
                faq={faq}
                cardBgColor="#ffffff"
                cardBorderColor="rgba(249, 115, 22, 0.15)"
                cardTextColor="#1c1917"
                hoverCardTextColor="#ea580c"
                answerTextColor="#78716c"
                iconColor="#f97316"
                hoverIconColor="#ffffff"
                spotlightColor="rgba(249, 115, 22, 0.08)"
              />""",
    content,
    flags=re.DOTALL
)

with open(path, "w") as f:
    f.write(content)

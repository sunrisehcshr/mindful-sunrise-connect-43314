import re
path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

# When we click, the popup unmounts immediately, maybe that breaks the scroll logic because the event loop gets weird? No.
# Maybe `isHighlighted` isn't updating the correct item? 
# Wait! In FAQItem:
# `<FAQItem key={faq.question} {...faq} isHighlighted={highlightedQ === faq.question} />`
# `highlightedQ` is a string! But wait, `faq.question` could have a question mark, space, etc. That should match exactly!

old_open = """        // Wait for the smooth scroll to finish before opening the accordion
        setTimeout(() => {
          console.log(`[scrollToEl] opening accordion for ${question}`);
          setHighlightedQ(question);
        }, 800);"""

new_open = """        // Wait for the smooth scroll to finish before opening the accordion
        setTimeout(() => {
          console.log(`[scrollToEl] opening accordion for ${question}`);
          // Force React state update
          requestAnimationFrame(() => {
            setHighlightedQ(question);
          });
        }, 800);"""

content = content.replace(old_open, new_open)

with open(path, "w") as f:
    f.write(content)

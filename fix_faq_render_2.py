import re

path = "src/components/FAQSection.tsx"
with open(path, "r") as f:
    content = f.read()

# I need to find where <FAQItem is still being used and replace it with <SpotlightItem
# Since the regex didn't work last time

old_map = """              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                meta={faq.meta}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />"""

new_map = """              <SpotlightItem
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
              />"""

content = content.replace(old_map, new_map)

# Also fix the import issues
if "useMotionValue" not in content:
    content = content.replace('import { AnimatePresence, motion } from "framer-motion";', 'import { AnimatePresence, motion, useMotionValue, useMotionTemplate } from "framer-motion";\nimport { useRef } from "react";')

with open(path, "w") as f:
    f.write(content)

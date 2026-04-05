import re
path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

# Add logging to FAQItem
old_faq_item = """const FAQItem = ({ question, answer, isHighlighted }: { question: string, answer: string, isHighlighted?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(isHighlighted || false);

  React.useEffect(() => {
    if (isHighlighted) {
      setIsOpen(true);
    }
  }, [isHighlighted]);"""

new_faq_item = """const FAQItem = ({ question, answer, isHighlighted }: { question: string, answer: string, isHighlighted?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(isHighlighted || false);

  React.useEffect(() => {
    console.log(`[FAQItem] ${question.substring(0, 15)}... isHighlighted changed to:`, isHighlighted);
    if (isHighlighted) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isHighlighted]);"""

content = content.replace(old_faq_item, new_faq_item)

with open(path, "w") as f:
    f.write(content)

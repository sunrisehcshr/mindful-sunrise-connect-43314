import re
path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

# Instead of managing local state `isOpen` initialized from `isHighlighted`,
# let's make it fully controlled by a prop when it's highlighted, or at least update local state properly.
old_faq_item = """const FAQItem = ({ question, answer, isHighlighted }: { question: string, answer: string, isHighlighted?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(isHighlighted || false);

  React.useEffect(() => {
    if (isHighlighted) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isHighlighted]);"""

new_faq_item = """const FAQItem = ({ question, answer, isHighlighted }: { question: string, answer: string, isHighlighted?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(isHighlighted || false);

  React.useEffect(() => {
    if (isHighlighted !== undefined) {
      setIsOpen(isHighlighted);
    }
  }, [isHighlighted]);"""

content = content.replace(old_faq_item, new_faq_item)

with open(path, "w") as f:
    f.write(content)

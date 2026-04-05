import re
path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

# Let's debug this heavily.
# We are going to:
# 1. Use the id directly without relying on `isHighlighted` prop.
# 2. Add an `openQuestion` global state that holds the ID of the question that should be open.
# Wait, `isHighlighted` is literally a boolean prop. If `isHighlighted` is true, it sets `isOpen(true)`.
# Could it be that `isHighlighted` is evaluating to `false`?
# In `FAQItem` rendering:
# `<FAQItem key={faq.question} {...faq} isHighlighted={highlightedQ === faq.question} />`
# Yes, if `highlightedQ` matches `faq.question`, it's true.
# BUT wait! Does `faq.question` match exactly? Yes, we get it from `searchResults` which maps directly from `faqCategories`.

# Let's try this bulletproof way:
# Instead of dealing with React's event loop and animations competing, let's use a standard `ref` approach or just force the state.
# Actually, the problem is that `isHighlighted` might be set to true, but because `motion.div` has `key={activeTab}`, 
# when `activeTab` changes, the `FAQItem` mounts.
# On initial mount, `isHighlighted` is true! 
# So `const [isOpen, setIsOpen] = React.useState(isHighlighted || false);` SHOULD evaluate to `true`!
# Why doesn't it?
# Because `useState` only runs ONCE per component mount.
# BUT if `activeTab` changes, does `FAQItem` remount? Yes, because the parent `motion.div` has `key={activeTab}`.
# BUT wait! What if `activeTab` is ALREADY the same?
# E.g. you are on "General" tab. You search for a "General" question.
# `activeTab` is set to "General". It's the SAME!
# So `motion.div` does NOT remount.
# Then `isHighlighted` becomes true. The `useEffect` runs:
#   if (isHighlighted !== undefined) { setIsOpen(isHighlighted); }
# So `isOpen` becomes true.

# Wait, `isHighlighted !== undefined` is ALWAYS true if it's passed as a boolean!
# Wait! `<FAQItem isHighlighted={highlightedQ === faq.question} />`
# `highlightedQ === faq.question` is ALWAYS a boolean (true or false).
# So `isHighlighted` is NEVER undefined. It is either `true` or `false`.
# So EVERY time `FAQItem` renders, `isHighlighted` is `true` or `false`.
# And `useEffect` runs when `isHighlighted` changes.
# When `highlightedQ` becomes `null`, `isHighlighted` becomes `false`.
# The `useEffect` runs and calls `setIsOpen(false)` for EVERY SINGLE FAQItem!
# Oh my god! That means you can never manually open an accordion if it's not highlighted!
# Because if you click to open it manually, `isOpen` becomes `true`. But `isHighlighted` is `false`.
# Wait, if `isHighlighted` doesn't change, `useEffect` doesn't run. So manual clicking still works.
# BUT if you search, `isHighlighted` becomes `true` for one, and `false` for others.
# Then you clear search, `highlightedQ` becomes `null`, `isHighlighted` becomes `false`, and it closes.

# Is it possible that `setHighlightedQ(question)` is being immediately overridden by something else?
# Let's look at `handleSelectFAQ`:
new_handle = r"""  const handleSelectFAQ = (catId: string, question: string) => {
    setSearchQuery("");
    setShowDropdown(false);
    
    // First switch tab if needed
    if (activeTab !== catId) {
      setActiveTab(catId);
    }
    
    // Force React to process the tab switch first, then set the highlight
    setTimeout(() => {
      setHighlightedQ(question);
      
      const id = question.replace(/\s+/g, '-').toLowerCase().replace(/[^a-z0-9-]/g, '');
      
      const scrollToEl = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) {
          // Give the accordion a tiny fraction of a second to start opening before we measure its position
          setTimeout(() => {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }, 50);
        } else if (attempts < 10) {
          setTimeout(() => scrollToEl(attempts + 1), 50);
        }
      };
      
      scrollToEl(0);
    }, 50);
  };"""

content = re.sub(r'  const handleSelectFAQ = \(catId: string, question: string\) => \{.*?\n    setTimeout\(\(\) => scrollToEl\(0\), 50\);\n  \};', new_handle, content, flags=re.DOTALL)

with open(path, "w") as f:
    f.write(content)

import re
path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

# Let's completely decouple highlightedQ and the FAQItem's isOpen.
# Wait, if `isHighlighted` is true, the `useEffect` sets `isOpen(true)`. 
# BUT! `isHighlighted` is passed like this: `isHighlighted={highlightedQ === faq.question}`
# Wait, is `faq.question` perfectly equal to `highlightedQ`? Yes, because we pass `result.question` to `handleSelectFAQ`.
# Could it be that the component is remounting entirely when highlightedQ changes?
# No, `key={faq.question}` is stable.

# But wait! `<motion.div key={activeTab}>`!
# If `activeTab` changes, `motion.div` remounts!
# If `highlightedQ` changes 800ms later, does `motion.div` remount? No, `activeTab` is the same!
# So `FAQItem` should re-render.

# Maybe the problem is `if (isHighlighted !== undefined) { setIsOpen(isHighlighted); }`
# If `isHighlighted` starts as `false`, `setIsOpen(false)`.
# Then 800ms later, `isHighlighted` becomes `true`. `setIsOpen(true)`.
# This SHOULD work.

# Let's add a button in the UI to manually test `isHighlighted` or add a `console.log` back just to see if it even runs.
# Wait! Look at `handleSelectFAQ` in `page.tsx` line 607:
# `setHighlightedQ(question);`
# If the user clicks, `setHighlightedQ(null)` runs.
# Then 800ms later, `setHighlightedQ(question)` runs.
# Does `setHighlightedQ` actually trigger a re-render? Yes, it's a state setter.

# Let's just bypass the 800ms delay. Let's set it immediately and then scroll.
# Maybe the 800ms delay is causing issues if the user scrolls or something else happens?
# Let's just set it immediately.

new_handle = """  const handleSelectFAQ = (catId: string, question: string) => {
    setSearchQuery("");
    setShowDropdown(false);
    
    // Set active tab
    setActiveTab(catId);
    
    // Set highlighted immediately so it opens before scrolling
    setHighlightedQ(question);

    const id = question.replace(/\\s+/g, '-').toLowerCase().replace(/[^a-z0-9-]/g, '');

    // Try to find the element and scroll to it. If it's not rendered yet, try again shortly.
    const scrollToEl = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        // Wait a tiny bit for the accordion to open so we get the correct height
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      } else if (attempts < 10) {
        setTimeout(() => scrollToEl(attempts + 1), 50);
      }
    };

    setTimeout(() => scrollToEl(0), 50);
  };"""

# Let's find the old one and replace it.
content = re.sub(r'  const handleSelectFAQ = \(catId: string, question: string\) => \{.*?\n    setTimeout\(\(\) => scrollToEl\(0\), 50\);\n  \};', new_handle, content, flags=re.DOTALL)

with open(path, "w") as f:
    f.write(content)

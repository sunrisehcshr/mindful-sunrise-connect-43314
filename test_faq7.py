import re
path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

new_handle = r"""  const handleSelectFAQ = (catId: string, question: string) => {
    setSearchQuery("");
    setShowDropdown(false);
    
    // Set active tab
    setActiveTab(catId);
    
    // Set highlighted immediately so it opens before scrolling
    setHighlightedQ(question);

    const id = question.replace(/\s+/g, '-').toLowerCase().replace(/[^a-z0-9-]/g, '');

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

content = re.sub(r'  const handleSelectFAQ = \(catId: string, question: string\) => \{.*?\n    setTimeout\(\(\) => scrollToEl\(0\), 50\);\n  \};', new_handle, content, flags=re.DOTALL)

with open(path, "w") as f:
    f.write(content)

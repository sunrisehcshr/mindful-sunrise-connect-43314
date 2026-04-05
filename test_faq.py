import re
path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

# Add console.log
new_func = """    const scrollToEl = (attempts = 0) => {
      const el = document.getElementById(id);
      console.log(`[scrollToEl] attempts=${attempts}, id=${id}, found=${!!el}`);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
        
        // Wait for the smooth scroll to finish before opening the accordion
        setTimeout(() => {
          console.log(`[scrollToEl] opening accordion for ${question}`);
          setHighlightedQ(question);
        }, 800);
      } else if (attempts < 5) {
        setTimeout(() => scrollToEl(attempts + 1), 50);
      }
    };"""

content = re.sub(r'const scrollToEl = \(attempts = 0\) => \{.*?\n    \};', new_func, content, flags=re.DOTALL)

with open(path, "w") as f:
    f.write(content)

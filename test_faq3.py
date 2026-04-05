import re
path = "src/app/faq/page.tsx"
with open(path, "r") as f:
    content = f.read()

# Instead of setting highlighted to null immediately, wait a tiny bit to make sure React re-renders if tab changed.
old_handle = """  const handleSelectFAQ = (catId: string, question: string) => {
    setSearchQuery("");
    setShowDropdown(false);
    setActiveTab(catId);
    setHighlightedQ(null);"""

new_handle = """  const handleSelectFAQ = (catId: string, question: string) => {
    setSearchQuery("");
    setShowDropdown(false);
    
    // Clear any previous highlight
    setHighlightedQ(null);
    
    // Set active tab
    setActiveTab(catId);"""

content = content.replace(old_handle, new_handle)

with open(path, "w") as f:
    f.write(content)

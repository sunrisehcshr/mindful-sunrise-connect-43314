import re

path = "src/app/contact/page.tsx"
with open(path, "r") as f:
    content = f.read()

old_hero = """          {/* Hero Section - Matching Design System */}
          <section className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">"""

new_hero = """          {/* Hero Section - Matching Design System */}
          <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 bg-stone-900">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-30">"""

content = content.replace(old_hero, new_hero)

# Fix the main tag padding since we moved it to section
content = content.replace('<main className="flex-grow pt-28">', '<main className="flex-grow">')

with open(path, "w") as f:
    f.write(content)

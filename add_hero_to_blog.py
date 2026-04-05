import re
import os

files = [
    "src/app/blog/adhd-treatment-darby-pa-comprehensive-guide/AdhdBlogClient.tsx",
    "src/app/blog/anxiety-treatment-delaware-county-pa/AnxietyBlogClient.tsx",
    "src/app/blog/depression-therapy-darby-pa-complete-guide/DepressionBlogClient.tsx",
    "src/app/blog/family-therapy-darby-pa-guide/FamilyBlogClient.tsx",
    "src/app/blog/finding-therapist-darby-pa-guide/TherapistGuideClient.tsx"
]

for path in files:
    if not os.path.exists(path):
        continue
        
    with open(path, "r") as f:
        content = f.read()

    # The blogs currently just have `<main className="flex-grow">` and then `<article className="container mx-auto px-4 py-12 max-w-4xl pt-28">`
    # We want to add the hero background behind the navbar, but wait! The blog posts don't have a hero section. They just have text.
    # The user says: "i want same background style and animation style inside blog posts as well"
    # So we should wrap the top part (breadcrumbs and title) in a hero section, or just add the background to the top of the page.
    
    # Let's add a hero section that contains the breadcrumbs, title, and metadata.
    
    old_main = """        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl pt-28">
            <nav className="text-sm mb-6 text-muted-foreground font-barlow">"""
            
    new_main = """        <main className="flex-grow">
          <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 bg-stone-900">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />
            </div>
            
            <div className="container mx-auto px-4 relative z-30 max-w-4xl">
              <nav className="text-sm mb-6 text-stone-400 font-barlow">"""
              
    content = content.replace(old_main, new_main)
    
    # We need to change the breadcrumb links to be visible on dark background
    content = content.replace('<Link href="/" className="hover:text-amber-600">Home</Link>', '<Link href="/" className="hover:text-orange-400 text-stone-300 transition-colors">Home</Link>')
    content = content.replace('<Link href="/blog" className="hover:text-amber-600">Blog</Link>', '<Link href="/blog" className="hover:text-orange-400 text-stone-300 transition-colors">Blog</Link>')
    content = content.replace('<span className="text-foreground">', '<span className="text-white">')
    
    # We need to change the text colors in the header
    content = content.replace('text-stone-800 font-barlow tracking-tight', 'text-white font-barlow tracking-tighter leading-none')
    content = content.replace('text-stone-500 text-sm font-barlow', 'text-stone-300 text-sm font-barlow')
    
    # We need to close the hero section and start the article content
    old_article_start = """            </header>

            <div className="prose prose-stone max-w-none mb-12 font-barlow text-stone-600 leading-relaxed">"""
            
    new_article_start = """            </header>
            </div>
          </section>
          
          <article className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="prose prose-stone max-w-none mb-12 font-barlow text-stone-600 leading-relaxed md:text-lg">"""
            
    content = content.replace(old_article_start, new_article_start)

    # Some files might have slightly different markup
    with open(path, "w") as f:
        f.write(content)


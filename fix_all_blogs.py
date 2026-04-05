import re
import os

blogs = [
    "src/app/blog/adhd-treatment-darby-pa-comprehensive-guide/AdhdBlogClient.tsx",
    "src/app/blog/anxiety-treatment-delaware-county-pa/AnxietyBlogClient.tsx",
    "src/app/blog/depression-therapy-darby-pa-complete-guide/DepressionBlogClient.tsx",
    "src/app/blog/family-therapy-darby-pa-guide/FamilyBlogClient.tsx",
]

def add_imports(content):
    if "ArrowLeft" not in content:
        content = content.replace("from \"lucide-react\";", "ArrowLeft, MapPin } from \"lucide-react\";")
        content = content.replace("from 'lucide-react';", "ArrowLeft, MapPin } from 'lucide-react';")
    if "CurveTransition" not in content:
        content = content.replace("import SectionTag", "import CurveTransition from \"@/components/ui/CurveTransition\";\nimport SectionTag")
    return content

for path in blogs:
    if not os.path.exists(path):
        continue
    
    with open(path, "r") as f:
        content = f.read()

    content = add_imports(content)

    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if title_match:
        # Remove any html tags from title match just in case
        title = re.sub(r'<[^>]+>', '', title_match.group(1)).strip()
    else:
        title = "Mental Health Resources"
    
    date_match = re.search(r'<Calendar[^>]*/>\s*(.*?)\s*</span>', content)
    date = date_match.group(1).strip() if date_match else "Oct 2025"
    
    time_match = re.search(r'<Clock3[^>]*/>\s*(.*?)\s*</span>', content)
    time = time_match.group(1).strip() if time_match else "10 min read"
    
    parts = title.split(":")
    if len(parts) > 1:
        first_part = parts[0] + ":"
        second_part = parts[1].strip()
    else:
        words = title.split()
        first_part = " ".join(words[:-2])
        second_part = " ".join(words[-2:])

    new_hero = """<main className="flex-grow">
          {/* Article Hero */}
          <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 bg-stone-900">
            <div className="absolute inset-0 z-0 overflow-hidden">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 relative z-30 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-8 hover:text-orange-400 transition-colors group">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Back to Resources
                </Link>

                <h1 className="font-barlow font-bold text-4xl md:text-6xl text-white tracking-tighter leading-none mb-8">
                  FIRST_PART <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-orange-500 font-normal text-5xl md:text-7xl">SECOND_PART</span>
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-stone-400 font-barlow text-sm border-t border-white/10 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>DATE_TEXT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Clock3 className="w-4 h-4" />
                    </div>
                    <span>TIME_TEXT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Darby, PA</span>
                  </div>
                </div>
            </div>
            <CurveTransition fillColor="#ffffff" inverted className="z-20" />
          </section>

          {/* Article Content */}
          <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-stone prose-lg max-w-none prose-headings:font-barlow prose-headings:font-bold prose-headings:tracking-tight prose-p:font-barlow prose-p:text-stone-600 prose-p:leading-relaxed prose-strong:text-stone-800 prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50/30 prose-blockquote:rounded-2xl prose-blockquote:p-8 prose-blockquote:not-italic prose-blockquote:font-medium">"""
    
    new_hero = new_hero.replace("FIRST_PART", first_part).replace("SECOND_PART", second_part)
    new_hero = new_hero.replace("DATE_TEXT", date).replace("TIME_TEXT", time)

    content = re.sub(r'<main className="flex-grow">.*?<div className="prose[^>]*>', new_hero, content, flags=re.DOTALL)

    cta_title_match = re.search(r'<h2 className="text-3xl font-bold mb-6 font-barlow">(.*?)</h2>', content)
    cta_title = cta_title_match.group(1) if cta_title_match else "Ready to take the first step?"
    
    cta_desc_match = re.search(r'<p className="text-stone-400 mb-8 font-barlow max-w-2xl mx-auto">(.*?)</p>', content)
    cta_desc = cta_desc_match.group(1) if cta_desc_match else "Our compassionate team in Darby is ready to support you with expert care tailored to your specific needs."
    
    cta_words = cta_title.split()
    if len(cta_words) > 2:
        cta_first = " ".join(cta_words[:-2])
        cta_second = " ".join(cta_words[-2:])
    else:
        cta_first = cta_words[0] if cta_words else ""
        cta_second = cta_words[1] if len(cta_words) > 1 else ""

    new_cta = """{/* Final CTA */}
                <div className="mt-24 bg-stone-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-barlow tracking-tight leading-none">
                      CTA_FIRST <span className="font-instrument-serif italic text-orange-500 font-normal">CTA_SECOND</span>
                    </h2>
                    <p className="text-stone-400 mb-10 font-barlow text-lg">
                      CTA_DESC
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-stone-50 rounded-full px-10 h-14 font-bold text-base shadow-xl shadow-orange-900/20 w-full sm:w-auto">
                        <Link href="/appointment">Book Your Session</Link>
                      </Button>
                      <Button asChild size="lg" className="bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full px-10 h-14 font-bold text-base w-full sm:w-auto">
                        <a href="tel:+18146202162" className="flex items-center gap-3">
                          <Phone className="h-4 w-4" /> (814) 620-2162
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>"""
          
    new_cta = new_cta.replace("CTA_FIRST", cta_first).replace("CTA_SECOND", cta_second).replace("CTA_DESC", cta_desc)

    content = re.sub(r'\{\/\*\s*CTA\s*\*\/\}.*?</article>', new_cta, content, flags=re.DOTALL)
    content = re.sub(r'<div className="mt-16 text-center bg-stone-900.*?</article>', new_cta, content, flags=re.DOTALL)

    with open(path, "w") as f:
        f.write(content)

first_blog = "src/app/blog/finding-therapist-darby-pa-guide/FindingTherapistClient.tsx"
if os.path.exists(first_blog):
    with open(first_blog, "r") as f:
        content = f.read()
        
    old_hero = """<main className="flex-grow pt-28">
          {/* Article Hero */}
          <section className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -ml-48 -mb-48" />
            </div>"""
            
    new_hero = """<main className="flex-grow">
          {/* Article Hero */}
          <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 bg-stone-900">
            <div className="absolute inset-0 z-0 overflow-hidden">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />
            </div>"""
            
    content = content.replace(old_hero, new_hero)
    
    # Fix the CTA button
    content = content.replace('variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-10 h-14 font-bold text-base w-full sm:w-auto"', 'className="bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full px-10 h-14 font-bold text-base w-full sm:w-auto"')
    
    # Fix prose-strong (was text-stone-50 which is invisible on white bg!)
    content = content.replace('prose-strong:text-stone-50 ', 'prose-strong:text-stone-800 ')

    with open(first_blog, "w") as f:
        f.write(content)


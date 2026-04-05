import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Fix FAQ section background so the curve is visible
content = content.replace(
    '<section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">',
    '<section className="py-16 md:py-24 bg-white relative overflow-hidden">'
)

# 2. Add a CTA Banner right before the Appointment Section to make the page feel complete
cta_banner = """
          {/* SECTION 5: CTA Banner */}
          <section className="py-20 md:py-32 relative overflow-hidden bg-stone-950 mx-4 md:mx-6 my-12 rounded-[3rem]">
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
                alt="Therapy Session" 
                fill 
                className="object-cover opacity-30" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white mb-6 bg-white/20 px-5 py-2.5 rounded-full border border-white/30 backdrop-blur-md shadow-lg">
                  Take the First Step
                </span>
                
                <h2 className="text-balance font-barlow font-normal text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1] mb-6">
                  Ready to prioritize your <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-yellow-200">mental health?</span>
                </h2>
                
                <p className="text-white/80 font-barlow text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  You don't have to navigate life's challenges alone. Our compassionate team in Darby, PA is ready to support your journey to wellness.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                  <Link href="/#appointment" className="w-full sm:w-auto">
                    <button className="bg-white hover:bg-stone-50 text-orange-600 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg">
                      <Calendar className="w-5 h-5" />
                      Schedule Your First Session
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <button className="bg-black/10 hover:bg-black/20 text-white border border-white/30 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-md">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (814) 620-2162
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}"""

content = content.replace('{/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}', cta_banner)

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

print("Enhancements applied.")

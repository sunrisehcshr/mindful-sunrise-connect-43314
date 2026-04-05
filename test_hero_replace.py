import re

path = "src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx"
with open(path, "r") as f:
    content = f.read()

# Replace CTA
old_cta_start = r'className="mt-16 md:mt-24 max-w-5xl mx-auto bg-orange-600 rounded-\[2rem\] p-8 md:p-12 relative overflow-hidden text-center shadow-2xl shadow-orange-500/20"'
new_cta_start = r'className="mt-16 md:mt-24 max-w-5xl mx-auto bg-stone-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-stone-900/20"'

content = re.sub(old_cta_start, new_cta_start, content)

old_cta_fluid = r"""                 \{\/\* WebGL Fluid Background - Sun Theme \*\/\}
                 <div className="absolute inset-0 z-0 opacity-90 mix-blend-screen">
                    <UiloraFrostedGlass
                      baseColor="#ea580c" // Bright Orange Base
                      accentColor="#fef08a" // Bright Yellow highlights
                      speed=\{0\.15\}
                    \/>
                 </div>

                 \{\/\* Subtle Ambient Glow overlays to ensure text readability \*\/\}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-orange-700/30 blur-\[50px\] pointer-events-none z-0" \/>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700/30 blur-\[50px\] pointer-events-none z-0" \/>"""

new_cta_fluid = """                 {/* WebGL Fluid Background */}
                 <div className="absolute inset-0 z-0 opacity-40">
                    <UiloraFrostedGlass
                      baseColor="#1c1917" // stone-900
                      accentColor="#f97316" // orange-500
                      speed={0.15}
                    />
                 </div>

                 {/* Subtle Ambient Glow overlays to ensure text readability */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />"""

content = re.sub(old_cta_fluid, new_cta_fluid, content)

# Update yellow text to orange-400
content = content.replace("text-yellow-200", "text-orange-400")

# Update buttons in CTA
old_btn_1 = 'className="bg-white hover:bg-stone-50 text-orange-600 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-white/20"'
new_btn_1 = 'className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-orange-500/20"'
content = content.replace(old_btn_1, new_btn_1)

# Now Replace Hero
hero_pattern = r'<div className="absolute inset-0 z-0">\s*<Image.*?\/>\s*\{\/\* Extremely light dark overlay so the image is fully visible while keeping text readable \*\/\}\s*<div className="absolute inset-0 z-0 bg-black\/30" \/>'

new_hero_bg = """<div className="absolute inset-0 z-0 opacity-40">
            <UiloraFrostedGlass
              baseColor="#1c1917" // stone-900
              accentColor="#f97316" // orange-500
              speed={0.15}
            />
          </div>
          {/* Subtle Ambient Glow overlays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />
          <div className="absolute inset-0 z-0">"""

# wait, the pattern might be slightly different for different files.
# Let's check how many files have `<div className="absolute inset-0 z-0">` with an `<Image`
with open(path, "w") as f:
    f.write(content)

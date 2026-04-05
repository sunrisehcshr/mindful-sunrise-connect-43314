import re
import glob
import os

client_files = glob.glob('src/app/**/*Client.tsx', recursive=True)
files_to_process = [f for f in client_files if 'blog' not in f and 'about' not in f]

for path in files_to_process:
    with open(path, "r") as f:
        content = f.read()
        
    changed = False

    # Replace Sun-Theme Fluid CTA wrapper class
    old_cta_start = r'className="mt-16 md:mt-24 max-w-5xl mx-auto bg-orange-600 rounded-\[2rem\] p-8 md:p-12 relative overflow-hidden text-center shadow-2xl shadow-orange-500/20"'
    new_cta_start = r'className="mt-16 md:mt-24 max-w-5xl mx-auto bg-stone-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-stone-900/20"'
    new_content = re.sub(old_cta_start, new_cta_start, content)
    if new_content != content:
        content = new_content
        changed = True
        
    # Same for ServicesClient which has rounded-[3rem]
    old_cta_start_services = r'className="mt-24 md:mt-32 max-w-5xl mx-auto bg-orange-600 rounded-\[3rem\] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-orange-500/20"'
    new_cta_start_services = r'className="mt-24 md:mt-32 max-w-5xl mx-auto bg-stone-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-stone-900/20"'
    new_content = re.sub(old_cta_start_services, new_cta_start_services, content)
    if new_content != content:
        content = new_content
        changed = True

    # Replace the actual WebGL Sun Theme inside the CTA
    cta_fluid_regex = r'\{\/\* WebGL Fluid Background - Sun Theme \*\/\}\s*<div className="absolute inset-0 z-0 opacity-90 mix-blend-screen">\s*<UiloraFrostedGlass\s*baseColor="#ea580c"\s*\/\/\s*Bright Orange Base\s*accentColor="#fef08a"\s*\/\/\s*Bright Yellow highlights\s*speed=\{0\.15\}\s*\/>\s*<\/div>\s*\{\/\* Subtle Ambient Glow overlays to ensure text readability \*\/\}\s*<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-orange-700/30 blur-\[50px\] pointer-events-none z-0" \/>\s*<div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700/30 blur-\[50px\] pointer-events-none z-0" \/>'

    new_cta_fluid = """{/* WebGL Fluid Background */}
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

    new_content = re.sub(cta_fluid_regex, new_cta_fluid, content, flags=re.DOTALL)
    if new_content != content:
        content = new_content
        changed = True

    # Update text colors in CTA to match dark theme
    content = content.replace("text-yellow-200", "text-orange-400")
    
    # Change the first small tag (if it's white)
    tag_old = 'className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white mb-6 bg-white/20 px-5 py-2.5 rounded-full border border-white/30 backdrop-blur-md shadow-[0_4px_20px_rgba(255,255,255,0.1)] drop-shadow-md"'
    tag_new = 'className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 backdrop-blur-sm"'
    content = content.replace(tag_old, tag_new)

    # Change buttons
    old_btn = 'className="bg-white hover:bg-stone-50 text-orange-600 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-white/20"'
    new_btn = 'className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-orange-500/20"'
    content = content.replace(old_btn, new_btn)

    old_btn_call = 'className="bg-black/10 hover:bg-black/20 text-white border border-white/30 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-md"'
    new_btn_call = 'className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-md"'
    content = content.replace(old_btn_call, new_btn_call)

    # In some places we might have slightly different old_btn classes, let's also do a general replace for the text color if it exists
    # Just to be safe, we'll check if anything was changed
    if changed:
        with open(path, "w") as f:
            f.write(content)
        print(f"Updated {path}")


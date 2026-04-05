import re

path = "src/components/team/TeamSection.tsx"
with open(path, "r") as f:
    content = f.read()

# Replace the CTA background
old_bg = 'className="rounded-[2.5rem] p-12 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl bg-orange-600 group"'
new_bg = 'className="rounded-[2.5rem] p-12 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl bg-stone-900 group"'

content = content.replace(old_bg, new_bg)

# Replace UiloraFrostedGlass props
old_fluid = r'<UiloraFrostedGlass\s*baseColor="#f97316"\s*accentColor="#fdba74"\s*speed=\{1\.2\}\s*className="z-\[1\]"\s*\/>'
new_fluid = """<div className="absolute inset-0 z-0 opacity-40">
              <UiloraFrostedGlass
                baseColor="#1c1917" // stone-900
                accentColor="#f97316" // orange-500
                speed={0.15}
                className="z-[1]"
              />
            </div>
            {/* Subtle Ambient Glow overlays to ensure text readability */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />"""

content = re.sub(old_fluid, new_fluid, content, flags=re.DOTALL)

# Replace typography
old_text = 'className="font-instrument-serif italic text-3xl md:text-5xl text-white leading-snug tracking-tight max-w-4xl"'
new_text = 'className="font-barlow font-normal text-3xl md:text-4xl lg:text-5xl text-white leading-[1.2] tracking-tighter max-w-4xl drop-shadow-lg"'
content = content.replace(old_text, new_text)

# Replace the amber-200 text color with orange-400
content = content.replace('text-amber-200', 'font-instrument-serif italic text-orange-400 font-normal')

# Replace the button
old_btn = 'className="inline-flex px-10 py-5 bg-white text-orange-600 font-bold rounded-full items-center gap-3 shadow-xl transition-all hover:bg-amber-50 group/btn whitespace-nowrap"'
new_btn = 'className="inline-flex px-10 py-5 bg-orange-500 hover:bg-orange-400 text-stone-50 font-bold rounded-full items-center gap-3 shadow-xl shadow-orange-500/20 transition-all group/btn whitespace-nowrap"'
content = content.replace(old_btn, new_btn)

with open(path, "w") as f:
    f.write(content)


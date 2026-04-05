import re
import os

path = "src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx"
with open(path, "r") as f:
    content = f.read()

# Replace Hero
# Let's find `<section className="relative pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-stone-950">`
# or similar, down to `</div>` that contains `<Image` and `from-stone-950/30`

hero_regex = r'(<section className="[^"]*overflow-hidden bg-stone-950">)\s*<div className="absolute inset-0 z-0">\s*<Image.*?(<div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/30[^>]*>)\s*</div>'

def replacer(match):
    section_tag = match.group(1).replace("bg-stone-950", "bg-stone-900")
    gradient_tag = match.group(2)
    return f"""{section_tag}
          <div className="absolute inset-0 z-0 opacity-40">
            <UiloraFrostedGlass
              baseColor="#1c1917" // stone-900
              accentColor="#f97316" // orange-500
              speed={{0.15}}
            />
          </div>
          {{/* Subtle Ambient Glow overlays */}}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />
          <div className="absolute inset-0 z-0">
            {gradient_tag}
          </div>"""

content = re.sub(hero_regex, replacer, content, flags=re.DOTALL)

with open(path, "w") as f:
    f.write(content)

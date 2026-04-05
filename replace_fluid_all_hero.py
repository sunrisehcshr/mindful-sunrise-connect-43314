import re
import glob
import os

client_files = glob.glob('src/app/**/*Client.tsx', recursive=True)
files_to_process = [f for f in client_files if 'blog' not in f and 'about' not in f]

for path in files_to_process:
    with open(path, "r") as f:
        content = f.read()
        
    changed = False

    # A more robust hero replacement
    # We want to replace the `<div className="absolute inset-0 z-0"> ... <Image ... /> ... </div>` inside the `<section ... bg-stone-950">`
    # Let's find `<section className="[^"]*bg-stone-950">`
    hero_start_pattern = r'(<section className="[^"]*overflow-hidden bg-stone-950">)\s*<div className="absolute inset-0 z-0">(.*?)<div className="container mx-auto'
    
    match = re.search(hero_start_pattern, content, re.DOTALL)
    if match:
        section_tag = match.group(1).replace("bg-stone-950", "bg-stone-900")
        inner_div = match.group(2)
        
        # we need to keep the gradient tag which is usually `<div className="absolute inset-0 z-0 bg-gradient-to-b ... />`
        gradient_match = re.search(r'(<div className="absolute inset-0 z-0 bg-gradient-to-b[^>]*>)', inner_div)
        gradient_tag = gradient_match.group(1) if gradient_match else '<div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-900/30 via-transparent to-white" />'
        
        replacement = f"""{section_tag}
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
          </div>

          <div className="container mx-auto"""
          
        content = content[:match.start()] + replacement + content[match.end():]
        changed = True

    if changed:
        # Check if we need to add the import for UiloraFrostedGlass
        if "UiloraFrostedGlass" not in content:
            content = content.replace('"use client";', '"use client";\nimport dynamic from "next/dynamic";\nconst UiloraFrostedGlass = dynamic(() => import("@/components/ui/uilora-frosted-glass"), { ssr: false });')
        with open(path, "w") as f:
            f.write(content)
        print(f"Updated {path}")



"use client";

import type React from "react"
import { useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Image, { type StaticImageData } from "next/image"

export interface ShowcaseItem {
  title: string
  description: string
  tag: string
  link: string
  image: string | StaticImageData
}

interface ProjectShowcaseProps {
  items: ShowcaseItem[]
}

export function ProjectShowcase({ items }: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {items.map((item, index) => (
          <a
            key={index}
            ref={(el) => { rowRefs.current[index] = el; }}
            href={item.link}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="block relative"
          >
            <div className="border-t border-stone-200/80 group">
              {/* Floating image - centered above hovered row */}
              <div
                className="hidden md:block pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-4 z-30 transition-all duration-300"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: `translateX(-50%) scale(${hoveredIndex === index ? 1 : 0.9})`,
                }}
              >
                <div className="w-[300px] h-[210px] rounded-2xl overflow-hidden shadow-2xl border border-stone-200/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={300}
                    height={210}
                  />
                </div>
              </div>

              <div className="relative flex items-center justify-between py-6 md:py-8 px-2 md:px-4 group-hover:bg-amber-50/40 transition-colors duration-300 rounded-xl">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="relative">
                      <span className="font-barlow font-bold text-xl md:text-2xl text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-500" />
                      </span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-stone-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <p className="text-stone-500 text-sm font-barlow max-w-xl leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                <span className="hidden md:inline-flex text-xs font-barlow font-semibold tracking-wider uppercase text-stone-400 group-hover:text-amber-600 transition-colors duration-300 shrink-0 ml-4 border border-stone-200 group-hover:border-amber-200 rounded-full px-3 py-1">
                  {item.tag}
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="border-t border-stone-200/80" />
      </div>
    </div>
  )
}

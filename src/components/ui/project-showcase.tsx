
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

export interface ShowcaseItem {
  title: string
  description: string
  tag: string
  link: string
  image: string
}

interface ProjectShowcaseProps {
  items: ShowcaseItem[]
  title?: string
}

export function ProjectShowcase({ items, title = "Selected Work" }: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Floating image preview - desktop only */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative hidden md:block"
      >
        <div
          className="pointer-events-none absolute z-20 transition-opacity duration-300"
          style={{
            left: smoothPosition.x,
            top: smoothPosition.y,
            opacity: isVisible ? 1 : 0,
            transform: "translate(-50%, -50%)",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="absolute w-[280px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border border-stone-200/50"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transition: "opacity 0.2s ease",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
                width={280}
                height={200}
              />
            </div>
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl pointer-events-none" />
        </div>
      </div>

      {/* List items */}
      <div className="relative">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="block"
          >
            <div className="border-t border-stone-200/80 group">
              {/* Background highlight on hover */}
              <div className="absolute inset-x-0 bg-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center justify-between py-6 md:py-8 px-2 md:px-4">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="flex items-center gap-3 mb-1">
                    <div className="relative">
                      <span className="font-barlow font-bold text-xl md:text-2xl text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                        {item.title}
                        {/* Animated underline */}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-500" />
                      </span>
                    </div>

                    {/* Arrow that slides in */}
                    <ArrowUpRight className="h-5 w-5 text-stone-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  {/* Description with fade effect */}
                  <p className="text-stone-500 text-sm font-barlow max-w-xl leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Tag badge */}
                <span className="hidden md:inline-flex text-xs font-barlow font-semibold tracking-wider uppercase text-stone-400 group-hover:text-amber-600 transition-colors duration-300 shrink-0 ml-4 border border-stone-200 group-hover:border-amber-200 rounded-full px-3 py-1">
                  {item.tag}
                </span>
              </div>
            </div>
          </a>
        ))}

        {/* Bottom border for last item */}
        <div className="border-t border-stone-200/80" />
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export interface AnimatedCardItem {
  id?: number
  title: string
  description: string
  image?: string
  href: string
}

const positionStyles = [
  { scale: 1, y: 0 },
  { scale: 0.95, y: -24 },
  { scale: 0.9, y: -48 },
]

const exitAnimation = {
  y: 400,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -24,
  scale: 0.9,
}

function CardContent({ data }: { data: AnimatedCardItem }) {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-white">
      <div className="relative -outline-offset-1 flex h-[160px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] outline outline-black/10 dark:outline-white/10 bg-stone-50">
        {data.image ? (
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="select-none object-cover"
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-stone-100/50">
             <span className="font-instrument-serif italic text-4xl text-orange-500/30 select-none">Sunrise</span>
          </div>
        )}
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-barlow font-bold text-lg text-stone-900">{data.title}</span>
          <span className="text-stone-500 text-sm truncate font-medium">{data.description}</span>
        </div>
        <Link href={data.href} className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-1.5 rounded-full bg-stone-900 pl-4 pr-3 text-sm font-bold font-barlow text-white hover:bg-orange-600 transition-colors shadow-sm">
            Visit
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
            >
              <path d="M9.5 18L15.5 12L9.5 6" />
            </svg>
        </Link>
      </div>
    </div>
  )
}

function AnimatedCard({
  item,
  index,
  isAnimating,
}: {
  item: AnimatedCardItem
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={item.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 19,
        mass: 1.2,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: "20px",
      }}
      className="absolute flex h-[280px] w-[320px] sm:w-[400px] items-center justify-center overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-2 shadow-none will-change-transform"
    >
      <CardContent data={item} />
    </motion.div>
  )
}

export default function AnimatedCardStack({ items }: { items: AnimatedCardItem[] }) {
  const [cards, setCards] = useState<AnimatedCardItem[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)
  const [nextItemIndex, setNextItemIndex] = useState(0)

  useEffect(() => {
    if (items && items.length > 0) {
      // Initialize with up to 3 items, looping if necessary
      const initialCards = [
        { ...items[0 % items.length], id: 1 },
        { ...items[1 % items.length], id: 2 },
        { ...items[2 % items.length], id: 3 },
      ]
      setCards(initialCards)
      setNextItemIndex(3 % items.length)
      setNextId(4)
    }
  }, [items])

  const handleAnimate = () => {
    if (isAnimating || cards.length === 0) return
    setIsAnimating(true)

    const nextItem = items[nextItemIndex]
    
    setCards([...cards.slice(1), { ...nextItem, id: nextId }])
    
    setNextId((prev) => prev + 1)
    setNextItemIndex((prev) => (prev + 1) % items.length)
    
    setTimeout(() => {
        setIsAnimating(false)
    }, 600)
  }

  if (!items || items.length === 0 || cards.length === 0) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center pt-0">
      {/* Visually hidden list for SEO crawlers so Google can see all internal links */}
      <ul className="sr-only">
        {items.map((item, i) => (
          <li key={i}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
      
      <div className="relative h-[348px] w-full overflow-hidden">
        <AnimatePresence initial={false}>
          {cards.map((card, index) => (
            <AnimatedCard key={card.id} item={card} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex w-full items-center justify-center pt-0 pb-0">
        <button
          onClick={handleAnimate}
          className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-8 py-4 text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-[0.96] shrink-0"
        >
          Related services
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  )
}

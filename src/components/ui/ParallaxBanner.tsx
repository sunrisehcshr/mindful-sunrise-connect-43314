"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxBanner() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  return (
    <div className="mx-2 mt-10 mb-24 overflow-hidden rounded-[3rem] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
      <div
        className="relative flex h-[60vh] md:h-[80vh] items-center justify-center overflow-hidden bg-white"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 md:p-20 text-white">
          <p 
            className="w-full md:w-[60vw] self-end text-2xl md:text-[3.2vw] font-instrument-serif italic tracking-tight leading-tight text-right opacity-95 drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-none">Healing</span> is not a linear journey, <br />
            but a continuous evolution of the self. <br />
            We provide the space for <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-none">you to grow.</span>
          </p>
          <div className="flex flex-col">
            <div className="text-4xl md:text-[6vw] font-barlow font-black tracking-[0.05em] leading-[0.8] drop-shadow-xl">
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-none inline-block">Sunrise</span> <br />
              <span 
                className="font-instrument-serif italic font-normal lowercase tracking-normal text-white"
              >
                Human Care
              </span>
            </div>
          </div>
        </div>
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div className="relative h-full w-full" style={{ y }}>
            <Image
              alt="Healing landscape"
              className="grayscale-0 object-cover brightness-[0.85] contrast-[1.1]"
              fill
              src="/images/parallax-bg.png"
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Subtle neutral gradient overlay to make text pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-black/20 to-stone-950/40" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

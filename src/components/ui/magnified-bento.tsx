"use client";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  UserGroupIcon,
  HierarchyIcon,
  UserIcon,
  RotateLeftIcon,
  Settings02Icon,
  CpuIcon,
  CodeIcon,
  Chart01Icon,
  FlashIcon,
  Link01Icon,
  SmartPhone01Icon,
  CloudIcon,
  DatabaseIcon,
  LockIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Optimized for mental health/care context
const TAG_ROWS = [
  [
    { id: "compassion", icon: HeartIcon, label: "Compassion" },
    { id: "trust", icon: ShieldCheckIcon, label: "Trusted Care" },
    { id: "healing", icon: SparklesIcon, label: "Healing" },
    { id: "empathy", icon: LucideUserIcon, label: "Empathy" },
    { id: "care", icon: HeartIcon, label: "Personalized Care" },
  ],
  [
    { id: "recovery", icon: LucideRotateLeftIcon, label: "Recovery" },
    { id: "wellness", icon: SunIcon, label: "Wellness" },
    { id: "growth", icon: TrendingUpIcon, label: "Personal Growth" },
    { id: "therapy", icon: MessageCircleIcon, label: "Expert Therapy" },
    { id: "community", icon: UsersIcon, label: "Community" },
  ],
  [
    { id: "mindfulness", icon: BrainIcon, label: "Mindfulness" },
    { id: "resilience", icon: ShieldIcon, label: "Resilience" },
    { id: "family", icon: HomeIcon, label: "Family Support" },
    { id: "clinical", icon: StethoscopeIcon, label: "Clinical Excellence" },
    { id: "peace", icon: LucideCloudIcon, label: "Inner Peace" },
  ],
];

// Placeholder for icons if Hugeicons fail to load or are not needed
import { 
  Heart as HeartIcon, 
  ShieldCheck as ShieldCheckIcon, 
  Sparkles as SparklesIcon, 
  User as LucideUserIcon, 
  Users as LucideUserGroupIcon,
  RefreshCw as LucideRotateLeftIcon,
  Sun as SunIcon,
  TrendingUp as TrendingUpIcon,
  MessageCircle as MessageCircleIcon,
  Users as UsersIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Home as HomeIcon,
  Stethoscope as StethoscopeIcon,
  Cloud as LucideCloudIcon,
  ArrowUpRight
} from "lucide-react";

const CONFIG = {
  title: "A Healthier Tomorrow",
  description: "Take the first step towards mental wellness with our compassionate team of experts dedicated to your growth.",
  containerHeight: "h-[200px]",
  lensSize: 80,
};

const MagnifiedBento = ({ className }: { className?: string }) => {
  return (
    <div 
      className={cn("group relative w-full h-full overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-white/95 backdrop-blur-md p-2 shadow-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-orange-200/50 hover:bg-white", className)}
    >
      <div 
        className={cn(
          "relative w-full overflow-hidden rounded-[2rem] bg-stone-50/50",
          CONFIG.containerHeight
        )}
      >
        <div className="relative h-full w-full flex flex-col items-center justify-center">
          {/* base layer */}
          <div className="flex flex-col gap-3 w-full h-full justify-center">
            {TAG_ROWS.map((row, rowIndex) => (
              <motion.div 
                key={`row-${rowIndex}`} 
                className="flex gap-3 w-max" 
                animate={{ 
                  x: rowIndex % 2 === 0 ? ["0%", "-33.333%"] : ["-33.333%", "0%"], 
                }} 
                transition={{ 
                  duration: 30, 
                  ease: "linear", 
                  repeat: Infinity, 
                }} 
              >
                {[...row, ...row, ...row].map((item, idx) => (
                  <div 
                    key={`${item.id}-${idx}`} 
                    className="flex gap-2 bg-white/80 backdrop-blur-sm whitespace-nowrap w-fit text-stone-400 p-2 px-3 items-center border border-stone-100 rounded-full text-[10px] font-bold uppercase tracking-wider group-hover:text-orange-500 group-hover:border-orange-200 group-hover:bg-white transition-colors duration-500"
                  >
                    <item.icon className="w-3 h-3" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-stone-50 to-transparent z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-stone-50 to-transparent z-20"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-900 tracking-tight mb-2">
          {CONFIG.title}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed font-medium mb-4">
          {CONFIG.description}
        </p>
        <Link href="/appointment#home">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-stone-50 font-bold rounded-2xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <span>Start Healing</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default MagnifiedBento;

const MagnifyingLens = ({ size = 80 }: { size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M365.424 335.392L342.24 312.192L311.68 342.736L334.88 365.936L365.424 335.392Z" 
        fill="#f97316" 
      />
      <path 
        d="M358.08 342.736L334.88 319.552L319.04 335.392L342.24 358.584L358.08 342.736Z" 
        fill="#ffedd5" 
      />
      <path 
        d="M352.368 321.808L342.752 312.192L312.208 342.752L321.824 352.36L352.368 321.808Z" 
        fill="#f97316" 
      />
      <path 
        d="M332 332C260 404 142.4 404 69.6001 332C-2.3999 260 -2.3999 142.4 69.6001 69.6C141.6 -3.20003 259.2 -2.40002 332 69.6C404.8 142.4 404.8 260 332 332ZM315.2 87.2C252 24 150.4 24 88.0001 87.2C24.8001 150.4 24.8001 252 88.0001 314.4C151.2 377.6 252.8 377.6 315.2 314.4C377.6 252 377.6 150.4 315.2 87.2Z" 
        fill="#ffedd5" 
      />
      <path 
        d="M319.2 319.2C254.4 384 148.8 384 83.2001 319.2C18.4001 254.4 18.4001 148.8 83.2001 83.2C148 18.4 253.6 18.4 319.2 83.2C384 148.8 384 254.4 319.2 319.2ZM310.4 92C250.4 32 152 32 92.0001 92C32.0001 152 32.0001 250.4 92.0001 310.4C152 370.4 250.4 370.4 310.4 310.4C370.4 250.4 370.4 152 310.4 92Z" 
        fill="#f97316" 
      />
      <path 
        d="M484.104 428.784L373.8 318.472L318.36 373.912L428.672 484.216L484.104 428.784Z" 
        fill="#1c1917" 
      />
      <path 
        d="M471.664 441.224L361.344 330.928L330.8 361.48L441.12 471.76L471.664 441.224Z" 
        fill="#44403c" 
      />
      <path 
        d="M495.2 423.2C504 432 432.8 504 423.2 495.2L417.6 489.6C408.8 480.8 480 408.8 489.6 417.6L495.2 423.2Z" 
        fill="#f97316" 
      />
      <path 
        d="M483.2 435.2C492 444 444.8 492 435.2 483.2L429.6 477.6C420.8 468.8 468 420.8 477.6 429.6L483.2 435.2Z" 
        fill="#ffedd5" 
      />
    </svg>
  );
};

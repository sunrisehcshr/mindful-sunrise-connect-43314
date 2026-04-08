"use client";

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image?: string;
  index: number;
  slug?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  specialties,
  bio,
  image,
  index,
  slug
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div
        className={cn(
          "group relative h-full flex flex-col border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500",
          "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-orange-200/50 hover:bg-white rounded-3xl"
        )}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/50 pointer-events-none" />
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(249, 115, 22, 0.08),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 flex flex-col flex-grow p-6 md:p-8">
          <div className="flex flex-col items-center text-center space-y-5 flex-grow">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl border border-stone-200/60 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all duration-500">
              {image ? (
                <Image 
                  src={image} 
                  alt={`${name}, ${role} at Sunrise Human Care Services in Darby, PA`} 
                  fill
                  sizes="(max-width: 768px) 120px, 150px"
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${name === 'Shanada Anderson' ? 'scale-125 translate-y-2' : name === 'Anthony Obi' ? 'scale-125' : name === 'Michael Flynn' ? 'scale-[1.02]' : ''}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-orange-50 text-orange-500 text-2xl font-barlow font-semibold">
                  {getInitials(name)}
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-barlow font-bold text-stone-900 tracking-tight">
                {name}
              </h3>
              <p className="text-sm font-barlow font-medium uppercase tracking-widest text-orange-500">
                {role}
              </p>
            </div>

            <div className="w-full mt-auto pt-5 border-t border-stone-100/80 flex flex-col justify-end flex-grow">
              <p className="mb-6 text-sm text-stone-500 font-barlow leading-relaxed text-left line-clamp-4">
                {bio}
              </p>
              
              {slug ? (
                <Link 
                  href={`/team/${slug}`}
                  className="mt-auto w-full py-3 px-4 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-xl font-bold transition-colors flex items-center justify-center group/btn"
                >
                  View Full Profile 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div className="mt-auto w-full py-3 px-4 bg-stone-50 text-stone-400 rounded-xl font-bold flex items-center justify-center">
                  Profile Coming Soon
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;

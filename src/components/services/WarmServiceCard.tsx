
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface WarmServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  url?: string;
  delay?: number;
}

const WarmServiceCard: React.FC<WarmServiceCardProps> = ({ 
  title, 
  description, 
  imageSrc,
  url = "/services",
  delay = 0 
}) => {
  return (
    <motion.div 
      className="group bg-white border border-stone-200/80 rounded-2xl overflow-hidden hover:shadow-lg hover:border-amber-200 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="h-48 overflow-hidden relative">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-barlow font-semibold text-stone-800 mb-3">{title}</h3>
        <p className="text-stone-500 mb-4 text-sm font-barlow leading-relaxed">{description}</p>
        <Link
          href={url}
          className="inline-flex items-center text-sm font-barlow font-medium text-amber-700 hover:text-amber-800 transition-colors duration-200 group/link"
        >
          Learn more 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default WarmServiceCard;

"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FooterNav: React.FC = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Our Services', href: '/services' },
    { label: 'Conditions', href: '/conditions' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Appointment', href: '/appointment' },
  ];

  return (
    <ul className="grid grid-cols-1 gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <motion.div whileTap={{ scale: 0.98 }}>
            <Link 
              href={link.href} 
              className="text-sm text-stone-600 hover:text-amber-600 transition-colors font-barlow inline-block"
            >
              {link.label}
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;

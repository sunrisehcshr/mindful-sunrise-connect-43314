"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const servicesLinks = [
  { label: "Individual Therapy", href: "/individual-therapy-darby-pa" },
  { label: "Couples Counseling", href: "/couples-counseling-darby-pa" },
  { label: "Premarital Counseling", href: "/premarital-counseling-darby-pa" },
  { label: "Family Therapy", href: "/family-therapy-darby-pa" },
  { label: "Psychiatric Evaluations", href: "/psychiatric-evaluations-darby-pa" },
  { label: "Medication Management", href: "/medication-management-darby-pa" },
];

const conditionsLinks = [
  { label: "Anxiety Disorders", href: "/anxiety-therapy-darby-pa" },
  { label: "Depression", href: "/depression-therapy-darby-pa" },
  { label: "Bipolar Disorder", href: "/bipolar-disorder-therapy-darby-pa" },
  { label: "PTSD", href: "/ptsd-therapy-darby-pa" },
  { label: "OCD", href: "/ocd-therapy-darby-pa" },
  { label: "ADHD", href: "/adhd-treatment-darby-pa" },
  { label: "Relationships", href: "/relationship-therapy-darby-pa" },
  { label: "Schizophrenia", href: "/schizophrenia-treatment-darby-pa" },
  { label: "BPD", href: "/bpd-treatment-darby-pa" },
  { label: "Sleep Disorders", href: "/sleep-disorders-treatment-darby-pa" },
  { label: "Somatic Disorders", href: "/somatic-disorders-treatment-darby-pa" },
  { label: "Eating Disorders", href: "/eating-disorders-treatment-darby-pa" },
  { label: "Grief & Loss", href: "/grief-therapy-darby-pa" },
  { label: "Substance Use", href: "/substance-use-treatment-darby-pa" },
  { label: "Dissociative Disorders", href: "/dissociative-disorders-treatment-darby-pa" }
];

const FooterNav: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const mainLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Appointment', href: '/appointment' },
  ];

  return (
    <ul className="grid grid-cols-1 gap-3">
      {/* Home link */}
      <li>
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link href="/" className="text-sm text-stone-600 hover:text-orange-600 transition-colors font-barlow inline-block">
            Home
          </Link>
        </motion.div>
      </li>

      {/* Services Dropdown */}
      <li>
        <button 
          onClick={() => toggleDropdown('services')}
          className="flex items-center text-sm text-stone-600 hover:text-orange-600 transition-colors font-barlow text-left w-full"
        >
          Our Services
          <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180 text-orange-600' : ''}`} />
        </button>
        <AnimatePresence>
          {openDropdown === 'services' && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-2 ml-3 space-y-2 border-l-2 border-orange-100 pl-3"
            >
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-stone-500 hover:text-orange-600 transition-colors font-barlow block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>

      {/* Conditions Dropdown */}
      <li>
        <button 
          onClick={() => toggleDropdown('conditions')}
          className="flex items-center text-sm text-stone-600 hover:text-orange-600 transition-colors font-barlow text-left w-full"
        >
          Conditions
          <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${openDropdown === 'conditions' ? 'rotate-180 text-orange-600' : ''}`} />
        </button>
        <AnimatePresence>
          {openDropdown === 'conditions' && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-2 ml-3 space-y-2 border-l-2 border-orange-100 pl-3"
            >
              {conditionsLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-stone-500 hover:text-orange-600 transition-colors font-barlow block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>

      {/* Remaining Links */}
      {mainLinks.slice(1).map((link) => (
        <li key={link.href}>
          <motion.div whileTap={{ scale: 0.98 }}>
            <Link 
              href={link.href} 
              className="text-sm text-stone-600 hover:text-orange-600 transition-colors font-barlow inline-block"
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

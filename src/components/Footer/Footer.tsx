"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FooterNav from './FooterNav';

import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-stone-800 border-t border-stone-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* About */}
          <div className="space-y-5 lg:col-span-2">
            <motion.div whileTap={{ scale: 0.96 }}>
              <Link href="/" className="flex items-center gap-2 w-fit group">
                <Image src="/images/logo.png" alt="Sunrise Human Care Services Logo" width={80} height={72} className="object-contain transition-transform duration-300 group-hover:-translate-y-1" />
                <div className="flex flex-col">
                  <span className="leading-tight text-base font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text font-barlow">Sunrise</span>
                  <span className="text-xs leading-tight font-barlow not-italic text-muted-foreground">
  Human Care Services </span>
                </div>
              </Link>
            </motion.div>
            <p className="text-sm text-stone-600 font-barlow leading-relaxed">
              Sunrise Human Care Services Inc is a registered health care organization committed to delivering compassionate and high-quality behavioral health services. We are officially listed in the National Plan and Provider Enumeration System (NPPES) under NPI Number: 1528784568.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-5 lg:col-span-2">
            <h3 className="font-barlow font-semibold text-lg text-stone-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 mt-0.5 shrink-0">
                  <MapPin className="h-4 w-4 text-orange-500" />
                </div>
                <a 
                  href="https://maps.app.goo.gl/x9UrhQE4cwZd9Ee47" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-stone-600 font-barlow hover:text-orange-500 transition-colors"
                >
                  869 Main Street, Darby, PA 19023, United States
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 shrink-0">
                  <Phone className="h-4 w-4 text-orange-500" />
                </div>
                <motion.a 
                  whileTap={{ scale: 0.98 }}
                  href="tel:+18146202162" 
                  className="text-sm text-stone-600 hover:text-orange-600 transition-colors font-barlow"
                >
                  (814) 620-2162
                </motion.a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 shrink-0">
                  <Mail className="h-4 w-4 text-orange-500" />
                </div>
                <motion.a 
                  whileTap={{ scale: 0.98 }}
                  href="mailto:info@sunrisehumancare.com" 
                  className="text-sm text-stone-600 hover:text-orange-600 transition-colors font-barlow"
                >info@sunrisehumancare.com</motion.a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 mt-0.5 shrink-0">
                  <Clock className="h-4 w-4 text-orange-500" />
                </div>
                <div className="text-sm text-stone-600 font-barlow">
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links & Locations */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h3 className="font-barlow font-semibold text-lg text-stone-900">Quick Links</h3>
              <FooterNav />
            </div>
            
            <div className="space-y-5">
              <h3 className="font-barlow font-semibold text-lg text-stone-900">Locations</h3>
              <ul className="space-y-3">
                {[
                  { label: "Darby, PA", href: "/mental-health-darby-pa" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-stone-600 hover:text-orange-500 transition-colors font-barlow flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Resources & Newsletter */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h3 className="font-barlow font-semibold text-lg text-stone-900">Resources</h3>
              <ul className="space-y-3">
                {[
                  { label: "FAQ", href: "/faq" },
                  { label: "Medicaid Therapy", href: "/medicaid-therapy" },
                  { label: "BetterHelp Alternatives", href: "/betterhelp-alternatives-pa" },
                  { label: "Blog", href: "/blog" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-stone-600 hover:text-orange-500 transition-colors font-barlow flex items-center group">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Emergency + Bottom Bar */}
      <div className="border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-6 py-6">
          
{/* Emergency Information */}
<div
  className="bg-red-50 border-l-4 border-red-700 border-y border-r border-red-200 rounded-md p-5 md:p-6 mb-6 font-sans"
>
  <div className="flex items-center gap-3 mb-5">
    <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-md shrink-0">
      <AlertTriangle className="h-5 w-5 text-red-800" />
    </div>
    <h3 className="text-lg font-bold text-red-900">
      Emergency Information
    </h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* 911 Emergency */}
    <div className="bg-white border border-red-200 rounded-md p-4">
      <p className="font-bold text-stone-900 mb-2">
        Life-threatening emergency
      </p>
      <p className="text-sm text-stone-700 mb-3">
        If this is a life-threatening emergency, please call 911.
      </p>
      <a
        href="tel:911"
        className="inline-flex items-center gap-2 text-red-800 font-bold text-2xl underline underline-offset-4"
        aria-label="Call 911"
      >
        <Phone className="h-5 w-5" />
        911
      </a>
    </div>

    {/* 988 Suicide Prevention Support */}
    <div className="bg-white border border-red-200 rounded-md p-4">
      <p className="font-bold text-stone-900 mb-2">
        Suicide prevention and crisis support
      </p>
      <p className="text-sm text-stone-700 mb-3">
        Contact the National Suicide Prevention Lifeline.
      </p>
      <motion.a
        whileTap={{ scale: 0.97 }}
        href="tel:988"
        aria-label="Call 988"
        className="inline-flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white px-5 py-2 rounded-md font-bold text-xl transition-colors"
      >
        <Phone className="h-5 w-5" />
        988
      </motion.a>
      <p className="text-xs text-stone-600 mt-2">
        Call or text 988
      </p>
    </div>

  </div>
</div>


          {/* HIPAA Notice */}
          <p className="text-xs text-stone-500 text-center mb-6 font-barlow leading-relaxed">
            Sunrise Human Care Services is committed to protecting your privacy in accordance with HIPAA regulations. All patient information is kept strictly confidential. Read our{' '}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-amber-600 transition-colors">Privacy Policy</Link> for details on how we handle your protected health information.
          </p>

          {/* Copyright & Links */}
          <div className="pt-4 border-t border-stone-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-stone-500 font-barlow">
                © {new Date().getFullYear()} Sunrise Human Care Services. All rights reserved.
              </p>
              <ul className="flex space-x-6">
                <li>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Link href="/privacy-policy" className="text-xs text-stone-500 hover:text-amber-600 transition-colors font-barlow">
                      Privacy Policy
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Link href="/terms-of-service" className="text-xs text-stone-500 hover:text-amber-600 transition-colors font-barlow">
                      Terms of Service
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <a href="/sitemap.xml" className="text-xs text-stone-500 hover:text-amber-600 transition-colors font-barlow">
                      Sitemap
                    </a>
                  </motion.div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

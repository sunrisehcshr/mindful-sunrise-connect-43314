"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import FooterNav from './FooterNav';
import NewsletterForm from './NewsletterForm';

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
                  <span className="text-xs leading-tight font-instrument-serif italic text-muted-foreground">Human Care Services</span>
                </div>
              </Link>
            </motion.div>
            <p className="text-sm text-stone-600 font-barlow leading-relaxed">
              Sunrise Human Care Services Inc is a registered health care organization committed to delivering compassionate and high-quality behavioral health services. We are officially listed in the National Plan and Provider Enumeration System (NPPES) under NPI Number: 1528784568.
            </p>
            <SocialLinks />
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
                  { label: "Lansdowne, PA", href: "/mental-health-lansdowne-pa" },
                  { label: "Upper Darby, PA", href: "/mental-health-upper-darby-pa" },
                  { label: "Yeadon, PA", href: "/mental-health-yeadon-pa" },
                  { label: "Sharon Hill, PA", href: "/mental-health-sharon-hill-pa" },
                  { label: "Collingdale, PA", href: "/mental-health-collingdale-pa" }
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

            <div className="space-y-5">
              <h3 className="font-barlow font-semibold text-lg text-stone-900">Newsletter</h3>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Emergency + Bottom Bar */}
      <div className="border-t border-stone-200">
        <div className="container mx-auto px-4 md:px-6 py-6">
          {/* Emergency Information */}
          <div className="bg-red-50 border border-red-200 p-4 rounded-2xl mb-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 mr-3 shrink-0">
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </div>
              <p className="text-sm text-stone-700 font-barlow">
                <span className="font-semibold text-stone-900">Emergency:</span> If this is a life-threatening emergency, please call 911 or the National Suicide Prevention Lifeline{' '}
                <motion.a 
                  whileTap={{ scale: 0.98 }}
                  href="tel:988" 
                  className="font-black text-orange-700 hover:text-orange-800 underline underline-offset-2 inline-flex items-center"
                >
                  <Phone className="h-3 w-3 mr-1" /> 988
                </motion.a>
              </p>
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

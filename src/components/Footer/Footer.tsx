import React from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import FooterNav from './FooterNav';
import NewsletterForm from './NewsletterForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Sunrise Human Care Services Logo" className="h-18 w-20 object-contain" loading="lazy" />
              <div className="flex flex-col">
                <span className="leading-tight text-base text-amber-300 font-extrabold font-barlow">Sunrise</span>
                <span className="text-xs text-stone-300 leading-tight font-normal font-barlow">Human Care Services</span>
              </div>
            </div>
            <p className="text-sm text-stone-300 font-barlow leading-relaxed">
              Sunrise Human Care Services Inc is a registered health care organization committed to delivering compassionate and high-quality behavioral health services. We are officially listed in the National Plan and Provider Enumeration System (NPPES) under NPI Number: 1528784568.
            </p>
            <SocialLinks />
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="font-barlow font-semibold text-lg text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400/10 mt-0.5 shrink-0">
                  <MapPin className="h-4 w-4 text-yellow-300" />
                </div>
                <span className="text-sm text-stone-300 font-barlow">
                  869 Main Street, Darby, PA 19023, United States
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400/10 shrink-0">
                  <Phone className="h-4 w-4 text-yellow-300" />
                </div>
                <a href="tel:+18146202162" className="text-sm text-stone-300 hover:text-amber-300 transition-colors font-barlow">
                  (814) 620-2162
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400/10 shrink-0">
                  <Mail className="h-4 w-4 text-yellow-300" />
                </div>
                <a href="mailto:info@sunrisehumancare.com" className="text-sm text-stone-300 hover:text-amber-300 transition-colors font-barlow">info@sunrisehumancare.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400/10 mt-0.5 shrink-0">
                  <Clock className="h-4 w-4 text-yellow-300" />
                </div>
                <div className="text-sm text-stone-300 font-barlow">
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-barlow font-semibold text-lg text-white">Quick Links</h3>
            <FooterNav />
          </div>
          
          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="font-barlow font-semibold text-lg text-white">Newsletter</h3>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Emergency + Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          {/* Emergency Information */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl mb-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/20 mr-3 shrink-0">
                <AlertTriangle className="h-4 w-4 text-red-400" />
              </div>
              <p className="text-sm text-stone-300 font-barlow">
                <span className="font-semibold text-white">Emergency:</span> If this is a life-threatening emergency, please call 911 or the National Suicide Prevention Lifeline{' '}
                <a href="tel:988" className="font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-2 inline-flex items-center">
                  <Phone className="h-3 w-3 mr-1" /> 988
                </a>
              </p>
            </div>
          </div>

          {/* HIPAA Notice */}
          <p className="text-xs text-stone-400 text-center mb-6 font-barlow leading-relaxed">
            Sunrise Human Care Services is committed to protecting your privacy in accordance with HIPAA regulations. All patient information is kept strictly confidential. Read our{' '}
            <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-amber-300 transition-colors">Privacy Policy</Link> for details on how we handle your protected health information.
          </p>

          {/* Copyright & Links */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-stone-400 font-barlow">
                © {new Date().getFullYear()} Sunrise Human Care Services. All rights reserved.
              </p>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy-policy" className="text-xs text-stone-400 hover:text-amber-300 transition-colors font-barlow">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-xs text-stone-400 hover:text-amber-300 transition-colors font-barlow">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="/sitemap.xml" className="text-xs text-stone-400 hover:text-amber-300 transition-colors font-barlow">
                    Sitemap
                  </a>
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

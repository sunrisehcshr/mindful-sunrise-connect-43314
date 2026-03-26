import React from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import FooterNav from './FooterNav';
import NewsletterForm from './NewsletterForm';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-stone-200/60 bg-[#faf8f4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Sunrise Human Care Services Logo" className="h-14 w-16 object-contain" />
              <div className="flex flex-col">
                <span className="leading-tight text-base bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text font-extrabold font-barlow">Sunrise</span>
                <span className="text-xs text-stone-500 leading-tight font-normal font-barlow">Human Care Services</span>
              </div>
            </div>
            <p className="text-sm text-stone-500 font-barlow py-0 my-0">Sunrise Human Care Services Inc is a registered health care organization committed to delivering compassionate and high-quality behavioral health services. We are officially listed in the National Plan and Provider Enumeration System (NPPES) under NPI Number: 1528784568, affirming our commitment to compliance, transparency, and patient trust.</p>
            <SocialLinks />
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-barlow font-semibold text-lg text-stone-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
                <span className="text-sm text-stone-500 font-barlow">
                  869 Main Street, Darby, PA 19023, United States
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <a href="tel:+18146202162" className="text-sm text-stone-500 hover:text-stone-800 transition-colors font-barlow">
                  (814) 620-2162
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <a href="mailto:info@sunrisehumancare.com" className="text-sm text-stone-500 hover:text-stone-800 transition-colors font-barlow">info@sunrisehumancare.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                <div className="text-sm text-stone-500 font-barlow">
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-barlow font-semibold text-lg text-stone-800">Quick Links</h3>
            <FooterNav />
          </div>
          
          <div className="space-y-4">
            <h3 className="font-barlow font-semibold text-lg text-stone-800">Newsletter</h3>
            <NewsletterForm />
          </div>
        </div>

        {/* Emergency Information */}
        <div className="mt-8 pt-6 border-t border-stone-200/60">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              <p className="text-sm text-red-700 font-barlow">
                <span className="font-medium">Emergency:</span> If this is a life-threatening emergency, please call 911 or the National Suicide Prevention Lifeline <a href="tel:988" className="font-semibold underline hover:no-underline inline-flex items-center"><Phone className="h-3 w-3 mr-1" /> 988</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-stone-200/60">
          <p className="text-xs text-stone-400 text-center mb-4 font-barlow">
            Sunrise Human Care Services is committed to protecting your privacy in accordance with HIPAA regulations. All patient information is kept strictly confidential. Read our{' '}
            <a href="/privacy-policy" className="underline hover:text-stone-600 transition-colors">Privacy Policy</a> for details on how we handle your protected health information.
          </p>
        </div>

        <div className="mt-2 pt-4 border-t border-stone-200/60">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-stone-400 font-barlow">
              © {new Date().getFullYear()} Sunrise Human Care Services. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy-policy" className="text-xs text-stone-400 hover:text-stone-600 transition-colors font-barlow">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-xs text-stone-400 hover:text-stone-600 transition-colors font-barlow">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="/sitemap.xml" className="text-xs text-stone-400 hover:text-stone-600 transition-colors font-barlow">
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

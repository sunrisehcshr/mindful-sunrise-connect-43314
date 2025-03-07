import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SocialLinks from './SocialLinks';
import FooterNav from './FooterNav';
import NewsletterForm from './NewsletterForm';
const Footer: React.FC = () => {
  return <footer className="bg-secondary py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Sunrise Logo" className="h-10 w-13 scale-200 opacity-50 transition-transform duration-500 group-hover:translate-y-[-5px]" />
 <div className="flex flex-col">
  <span className="font-semibold text-lg leading-tight">Sunrise</span>
  <span className="text-xs text-muted-foreground leading-tight">Human Care Services</span>
            </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Experience comprehensive mental health care in Havertown, PA at Sunrise Human Care Services. 
              Our dedicated team provides counseling, therapy, psychiatry, and medication management for 
              anxiety, depression, ADHD, trauma, and more.
            </p>
            <SocialLinks />
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sunrise-400 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  2050 West Chester Pike, Havertown, PA 19083, United States
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sunrise-400" />
                <a href="tel:+18146202162" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  (814) 620-2162
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sunrise-400" />
                <a href="mailto:info@sunrisehcs.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">info@sunrisehcsllc.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-sunrise-400 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          <FooterNav />
          <NewsletterForm />
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sunrise Human Care Services. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/sitemap.xml" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
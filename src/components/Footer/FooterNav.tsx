
import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav: React.FC = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Our Services" },
    { to: "/about", label: "About Us" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
    { to: "/sitemap.xml", label: "Sitemap" }
  ];

  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          {link.to.endsWith('.xml') ? (
            <a href={link.to} className="text-sm text-white/80 hover:text-white transition-colors flex items-center">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
              {link.label}
            </a>
          ) : (
            <Link to={link.to} className="text-sm text-white/80 hover:text-white transition-colors flex items-center">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;

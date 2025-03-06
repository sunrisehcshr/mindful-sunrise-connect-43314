
import React from 'react';

const FooterNav: React.FC = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Our Services" },
    { href: "#about", label: "About Us" },
    { href: "#faq", label: "FAQ" },
    { href: "#appointment", label: "Contact" },
    { href: "/sitemap.xml", label: "Sitemap" }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;

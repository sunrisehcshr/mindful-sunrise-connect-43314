
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

const FooterNav: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setOpenSection(openSection === label ? null : label);
  };

  const links = [
    { to: "/", label: "Home" },
    { 
      label: "Our Services",
      isDropdown: true,
      children: [
        { to: "/individual-therapy-havertown-pa", label: "Individual Therapy" },
        { to: "/couples-counseling-havertown-pa", label: "Couples Counseling" },
        { to: "/family-therapy-havertown-pa", label: "Family Therapy" },
        { to: "/child-therapy-havertown-pa", label: "Child Therapy" },
        { to: "/anxiety-therapy-havertown-pa", label: "Anxiety Therapy" },
        { to: "/depression-therapy-havertown-pa", label: "Depression Therapy" },
        { to: "/adhd-treatment-havertown-pa", label: "ADHD Treatment" },
        { to: "/psychiatric-evaluations-havertown-pa", label: "Psychiatric Evaluations" },
        { to: "/medication-management-havertown-pa", label: "Medication Management" },
        { to: "/ptsd-therapy-havertown-pa", label: "Trauma & PTSD Therapy" },
      ]
    },
    { to: "/about", label: "About Us" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
    { to: "/sitemap.xml", label: "Sitemap" }
  ];

  return (
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          {link.isDropdown ? (
            <div className="space-y-2">
              <button 
                onClick={() => toggleSection(link.label)}
                className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
                {openSection === link.label ? (
                  <ChevronDown className="h-4 w-4 text-orange-400" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              
              {openSection === link.label && (
                <ul className="ml-4 mt-2 space-y-2">
                  {link.children?.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link to={child.to} className="text-xs text-muted-foreground hover:text-foreground transition-colors block py-1">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/services" className="text-xs text-orange-500 hover:text-orange-600 font-medium transition-colors flex items-center py-1">
                      All Services <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            link.to.endsWith('.xml') ? (
              <a href={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1">
                {link.label}
              </a>
            ) : (
              <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1">
                {link.label}
              </Link>
            )
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;

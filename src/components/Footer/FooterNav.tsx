
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
    { to: "/about", label: "About Us" },
    { 
      label: "Our Services",
      isDropdown: true,
      children: [
        { to: "/individual-therapy-darby-pa", label: "Individual Therapy" },
        { to: "/couples-counseling-darby-pa", label: "Couples Counseling" },
        { to: "/family-therapy-darby-pa", label: "Family Therapy" },
        { to: "/child-therapy-darby-pa", label: "Child Therapy" },
        { to: "/psychiatric-evaluations-darby-pa", label: "Psychiatric Evaluations" },
        { to: "/medication-management-darby-pa", label: "Medication Management" },
        { to: "/ibhs-darby-pa", label: "IBHS Services" },
      ]
    },
    { 
      label: "Conditions We Treat",
      isDropdown: true,
      children: [
        { to: "/anxiety-therapy-darby-pa", label: "Anxiety" },
        { to: "/depression-therapy-darby-pa", label: "Depression" },
        { to: "/adhd-treatment-darby-pa", label: "ADHD" },
        { to: "/bipolar-disorder-therapy-darby-pa", label: "Bipolar Disorder" },
        { to: "/ocd-therapy-darby-pa", label: "OCD" },
        { to: "/ptsd-therapy-darby-pa", label: "PTSD & Trauma" },
        { to: "/schizophrenia-treatment-darby-pa", label: "Schizophrenia" },
        { to: "/eating-disorders-treatment-darby-pa", label: "Eating Disorders" },
        { to: "/substance-use-treatment-darby-pa", label: "Substance Use" },
        { to: "/bpd-therapy-darby-pa", label: "Borderline Personality" },
        { to: "/sleep-disorders-treatment-darby-pa", label: "Sleep Disorders" },
        { to: "/dissociative-disorders-treatment-darby-pa", label: "Dissociative Disorders" },
        { to: "/somatic-disorders-treatment-darby-pa", label: "Somatic Disorders" },
        { to: "/relationship-therapy-darby-pa", label: "Relationship Issues" },
        { to: "/grief-therapy-darby-pa", label: "Grief & Loss" },
      ]
    },
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
                  {link.label === "Our Services" && (
                    <li>
                      <Link to="/services" className="text-xs text-orange-500 hover:text-orange-600 font-medium transition-colors flex items-center py-1">
                        All Services <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </li>
                  )}
                  {link.label === "Conditions We Treat" && (
                    <li>
                      <Link to="/conditions" className="text-xs text-orange-500 hover:text-orange-600 font-medium transition-colors flex items-center py-1">
                        All Conditions <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </li>
                  )}
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

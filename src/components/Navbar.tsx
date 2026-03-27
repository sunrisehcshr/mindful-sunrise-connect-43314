import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ChevronUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileConditionsOpen, setMobileConditionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
    if (!mobileServicesOpen) { setMobileConditionsOpen(false); setMobileResourcesOpen(false); }
  };

  const toggleMobileConditions = () => {
    setMobileConditionsOpen(!mobileConditionsOpen);
    if (!mobileConditionsOpen) { setMobileServicesOpen(false); setMobileResourcesOpen(false); }
  };

  const toggleMobileResources = () => {
    setMobileResourcesOpen(!mobileResourcesOpen);
    if (!mobileResourcesOpen) { setMobileServicesOpen(false); setMobileConditionsOpen(false); }
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileConditionsOpen(false);
    setMobileResourcesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  
  const isServicePage = () => {
    const serviceKeywords = [
      'individual-therapy',
      'couples-counseling',
      'family-therapy',
      'child-therapy',
      'psychiatric-evaluations',
      'medication-management',
      'adhd-treatment'
    ];
    
    return serviceKeywords.some(keyword => location.pathname.includes(keyword)) && 
           !isConditionPage();
  };
  
  const isConditionPage = () => {
    return location.pathname.includes('anxiety') ||
           location.pathname.includes('depression') ||
           location.pathname.includes('disorder') || 
           location.pathname.includes('schizophrenia') || 
           location.pathname.includes('eating-disorders') || 
           location.pathname.includes('substance-use') || 
           location.pathname.includes('dissociative') || 
           location.pathname.includes('somatic') || 
           location.pathname.includes('relationship') || 
           location.pathname.includes('grief') || 
           location.pathname.includes('bpd') || 
           location.pathname.includes('sleep') ||
           location.pathname.includes('ptsd');
  };

  const serviceLinks = [{
    title: "Individual Therapy",
    path: "/individual-therapy-darby-pa"
  }, {
    title: "Couples Counseling",
    path: "/couples-counseling-darby-pa"
  }, {
    title: "Family Therapy",
    path: "/family-therapy-darby-pa"
  }, {
    title: "Child Therapy",
    path: "/child-therapy-darby-pa"
  }, {
    title: "Psychiatric Evaluations",
    path: "/psychiatric-evaluations-darby-pa"
  }, {
    title: "Medication Management",
    path: "/medication-management-darby-pa"
  }];

  const conditionLinks = [
    { title: "Anxiety", path: "/anxiety-therapy-darby-pa" }, 
    { title: "Depression", path: "/depression-therapy-darby-pa" }, 
    { title: "ADHD", path: "/adhd-treatment-darby-pa" }, 
    { title: "Bipolar Disorder", path: "/bipolar-disorder-therapy-darby-pa" }, 
    { title: "PTSD & Trauma", path: "/ptsd-therapy-darby-pa" }, 
    { title: "OCD", path: "/ocd-therapy-darby-pa" }
  ];

  const resourceLinks = [
    { title: "About Us", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "FAQ", path: "/faq" },
  ];

  const isResourcePage = () => {
    return isActive("/about") || isActive("/blog") || isActive("/faq");
  };

  const navLinks = [{
    path: "/",
    label: "Home"
  }, {
    type: "dropdown",
    label: "Services",
    children: serviceLinks
  }, {
    type: "dropdown",
    label: "Conditions",
    children: conditionLinks
  }, {
    type: "dropdown",
    label: "Resources",
    children: resourceLinks
  }, {
    path: "/contact",
    label: "Contact"
  }];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className={cn(
        "backdrop-blur-md rounded-[16px] px-4 md:px-6 py-3 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg backdrop-blur-none" : "bg-white/20 backdrop-blur-md border border-white/30 shadow-sm"
      )}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <img src="/images/logo.png" alt="Sunrise Human Care Services Logo" className="h-10 w-12 object-contain transition-transform duration-300 group-hover:-translate-y-1" />
            <div className="flex flex-col">
              <span className="leading-tight text-base bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text font-extrabold">Sunrise</span>
              <span className="text-xs text-muted-foreground leading-tight font-normal">Human Care Services</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              if (link.type === "dropdown") {
                return (
                  <NavigationMenu key={index}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger 
                          className={cn(
                            "px-3 py-2 rounded-md text-sm font-barlow font-medium transition-all duration-300 gap-1.5", 
                            (link.label === "Services" && (isActive("/services") || isServicePage())) || 
                            (link.label === "Conditions" && (isActive("/conditions") || isConditionPage())) ||
                            (link.label === "Resources" && isResourcePage())
                              ? "text-stone-900 font-semibold" 
                              : "text-zinc-600 hover:text-zinc-900"
                          )}
                        >
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="p-2 w-[400px] max-h-[600px]">
                          <ScrollArea className="h-full w-full max-h-[550px]">
                            <div className="grid grid-cols-1 gap-1 p-2">
                              {link.children.map((child, childIndex) => (
                                <Link 
                                  key={childIndex} 
                                  to={link.label === "Resources" ? child.path : `${child.path}#home`} 
                                  className={cn(
                                    "block select-none rounded-md py-2 px-3 text-sm font-barlow leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-stone-900", 
                                    isActive(child.path) ? "bg-amber-50 text-stone-900 font-medium" : "text-zinc-600"
                                  )}
                                >
                                  {child.title}
                                </Link>
                              ))}
                              {link.label === "Services" && (
                                <div className="pt-2 mt-2 border-t border-stone-100">
                                  <Link to="/services" className="flex items-center text-sm text-amber-700 hover:text-amber-800 font-medium px-3 py-2 font-barlow">
                                    View All Services
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                </div>
                              )}
                              {link.label === "Conditions" && (
                                <div className="pt-2 mt-2 border-t border-stone-100">
                                  <Link to="/conditions" className="flex items-center text-sm text-amber-700 hover:text-amber-800 font-medium px-3 py-2 font-barlow">
                                    View All Conditions
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                </div>
                              )}
                            </div>
                          </ScrollArea>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                );
              }
              return (
                <Link 
                  key={index} 
                  to={link.path} 
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-barlow font-medium transition-all duration-300", 
                    isActive(link.path) 
                      ? "text-stone-900 font-semibold" 
                      : "text-zinc-600 hover:text-zinc-900"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link 
              to="/appointment" 
              className="ml-2 flex items-center gap-2 bg-[#222] text-white font-barlow font-medium text-sm px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors shrink-0"
            >
              Book Appointment
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
              </span>
            </Link>
          </nav>

          <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-zinc-600 hover:text-stone-900 focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className={cn(
        "md:hidden fixed inset-x-0 top-[80px] mx-[2.5%] bg-white/95 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 ease-in-out border border-stone-100 z-40 max-h-[calc(100vh-96px)] overflow-hidden",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <ScrollArea className="h-full max-h-[calc(100vh-96px)]">
          <div className="px-4 py-4">
            <nav className="flex flex-col space-y-1 pb-20">
              {navLinks.map((link, index) => {
                if (link.type === "dropdown") {
                  return (
                    <div key={index} className="space-y-1">
                      <button 
                        onClick={link.label === "Services" ? toggleMobileServices : link.label === "Conditions" ? toggleMobileConditions : toggleMobileResources} 
                        className={cn(
                          "w-full px-4 py-3 rounded-lg text-sm font-barlow font-medium transition-all duration-300 flex items-center justify-between", 
                          (link.label === "Services" && (isActive("/services") || isServicePage())) || 
                          (link.label === "Conditions" && (isActive("/conditions") || isConditionPage())) ||
                          (link.label === "Resources" && isResourcePage())
                            ? "text-stone-900 bg-amber-50" 
                            : "text-zinc-600 hover:text-stone-900 hover:bg-stone-50"
                        )}
                      >
                        {link.label}
                        {(link.label === "Services" && mobileServicesOpen) || (link.label === "Conditions" && mobileConditionsOpen) || (link.label === "Resources" && mobileResourcesOpen) ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
                      </button>
                      {(link.label === "Services" && mobileServicesOpen) || (link.label === "Conditions" && mobileConditionsOpen) || (link.label === "Resources" && mobileResourcesOpen) ? (
                        <div className="pl-4 space-y-1 border-l-2 border-amber-200 ml-4">
                          {link.children.map((child, childIndex) => (
                            <Link 
                              key={childIndex} 
                              to={link.label === "Resources" ? child.path : `${child.path}#home`} 
                              className={cn(
                                "block px-4 py-2 text-sm font-barlow rounded-md transition-colors", 
                                isActive(child.path) ? "text-stone-900 bg-amber-50 font-medium" : "text-zinc-500 hover:text-stone-900 hover:bg-stone-50"
                              )}
                            >
                              {child.title}
                            </Link>
                          ))}
                          {link.label === "Services" && (
                            <Link to="/services" className="flex items-center text-sm text-amber-700 hover:text-amber-800 font-medium px-4 py-2 font-barlow">
                              View All Services
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          )}
                          {link.label === "Conditions" && (
                            <Link to="/conditions" className="flex items-center text-sm text-amber-700 hover:text-amber-800 font-medium px-4 py-2 font-barlow">
                              View All Conditions
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          )}
                        </div>
                      ) : null}
                    </div>
                  );
                }
                return (
                  <Link 
                    key={index} 
                    to={link.path} 
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm font-barlow font-medium transition-all duration-300", 
                      isActive(link.path) ? "text-stone-900 bg-amber-50 font-semibold" : "text-zinc-600 hover:text-stone-900 hover:bg-stone-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link 
                to="/appointment" 
                className="flex items-center justify-center gap-2 bg-[#222] text-white font-barlow font-medium text-sm px-5 py-3 rounded-full hover:bg-zinc-800 transition-colors mt-3"
              >
                Book Appointment
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                  <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
                </span>
              </Link>
            </nav>
          </div>
        </ScrollArea>
      </div>
    </header>
  );
};

export default Navbar;

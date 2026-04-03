"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight, ChevronUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileConditionsOpen, setMobileConditionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

  const isActive = (path: string) => pathname === path;
  
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
    
    return serviceKeywords.some(keyword => pathname.includes(keyword)) && 
           !isConditionPage();
  };
  
  const isConditionPage = () => {
    return pathname.includes('anxiety') ||
           pathname.includes('depression') ||
           pathname.includes('disorder') || 
           pathname.includes('schizophrenia') || 
           pathname.includes('eating-disorders') || 
           pathname.includes('substance-use') || 
           pathname.includes('dissociative') || 
           pathname.includes('somatic') || 
           pathname.includes('relationship') || 
           pathname.includes('grief') || 
           pathname.includes('bpd') || 
           pathname.includes('sleep') ||
           pathname.includes('ptsd');
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
    { title: "Blog", path: "/blog" },
    { title: "FAQ", path: "/faq" },
  ];

  const isResourcePage = () => {
    return isActive("/blog") || isActive("/faq");
  };

  const navLinks = [{
    path: "/",
    label: "Home"
  }, {
    path: "/about",
    label: "About"
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
    <header className="fixed top-4 inset-x-0 mx-auto z-50 w-[calc(100%-1rem)] sm:w-[95%] max-w-6xl">
      <div className={cn(
        "backdrop-blur-md rounded-[16px] px-4 md:px-6 py-1.5 md:py-2 transition-all duration-300 border border-white/30 shadow-sm",
        isScrolled ? "bg-white/95 shadow-[0_0_20px_rgba(255,255,255,0.8)]" : "bg-white"
      )}>
        <div className="flex items-center justify-between relative">
          <motion.div whileTap={{ scale: 0.96 }}>
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <Image 
                src="/images/logo.png" 
                alt="Sunrise Human Care Services Logo" 
                width={56} 
                height={48} 
                className="object-contain transition-transform duration-300 group-hover:-translate-y-1" 
                style={{ height: "auto" }}
              />
              <div className="flex flex-col">
                <span className="leading-tight text-sm md:text-base font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">Sunrise</span>
                 <span className="text-[10px] md:text-xs leading-tight font-instrument-serif italic text-muted-foreground">Human Care Services</span>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center justify-center flex-1 gap-1 px-4">
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
                                <motion.div key={childIndex} whileTap={{ scale: 0.98 }}>
                                  <Link 
                                    href={link.label === "Resources" ? child.path : `${child.path}#home`} 
                                    className={cn(
                                      "block select-none rounded-md py-2 px-3 text-sm font-barlow leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-stone-900", 
                                      isActive(child.path) ? "bg-amber-50 text-stone-900 font-medium" : "text-zinc-600"
                                    )}
                                  >
                                    {child.title}
                                  </Link>
                                </motion.div>
                              ))}
                              {link.label === "Services" && (
                                <div className="pt-2 mt-2 border-t border-stone-100">
                                  <motion.div whileTap={{ scale: 0.98 }}>
                                    <Link href="/services" className="flex items-center text-sm text-amber-700 hover:text-amber-800 font-medium px-3 py-2 font-barlow">
                                      View All Services
                                      <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                  </motion.div>
                                </div>
                              )}
                              {link.label === "Conditions" && (
                                <div className="pt-2 mt-2 border-t border-stone-100">
                                  <motion.div whileTap={{ scale: 0.98 }}>
                                    <Link href="/conditions" className="flex items-center text-sm text-amber-700 hover:text-amber-800 font-medium px-3 py-2 font-barlow">
                                      View All Conditions
                                      <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                  </motion.div>
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
                <motion.div key={index} whileTap={{ scale: 0.96 }}>
                  <Link 
                    href={link.path} 
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-barlow font-medium transition-all duration-300", 
                      isActive(link.path) 
                        ? "text-stone-900 font-semibold" 
                         : "text-zinc-600 hover:text-zinc-900"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <motion.div whileTap={{ scale: 0.96 }}>
              <Link 
                href="/appointment" 
                className={cn(
                  "flex items-center gap-2 font-barlow font-medium text-sm px-5 py-2.5 rounded-full transition-colors",
                  "bg-[#222] text-white hover:bg-zinc-800"
                )}
              >
                Book Appointment
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                  <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-md focus:outline-none text-zinc-600 hover:text-stone-900" 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[80px] mx-[2.5%] bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-stone-100 z-40 max-h-[calc(100vh-96px)] overflow-hidden"
          >
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
                          <AnimatePresence>
                            {((link.label === "Services" && mobileServicesOpen) || (link.label === "Conditions" && mobileConditionsOpen) || (link.label === "Resources" && mobileResourcesOpen)) && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="pl-4 space-y-1 border-l-2 border-amber-200 ml-4 overflow-hidden"
                              >
                                {link.children.map((child, childIndex) => (
                                  <Link 
                                    key={childIndex} 
                                    href={link.label === "Resources" ? child.path : `${child.path}#home`} 
                                    className={cn(
                                      "block px-4 py-2 text-sm font-barlow rounded-md transition-colors", 
                                      isActive(child.path) ? "text-stone-900 bg-amber-50 font-medium" : "text-zinc-500 hover:text-stone-900 hover:bg-stone-50"
                                    )}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                                {link.label === "Services" && (
                                  <Link href="/services" className="flex items-center text-sm text-amber-700 hover:text-amber-800 font-medium px-4 py-2 font-barlow">
                                    View All Services
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                )}
                                {link.label === "Conditions" && (
                                  <Link href="/conditions" className="flex items-center text-sm text-amber-700 hover:text-amber-800 font-medium px-4 py-2 font-barlow">
                                    View All Conditions
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    return (
                      <Link 
                        key={index} 
                        href={link.path} 
                        className={cn(
                          "px-4 py-3 rounded-lg text-sm font-barlow font-medium transition-all duration-300", 
                          isActive(link.path) ? "text-stone-900 bg-amber-50 font-semibold" : "text-zinc-600 hover:text-stone-900 hover:bg-stone-50"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <motion.div whileTap={{ scale: 0.96 }}>
                    <Link 
                      href="/appointment" 
                      className="flex items-center justify-center gap-2 bg-[#222] text-white font-barlow font-medium text-sm px-5 py-3 rounded-full hover:bg-zinc-800 transition-colors mt-3"
                    >
                      Book Appointment
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                        <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
                      </span>
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

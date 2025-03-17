import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CircleDot, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileConditionsOpen, setMobileConditionsOpen] = useState(false);
  const location = useLocation();
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
    // If we're opening this section, close the other to prevent long lists
    if (!mobileServicesOpen && mobileConditionsOpen) {
      setMobileConditionsOpen(false);
    }
  };
  const toggleMobileConditions = () => {
    setMobileConditionsOpen(!mobileConditionsOpen);
    // If we're opening this section, close the other to prevent long lists
    if (!mobileConditionsOpen && mobileServicesOpen) {
      setMobileServicesOpen(false);
    }
  };
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileConditionsOpen(false);
  }, [location.pathname]);
  const isActive = (path: string) => location.pathname === path;
  const serviceLinks = [{
    title: "Individual Therapy",
    path: "/individual-therapy-havertown-pa"
  }, {
    title: "Couples Counseling",
    path: "/couples-counseling-havertown-pa"
  }, {
    title: "Family Therapy",
    path: "/family-therapy-havertown-pa"
  }, {
    title: "Child Therapy",
    path: "/child-therapy-havertown-pa"
  }, {
    title: "Psychiatric Evaluations",
    path: "/psychiatric-evaluations-havertown-pa"
  }, {
    title: "Medication Management",
    path: "/medication-management-havertown-pa"
  }];
  const conditionLinks = [{
    title: "Anxiety",
    path: "/anxiety-therapy-havertown-pa"
  }, {
    title: "Depression",
    path: "/depression-therapy-havertown-pa"
  }, {
    title: "ADHD",
    path: "/adhd-treatment-havertown-pa"
  }, {
    title: "Bipolar Disorder",
    path: "/bipolar-disorder-therapy-havertown-pa"
  }, {
    title: "OCD",
    path: "/ocd-therapy-havertown-pa"
  }, {
    title: "PTSD & Trauma",
    path: "/ptsd-therapy-havertown-pa"
  }, {
    title: "Schizophrenia",
    path: "/schizophrenia-treatment-havertown-pa"
  }, {
    title: "Eating Disorders",
    path: "/eating-disorders-treatment-havertown-pa"
  }, {
    title: "Substance Use",
    path: "/substance-use-treatment-havertown-pa"
  }, {
    title: "Borderline Personality",
    path: "/bpd-therapy-havertown-pa"
  }, {
    title: "Sleep Disorders",
    path: "/sleep-disorders-treatment-havertown-pa"
  }, {
    title: "Dissociative Disorders",
    path: "/dissociative-disorders-treatment-havertown-pa"
  }, {
    title: "Somatic Disorders",
    path: "/somatic-disorders-treatment-havertown-pa"
  }, {
    title: "Relationship Issues",
    path: "/relationship-therapy-havertown-pa"
  }, {
    title: "Grief & Loss",
    path: "/grief-therapy-havertown-pa"
  }];
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
    path: "/blog",
    label: "Blog"
  }, {
    path: "/faq",
    label: "FAQ"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  return <header className="bg-white py-[10px] rounded-none">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 group">
            <img src="/logo.svg" alt="Sunrise Logo" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:-translate-y-1" />
            <div className="flex flex-col">
              <span className="leading-tight text-base bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text font-extrabold">Sunrise</span>
              <span className="text-muted-foreground leading-tight text-xs font-normal -mt-1">Human Care Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => {
            if (link.type === "dropdown") {
              return <NavigationMenu key={index}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className={cn("px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 gap-1.5", link.label === "Services" && isActive("/services") || link.label === "Conditions" && location.pathname.includes("therapy") || location.pathname.includes("treatment") ? "bg-orange-500/10 text-orange-600 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-orange-500/10 hover:text-orange-600")}>
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="p-2 w-[400px] max-h-[600px]">
                          <ScrollArea className="h-full w-full max-h-[550px]">
                            <div className="grid grid-cols-1 gap-1 p-2">
                              {link.children.map((child, childIndex) => <Link key={childIndex} to={child.path} className={cn("block select-none rounded-md py-2 px-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-orange-500/10 hover:text-orange-600", isActive(child.path) ? "bg-orange-500/10 text-orange-600" : "text-muted-foreground")}>
                                  {child.title}
                                </Link>)}
                              {link.label === "Services" && <div className="pt-2 mt-2 border-t border-border">
                                  <Link to="/services" className="flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium px-3 py-2">
                                    View All Services
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                </div>}
                              {link.label === "Conditions" && <div className="pt-2 mt-2 border-t border-border">
                                  <Link to="/services#conditions" className="flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium px-3 py-2">
                                    View All Conditions
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                  </Link>
                                </div>}
                            </div>
                          </ScrollArea>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>;
            }
            return <Link key={index} to={link.path} className={cn("px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1.5", isActive(link.path) ? "bg-orange-500/10 text-orange-600 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-orange-500/10 hover:text-orange-600")}>
                  {link.label}
                </Link>;
          })}
            <Link to="/appointment" className="ml-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-md hover:from-orange-600 hover:to-amber-600 transition-colors shadow-sm">
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden fixed inset-x-0 top-[72px] bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out border-b z-40 max-h-[calc(100vh-72px)] overflow-hidden", isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none")}>
        <ScrollArea className="h-full max-h-[calc(100vh-72px)]">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2 pb-20">
              {navLinks.map((link, index) => {
              if (link.type === "dropdown") {
                return <div key={index} className="space-y-2">
                      <button onClick={link.label === "Services" ? toggleMobileServices : toggleMobileConditions} className={cn("w-full px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-between", link.label === "Services" && isActive("/services") || link.label === "Conditions" && location.pathname.includes("therapy") || location.pathname.includes("treatment") ? "bg-orange-500/10 text-orange-600 font-medium" : "text-muted-foreground hover:text-foreground")}>
                        {link.label}
                        {link.label === "Services" && mobileServicesOpen || link.label === "Conditions" && mobileConditionsOpen ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
                      </button>
                      {link.label === "Services" && mobileServicesOpen || link.label === "Conditions" && mobileConditionsOpen ? <div className="pl-4 space-y-1 border-l border-orange-200 ml-2">
                          {link.children.map((child, childIndex) => <Link key={childIndex} to={child.path} className={cn("block px-4 py-2 text-sm rounded-md transition-colors", isActive(child.path) ? "text-orange-600 bg-orange-50" : "text-muted-foreground hover:text-orange-600 hover:bg-orange-50")}>
                              {child.title}
                            </Link>)}
                          {link.label === "Services" && <Link to="/services" className="flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium px-4 py-2">
                              View All Services
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>}
                          {link.label === "Conditions" && <Link to="/services#conditions" className="flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium px-4 py-2">
                              View All Conditions
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>}
                        </div> : null}
                    </div>;
              }
              return <Link key={index} to={link.path} className={cn("px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2", isActive(link.path) ? "bg-orange-500/10 text-orange-600 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-orange-50")}>
                    {isActive(link.path) && <CircleDot className="h-3.5 w-3.5 text-orange-500" />}
                    {link.label}
                  </Link>;
            })}
              <Link to="/appointment" className="px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-md hover:from-orange-600 hover:to-amber-600 transition-colors text-center mt-2 shadow-sm">
                Book Now
              </Link>
            </nav>
          </div>
        </ScrollArea>
      </div>
    </header>;
};
export default Navbar;
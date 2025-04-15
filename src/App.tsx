
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchemaMarkup from "./components/SchemaMarkup";

// Eagerly load critical components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Index"; // Renamed import to avoid conflict

// Configure React Query with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

// Enhanced loading component with better UX
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="w-10 h-10 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <SchemaMarkup />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/conditions" element={<Conditions />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/mental-health-havertown-pa" element={<MentalHealthHavertown />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              
              {/* Service pages */}
              <Route path="/individual-therapy-havertown-pa" element={<servicePages.IndividualTherapy />} />
              <Route path="/couples-counseling-havertown-pa" element={<servicePages.CouplesCounseling />} />
              <Route path="/family-therapy-havertown-pa" element={<servicePages.FamilyTherapy />} />
              <Route path="/child-therapy-havertown-pa" element={<servicePages.ChildTherapy />} />
              <Route path="/psychiatric-evaluations-havertown-pa" element={<servicePages.PsychiatricEvaluations />} />
              <Route path="/medication-management-havertown-pa" element={<servicePages.MedicationManagement />} />
              
              {/* Condition pages */}
              <Route path="/anxiety-therapy-havertown-pa" element={<conditionPages.AnxietyTherapy />} />
              <Route path="/depression-therapy-havertown-pa" element={<conditionPages.DepressionTherapy />} />
              <Route path="/adhd-treatment-havertown-pa" element={<conditionPages.ADHDTreatment />} />
              <Route path="/ptsd-therapy-havertown-pa" element={<conditionPages.TraumaPTSDTherapy />} />
              <Route path="/bipolar-disorder-therapy-havertown-pa" element={<conditionPages.BipolarDisorderTherapy />} />
              <Route path="/ocd-therapy-havertown-pa" element={<conditionPages.OCDTherapy />} />
              <Route path="/schizophrenia-treatment-havertown-pa" element={<conditionPages.SchizophreniaTherapy />} />
              <Route path="/eating-disorders-treatment-havertown-pa" element={<conditionPages.EatingDisordersTherapy />} />
              <Route path="/substance-use-treatment-havertown-pa" element={<conditionPages.SubstanceUseTherapy />} />
              <Route path="/bpd-therapy-havertown-pa" element={<conditionPages.BPDTherapy />} />
              <Route path="/sleep-disorders-treatment-havertown-pa" element={<conditionPages.SleepDisordersTherapy />} />
              <Route path="/dissociative-disorders-treatment-havertown-pa" element={<conditionPages.DissociativeDisordersTherapy />} />
              <Route path="/somatic-disorders-treatment-havertown-pa" element={<conditionPages.SomaticDisordersTherapy />} />
              <Route path="/relationship-therapy-havertown-pa" element={<conditionPages.RelationshipTherapy />} />
              <Route path="/grief-therapy-havertown-pa" element={<conditionPages.GriefTherapy />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

// Lazy load page components with prefetching
const LazyIndex = lazy(() => { // Renamed from Index to LazyIndex to avoid conflict
  // Prefetch service components after main page loads
  const prefetchServices = () => {
    import("./pages/services/IndividualTherapy");
    import("./pages/services/CouplesCounseling");
    import("./pages/services/FamilyTherapy");
  };
  
  return import("./pages/Index").then(module => {
    // Start prefetching after a short delay
    setTimeout(prefetchServices, 3000);
    return module;
  });
});

// Group related pages for better code splitting
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Conditions = lazy(() => import("./pages/Conditions"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Appointment = lazy(() => import("./pages/Appointment"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const MentalHealthHavertown = lazy(() => import("./pages/MentalHealthHavertown"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

// Grouped lazy load for service pages
const servicePages = {
  IndividualTherapy: lazy(() => import("./pages/services/IndividualTherapy")),
  CouplesCounseling: lazy(() => import("./pages/services/CouplesCounseling")),
  FamilyTherapy: lazy(() => import("./pages/services/FamilyTherapy")),
  ChildTherapy: lazy(() => import("./pages/services/ChildTherapy")),
  PsychiatricEvaluations: lazy(() => import("./pages/services/PsychiatricEvaluations")),
  MedicationManagement: lazy(() => import("./pages/services/MedicationManagement")),
};

// Grouped lazy load for condition pages
const conditionPages = {
  AnxietyTherapy: lazy(() => import("./pages/services/AnxietyTherapy")),
  DepressionTherapy: lazy(() => import("./pages/services/DepressionTherapy")),
  ADHDTreatment: lazy(() => import("./pages/services/ADHDTreatment")),
  TraumaPTSDTherapy: lazy(() => import("./pages/services/TraumaPTSDTherapy")),
  BipolarDisorderTherapy: lazy(() => import("./pages/services/BipolarDisorderTherapy")),
  OCDTherapy: lazy(() => import("./pages/services/OCDTherapy")),
  SchizophreniaTherapy: lazy(() => import("./pages/conditions/SchizophreniaTherapy")),
  EatingDisordersTherapy: lazy(() => import("./pages/conditions/EatingDisordersTherapy")),
  SubstanceUseTherapy: lazy(() => import("./pages/conditions/SubstanceUseTherapy")),
  BPDTherapy: lazy(() => import("./pages/conditions/BPDTherapy")),
  SleepDisordersTherapy: lazy(() => import("./pages/conditions/SleepDisordersTherapy")),
  DissociativeDisordersTherapy: lazy(() => import("./pages/conditions/DissociativeDisordersTherapy")),
  SomaticDisordersTherapy: lazy(() => import("./pages/conditions/SomaticDisordersTherapy")),
  RelationshipTherapy: lazy(() => import("./pages/conditions/RelationshipTherapy")),
  GriefTherapy: lazy(() => import("./pages/conditions/GriefTherapy")),
};

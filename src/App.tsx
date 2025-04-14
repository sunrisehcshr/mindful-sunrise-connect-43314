
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchemaMarkup from "./components/SchemaMarkup"; // Import Schema

// Eagerly load critical components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
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

// Lazy load service pages
const IndividualTherapy = lazy(() => import("./pages/services/IndividualTherapy"));
const CouplesCounseling = lazy(() => import("./pages/services/CouplesCounseling"));
const FamilyTherapy = lazy(() => import("./pages/services/FamilyTherapy"));
const ChildTherapy = lazy(() => import("./pages/services/ChildTherapy"));
const PsychiatricEvaluations = lazy(() => import("./pages/services/PsychiatricEvaluations"));
const MedicationManagement = lazy(() => import("./pages/services/MedicationManagement"));

// Lazy load condition pages
const AnxietyTherapy = lazy(() => import("./pages/services/AnxietyTherapy"));
const DepressionTherapy = lazy(() => import("./pages/services/DepressionTherapy"));
const ADHDTreatment = lazy(() => import("./pages/services/ADHDTreatment"));
const TraumaPTSDTherapy = lazy(() => import("./pages/services/TraumaPTSDTherapy"));
const BipolarDisorderTherapy = lazy(() => import("./pages/services/BipolarDisorderTherapy"));
const OCDTherapy = lazy(() => import("./pages/services/OCDTherapy"));

// Lazy load additional condition pages
const SchizophreniaTherapy = lazy(() => import("./pages/conditions/SchizophreniaTherapy"));
const EatingDisordersTherapy = lazy(() => import("./pages/conditions/EatingDisordersTherapy"));
const SubstanceUseTherapy = lazy(() => import("./pages/conditions/SubstanceUseTherapy"));
const BPDTherapy = lazy(() => import("./pages/conditions/BPDTherapy"));
const SleepDisordersTherapy = lazy(() => import("./pages/conditions/SleepDisordersTherapy"));
const DissociativeDisordersTherapy = lazy(() => import("./pages/conditions/DissociativeDisordersTherapy"));
const SomaticDisordersTherapy = lazy(() => import("./pages/conditions/SomaticDisordersTherapy"));
const RelationshipTherapy = lazy(() => import("./pages/conditions/RelationshipTherapy"));
const GriefTherapy = lazy(() => import("./pages/conditions/GriefTherapy"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="w-10 h-10 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
  </div>
);

// Configure React Query with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (previously cacheTime)
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

const App = () => (
  <HelmetProvider>
    <SchemaMarkup />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
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
              <Route path="/individual-therapy-havertown-pa" element={<IndividualTherapy />} />
              <Route path="/couples-counseling-havertown-pa" element={<CouplesCounseling />} />
              <Route path="/family-therapy-havertown-pa" element={<FamilyTherapy />} />
              <Route path="/child-therapy-havertown-pa" element={<ChildTherapy />} />
              <Route path="/psychiatric-evaluations-havertown-pa" element={<PsychiatricEvaluations />} />
              <Route path="/medication-management-havertown-pa" element={<MedicationManagement />} />
              
              {/* Condition pages */}
              <Route path="/anxiety-therapy-havertown-pa" element={<AnxietyTherapy />} />
              <Route path="/depression-therapy-havertown-pa" element={<DepressionTherapy />} />
              <Route path="/adhd-treatment-havertown-pa" element={<ADHDTreatment />} />
              <Route path="/ptsd-therapy-havertown-pa" element={<TraumaPTSDTherapy />} />
              <Route path="/bipolar-disorder-therapy-havertown-pa" element={<BipolarDisorderTherapy />} />
              <Route path="/ocd-therapy-havertown-pa" element={<OCDTherapy />} />
              <Route path="/schizophrenia-treatment-havertown-pa" element={<SchizophreniaTherapy />} />
              <Route path="/eating-disorders-treatment-havertown-pa" element={<EatingDisordersTherapy />} />
              <Route path="/substance-use-treatment-havertown-pa" element={<SubstanceUseTherapy />} />
              <Route path="/bpd-therapy-havertown-pa" element={<BPDTherapy />} />
              <Route path="/sleep-disorders-treatment-havertown-pa" element={<SleepDisordersTherapy />} />
              <Route path="/dissociative-disorders-treatment-havertown-pa" element={<DissociativeDisordersTherapy />} />
              <Route path="/somatic-disorders-treatment-havertown-pa" element={<SomaticDisordersTherapy />} />
              <Route path="/relationship-therapy-havertown-pa" element={<RelationshipTherapy />} />
              <Route path="/grief-therapy-havertown-pa" element={<GriefTherapy />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

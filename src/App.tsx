
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Only the home page is eagerly loaded — all others are lazy
import Index from "./pages/Index";

// Lazy-load all other pages for code splitting
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Conditions = lazy(() => import("./pages/Conditions"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Appointment = lazy(() => import("./pages/Appointment"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const MentalHealthDarby = lazy(() => import("./pages/MentalHealthDarby"));
const MedicaidLanding = lazy(() => import("./pages/MedicaidLanding"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const FindingTherapistDarby = lazy(() => import("./pages/blog/FindingTherapistDarby"));
const AnxietyTreatmentDelawareCounty = lazy(() => import("./pages/blog/AnxietyTreatmentDelawareCounty"));
const DepressionTherapyDarby = lazy(() => import("./pages/blog/DepressionTherapyDarby"));
const FamilyTherapyDarby = lazy(() => import("./pages/blog/FamilyTherapyDarby"));
const ADHDTreatmentDarby = lazy(() => import("./pages/blog/ADHDTreatmentDarby"));

// Service pages
const IndividualTherapy = lazy(() => import("./pages/services/IndividualTherapy"));
const CouplesCounseling = lazy(() => import("./pages/services/CouplesCounseling"));
const FamilyTherapy = lazy(() => import("./pages/services/FamilyTherapy"));
const ChildTherapy = lazy(() => import("./pages/services/ChildTherapy"));
const PsychiatricEvaluations = lazy(() => import("./pages/services/PsychiatricEvaluations"));
const MedicationManagement = lazy(() => import("./pages/services/MedicationManagement"));
const IBHSServices = lazy(() => import("./pages/services/IBHSServices"));

// Condition pages
const AnxietyTherapy = lazy(() => import("./pages/services/AnxietyTherapy"));
const DepressionTherapy = lazy(() => import("./pages/services/DepressionTherapy"));
const ADHDTreatment = lazy(() => import("./pages/services/ADHDTreatment"));
const TraumaPTSDTherapy = lazy(() => import("./pages/services/TraumaPTSDTherapy"));
const BipolarDisorderTherapy = lazy(() => import("./pages/services/BipolarDisorderTherapy"));
const OCDTherapy = lazy(() => import("./pages/services/OCDTherapy"));

// New condition pages
const SchizophreniaTherapy = lazy(() => import("./pages/conditions/SchizophreniaTherapy"));
const EatingDisordersTherapy = lazy(() => import("./pages/conditions/EatingDisordersTherapy"));
const SubstanceUseTherapy = lazy(() => import("./pages/conditions/SubstanceUseTherapy"));
const BPDTherapy = lazy(() => import("./pages/conditions/BPDTherapy"));
const SleepDisordersTherapy = lazy(() => import("./pages/conditions/SleepDisordersTherapy"));
const DissociativeDisordersTherapy = lazy(() => import("./pages/conditions/DissociativeDisordersTherapy"));
const SomaticDisordersTherapy = lazy(() => import("./pages/conditions/SomaticDisordersTherapy"));
const RelationshipTherapy = lazy(() => import("./pages/conditions/RelationshipTherapy"));
const GriefTherapy = lazy(() => import("./pages/conditions/GriefTherapy"));

const queryClient = new QueryClient();
const helmetContext = {};

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[hsl(var(--cream))]">
    <div className="w-12 h-12 border-4 border-sunrise-400/20 border-t-[#F7913E] rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Suspense fallback={<PageLoader />}>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/medicaid-therapy" element={<MedicaidLanding />} />
            <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/conditions" element={<Conditions />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/mental-health-darby-pa" element={<MentalHealthDarby />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/finding-therapist-darby-pa-guide" element={<FindingTherapistDarby />} />
              <Route path="/blog/anxiety-treatment-delaware-county-pa" element={<AnxietyTreatmentDelawareCounty />} />
              <Route path="/blog/depression-therapy-darby-pa-complete-guide" element={<DepressionTherapyDarby />} />
              <Route path="/blog/family-therapy-darby-pa-guide" element={<FamilyTherapyDarby />} />
              <Route path="/blog/adhd-treatment-darby-pa-comprehensive-guide" element={<ADHDTreatmentDarby />} />
              <Route path="/blog/:id" element={<BlogPost />} />

              {/* Service pages */}
              <Route path="/individual-therapy-darby-pa" element={<IndividualTherapy />} />
              <Route path="/couples-counseling-darby-pa" element={<CouplesCounseling />} />
              <Route path="/family-therapy-darby-pa" element={<FamilyTherapy />} />
              <Route path="/child-therapy-darby-pa" element={<ChildTherapy />} />
              <Route path="/psychiatric-evaluations-darby-pa" element={<PsychiatricEvaluations />} />
              <Route path="/medication-management-darby-pa" element={<MedicationManagement />} />
              <Route path="/ibhs-darby-pa" element={<IBHSServices />} />

              {/* Condition pages */}
              <Route path="/anxiety-therapy-darby-pa" element={<AnxietyTherapy />} />
              <Route path="/depression-therapy-darby-pa" element={<DepressionTherapy />} />
              <Route path="/adhd-treatment-darby-pa" element={<ADHDTreatment />} />
              <Route path="/ptsd-therapy-darby-pa" element={<TraumaPTSDTherapy />} />
              <Route path="/bipolar-disorder-therapy-darby-pa" element={<BipolarDisorderTherapy />} />
              <Route path="/ocd-therapy-darby-pa" element={<OCDTherapy />} />
              <Route path="/schizophrenia-treatment-darby-pa" element={<SchizophreniaTherapy />} />
              <Route path="/eating-disorders-treatment-darby-pa" element={<EatingDisordersTherapy />} />
              <Route path="/substance-use-treatment-darby-pa" element={<SubstanceUseTherapy />} />
              <Route path="/bpd-therapy-darby-pa" element={<BPDTherapy />} />
              <Route path="/sleep-disorders-treatment-darby-pa" element={<SleepDisordersTherapy />} />
              <Route path="/dissociative-disorders-treatment-darby-pa" element={<DissociativeDisordersTherapy />} />
              <Route path="/somatic-disorders-treatment-darby-pa" element={<SomaticDisordersTherapy />} />
              <Route path="/relationship-therapy-darby-pa" element={<RelationshipTherapy />} />
              <Route path="/grief-therapy-darby-pa" element={<GriefTherapy />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

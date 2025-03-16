
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchemaMarkup from "./components/SchemaMarkup"; // Import Schema
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import MentalHealthHavertown from "./pages/MentalHealthHavertown"; 
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Import service pages
import IndividualTherapy from "./pages/services/IndividualTherapy";
import CouplesCounseling from "./pages/services/CouplesCounseling";
import FamilyTherapy from "./pages/services/FamilyTherapy";
import ChildTherapy from "./pages/services/ChildTherapy";
import PsychiatricEvaluations from "./pages/services/PsychiatricEvaluations";
import MedicationManagement from "./pages/services/MedicationManagement";

// Import condition pages
import AnxietyTherapy from "./pages/services/AnxietyTherapy";
import DepressionTherapy from "./pages/services/DepressionTherapy";
import ADHDTreatment from "./pages/services/ADHDTreatment";
import TraumaPTSDTherapy from "./pages/services/TraumaPTSDTherapy";
import BipolarDisorderTherapy from "./pages/services/BipolarDisorderTherapy";
import OCDTherapy from "./pages/services/OCDTherapy";

// Import new condition pages
import SchizophreniaTherapy from "./pages/conditions/SchizophreniaTherapy";
import EatingDisordersTherapy from "./pages/conditions/EatingDisordersTherapy";
import SubstanceUseTherapy from "./pages/conditions/SubstanceUseTherapy";
import BPDTherapy from "./pages/conditions/BPDTherapy";
import SleepDisordersTherapy from "./pages/conditions/SleepDisordersTherapy";
import DissociativeDisordersTherapy from "./pages/conditions/DissociativeDisordersTherapy";
import SomaticDisordersTherapy from "./pages/conditions/SomaticDisordersTherapy";
import RelationshipTherapy from "./pages/conditions/RelationshipTherapy";
import GriefTherapy from "./pages/conditions/GriefTherapy";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <SchemaMarkup /> {/* Ensures structured data is included */}
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
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
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

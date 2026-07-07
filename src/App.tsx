import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CustomCursor from "./components/CustomCursor";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import DiagnosticsPage from "./pages/DiagnosticsPage";
import DoctorsPage from "./pages/DoctorsPage";
import DoctorProfilePage from "./pages/DoctorProfilePage";
import PricesPage from "./pages/PricesPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PatientsPage from "./pages/PatientsPage";
import GalleryPage from "./pages/GalleryPage";
import LoyaltyPage from "./pages/LoyaltyPage";
import MemosPage from "./pages/MemosPage";
import TaxDeductionPage from "./pages/TaxDeductionPage";
import PrimaryAppointmentPage from "./pages/PrimaryAppointmentPage";
import ArticlesPage from "./pages/ArticlesPage";
import SymptomsPage from "./pages/SymptomsPage";
import PrivacyPage from "./pages/PrivacyPage";
import PatientRulesPage from "./pages/PatientRulesPage";
import ConsentPage from "./pages/ConsentPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/uslugi" element={<ServicesPage />} />
            <Route path="/uslugi/diagnostika" element={<DiagnosticsPage />} />
            <Route path="/uslugi/:slug" element={<ServiceDetailPage />} />
            <Route path="/symptoms" element={<SymptomsPage />} />
            <Route path="/vrachi" element={<DoctorsPage />} />
            <Route path="/vrachi/:id" element={<DoctorProfilePage />} />
            <Route path="/foto-rabot" element={<GalleryPage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/pacientam" element={<PatientsPage />} />
            <Route path="/pacientam/loyalnost" element={<LoyaltyPage />} />
            <Route path="/pacientam/pamyatki" element={<MemosPage />} />
            <Route path="/pacientam/pervichnyj-priem" element={<PrimaryAppointmentPage />} />
            <Route path="/pacientam/nalogovyj-vychet" element={<TaxDeductionPage />} />
            <Route path="/pacientam/blog" element={<ArticlesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/patient-rules" element={<PatientRulesPage />} />
            <Route path="/consent" element={<ConsentPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

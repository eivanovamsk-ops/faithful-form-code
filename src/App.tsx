import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CustomCursor from "./components/CustomCursor";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import PricesPage from "./pages/PricesPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PatientsPage from "./pages/PatientsPage";
import GalleryPage from "./pages/GalleryPage";
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
            <Route path="/vrachi" element={<DoctorsPage />} />
            <Route path="/foto-rabot" element={<GalleryPage />} />
            <Route path="/ceny" element={<PricesPage />} />
            <Route path="/pacientam" element={<PatientsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

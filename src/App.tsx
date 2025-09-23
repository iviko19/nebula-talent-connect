import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@/services/i18n';

// Components
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";

// Pages
import Index from "./pages/Index";
import TalentSearch from "./pages/TalentSearch";
import TalentProfile from "./pages/TalentProfile";
import ForCompanies from "./pages/ForCompanies";
import ForTalent from "./pages/ForTalent";
import Contact from "./pages/Contact";
import EmployerDashboard from "./pages/EmployerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddCandidate from "./pages/AddCandidate";
import AddCompany from "./pages/AddCompany";
import JoinAsTalent from "./pages/JoinAsTalent";

import ContractPage from "./pages/ContractPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ParticleBackground />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/talent-search" element={<TalentSearch />} />
              <Route path="/talent/:id" element={<TalentProfile />} />
              <Route path="/for-companies" element={<ForCompanies />} />
              <Route path="/for-talent" element={<ForTalent />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/employer-dashboard" element={<EmployerDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/add-candidate" element={<AddCandidate />} />
              <Route path="/add-company" element={<AddCompany />} />
              <Route path="/candidate/:id" element={<AddCandidate />} />
              <Route path="/admin-login" element={<Login />} />
              <Route path="/join-as-talent" element={<JoinAsTalent />} />
              
              <Route path="/contract" element={<ContractPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

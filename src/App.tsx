import TrainingSessions from "./pages/TrainingSessions";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Workshops from "./pages/Workshops";
import Certifications from "./pages/Certifications";
import StudentActivities from "./pages/StudentActivities";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/TrainingSessions" element={<TrainingSessions />} />
        <Route path="/Workshops" element={<Workshops />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/StudentActivities" element={<StudentActivities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

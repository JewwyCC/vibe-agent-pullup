
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Activation from "./pages/Activation";
import Agent from "./pages/Agent";
import EventSuggestion from "./pages/EventSuggestion";
import LiveEvent from "./pages/LiveEvent";
import WrapUp from "./pages/WrapUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/activation" element={<Activation />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/suggestion" element={<EventSuggestion />} />
          <Route path="/live" element={<LiveEvent />} />
          <Route path="/wrapup" element={<WrapUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

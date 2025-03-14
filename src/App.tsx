import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Blog from "./components/blog";
import ConversationalAI from "./components/ConversationalAI";
import ContentGeneration from "./components/ContentGeneration";
import DataAnalysis from "./components/DataAnalysis";
import KnowledgeManagement from "./components/KnowledgeManagement";
import CustomerSupport from "./components/CustomerSupport";
import ResearchAndDevelopment from "./components/ResearchAndDevelopment";

function App() {
  // The useRoutes hook must be used inside a component body, not in JSX
  const tempoEnabled = import.meta.env.VITE_TEMPO === "true";

  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <div className="animate-pulse text-white text-xl">Loading...</div>
        </div>
      }
    >
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/conversational-ai" element={<ConversationalAI />} />
          <Route path="/content-generation" element={<ContentGeneration />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
          <Route
            path="/knowledge-management"
            element={<KnowledgeManagement />}
          />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route
            path="/research-and-development"
            element={<ResearchAndDevelopment />}
          />
          {tempoEnabled && <Route path="/tempobook/*" element={null} />}
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;

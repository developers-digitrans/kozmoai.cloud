import { useEffect, useState } from "react";
import Header from "./layout/Header";
import HeroSection from "./sections/HeroSection";
import TrustedBySection from "./sections/TrustedBySection";
import WorkflowBuilderSection from "./sections/WorkflowBuilderSection";
import FeaturesSection from "./sections/FeaturesSection";
import UseCasesSection from "./sections/UseCasesSection";
import ComparisonSection from "./sections/ComparisonSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";
import IntroductionSection from "./sections/IntroductionSection";
import ParticleBackground from "./effects/ParticleBackground";
import { motion } from "framer-motion";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to show animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-black relative overflow-x-hidden">
      {/* Background Effects */}
      <ParticleBackground
        colors={["#623CEA", "#A82DC1", "#BB86FC", "#C51162"]}
      />

      {/* Content Container - Ensure all content is above background */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Header
            logo={<div className="text-white font-bold text-2xl">KozmoAI</div>}
            navLinks={[
              {
                label: "Documentation",
                href: "https://docs.kozmoai.cloud",
                external: true,
              },
              {
                label: "Community",
                href: "https://discord.com/invite/DigitransLab",
                external: true,
              },
              { label: "Blog", href: "/blog" },
            ]}
            ctaText="Get Started"
          />
        </motion.div>

        {/* Main Content */}
        <main className="pt-20">
          {/* Hero Section */}
          <HeroSection
            title="Agentic AI Workflow Management"
            subtitle="Build, deploy, and manage intelligent AI workflows with our powerful visual platform."
            primaryCta={{
              text: "Get Started",
              onClick: () => window.open("https://app.kozmoai.cloud", "_blank"),
            }}
          />

          {/* Workflow Builder Section */}
          <WorkflowBuilderSection />

          {/* Introduction Section */}
          <IntroductionSection />

          {/* Features Section */}
          <FeaturesSection
            title="Powerful Features"
            subtitle="Everything you need to build and deploy LLM applications"
          />

          {/* Use Cases Section */}
          <UseCasesSection
            title="Use Cases"
            subtitle="Discover how KozmoAI can be used across different domains and applications"
          />

          {/* Comparison Section */}
          <ComparisonSection
            title="KozmoAI vs. Alternatives"
            subtitle="See how KozmoAI compares to other solutions in the market"
          />

          {/* FAQ Section */}
          <FAQSection />

          {/* CTA Section removed */}

          {/* Footer */}
          <footer className="bg-black border-t border-purple-400/20 py-12 px-6 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="text-white font-bold text-2xl mb-4">
                  KozmoAI
                </div>
                <p className="text-gray-400 mb-4">
                  Modern tools for modern teams.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/digitranslab/kozmoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/DigitransLab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/DigitransLab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <span className="sr-only">Discord</span>
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.28a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.28.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCcWED497zp1JAAsvXMBnXjQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center md:text-left text-gray-500 text-sm">
              © {new Date().getFullYear()} KozmoAI. All rights reserved.
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Home;

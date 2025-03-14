import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SubscriptionForm } from "@/components/SubscriptionForm";

interface IntroductionSectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    onClick?: () => void;
  };
}

const IntroductionSection = ({
  title = "Revolutionize Your AI Workflow",
  subtitle = "Open-source, Python-powered, fully customizable, and LLM/vector store agnostic",
  primaryCta = {
    text: "Explore Documentation",
    onClick: () => window.open("https://docs.kozmoai.cloud", "_blank"),
  },
}: IntroductionSectionProps) => {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);

  return (
    <>
      <section className="py-20 px-6 md:px-12 bg-black relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[100px] opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full filter blur-[80px] opacity-50"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Main Description */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  The Future of AI Development
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  KozmoAI is a revolutionary visual framework for building
                  multi-agent and Retrieval Augmented Generation (RAG)
                  applications. Its intuitive interface allows for easy
                  manipulation of AI building blocks, enabling developers to
                  quickly prototype and turn their ideas into powerful,
                  real-world solutions.
                </p>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Whether you're a seasoned AI developer or just starting out,
                  KozmoAI provides the tools you need to bring your AI ideas to
                  life without the complexity of traditional development
                  approaches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button
                    onClick={primaryCta.onClick}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-900/30 rounded-lg"
                  >
                    {primaryCta.text}
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://github.com/digitranslab/kozmoai",
                        "_blank",
                      )
                    }
                    variant="outline"
                    className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
                    </svg>
                    GitHub
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-[#121212] p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Intuitive Interface
                  </h3>
                  <p className="text-gray-300 mb-6">
                    KozmoAI's intuitive drag-and-drop interface allows you to
                    create complex AI workflows without writing extensive code.
                    Connect different components to build sophisticated AI
                    applications in minutes, not days.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10">
                    <video
                      src="/videos/build.mov"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Agent Evolution Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                The Evolution from Basic LLMs to Advanced AI Agents
              </h3>
              <p className="text-gray-300 text-lg mb-10 text-center max-w-4xl mx-auto">
                Understanding the development pathway from basic LLMs to
                fully-fledged AI Agents is crucial for building effective AI
                solutions. KozmoAI helps you navigate this journey with ease.
              </p>

              {/* Growth Steps Timeline */}
              <div className="relative max-w-6xl mx-auto mb-20">
                <h3 className="text-2xl font-semibold text-white mb-12 text-center">
                  The Evolution of AI Capabilities
                </h3>

                {/* Step Descriptions - Cards only */}
                <div className="grid grid-cols-3 gap-8 mt-16">
                  {/* Step 1 Description */}
                  <motion.div
                    className="bg-gradient-to-br from-blue-900/20 to-blue-500/10 rounded-xl border border-blue-500/30 p-6 transition-all duration-300 shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 25px 30px -5px rgba(59, 130, 246, 0.3)",
                      background:
                        "linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.2))",
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        The Foundation - Basic LLM
                      </h4>
                    </div>
                    <ul className="text-gray-300 space-y-2 pl-4">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Simple workflow: Input → LLM → Output</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Transformer-based architecture</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Step 2 Description */}
                  <motion.div
                    className="bg-gradient-to-br from-cyan-900/20 to-cyan-500/10 rounded-xl border border-cyan-500/30 p-6 transition-all duration-300 shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 25px 30px -5px rgba(6, 182, 212, 0.3)",
                      background:
                        "linear-gradient(to bottom right, rgba(6, 182, 212, 0.3), rgba(34, 211, 238, 0.2))",
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-600/30 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        Document Processing
                      </h4>
                    </div>
                    <ul className="text-gray-300 space-y-2 pl-4">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Enhanced workflow with documents</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>Expanded context window</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Step 3 Description */}
                  <motion.div
                    className="bg-gradient-to-br from-teal-900/20 to-teal-500/10 rounded-xl border border-teal-500/30 p-6 transition-all duration-300 shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 25px 30px -5px rgba(20, 184, 166, 0.3)",
                      background:
                        "linear-gradient(to bottom right, rgba(20, 184, 166, 0.3), rgba(45, 212, 191, 0.2))",
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-teal-600/30 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        RAGs and Tool Integration
                      </h4>
                    </div>
                    <ul className="text-gray-300 space-y-2 pl-4">
                      <li className="flex items-start">
                        <span className="text-teal-400 mr-2">•</span>
                        <span>Access to up-to-date information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-400 mr-2">•</span>
                        <span>External API integrations</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Step 4 Description */}
                  <motion.div
                    className="bg-gradient-to-br from-green-900/20 to-green-500/10 rounded-xl border border-green-500/30 p-6 transition-all duration-300 shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 25px 30px -5px rgba(34, 197, 94, 0.3)",
                      background:
                        "linear-gradient(to bottom right, rgba(34, 197, 94, 0.3), rgba(74, 222, 128, 0.2))",
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-600/30 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        Memory Systems
                      </h4>
                    </div>
                    <ul className="text-gray-300 space-y-2 pl-4">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span>Context across interactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span>Personalization capabilities</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Step 5 Description */}
                  <motion.div
                    className="bg-gradient-to-br from-purple-900/20 to-purple-500/10 rounded-xl border border-purple-500/30 p-6 transition-all duration-300 shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 25px 30px -5px rgba(147, 51, 234, 0.3)",
                      background:
                        "linear-gradient(to bottom right, rgba(147, 51, 234, 0.3), rgba(168, 85, 247, 0.2))",
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        Multi-Modal Processing
                      </h4>
                    </div>
                    <ul className="text-gray-300 space-y-2 pl-4">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Handling diverse input types</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Generating varied outputs</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Step 6 Description */}
                  <motion.div
                    className="bg-gradient-to-br from-pink-900/20 to-orange-500/10 rounded-xl border border-pink-500/30 p-6 transition-all duration-300 shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 25px 30px -5px rgba(236, 72, 153, 0.3)",
                      background:
                        "linear-gradient(to bottom right, rgba(236, 72, 153, 0.3), rgba(249, 115, 22, 0.2))",
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-pink-600/30 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">6</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        AI Agent Architecture
                      </h4>
                    </div>
                    <ul className="text-gray-300 space-y-2 pl-4">
                      <li className="flex items-start">
                        <span className="text-pink-400 mr-2">•</span>
                        <span>Chain-of-thought processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-400 mr-2">•</span>
                        <span>Goal-oriented execution</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* KozmoAI Implementation - Full Width Card */}
                <motion.div
                  className="w-full mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.3 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-pink-600/30 to-purple-500/30 rounded-xl border border-pink-500/40 p-8 transition-all duration-300 shadow-lg"
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                      boxShadow: "0 25px 30px -5px rgba(236, 72, 153, 0.4)",
                      background:
                        "linear-gradient(to bottom right, rgba(236, 72, 153, 0.4), rgba(147, 51, 234, 0.3))",
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="flex items-center mb-6 justify-center">
                      <div className="w-12 h-12 rounded-full bg-pink-600/40 flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">KA</span>
                      </div>
                      <h4 className="text-2xl font-bold text-white bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        KozmoAI: Building Advanced AI Agents with No Hassle
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                      <div>
                        <h5 className="text-xl font-semibold text-white mb-4">
                          Advanced Capabilities
                        </h5>
                        <ul className="text-gray-300 space-y-3 pl-4">
                          <li className="flex items-start">
                            <span className="text-pink-400 mr-2 text-lg">
                              •
                            </span>
                            <span>
                              Chain-of-thought processing for complex problems
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-pink-400 mr-2 text-lg">
                              •
                            </span>
                            <span>Step-by-step evaluation of solutions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-pink-400 mr-2 text-lg">
                              •
                            </span>
                            <span>Dynamic tool selection based on tasks</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-pink-400 mr-2 text-lg">
                              •
                            </span>
                            <span>
                              Goal-oriented execution with self-correction
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-xl font-semibold text-white mb-4">
                          KozmoAI Implementation
                        </h5>
                        <ul className="text-gray-300 space-y-3 pl-4">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2 text-lg">
                              •
                            </span>
                            <span>
                              Visual workflow builder for agent creation
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2 text-lg">
                              •
                            </span>
                            <span>
                              Drag-and-drop interface for complex agent design
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2 text-lg">
                              •
                            </span>
                            <span>
                              Pre-built components for rapid development
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2 text-lg">
                              •
                            </span>
                            <span>
                              No-code solution with full customization options
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-white text-lg mb-4">
                        KozmoAI makes building advanced AI agents accessible to
                        everyone - no specialized expertise required
                      </p>
                      <Button
                        onClick={() => setShowSubscriptionForm(true)}
                        className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-none shadow-lg shadow-pink-900/20 transition-all duration-300 hover:shadow-pink-900/30 rounded-lg px-8 py-3 text-lg"
                      >
                        Start Building Advanced AI Agents
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Real-World Applications
              </h3>
              <div className="bg-[#111111] rounded-xl border border-purple-500/20 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-purple-500/10">
                  {[
                    {
                      title: "Intelligent Chatbots",
                      description:
                        "Create sophisticated chatbots with memory that can maintain context across conversations, providing more natural and helpful interactions.",
                    },
                    {
                      title: "Document Analysis",
                      description:
                        "Build systems that can analyze and extract insights from documents, making it easy to find and use information buried in large text collections.",
                    },
                    {
                      title: "Content Generation",
                      description:
                        "Generate high-quality content by combining data from multiple sources, perfect for creating blog posts, reports, and other written materials.",
                    },
                    {
                      title: "Workflow Automation",
                      description:
                        "Automate complex workflows by combining AI with business logic, reducing manual effort and increasing efficiency across your organization.",
                    },
                  ].map((useCase, index) => (
                    <div
                      key={index}
                      className="bg-[#111111] p-6 hover:bg-[#151515] transition-colors duration-300"
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {useCase.title}
                      </h4>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscription Form Dialog */}
      <SubscriptionForm
        open={showSubscriptionForm}
        onOpenChange={setShowSubscriptionForm}
      />
    </>
  );
};

export default IntroductionSection;

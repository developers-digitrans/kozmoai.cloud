import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  return (
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
                quickly prototype and turn their ideas into powerful, real-world
                solutions.
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
                  Visual Flow Builder
                </h3>
                <p className="text-gray-300 mb-6">
                  KozmoAI's intuitive drag-and-drop interface allows you to
                  create complex AI workflows without writing extensive code.
                  Connect different components to build sophisticated AI
                  applications in minutes, not days.
                </p>
                <div className="rounded-lg overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10">
                  <img
                    src="/images/agant.png"
                    alt="KozmoAI Visual Flow Builder"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Powerful Features for AI Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Multi-Agent Orchestration",
                  description:
                    "Coordinate multiple AI agents to work together on complex tasks, leveraging the strengths of different models and approaches.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "RAG Applications",
                  description:
                    "Build powerful Retrieval Augmented Generation applications that combine the strengths of large language models with your own data sources.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Real-time Data Processing",
                  description:
                    "Process and analyze data in real-time, enabling your AI applications to respond quickly to changing conditions and new information.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#111111] p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
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
  );
};

export default IntroductionSection;

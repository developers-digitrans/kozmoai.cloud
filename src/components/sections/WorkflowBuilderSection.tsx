import React from "react";
import { motion } from "framer-motion";

interface WorkflowBuilderSectionProps {
  title?: string;
  subtitle?: string;
}

export default function WorkflowBuilderSection(
  props: WorkflowBuilderSectionProps,
) {
  const title = props.title || "Drag. Drop. Deploy.";
  const subtitle =
    props.subtitle ||
    "Don't let boilerplate code slow you down. Visual data flows, reusable components, and rapid iteration let you focus on creating AI magic.";

  return (
    <section className="py-20 px-6 md:px-12 bg-black relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Arcade Demo Section */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#111111] rounded-xl border border-purple-500/20 overflow-hidden shadow-lg shadow-purple-500/10">
              <div className="bg-[#1A1A1A] p-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm">Interactive Demo</div>
                <div className="w-16"></div> {/* Empty div for spacing */}
              </div>
              <div
                className="h-[600px] overflow-hidden rounded-b-xl cursor-pointer transition-all duration-300 transform hover:scale-105 relative bg-gradient-to-br from-[#0D1117] to-[#1A1A1A] flex flex-col items-center justify-center"
                onClick={() =>
                  window.open(
                    "https://app.arcade.software/share/kozmoai-demo",
                    "_blank",
                  )
                }
              >
                {/* Arcade Logo */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center pointer-events-none">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="#9333EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#9333EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#9333EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="z-10 text-center px-8">
                  <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 7.5V6.75C21 5.50736 19.9926 4.5 18.75 4.5H5.25C4.00736 4.5 3 5.50736 3 6.75V17.25C3 18.4926 4.00736 19.5 5.25 19.5H18.75C19.9926 19.5 21 18.4926 21 17.25V16.5"
                        stroke="#9333EA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 12L9 8.25V15.75L15 12Z"
                        stroke="#9333EA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Interactive Product Demo
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-lg">
                    Experience KozmoAI's workflow builder with this interactive
                    demo. Click through the interface and see how easy it is to
                    create powerful AI workflows.
                  </p>
                  <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                    <span>Launch Interactive Demo</span>
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Animated Elements */}
                <div className="absolute bottom-6 right-6 animate-pulse">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div
                  className="absolute top-12 left-12 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <div
                  className="absolute top-1/4 right-1/4 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect your existing tools Section */}
        <div className="mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Connect your existing tools
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose from hundreds of data sources, models, or vector stores. If
              you don't find what your looking for, build your own custom
              component.
            </motion.p>

            {/* First row - left to right */}
            <div className="relative overflow-hidden h-14 mb-2">
              <motion.div
                className="flex gap-4 absolute whitespace-nowrap"
                initial={{ x: 0 }}
                animate={{ x: -3000 }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {[
                  { name: "SearXNG", icon: "🔍" },
                  { name: "OpenAI", icon: "🧠" },
                  { name: "Zep", icon: "⚡" },
                  { name: "Firecrawl", icon: "🔥" },
                  { name: "Upstash", icon: "📊" },
                  { name: "Unstructured", icon: "📄" },
                  { name: "Groq", icon: "🚀" },
                  { name: "Composio", icon: "⚙️" },
                  { name: "Notion", icon: "📝" },
                  { name: "SearXNG", icon: "🔍" },
                  { name: "OpenAI", icon: "🧠" },
                  { name: "Zep", icon: "⚡" },
                  { name: "Firecrawl", icon: "🔥" },
                  { name: "Upstash", icon: "📊" },
                  { name: "Unstructured", icon: "📄" },
                  { name: "Groq", icon: "🚀" },
                  { name: "Composio", icon: "⚙️" },
                  { name: "Notion", icon: "📝" },
                  { name: "SearXNG", icon: "🔍" },
                  { name: "OpenAI", icon: "🧠" },
                  { name: "Zep", icon: "⚡" },
                  { name: "Firecrawl", icon: "🔥" },
                  { name: "Upstash", icon: "📊" },
                  { name: "Unstructured", icon: "📄" },
                  { name: "Groq", icon: "🚀" },
                  { name: "Composio", icon: "⚙️" },
                  { name: "Notion", icon: "📝" },
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#111111] rounded-full border border-purple-500/20 px-4 py-2 flex items-center hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                    animate={{
                      y: [0, -5, 0],
                      boxShadow: [
                        "0 2px 4px -1px rgba(139, 92, 246, 0.1)",
                        "0 4px 6px -1px rgba(139, 92, 246, 0.2)",
                        "0 2px 4px -1px rgba(139, 92, 246, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <span className="mr-2">{tool.icon}</span>
                    <span className="text-white text-sm">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Second row - right to left */}
            <div className="relative overflow-hidden h-14 mb-2">
              <motion.div
                className="flex gap-4 absolute whitespace-nowrap"
                initial={{ x: -3000 }}
                animate={{ x: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {[
                  { name: "Anthropic", icon: "🤖" },
                  { name: "Github", icon: "🐙" },
                  { name: "MeriTalk", icon: "💬" },
                  { name: "Qdrant", icon: "🔮" },
                  { name: "Mistral", icon: "🌪️" },
                  { name: "Clickhouse", icon: "🏠" },
                  { name: "DuckDuckGo", icon: "🦆" },
                  { name: "Serper", icon: "🔎" },
                  { name: "Cohere", icon: "🧩" },
                  { name: "Anthropic", icon: "🤖" },
                  { name: "Github", icon: "🐙" },
                  { name: "MeriTalk", icon: "💬" },
                  { name: "Qdrant", icon: "🔮" },
                  { name: "Mistral", icon: "🌪️" },
                  { name: "Clickhouse", icon: "🏠" },
                  { name: "DuckDuckGo", icon: "🦆" },
                  { name: "Serper", icon: "🔎" },
                  { name: "Cohere", icon: "🧩" },
                  { name: "Anthropic", icon: "🤖" },
                  { name: "Github", icon: "🐙" },
                  { name: "MeriTalk", icon: "💬" },
                  { name: "Qdrant", icon: "🔮" },
                  { name: "Mistral", icon: "🌪️" },
                  { name: "Clickhouse", icon: "🏠" },
                  { name: "DuckDuckGo", icon: "🦆" },
                  { name: "Serper", icon: "🔎" },
                  { name: "Cohere", icon: "🧩" },
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#111111] rounded-full border border-purple-500/20 px-4 py-2 flex items-center hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                    animate={{
                      y: [0, -5, 0],
                      boxShadow: [
                        "0 2px 4px -1px rgba(139, 92, 246, 0.1)",
                        "0 4px 6px -1px rgba(139, 92, 246, 0.2)",
                        "0 2px 4px -1px rgba(139, 92, 246, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <span className="mr-2">{tool.icon}</span>
                    <span className="text-white text-sm">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Run, Share, and Collaborate Section */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Run, Share, and Collaborate.
          </motion.h3>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose from hundreds of pre-built flows and components
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Agent Cards */}
            {[
              {
                name: "Basic Agent",
                description:
                  "Description of the flow, no more than three lines ideally.",
              },
              {
                name: "Basic Prompting",
                description:
                  "Description of the flow, no more than three lines ideally.",
              },
              {
                name: "Doc Assistant",
                description:
                  "A RAG-powered chatbot that retrieves specific information from documents.",
              },
              { name: "OpenAI", description: "" },
            ].map((agent, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${index === 1 ? "from-pink-600/20 to-purple-500/20 border-pink-500/30" : "from-purple-900/10 to-purple-500/10 border-purple-500/20"} rounded-xl border p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300`}
                animate={{
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 4px 6px -1px rgba(139, 92, 246, 0.1)",
                    "0 10px 15px -3px rgba(139, 92, 246, 0.2)",
                    "0 4px 6px -1px rgba(139, 92, 246, 0.1)",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-900/20 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {agent.name}
                  </h4>
                </div>
                {agent.description && (
                  <p className="text-gray-300 text-sm">{agent.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

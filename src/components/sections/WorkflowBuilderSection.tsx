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
    <section className="py-20 px-6 md:px-12 bg-[#0B0B0B] relative z-20">
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

        {/* YouTube Video Section */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#111111] rounded-xl border border-purple-500/20 overflow-hidden shadow-lg shadow-purple-500/10">
              <div className="bg-[#1A1A1A] p-3 border-b border-gray-800 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div
                className="h-[600px] overflow-hidden rounded-b-xl cursor-pointer transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: "#0D1117" }}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=z9TCq9UYOXk",
                    "_blank",
                  )
                }
              >
                <iframe
                  src="https://www.youtube.com/embed/z9TCq9UYOXk?autoplay=0"
                  title="YouTube video player"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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
                  <div
                    key={index}
                    className="bg-[#111111] rounded-full border border-purple-500/20 px-4 py-2 flex items-center hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                  >
                    <span className="mr-2">{tool.icon}</span>
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
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
                  <div
                    key={index}
                    className="bg-[#111111] rounded-full border border-purple-500/20 px-4 py-2 flex items-center hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                  >
                    <span className="mr-2">{tool.icon}</span>
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Limitless Control Section */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Limitless Control
          </motion.h3>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Use Python to customize anything and everything
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* API Integration Card */}
            <div className="bg-[#111111] rounded-xl border border-purple-500/20 p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                API Integration
              </h4>
              <p className="text-gray-300 text-sm">
                A flow designed to guide developers through the process of
                integrating APIs seamlessly.
              </p>
            </div>

            {/* Code Debugger Card */}
            <div className="bg-[#111111] rounded-xl border border-purple-500/20 p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Code Debugger
              </h4>
              <p className="text-gray-300 text-sm">
                A chatbot that helps developers identify bugs in their code and
                provides solutions to fix them.
              </p>
            </div>

            {/* Content Search Card */}
            <div className="bg-[#111111] rounded-xl border border-purple-500/20 p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Content Search
              </h4>
              <p className="text-gray-300 text-sm">
                A flow designed to search across multiple repositories and
                resources to retrieve answers.
              </p>
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
              <div
                key={index}
                className={`bg-gradient-to-br ${index === 1 ? "from-pink-600/20 to-purple-500/20 border-pink-500/30" : "from-purple-900/10 to-purple-500/10 border-purple-500/20"} rounded-xl border p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300`}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Header from "./layout/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticleBackground from "./effects/ParticleBackground";
import {
  BookOpen,
  Search,
  Database,
  Share2,
  Brain,
  FileText,
} from "lucide-react";

const KnowledgeManagement = () => {
  return (
    <div className="w-screen min-h-screen bg-black relative overflow-x-hidden">
      {/* Background Effects */}
      <ParticleBackground
        colors={["#623CEA", "#A82DC1", "#BB86FC", "#C51162"]}
      />

      {/* Content Container */}
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
              { label: "Features", href: "/features" },
              { label: "Documentation", href: "/docs" },
              { label: "Community", href: "/community" },
              { label: "Blog", href: "/blog" },
            ]}
            ctaText="Get Started"
          />
        </motion.div>

        {/* Main Content */}
        <main className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Knowledge Management
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Create intelligent knowledge bases that can answer questions
                based on your organization's data, making information accessible
                and actionable for everyone in your team.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-900/30 rounded-lg px-8 py-6"
                  onClick={() =>
                    window.open("https://app.kozmoai.cloud", "_blank")
                  }
                >
                  Start Building
                </Button>
              </motion.div>
            </div>

            {/* Features Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Document Processing",
                    description:
                      "Automatically process and index documents from various sources including PDFs, Word documents, wikis, and web pages.",
                    icon: <FileText className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Semantic Search",
                    description:
                      "Find information based on meaning rather than keywords, enabling more accurate and relevant search results.",
                    icon: <Search className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Knowledge Graph",
                    description:
                      "Visualize relationships between different pieces of information to uncover connections and insights.",
                    icon: <Database className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Natural Language Q&A",
                    description:
                      "Ask questions in plain language and receive accurate, contextual answers drawn from your organization's knowledge base.",
                    icon: <Brain className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Knowledge Sharing",
                    description:
                      "Easily share knowledge across teams and departments, breaking down information silos and improving collaboration.",
                    icon: <Share2 className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "Knowledge base that evolves and improves over time as new information is added and user interactions provide feedback.",
                    icon: <BookOpen className="w-10 h-10 text-purple-500" />,
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#111111] p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-5">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Use Cases Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Popular Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Internal Knowledge Base",
                    description:
                      "Create a centralized repository of company knowledge, policies, and procedures that employees can easily search and access.",
                    image:
                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
                  },
                  {
                    title: "Customer Support Enhancement",
                    description:
                      "Empower support teams with instant access to product information, troubleshooting guides, and customer history to resolve issues faster.",
                    image:
                      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
                  },
                  {
                    title: "Research & Development",
                    description:
                      "Accelerate innovation by making research findings, patents, and technical documentation easily discoverable and accessible.",
                    image:
                      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
                  },
                  {
                    title: "Compliance & Governance",
                    description:
                      "Ensure regulatory compliance by maintaining up-to-date documentation and making compliance requirements easily accessible to all stakeholders.",
                    image:
                      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
                  },
                ].map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#111111] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-48 relative">
                      <img
                        src={useCase.image}
                        alt={useCase.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="bg-gradient-to-br from-purple-900/20 to-pink-500/20 rounded-2xl p-8 md:p-12 border border-purple-500/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to transform your organization's knowledge management?
              </h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building intelligent knowledge bases today with KozmoAI's
                powerful visual workflow builder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-900/30 rounded-lg"
                  onClick={() =>
                    window.open("https://app.kozmoai.cloud", "_blank")
                  }
                >
                  Get Started Free
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300"
                  onClick={() =>
                    window.open("https://docs.kozmoai.cloud", "_blank")
                  }
                >
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black border-t border-purple-400/20 py-12 px-6 md:px-12 relative z-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-white font-bold text-2xl mb-4">KozmoAI</div>
            <p className="text-gray-400 mb-4">Modern tools for modern teams.</p>
            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} KozmoAI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default KnowledgeManagement;

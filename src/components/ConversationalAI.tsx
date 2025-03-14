import React from "react";
import Header from "./layout/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticleBackground from "./effects/ParticleBackground";
import { MessageSquare, Bot, Zap, Brain, Users, Code } from "lucide-react";

const ConversationalAI = () => {
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
                  Conversational AI
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Build intelligent chatbots and virtual assistants that
                understand and respond to user queries naturally, creating
                engaging and helpful conversational experiences.
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
                    title: "Natural Language Understanding",
                    description:
                      "Advanced NLU capabilities to comprehend user intent, context, and sentiment for more human-like interactions.",
                    icon: <Brain className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Multi-turn Conversations",
                    description:
                      "Maintain context across multiple exchanges, enabling natural flowing conversations with memory of previous interactions.",
                    icon: (
                      <MessageSquare className="w-10 h-10 text-purple-500" />
                    ),
                  },
                  {
                    title: "Personalization",
                    description:
                      "Adapt responses based on user preferences, history, and behavior to create tailored conversational experiences.",
                    icon: <Users className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Omni-channel Support",
                    description:
                      "Deploy your conversational AI across multiple platforms including web, mobile, messaging apps, and voice assistants.",
                    icon: <Zap className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Easy Integration",
                    description:
                      "Seamlessly connect with your existing systems, databases, and third-party services through our flexible API.",
                    icon: <Code className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "Improve over time through machine learning from conversations and feedback to deliver increasingly accurate responses.",
                    icon: <Bot className="w-10 h-10 text-purple-500" />,
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
                    title: "Customer Support Automation",
                    description:
                      "Reduce support costs and improve response times by automating answers to common questions and resolving simple issues without human intervention.",
                    image:
                      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80",
                  },
                  {
                    title: "Lead Generation & Qualification",
                    description:
                      "Engage website visitors, collect information, and qualify leads 24/7 before routing them to your sales team for follow-up.",
                    image:
                      "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
                  },
                  {
                    title: "Virtual Shopping Assistants",
                    description:
                      "Guide customers through product selection, answer questions, and provide personalized recommendations to increase conversion rates.",
                    image:
                      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80",
                  },
                  {
                    title: "Internal Knowledge Management",
                    description:
                      "Help employees quickly find information, answer HR questions, and navigate internal systems to improve productivity.",
                    image:
                      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
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
                Ready to transform your customer interactions?
              </h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building intelligent conversational experiences today with
                KozmoAI's powerful visual workflow builder.
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

export default ConversationalAI;

import React from "react";
import Header from "./layout/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticleBackground from "./effects/ParticleBackground";
import { MessageSquare, Users, Clock, BarChart3, Bot, Zap } from "lucide-react";

const CustomerSupport = () => {
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
                  Customer Support
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Transform your customer support experience with AI-powered
                solutions that resolve issues faster, provide 24/7 assistance,
                and deliver personalized support at scale.
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
                    title: "AI-Powered Chatbots",
                    description:
                      "Deploy intelligent chatbots that can understand customer queries, provide instant responses, and escalate complex issues to human agents when necessary.",
                    icon: <Bot className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "24/7 Availability",
                    description:
                      "Provide round-the-clock support to customers across different time zones without increasing staffing costs or burning out your team.",
                    icon: <Clock className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Personalized Support",
                    description:
                      "Deliver tailored support experiences by leveraging customer data and interaction history to provide context-aware assistance.",
                    icon: <Users className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Automated Ticket Routing",
                    description:
                      "Intelligently categorize and route support tickets to the most appropriate department or agent based on content analysis and priority.",
                    icon: <Zap className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Conversation Analytics",
                    description:
                      "Gain insights from customer conversations to identify common issues, improve products, and optimize support processes.",
                    icon: <BarChart3 className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Multi-Channel Support",
                    description:
                      "Provide consistent support across email, chat, social media, and voice channels with a unified conversation history and knowledge base.",
                    icon: (
                      <MessageSquare className="w-10 h-10 text-purple-500" />
                    ),
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
                    title: "Customer Self-Service",
                    description:
                      "Empower customers to find answers on their own through AI-powered knowledge bases, reducing support volume while improving customer satisfaction.",
                    image:
                      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&q=80",
                  },
                  {
                    title: "Proactive Issue Resolution",
                    description:
                      "Identify and address potential problems before customers report them by analyzing patterns and predicting common issues.",
                    image:
                      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
                  },
                  {
                    title: "Agent Assistance",
                    description:
                      "Augment human support agents with AI tools that suggest responses, retrieve relevant information, and automate routine tasks.",
                    image:
                      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
                  },
                  {
                    title: "Customer Feedback Analysis",
                    description:
                      "Automatically analyze customer feedback across channels to identify sentiment trends, product issues, and opportunities for improvement.",
                    image:
                      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
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
                Ready to revolutionize your customer support?
              </h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building intelligent support solutions today with
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

export default CustomerSupport;

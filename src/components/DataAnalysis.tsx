import React from "react";
import Header from "./layout/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticleBackground from "./effects/ParticleBackground";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Database,
  LineChart,
  Search,
} from "lucide-react";

const DataAnalysis = () => {
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
                  Data Analysis
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Extract insights and analyze large volumes of text data to
                identify patterns, trends, and valuable information that drives
                better decision-making for your organization.
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
                  Start Analyzing
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
                    title: "Text Analytics",
                    description:
                      "Process and analyze large volumes of text data to extract meaningful insights, identify patterns, and discover hidden relationships.",
                    icon: <Search className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Trend Identification",
                    description:
                      "Automatically detect and visualize emerging trends, anomalies, and patterns in your data to stay ahead of market changes.",
                    icon: <TrendingUp className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Data Visualization",
                    description:
                      "Transform complex data into intuitive, interactive visualizations that make insights accessible and actionable for all stakeholders.",
                    icon: <BarChart3 className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Predictive Analytics",
                    description:
                      "Leverage machine learning to forecast future trends and outcomes based on historical data patterns and external factors.",
                    icon: <LineChart className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Data Integration",
                    description:
                      "Connect and analyze data from multiple sources and formats to create a unified view of your business information.",
                    icon: <Database className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Segment Analysis",
                    description:
                      "Break down data by customer segments, product categories, or other dimensions to uncover specific insights for targeted strategies.",
                    icon: <PieChart className="w-10 h-10 text-purple-500" />,
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
                    title: "Market Intelligence",
                    description:
                      "Monitor market trends, competitor activities, and customer sentiment to identify opportunities and threats in real-time.",
                    image:
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                  },
                  {
                    title: "Customer Behavior Analysis",
                    description:
                      "Analyze customer interactions, feedback, and purchase patterns to understand preferences and improve customer experience.",
                    image:
                      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
                  },
                  {
                    title: "Research & Publication Analysis",
                    description:
                      "Process academic papers, research documents, and publications to extract key findings and identify emerging research areas.",
                    image:
                      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=800&q=80",
                  },
                  {
                    title: "Operational Optimization",
                    description:
                      "Identify inefficiencies and bottlenecks in business processes through data analysis to improve operational performance.",
                    image:
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
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
                Ready to unlock insights from your data?
              </h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Start analyzing your data today with KozmoAI's powerful data
                analysis tools and visual workflow builder.
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

export default DataAnalysis;

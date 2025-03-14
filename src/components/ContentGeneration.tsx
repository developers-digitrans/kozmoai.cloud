import React from "react";
import Header from "./layout/Header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticleBackground from "./effects/ParticleBackground";
import {
  FileText,
  PenTool,
  Sparkles,
  Layers,
  Share2,
  BookOpen,
} from "lucide-react";

const ContentGeneration = () => {
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
                  Content Generation
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Create high-quality, engaging content at scale with our
                AI-powered content generation tools. From marketing copy to
                technical documentation, transform your content creation
                workflow.
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
                  Start Creating
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
                    title: "AI-Powered Writing",
                    description:
                      "Leverage advanced language models to generate human-quality content for various purposes, from blog posts to product descriptions.",
                    icon: <PenTool className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Multi-Format Content",
                    description:
                      "Create content in multiple formats including blog posts, social media updates, email newsletters, product descriptions, and more.",
                    icon: <FileText className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Brand Voice Customization",
                    description:
                      "Train the system to match your brand's unique voice and style for consistent messaging across all content.",
                    icon: <Sparkles className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Content Optimization",
                    description:
                      "Automatically optimize content for SEO, readability, and engagement to maximize its effectiveness.",
                    icon: <Layers className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Collaborative Workflows",
                    description:
                      "Enable teams to collaborate on content creation with shared projects, feedback tools, and version control.",
                    icon: <Share2 className="w-10 h-10 text-purple-500" />,
                  },
                  {
                    title: "Content Research",
                    description:
                      "Conduct automated research to gather relevant information and insights to inform your content creation process.",
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
                    title: "Marketing Content Creation",
                    description:
                      "Generate engaging marketing copy for websites, social media, email campaigns, and advertisements to drive customer engagement and conversions.",
                    image:
                      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
                  },
                  {
                    title: "Blog & Article Writing",
                    description:
                      "Create informative and engaging blog posts and articles that establish thought leadership and drive organic traffic to your website.",
                    image:
                      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
                  },
                  {
                    title: "Product Descriptions",
                    description:
                      "Craft compelling product descriptions that highlight key features and benefits, helping to increase sales and reduce bounce rates.",
                    image:
                      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
                  },
                  {
                    title: "Technical Documentation",
                    description:
                      "Generate clear and comprehensive technical documentation, user guides, and help content to improve product adoption and reduce support inquiries.",
                    image:
                      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
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
                Ready to revolutionize your content creation?
              </h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Start generating high-quality content at scale with KozmoAI's
                powerful content generation tools.
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

export default ContentGeneration;

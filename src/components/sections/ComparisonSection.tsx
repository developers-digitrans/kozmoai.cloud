import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ComparisonFeature {
  name: string;
  kozmoAI: boolean;
  competitors: boolean;
}

interface ComparisonSectionProps {
  title?: string;
  subtitle?: string;
  features?: ComparisonFeature[];
}

const ComparisonSection = ({
  title = "KozmoAI vs. Alternatives",
  subtitle = "See how KozmoAI compares to other solutions in the market",
  features = [
    { name: "Visual Workflow Builder", kozmoAI: true, competitors: true },
    { name: "Pre-built Components", kozmoAI: true, competitors: true },
    { name: "Custom Component Creation", kozmoAI: true, competitors: false },
    { name: "Open Source", kozmoAI: true, competitors: false },
    { name: "Self-Hosted Option", kozmoAI: true, competitors: false },
    { name: "Real-time Collaboration", kozmoAI: true, competitors: false },
    { name: "Version Control", kozmoAI: true, competitors: false },
    { name: "API Integration", kozmoAI: true, competitors: true },
    { name: "Community Support", kozmoAI: true, competitors: false },
  ],
}: ComparisonSectionProps) => {
  return (
    <section className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Modern Card-Based Comparison */}
          <div className="grid grid-cols-2 gap-4">
            {/* KozmoAI Column */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-500/10 rounded-xl border border-purple-500/30 p-6 overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">K</span>
                </div>
                <h3 className="text-xl font-bold text-white">KozmoAI</h3>
              </div>

              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={`kozmo-${index}`}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${feature.kozmoAI ? "bg-green-500/20" : "bg-red-500/20"}`}
                    >
                      {feature.kozmoAI ? (
                        <Check className="text-green-500 w-4 h-4" />
                      ) : (
                        <X className="text-red-500 w-4 h-4" />
                      )}
                    </div>
                    <span className="text-gray-300">{feature.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Competitors Column */}
            <div className="bg-[#111111] rounded-xl border border-gray-800 p-6 overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">C</span>
                </div>
                <h3 className="text-xl font-bold text-white">Competitors</h3>
              </div>

              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={`comp-${index}`}
                    className="flex items-center text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${feature.competitors ? "bg-green-500/20" : "bg-red-500/20"}`}
                    >
                      {feature.competitors ? (
                        <Check className="text-green-500 w-4 h-4" />
                      ) : (
                        <X className="text-red-500 w-4 h-4" />
                      )}
                    </div>
                    <span className="text-gray-400">{feature.name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Comparison Stats */}
          <motion.div
            className="mt-8 grid grid-cols-2 gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-500/10 rounded-xl border border-purple-500/20 p-4">
              <div className="text-3xl font-bold text-white mb-1">
                {features.filter((f) => f.kozmoAI).length}/{features.length}
              </div>
              <div className="text-sm text-gray-400">
                Features Supported by KozmoAI
              </div>
            </div>
            <div className="bg-[#111111] rounded-xl border border-gray-800 p-4">
              <div className="text-3xl font-bold text-white mb-1">
                {features.filter((f) => f.competitors).length}/{features.length}
              </div>
              <div className="text-sm text-gray-400">
                Features Supported by Competitors
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;

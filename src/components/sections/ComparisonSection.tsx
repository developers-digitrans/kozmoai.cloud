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
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
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
          className="bg-[#111111] rounded-xl border border-purple-500/20 overflow-hidden shadow-lg shadow-purple-500/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[#1A1A1A] p-6">
            <div className="col-span-1 text-white font-semibold">Feature</div>
            <div className="col-span-1 text-center text-white font-semibold">
              KozmoAI
            </div>
            <div className="col-span-1 text-center text-white font-semibold">
              Competitors
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-purple-900/20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <div className="col-span-1 text-white">{feature.name}</div>
                <div className="col-span-1 flex justify-center">
                  {feature.kozmoAI ? (
                    <Check className="text-green-500 w-6 h-6" />
                  ) : (
                    <X className="text-red-500 w-6 h-6" />
                  )}
                </div>
                <div className="col-span-1 flex justify-center">
                  {feature.competitors ? (
                    <Check className="text-green-500 w-6 h-6" />
                  ) : (
                    <X className="text-red-500 w-6 h-6" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;

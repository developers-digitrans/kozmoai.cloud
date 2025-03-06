import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick?: () => void;
  };
}

const CTASection = ({
  title = "Ready to transform your workflow?",
  subtitle = "Join thousands of teams already using KozmoAI to build powerful AI applications.",
  primaryCta = {
    text: "Get Started for Free",
    onClick: () => console.log("Primary CTA clicked"),
  },
  secondaryCta = {
    text: "Schedule a Demo",
    onClick: () => console.log("Secondary CTA clicked"),
  },
}: CTASectionProps) => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-purple-900/20 to-pink-500/20 rounded-3xl mx-6 md:mx-12 my-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            onClick={primaryCta.onClick}
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none px-8 py-4 h-auto text-lg shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-900/30 rounded-lg w-full sm:w-auto"
          >
            {primaryCta.text}
          </Button>
          <Button
            onClick={secondaryCta.onClick}
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none px-8 py-4 h-auto text-lg shadow-lg shadow-purple-900/20 transition-all duration-300 hover:shadow-purple-900/30 rounded-lg w-full sm:w-auto"
          >
            {secondaryCta.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

import React from "react";
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  image?: string;
}

interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
}

const HowItWorksSection = ({
  title = "How It Works",
  subtitle = "Build powerful LLM applications in just a few steps",
  steps = [
    {
      title: "1. Drag & Drop Components",
      description:
        "Select from our library of pre-built components and drag them onto the canvas.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "2. Connect Components",
      description:
        "Create connections between components to define the flow of data and operations.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    },
    {
      title: "3. Configure & Customize",
      description:
        "Set parameters and customize each component to fit your specific requirements.",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
    },
    {
      title: "4. Deploy & Share",
      description:
        "Deploy your application with one click and share it with your team or users.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    },
  ],
}: HowItWorksSectionProps) => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-purple-900/10 to-pink-500/10">
      <div className="max-w-7xl mx-auto">
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

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg">{step.description}</p>
              </div>
              <div className="md:w-1/2 rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10">
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto object-cover aspect-video"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

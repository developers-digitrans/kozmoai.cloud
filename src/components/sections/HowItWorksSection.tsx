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
        "Select from our library of pre-built components, including integrations with popular AI agents like Mistral AI, Groq, Hugging Face, OpenAI, Ollama, Nvidia, and more. Drag these components onto the canvas to visually design and orchestrate your AI workflows. No coding required!",
      image: "/images/workflow2.png",
    },
    {
      title: "2. Connect Components",
      description:
        "Create connections between components with a simple visual interface. Easily establish dependencies and data flow between different AI agents to define how they interact and collaborate within your workflow. This visual approach simplifies dependency creation and management, making it easy to design complex AI orchestrations.",
      image: "/images/workflow3.png",
    },
    {
      title: "3. Configure & Customize",
      description:
        "Fine-tune each component to match your exact needs and use cases. Set parameters like API keys, model selection, chunk size, embedding context length, and other advanced options. Our intuitive interface gives you granular control over every aspect of your AI workflow, from tweaking model parameters to adjusting data processing options, ensuring optimal performance for your specific requirements.",
      image: "/images/customise.png",
    },
  ],
}: HowItWorksSectionProps) => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900">
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
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg">{step.description}</p>
              </div>
              <div className="md:w-2/3 rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10">
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto object-cover aspect-video"
                    style={{ maxHeight: "600px" }}
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

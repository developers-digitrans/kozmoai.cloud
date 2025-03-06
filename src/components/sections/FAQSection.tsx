import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQ[];
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about KozmoAI",
  faqs = [
    {
      question: "What is KozmoAI?",
      answer:
        "KozmoAI is an open-source framework for building LLM applications visually. It allows you to connect components together to create powerful AI workflows without writing code.",
    },
    {
      question: "Is KozmoAI free to use?",
      answer:
        "Yes, KozmoAI is open-source and free to use. You can self-host it or use our cloud version which has both free and premium tiers.",
    },
    {
      question: "Do I need coding experience to use KozmoAI?",
      answer:
        "No, KozmoAI is designed to be user-friendly and accessible to non-technical users. The visual interface allows you to build complex workflows without writing code.",
    },
    {
      question: "Can I integrate KozmoAI with my existing tools?",
      answer:
        "Yes, KozmoAI supports integration with a wide range of external APIs and services. You can connect it to your existing tools and platforms.",
    },
    {
      question: "How can I contribute to KozmoAI?",
      answer:
        "As an open-source project, we welcome contributions from the community. You can contribute by submitting pull requests, reporting bugs, or suggesting new features on our GitHub repository.",
    },
    {
      question: "Is there a community for KozmoAI users?",
      answer:
        "Yes, we have an active community of users and developers. You can join our Discord server or participate in discussions on our GitHub repository.",
    },
  ],
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto">
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

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#111111] rounded-xl border border-purple-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-300">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Typewriter effect component
const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 40); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Static title with gradient
const GradientTitle = () => {
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="inline-block relative h-[60px] md:h-[70px] overflow-hidden">
      <div className="absolute bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent flex items-center">
        <span>
          KozmoAI transforms the way you iterate and deploy AI workflows
        </span>
        <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
      </div>
    </div>
  );
};

interface HeroSectionProps {
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

const HeroSection = ({
  title = "Agentic AI Workflow Management",
  subtitle = "Build, deploy, and manage intelligent AI workflows with our powerful visual platform.",
  primaryCta = {
    text: "Get Started",
    onClick: () => window.open("https://app.kozmoai.cloud", "_blank"),
  },
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[800px] flex items-center justify-center overflow-hidden bg-black py-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          ref={(el) => {
            if (el) {
              el.playbackRate = 0.5; // Slow down the video to half speed
            }
          }}
        >
          <source src="/videos/ai.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0B0B0B]/70 z-10"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full filter blur-[100px] opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full filter blur-[80px] opacity-40"></div>

        {/* Animated particles removed */}
      </div>

      {/* Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center">
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              KozmoAI transforms the way you iterate and deploy AI workflows
            </div>
          </h1>
          <p className="text-xl text-gray-300 mb-8 mx-auto max-w-3xl">
            Build, deploy, and manage intelligent AI workflows with our powerful
            visual platform. Create complex LLM applications visually without
            writing code.
          </p>

          {/* Animated coding-like text with gradient */}
          <motion.div
            className="mb-10 overflow-hidden rounded-lg bg-[#121212]/50 p-6 border border-purple-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="font-mono text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <TypewriterEffect text="Connect components together to create powerful AI workflows. Choose from hundreds of pre-built components or create your own custom ones to extend functionality." />
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Workflow Image Card - Centered and larger */}
        <motion.div
          className="w-full relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[1200px] mx-auto">
            <div className="bg-[#121212] rounded-xl border border-[#2A2A2A] shadow-xl overflow-hidden">
              {/* Browser-like header */}
              <div className="bg-[#1A1A1A] px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-gray-400 text-sm">Playground</div>
              </div>

              {/* Workflow diagram - using the exact image from the upload */}
              <div className="p-0 bg-black flex justify-center">
                <img
                  src="/images/Screenshot 2025-03-06 at 07.37.19.png"
                  alt="AI Workflow Diagram"
                  className="w-auto h-auto object-contain"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

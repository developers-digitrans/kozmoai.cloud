import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CursorCloudEffectProps {
  color?: string;
  particleCount?: number;
  particleSize?: number;
  followSpeed?: number;
  className?: string;
}

const CursorCloudEffect = ({
  color = "rgba(147, 51, 234, 0.3)", // More transparent purple color
  particleCount = 12,
  particleSize = 25, // Reduced size for a more concentrated effect
  followSpeed = 0.3, // Increased for closer following
  className = "",
}: CursorCloudEffectProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * (particleSize / 2) + particleSize / 2, // More consistent sizes
      delay: Math.random() * 0.1, // Less delay for tighter following
    }));
    setParticles(initialParticles);
  }, [particleCount, particleSize]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Update particle positions based on mouse movement
  useEffect(() => {
    const updateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Calculate distance to target (mouse position)
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;

          // Calculate distance from cursor
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Add some randomness to create a glow effect
          const randomOffset = Math.sin(Date.now() * 0.001 + particle.id) * 5;

          // Move particle towards mouse with some randomness
          return {
            ...particle,
            x:
              particle.x +
              dx * followSpeed * (1 - particle.delay) -
              particle.size / 2 +
              randomOffset,
            y:
              particle.y +
              dy * followSpeed * (1 - particle.delay) -
              particle.size / 2 +
              randomOffset,
          };
        }),
      );
    };

    const animationFrame = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition, followSpeed]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 50 }} // High z-index to stay above content
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-md"
          style={{
            backgroundColor: color,
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            opacity: 0.2 + Math.random() * 0.2, // More transparent
            filter: `blur(${particle.size / 4}px)`, // Softer blur
            boxShadow: `0 0 ${particle.size / 3}px ${color}`,
            pointerEvents: "none", // Ensure it doesn't interfere with mouse events
          }}
          animate={{
            scale: [0.9, 1.05, 0.9],
            opacity: [
              0.15 + Math.random() * 0.15,
              0.25 + Math.random() * 0.15,
              0.15 + Math.random() * 0.15,
            ],
          }}
          transition={{
            duration: 1.5 + Math.random() * 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default CursorCloudEffect;

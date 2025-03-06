import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  growing: boolean;
}

interface ParticleBackgroundProps {
  count?: number;
  colors?: string[];
  maxSize?: number;
  minSize?: number;
  speed?: number;
  className?: string;
  pulseEffect?: boolean;
}

const ParticleBackground = ({
  count = 50,
  colors = ["#623CEA", "#A82DC1", "#BB86FC", "#C51162"],
  maxSize = 4,
  minSize = 1,
  speed = 0.3,
  className = "",
  pulseEffect = true,
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Initialize particles
  const initParticles = () => {
    if (!canvasRef.current) return;

    const { width, height } = dimensions;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
        growing: Math.random() > 0.5,
      });
    }

    particlesRef.current = particles;
  };

  // Draw particles on canvas
  const drawParticles = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = dimensions;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw each particle
    particlesRef.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.alpha;
      ctx.fill();

      // Update particle position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Pulse effect - slowly grow and shrink particles
      if (pulseEffect) {
        if (particle.growing) {
          particle.size += 0.02;
          if (particle.size > maxSize) {
            particle.growing = false;
          }
        } else {
          particle.size -= 0.02;
          if (particle.size < minSize) {
            particle.growing = true;
          }
        }
      }

      // Bounce off edges
      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
    });

    // Draw connecting lines between nearby particles
    ctx.beginPath();
    ctx.strokeStyle = colors[0];
    ctx.globalAlpha = 0.05;
    ctx.lineWidth = 0.5;

    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.globalAlpha = 0.05 * (1 - distance / 150);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Request next frame
    animationFrameRef.current = requestAnimationFrame(drawParticles);
  };

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const parent = canvas.parentElement;

      if (parent) {
        const { width, height } = parent.getBoundingClientRect();
        setDimensions({ width, height });
        canvas.width = width;
        canvas.height = height;
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Initialize and animate particles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    initParticles();
    drawParticles();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[#0B0B0B] ${className}`}
      style={{ zIndex: 0 }} // Ensure background stays behind content
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-500/10" />
    </div>
  );
};

export default ParticleBackground;

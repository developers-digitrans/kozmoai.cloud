import React from "react";

interface ParticleBackgroundProps {
  colors?: string[];
  count?: number;
  className?: string;
}

const ParticleBackground = ({
  colors = ["#623CEA", "#A82DC1", "#BB86FC", "#C51162"],
  count = 50, // Not used anymore but kept for backward compatibility
  className = "",
}: ParticleBackgroundProps) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-black ${className}`}
      style={{ zIndex: 0 }} // Ensure background stays behind content
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-500/10" />
    </div>
  );
};

export default ParticleBackground;

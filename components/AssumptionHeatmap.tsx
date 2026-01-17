import React from 'react';

interface AssumptionHeatmapProps {
  activeIndex: number;
}

const AssumptionHeatmap: React.FC<AssumptionHeatmapProps> = ({ activeIndex }) => {
  // Configuration for the "Heat Orbs" based on the 6 thinking steps.
  // We manipulate Position, Scale, Opacity, and Color to create "Cognitive Texture".
  
  const orbConfigs = [
    // 0: Framing - Broad, cool, diffuse. Clearing the mind.
    {
      orb1: "top-[20%] left-[20%] scale-100 opacity-20 bg-textSecondary/50",
      orb2: "bottom-[20%] right-[20%] scale-125 opacity-10 bg-textSecondary/50",
      orb3: "top-[50%] left-[50%] scale-50 opacity-0 bg-accent", 
    },
    // 1: Assumptions - Warm, central intensity. "Heat" of uncertainty.
    {
      orb1: "top-[40%] left-[45%] scale-150 opacity-20 bg-orange-300", 
      orb2: "top-[45%] left-[40%] scale-125 opacity-15 bg-accent", 
      orb3: "bottom-[10%] right-[10%] scale-75 opacity-5 bg-textSecondary",
    },
    // 2: Constraints - Pressed against edges. Pressure/Compression.
    {
      orb1: "top-[5%] left-[5%] scale-90 opacity-25 bg-textPrimary", 
      orb2: "bottom-[5%] right-[5%] scale-90 opacity-25 bg-textPrimary",
      orb3: "top-[50%] left-[50%] scale-50 opacity-10 bg-orange-300",
    },
    // 3: Decision - Converging to a point. Sharp focus.
    {
      orb1: "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-110 opacity-30 bg-accent",
      orb2: "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-150 opacity-10 bg-blue-300",
      orb3: "top-[0%] right-[0%] scale-50 opacity-0 bg-textSecondary",
    },
    // 4: Execution - Directional velocity (Left to Right).
    {
      orb1: "top-[50%] left-[80%] scale-125 opacity-20 bg-accent", 
      orb2: "top-[50%] left-[10%] scale-75 opacity-10 bg-textSecondary",
      orb3: "bottom-[20%] left-[40%] scale-100 opacity-5 bg-blue-300",
    },
    // 5: Feedback - Diffuse, organic, growth-oriented (Teal/Green hint).
    {
      orb1: "top-[50%] left-[50%] scale-[2] opacity-10 bg-teal-400/50",
      orb2: "top-[20%] right-[20%] scale-100 opacity-10 bg-accent",
      orb3: "bottom-[20%] left-[20%] scale-100 opacity-10 bg-accent",
    }
  ];

  const currentConfig = orbConfigs[activeIndex] || orbConfigs[0];

  return (
    <div className="relative w-full h-full overflow-hidden pointer-events-none select-none bg-background/50">
      
      {/* 1. Static Texture (Dot Grid) */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#18181B 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* 2. Dynamic Heat Orbs (Blur Layer) */}
      {/* transform-gpu ensures smooth compositing */}
      <div className="absolute inset-0 filter blur-[80px] sm:blur-[100px] transform-gpu transition-all duration-[1500ms] ease-in-out">
        
        {/* Orb 1: Primary Focus */}
        <div 
          className={`absolute w-64 h-64 rounded-full transition-all duration-[2000ms] ease-in-out mix-blend-multiply ${currentConfig.orb1}`}
        ></div>

        {/* Orb 2: Secondary Context */}
        <div 
          className={`absolute w-80 h-80 rounded-full transition-all duration-[2000ms] ease-in-out mix-blend-multiply ${currentConfig.orb2}`}
        ></div>

        {/* Orb 3: Tension / Residual */}
        <div 
          className={`absolute w-48 h-48 rounded-full transition-all duration-[2000ms] ease-in-out mix-blend-multiply ${currentConfig.orb3}`}
        ></div>

      </div>
      
      {/* 3. Vignette Overlay (Keeps text legible) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90"></div>
    </div>
  );
};

export default AssumptionHeatmap;
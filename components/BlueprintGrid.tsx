import React from 'react';

const BlueprintGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none h-full w-full">
      {/* Primary Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #18181B 1px, transparent 1px),
            linear-gradient(to bottom, #18181B 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}
      ></div>
      
      {/* Secondary Fine Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #18181B 0.5px, transparent 0.5px),
            linear-gradient(to bottom, #18181B 0.5px, transparent 0.5px)
          `,
          backgroundSize: '15px 15px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 60%)'
        }}
      ></div>
    </div>
  );
};

export default BlueprintGrid;
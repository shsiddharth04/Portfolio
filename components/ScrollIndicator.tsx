import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-pulse">
      <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-textPrimary to-transparent"></div>
    </div>
  );
};

export default ScrollIndicator;
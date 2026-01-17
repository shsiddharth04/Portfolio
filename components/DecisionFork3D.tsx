import React, { useRef, useState, useEffect } from 'react';

const DecisionFork3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Parallax Effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // Sensitivity
    const y = (e.clientY - top - height / 2) / 25;
    setRotation({ x: -y, y: x }); // Invert Y for natural tilt
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Intersection Observer for Entry Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Animation Classes
  const lineBase = "transition-all duration-[1500ms] ease-out";
  const lineHidden = "stroke-dasharray-[1000] stroke-dashoffset-[1000]";
  const lineVisible = "stroke-dashoffset-0";

  return (
    <div 
      className="w-full h-[300px] flex items-center justify-center perspective-[1000px] overflow-visible cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      aria-hidden="true"
    >
      <div 
        className="relative w-64 h-64 transform-style-3d transition-transform duration-200 ease-out"
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      >
        {/* Floor Grid (Subtle Reference Plane) */}
        <div 
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] opacity-[0.03] pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-[0.05]' : 'opacity-0'}`}
            style={{ 
                transform: 'rotateX(90deg) translateZ(-50px)', 
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}
        ></div>

        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 200 200" 
            className="overflow-visible"
            style={{ transform: 'translateZ(20px)' }} // Lift SVG slightly
        >
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* Origin Line (Bottom to Center) */}
            <path 
                d="M100,180 L100,120" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className={`text-textPrimary ${lineBase} ${isVisible ? lineVisible : lineHidden}`}
            />

            {/* Path 1: Rejected (Left) - Translucent, Blur */}
            <g className="opacity-20">
                <path 
                    d="M100,120 Q100,80 40,60" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    className={`${lineBase} ${isVisible ? lineVisible : lineHidden}`}
                    style={{ transitionDelay: '300ms' }}
                />
                {/* Node End */}
                <circle cx="40" cy="60" r="2" fill="currentColor" className={`transition-opacity duration-1000 delay-[1800ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
            </g>

            {/* Path 2: Rejected (Right) - Translucent, Blur */}
            <g className="opacity-20">
                <path 
                    d="M100,120 Q100,80 160,60" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    className={`${lineBase} ${isVisible ? lineVisible : lineHidden}`}
                    style={{ transitionDelay: '400ms' }}
                />
                <circle cx="160" cy="60" r="2" fill="currentColor" className={`transition-opacity duration-1000 delay-[1900ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
            </g>

            {/* Path 3: Chosen (Center) - Solid, Accent, Glow */}
            <g className="text-accent" filter="url(#glow)">
                <path 
                    d="M100,120 Q100,90 100,20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className={`${lineBase} ${isVisible ? lineVisible : lineHidden}`}
                    style={{ transitionDelay: '800ms' }}
                />
                 {/* Node End */}
                 <circle cx="100" cy="20" r="4" fill="currentColor" className={`transition-opacity duration-1000 delay-[2300ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
            </g>

        </svg>

        {/* 3D Floating Elements (CSS Only) */}
        {/* Chosen Path Highlight Halo */}
        <div 
            className={`absolute top-[10%] left-[50%] -translate-x-1/2 w-8 h-8 bg-accent rounded-full blur-xl pointer-events-none transition-opacity duration-[2000ms] delay-[1500ms] ${isVisible ? 'opacity-20' : 'opacity-0'}`}
            style={{ transform: 'translateZ(40px)' }}
        ></div>

      </div>
    </div>
  );
};

export default DecisionFork3D;
import React, { useRef, useState } from 'react';
import { HERO_DATA } from '../constants';
import BlueprintGrid from './BlueprintGrid';
import ScrollIndicator from './ScrollIndicator';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 5 degrees)
    const rotateX = ((y - centerY) / centerY) * -5; // Invert Y for natural tilt
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-32 pb-20 relative overflow-hidden">
      
      <BlueprintGrid />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center fade-in-up relative z-10">
        
        {/* Text Content */}
        <div className="md:col-span-7 order-2 md:order-1 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-semibold text-textPrimary tracking-tight leading-[1.1] mb-4">
              {HERO_DATA.name}
            </h1>
            <p className="text-sm md:text-base text-textSecondary font-medium tracking-wide uppercase">
              {HERO_DATA.title}
            </p>
          </div>
          
          <div className="space-y-6 mb-10 max-w-xl">
            <p className="text-2xl font-light text-textPrimary leading-snug">
              {HERO_DATA.headline}
            </p>
            <p className="text-base text-textSecondary leading-relaxed">
              {HERO_DATA.subheadline}
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium">
             <a 
               href="#work" 
               onClick={scrollToWork}
               className="text-textPrimary hover:text-accent transition-colors border-b border-black/10 hover:border-accent pb-1"
             >
               {HERO_DATA.ctaPrimary}
             </a>
             <a 
               href={HERO_DATA.resumeLink}
               target="_blank"
               rel="noopener noreferrer"
               className="text-textSecondary hover:text-textPrimary transition-colors pb-1 flex items-center gap-2"
             >
               {HERO_DATA.ctaSecondary}
               <span className="text-xs opacity-50">↗</span>
             </a>
          </div>
        </div>

        {/* Portrait Image with 3D Tilt Interaction */}
        <div className="md:col-span-5 order-1 md:order-2 flex justify-start md:justify-end perspective-[1000px]">
          <div 
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[340px] aspect-[3.5/4.5] rounded-2xl overflow-hidden shadow-2xl bg-surfaceHighlight transition-transform duration-100 ease-out transform-style-3d cursor-pointer group border border-white/10"
            style={{
               transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            }}
          >
            {/* Dynamic Sheen Overlay */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)'
              }}
            />

            <img 
              src="https://lh3.googleusercontent.com/d/1PQApUWDYFkRLBhLQem65_FgPqu0EroR4" 
              alt="Siddharth Sharma" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
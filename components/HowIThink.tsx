import React, { useRef, useState, useEffect } from 'react';
import { THINKING_PROCESS } from '../constants';
import AssumptionHeatmap from './AssumptionHeatmap';
import { Activity } from 'lucide-react';

const HowIThink: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle Resize for Mobile Check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop Scroll Handler (Sticky Mapping)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrollableDistance = height - viewportHeight;
      const scrolled = -top; 
      
      if (scrolled < 0) {
        setActiveIndex(0);
        return;
      }
      
      if (scrolled > scrollableDistance) {
        setActiveIndex(THINKING_PROCESS.length - 1);
        return;
      }
      
      const progress = scrolled / scrollableDistance;
      const index = Math.min(
        Math.max(Math.floor(progress * THINKING_PROCESS.length), 0),
        THINKING_PROCESS.length - 1
      );
      
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Mobile Scroll Handler (Intersection Observer)
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" } // Trigger when item enters center view
    );

    const steps = document.querySelectorAll('.mobile-think-step');
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, [isMobile]);

  // Click handler to smooth scroll to specific step
  const scrollToStep = (index: number) => {
    if (!containerRef.current) return;
    const { top } = containerRef.current.getBoundingClientRect();
    const currentScroll = window.scrollY;
    const sectionTop = currentScroll + top;
    
    const viewportHeight = window.innerHeight;
    const height = containerRef.current.offsetHeight;
    const scrollableDistance = height - viewportHeight;
    
    // Target the middle of the "zone" for this step
    const targetScrolled = (index / THINKING_PROCESS.length) * scrollableDistance;
    const buffer = (scrollableDistance / THINKING_PROCESS.length) * 0.5;

    window.scrollTo({
      top: sectionTop + targetScrolled + buffer,
      behavior: 'smooth'
    });
  };

  const activeStep = THINKING_PROCESS[activeIndex];

  return (
    <section 
      ref={containerRef} 
      id="how-i-think"
      className="bg-background relative"
      // Desktop: Tall height to enable scroll-driven animation. Mobile: Auto height.
      style={{ height: isMobile ? 'auto' : '350vh' }}
    >
      
      {/* 
        Assumption Heatmap Background Layer 
        Positioned absolutely to fill the section, but uses sticky inner container 
        to ensure visual presence throughout the scroll on both Mobile and Desktop.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <AssumptionHeatmap activeIndex={activeIndex} />
        </div>
      </div>

      {/* 
        DESKTOP STICKY WRAPPER 
        This div stays pinned to the viewport while the user scrolls through the parent section.
      */}
      <div className={`
        ${isMobile ? '' : 'sticky top-0 h-screen flex flex-col justify-center'}
        w-full overflow-hidden relative z-10
      `}>
        <div className="max-w-6xl mx-auto px-6 w-full py-20 md:py-0">
          
          {/* Section Header */}
          <div className="mb-16 md:mb-20 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-medium text-textPrimary tracking-tight mb-4">How I Think</h2>
              <p className="text-textSecondary text-lg font-light max-w-2xl">
                My work is not just about tools; it's about a repeatable system for navigating uncertainty. 
                {isMobile ? ' Scroll down ' : ' Scroll '} to explore the framework.
              </p>
            </div>
            
            {/* System Status Indicator (Desktop Only) */}
            {!isMobile && (
              <div className="hidden md:flex flex-col items-end gap-1 opacity-40">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-textSecondary">
                   <Activity size={12} className="text-accent animate-pulse" />
                   <span>System Active</span>
                </div>
                <div className="text-[10px] font-mono text-textSecondary/50">
                  Step {String(activeIndex + 1).padStart(2, '0')} / {String(THINKING_PROCESS.length).padStart(2, '0')}
                </div>
              </div>
            )}
          </div>

          {/* CONTENT */}
          {isMobile ? (
            // MOBILE: Vertical Stack Layout
            <div className="flex flex-col gap-16 border-l border-black/10 pl-6 ml-3 relative">
               {/* Vertical Connection Line */}
               <div className="absolute top-0 bottom-0 left-[35px] w-px bg-black/5 -z-10 hidden"></div>
               
              {THINKING_PROCESS.map((step, index) => (
                <div 
                  key={step.id} 
                  className="fade-in-up mobile-think-step" 
                  data-index={index}
                  style={{ animationDelay: '100ms' }}
                >
                  <div className="flex items-center gap-4 mb-6 -ml-[3.25rem]">
                    <div className={`
                      w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold shadow-sm z-10 transition-colors duration-500
                      ${activeIndex === index ? 'bg-surface border-accent text-accent shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-surface border-black/10 text-textSecondary'}
                    `}>
                      {index + 1}
                    </div>
                    <h3 className={`text-xl font-medium transition-colors duration-500 ${activeIndex === index ? 'text-textPrimary' : 'text-textSecondary'}`}>
                      {step.label}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-textPrimary font-light leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-surfaceHighlight/50 p-6 rounded-xl border border-black/5 backdrop-blur-sm">
                      <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-2 flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                         {step.exampleContext}
                      </div>
                      <p className="text-base text-textSecondary italic leading-relaxed">
                        "{step.exampleText}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // DESKTOP: Sticky Interactive System
            <div className="relative">
              
              {/* Connection Line Background - Spans from center of first node to center of last node */}
              <div className="absolute top-8 left-[8.33%] right-[8.33%] h-px bg-black/5 z-0"></div>

              {/* Dynamic Progress Line */}
              <div 
                className="absolute top-8 left-[8.33%] h-px bg-accent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"
                style={{ 
                    // Calculate width to reach the active node. 
                    // There are 6 columns. The center-to-center span is roughly 83.33% of the container.
                    width: `${(activeIndex / 5) * 83.33}%`
                }}
              >
                {/* Glowing Head */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              </div>

              {/* Nodes Row */}
              <div className="grid grid-cols-6 gap-4 relative z-10 mb-24">
                {THINKING_PROCESS.map((step, index) => {
                  const isActive = index === activeIndex;
                  const isPast = index < activeIndex;
                  
                  return (
                    <button 
                      key={step.id} 
                      onClick={() => scrollToStep(index)}
                      className="flex flex-col items-center group focus:outline-none"
                      aria-label={`Jump to ${step.label}`}
                      aria-pressed={isActive}
                    >
                      {/* Node Circle */}
                      <div className={`
                        relative w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 mb-6 bg-surface
                        ${isActive 
                          ? 'border-accent text-accent scale-110 shadow-xl shadow-accent/10 z-10' 
                          : isPast 
                            ? 'border-accent/30 text-accent/30' 
                            : 'border-black/5 text-textSecondary/30 group-hover:border-black/20'
                        }
                      `}>
                        {isActive && (
                            <>
                                {/* Ping Animation for Active Pulse */}
                                <div className="absolute inset-0 rounded-full border border-accent animate-ping opacity-20 duration-[2000ms]"></div>
                                {/* Inner Glow */}
                                <div className="absolute inset-0 rounded-full bg-accent/5 animate-pulse"></div>
                            </>
                        )}
                        <span className="text-lg font-semibold relative z-10">{index + 1}</span>
                      </div>

                      {/* Label */}
                      <span className={`
                        text-sm font-medium tracking-wide transition-colors duration-300
                        ${isActive ? 'text-textPrimary' : 'text-textSecondary/40'}
                      `}>
                        {step.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Content Area */}
              <div className="grid grid-cols-12 gap-16 min-h-[320px] items-center">
                 
                 {/* Philosophy Card */}
                 <div className="col-span-6 pr-12 flex flex-col justify-center border-r border-black/5 h-full backdrop-blur-[2px]">
                    {/* Key changes on activeStep change to trigger animation */}
                    <div key={`desc-${activeStep.id}`} className="fade-in-up">
                      <h3 className="text-xs uppercase tracking-widest text-textSecondary font-semibold mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-textPrimary"></span>
                        The Philosophy
                      </h3>
                      <p className="text-3xl text-textPrimary font-light leading-snug">
                        {activeStep.description}
                      </p>
                    </div>
                 </div>

                 {/* Example Card */}
                 <div className="col-span-6 pl-4 flex flex-col justify-center">
                    <div 
                       key={`ex-${activeStep.id}`}
                       className="bg-surfaceHighlight/30 border border-black/5 rounded-2xl p-10 fade-in-up backdrop-blur-md relative overflow-hidden"
                       style={{ animationDelay: '100ms' }}
                    >
                       {/* Subtle Scanning Line */}
                       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[shimmer_2s_infinite]"></div>

                       <h3 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          Applied: {activeStep.exampleContext}
                       </h3>
                       <p className="text-xl text-textSecondary font-light leading-relaxed italic">
                         "{activeStep.exampleText}"
                       </p>
                    </div>
                 </div>
              </div>

            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default HowIThink;
import React, { useEffect, useRef, useState } from 'react';
import { X, ArrowDown } from 'lucide-react';
import { ProjectItem } from '../types';
import ProjectVisuals from './ProjectVisuals';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveStep(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Track active section via intersection observer
  useEffect(() => {
    const container = containerRef.current;
    if (!isOpen || !container || !project?.caseStudy) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            setActiveStep(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = container.querySelectorAll('.case-study-step');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isOpen, project]);

  if (!isOpen || !project || !project.caseStudy) return null;

  const totalSteps = project.caseStudy.length;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Main Container */}
      <div className="relative w-full h-full flex flex-col pointer-events-none">
        
        {/* Header (Fixed) */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10 pointer-events-auto">
          <div>
            <h2 className="text-lg font-medium text-textPrimary">{project.title}</h2>
            <p className="text-xs text-textSecondary uppercase tracking-widest mt-1">
              {activeStep + 1} <span className="text-textSecondary/40">/</span> {totalSteps}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-surface rounded-full border border-black/5 hover:bg-black/5 transition-colors"
          >
            <X size={20} className="text-textPrimary" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div 
          ref={containerRef}
          className="w-full h-full overflow-y-auto snap-y snap-mandatory pointer-events-auto scroll-smooth"
        >
          {project.caseStudy.map((step, index) => (
            <section 
              key={step.id} 
              data-step-index={index}
              className="case-study-step w-full h-full snap-start flex flex-col items-center justify-center p-6 relative"
            >
              <div className="max-w-4xl w-full flex flex-col items-center text-center gap-8 md:gap-12 fade-in-up">
                
                {/* Text Content */}
                <div className="max-w-2xl space-y-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">
                    0{index + 1} · {step.stepName}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-light text-textPrimary leading-tight">
                    {step.headline}
                  </h3>
                  {step.subline && (
                    <p className="text-lg md:text-xl text-textSecondary font-light">
                      {step.subline}
                    </p>
                  )}
                </div>

                {/* Visual Content */}
                <div className="w-full flex items-center justify-center min-h-[200px] md:min-h-[300px]">
                  <ProjectVisuals visual={step.visual} />
                </div>

              </div>

              {/* Scroll Hint (only on first slide) */}
              {index === 0 && (
                <div className="absolute bottom-8 animate-bounce opacity-40">
                  <ArrowDown size={24} />
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Progress Bar (Fixed Bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/5 z-10">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
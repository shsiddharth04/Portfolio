import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';
import ProjectModal from './ProjectModal';

// Separate ProjectCard component to handle individual intersection logic
const ProjectCard: React.FC<{ 
  project: ProjectItem; 
  index: number; 
  onOpen: (p: ProjectItem) => void;
}> = ({ project, index, onOpen }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" } // Trigger when element is slightly into the viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Helper for staggered inline styles
  const getRevealStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: 'opacity, transform'
  });

  return (
    <div 
      ref={ref}
      className="group border-t border-black/10 py-20 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-0 first:border-t-0 md:first:border-t"
    >
      {/* Index Column - Quiet Visual Anchor */}
      <div className="md:col-span-2 hidden md:block" style={getRevealStyle(0)}>
        <span className="font-mono text-xs text-textSecondary/40 sticky top-32">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Content Column */}
      <div className="md:col-span-10 flex flex-col gap-6 md:gap-8">
        
        {/* Mobile Index */}
        <span className="font-mono text-xs text-textSecondary/40 md:hidden" style={getRevealStyle(0)}>
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Header Group */}
        <div className="space-y-3" style={getRevealStyle(100)}>
          <h3 className="text-3xl md:text-5xl font-medium text-textPrimary tracking-tight group-hover:text-accent transition-colors duration-500">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-textSecondary">
            <span>{project.role}</span>
            <span className="text-black/10">|</span>
            <span>{project.type}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-textPrimary/80 leading-relaxed font-light max-w-2xl" style={getRevealStyle(200)}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2 pt-2" style={getRevealStyle(300)}>
            {project.highlights.map((h, i) => (
                <li key={i} className="text-sm text-textSecondary/80 flex items-baseline gap-3">
                    <span className="w-1.5 h-px bg-textSecondary/40 translate-y-[-4px]"></span>
                    <span className="font-light">{h}</span>
                </li>
            ))}
        </ul>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className={`mt-8 grid gap-4 ${project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`} style={getRevealStyle(400)}>
            {project.images.map((img, imgIndex) => (
              <div 
                key={imgIndex} 
                className={`
                  relative overflow-hidden rounded-lg bg-surfaceHighlight border border-black/5
                  ${project.images && project.images.length === 1 ? 'aspect-[16/9]' : 'aspect-[4/3]'}
                `}
                // Open modal on image click too
                onClick={() => project.caseStudy && onOpen(project)} 
                style={{ cursor: project.caseStudy ? 'pointer' : 'default' }}
              >
                {/* Cinematic Image Hover Animation */}
                <img 
                  src={img} 
                  alt={`${project.title} screenshot ${imgIndex + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.25,1,0.5,1] hover:scale-[1.03] will-change-transform"
                />
                
                {/* Subtle overlay on hover for better text contrast if we had text overlay, but here just a sheen */}
                <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        )}

        {/* Editorial Link */}
        {project.caseStudy && (
          <div className="pt-6" style={getRevealStyle(500)}>
            <button 
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-2 text-sm font-medium text-textPrimary hover:text-accent transition-colors group/link focus:outline-none"
            >
              <span className="border-b border-black/10 group-hover/link:border-accent pb-0.5 transition-colors">Know More</span>
              <ArrowUpRight size={14} className="text-textSecondary group-hover/link:text-accent transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project: ProjectItem) => {
    if (project.caseStudy) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after fade out
  };

  return (
    <>
      <section id="work" className="pt-32 pb-12 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="mb-24 flex items-baseline gap-4">
            <h2 className="text-3xl font-medium text-textPrimary tracking-tight">Selected Work</h2>
            <span className="text-sm text-textSecondary/50 font-mono">({PROJECTS.length})</span>
          </div>

          {/* Vertical Project List */}
          <div className="flex flex-col">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                onOpen={handleOpenProject} 
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default Projects;
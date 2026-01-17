import React from 'react';
import MagneticWrapper from './MagneticWrapper';
import { HERO_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-surface border-t border-black/5 relative overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center md:text-left relative z-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-medium text-textPrimary mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-textSecondary text-lg font-light leading-relaxed mb-10">
            Open to opportunities in product, strategy, and platform building.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center md:justify-start">
            <MagneticWrapper strength={0.2}>
              <a 
                href="mailto:ylc27siddharth.sharma@mastersunion.org"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-textPrimary text-surface rounded-full text-lg font-medium transition-all hover:bg-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
              >
                Send an Email 
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </a>
            </MagneticWrapper>

            <MagneticWrapper strength={0.2}>
              <a 
                href="https://www.linkedin.com/in/siddharthsharm04/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white border border-black/10 text-textPrimary rounded-full text-lg font-medium transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:-translate-y-1"
              >
                Connect on LinkedIn
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </a>
            </MagneticWrapper>

            <MagneticWrapper strength={0.2}>
              <a 
                href={HERO_DATA.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white border border-black/10 text-textPrimary rounded-full text-lg font-medium transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:-translate-y-1"
              >
                Resume
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </a>
            </MagneticWrapper>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs text-textSecondary font-medium">
          <p>© {new Date().getFullYear()} Siddharth Sharma.</p>
          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 gap-1">
             <p className="opacity-50">Designed & Built with Code.</p>
             <p className="opacity-20 text-[10px] uppercase tracking-widest font-mono">Structure precedes scale.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { ABOUT_TEXT_1, ABOUT_TEXT_2 } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-8">About Me</h2>
        
        <div className="space-y-6">
           <p className="text-lg md:text-xl text-textPrimary leading-relaxed font-light">
            {ABOUT_TEXT_1}
           </p>
           <p className="text-lg md:text-xl text-textPrimary leading-relaxed font-light">
             {ABOUT_TEXT_2}
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-background border-t border-black/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-textPrimary tracking-tight">Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILLS.map((group, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-1 h-1 rounded-full bg-accent"></span>
                <h3 className="text-xs font-bold text-textSecondary uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex} 
                    className="
                      px-3 py-1.5 
                      bg-white border border-black/5 rounded-md shadow-sm
                      text-sm font-normal text-textPrimary 
                      cursor-default transition-all duration-200
                      hover:border-accent/30 hover:text-accent hover:shadow-md hover:shadow-accent/5
                      hover:-translate-y-0.5
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
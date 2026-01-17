import React from 'react';
import { OTHER_PROJECTS } from '../constants';

const OtherProjects: React.FC = () => {
  return (
    <section className="pb-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 border-t border-black/5 pt-12">
          <h2 className="text-xl font-medium text-textPrimary tracking-tight">Other Projects</h2>
        </div>

        <div className="flex flex-col">
          {OTHER_PROJECTS.map((item, index) => (
            <div 
              key={index}
              className="group py-6 border-b border-black/5 last:border-0 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 hover:bg-surfaceHighlight/30 transition-colors -mx-4 px-4 rounded-lg"
            >
              <div className="sm:w-1/3 flex flex-col gap-1">
                <h3 className="text-base font-medium text-textPrimary">{item.project}</h3>
                <span className="text-xs text-textSecondary font-mono tracking-tight">{item.category} · {item.timeframe}</span>
              </div>
              
              <div className="sm:w-2/3">
                <p className="text-sm text-textSecondary leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16 border-b border-black/5 pb-6">
          <h2 className="text-3xl font-medium text-textPrimary tracking-tight">How I Work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-background border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-14 h-14 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center text-textPrimary group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon size={26} strokeWidth={1.25} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-textPrimary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed text-sm font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
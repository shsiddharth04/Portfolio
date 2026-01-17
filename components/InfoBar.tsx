import React from 'react';
import { CONTACT_INFO } from '../constants';

const InfoBar: React.FC = () => {
  return (
    <div className="w-full border-t border-white/5 bg-background">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between gap-y-6 gap-x-12">
          {CONTACT_INFO.map((item, index) => {
            const isExternal = item.href.startsWith('http');
            return (
              <a 
                key={index} 
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-1 hover:opacity-100 transition-opacity opacity-70"
              >
                <span className="text-xs text-textSecondary uppercase tracking-widest">{item.label}</span>
                <span className="text-sm font-normal text-textPrimary group-hover:underline decoration-white/20 underline-offset-4">
                  {item.value}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
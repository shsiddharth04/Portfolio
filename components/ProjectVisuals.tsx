import React from 'react';
import { 
  ArrowRight, 
  GitFork, 
  Box, 
  Clock, 
  CheckCircle2, 
  Activity, 
  Users, 
  AlertTriangle,
  Layers,
  FileSpreadsheet,
  MessageCircle,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { VisualContent } from '../types';
import DecisionFork3D from './DecisionFork3D';

interface ProjectVisualsProps {
  visual: VisualContent;
}

const ProjectVisuals: React.FC<ProjectVisualsProps> = ({ visual }) => {
  const { type, data } = visual;

  // DIAGRAM RENDERER
  if (type === 'diagram') {
    if (data.layout === 'bottleneck') {
      return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-2xl p-6 bg-surfaceHighlight/30 rounded-2xl border border-black/5">
          <div className="flex flex-col items-center gap-3 opacity-50 grayscale">
            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-textSecondary flex items-center justify-center bg-white">
              <Box className="text-textSecondary" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-center">{data.items[0]}</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 text-red-500 animate-pulse">
            <div className="h-px w-16 bg-red-400 hidden md:block"></div>
            <div className="h-16 w-px bg-red-400 md:hidden"></div>
            <AlertTriangle size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{data.items[1]}</span>
          </div>

          <div className="flex flex-col items-center gap-3">
             <div className="w-16 h-16 rounded-xl border-2 border-accent flex items-center justify-center bg-white shadow-lg shadow-accent/10">
              <Users className="text-accent" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-center text-textPrimary">{data.items[2]}</span>
          </div>
        </div>
      );
    }
    
    if (data.layout === 'chaos-to-order') {
       return (
        <div className="relative w-full max-w-lg h-64 flex items-center justify-center bg-surfaceHighlight/30 rounded-2xl border border-black/5 overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

           {/* Scattered Nodes */}
           <div className="absolute top-8 left-12 flex flex-col items-center gap-1 opacity-40 rotate-[-12deg]">
              <div className="p-2 bg-white rounded shadow-sm border border-black/5"><MessageCircle size={16} /></div>
              <span className="text-[9px] uppercase">DMs</span>
           </div>
           <div className="absolute bottom-10 right-12 flex flex-col items-center gap-1 opacity-40 rotate-[15deg]">
              <div className="p-2 bg-white rounded shadow-sm border border-black/5"><FileSpreadsheet size={16} /></div>
              <span className="text-[9px] uppercase">Sheets</span>
           </div>
           
           {/* Central Hub */}
           <div className="z-10 bg-white border border-black/10 shadow-xl shadow-accent/5 rounded-2xl p-6 flex flex-col items-center gap-3 w-48 relative">
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              <Layers className="text-accent" size={32} />
              <span className="text-xs font-bold uppercase tracking-widest text-center">Platform Hub</span>
           </div>
           
           {/* Connecting Lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none text-accent/30">
              <path d="M80,60 Q150,120 200,130" fill="none" stroke="currentColor" strokeDasharray="4" />
              <path d="M400,200 Q300,160 280,130" fill="none" stroke="currentColor" strokeDasharray="4" />
           </svg>
        </div>
       )
    }
  }

  // CARD RENDERER
  if (type === 'cards') {
    return (
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        {data.map((card: string, i: number) => (
          <div key={i} className="px-6 py-4 bg-white border border-black/10 rounded-lg shadow-sm flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
            <span className="text-sm font-medium text-textPrimary">{card}</span>
          </div>
        ))}
      </div>
    );
  }

  // 3D DECISION FORK RENDERER
  if (type === 'decision') {
    return (
      <div className="flex flex-col items-center gap-8 w-full max-w-md">
         
         {/* The 3D Visual Element */}
         <div className="w-full relative z-0">
             <DecisionFork3D />
         </div>

         {/* Context Labels */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full relative z-10">
            {data.options.map((opt: any, i: number) => (
              <div 
                key={i} 
                className={`
                  p-3 rounded-lg border text-center transition-all flex flex-col items-center gap-2
                  ${opt.selected 
                    ? 'border-accent bg-accent/5 order-1 md:order-2 md:-translate-y-4 shadow-sm scale-105' 
                    : 'border-transparent bg-transparent opacity-40 grayscale order-2 md:order-1'
                  }
                `}
              >
                {opt.selected && <CheckCircle2 size={16} className="text-accent mb-1" />}
                <span className={`text-xs md:text-sm font-medium leading-tight ${opt.selected ? 'text-accent' : 'text-textSecondary'}`}>
                  {opt.label}
                </span>
              </div>
            ))}
         </div>
      </div>
    );
  }

  // TIMELINE RENDERER
  if (type === 'timeline') {
    return (
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative py-8">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black/5 -z-10 hidden md:block"></div>
        {data.map((item: string, i: number) => (
          <div key={i} className="flex flex-col items-center gap-4 bg-background px-4 z-10">
            <div className="w-4 h-4 rounded-full bg-surface border-2 border-accent ring-4 ring-background shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-textSecondary bg-surface px-2 py-1 rounded border border-black/5">{item}</span>
          </div>
        ))}
      </div>
    );
  }

  // METRICS RENDERER
  if (type === 'metrics') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {data.map((metric: any, i: number) => (
          <div key={i} className="bg-white border border-black/5 p-6 rounded-2xl flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <TrendingUp size={24} strokeWidth={1.5} />
             </div>
             <div className="flex flex-col">
                <span className="text-3xl font-light text-textPrimary tracking-tight">{metric.value}</span>
                <span className="text-xs font-mono text-textSecondary uppercase tracking-widest mt-1">{metric.label}</span>
             </div>
          </div>
        ))}
      </div>
    );
  }
  
  // IMAGE RENDERER
  if (type === 'image') {
      return (
          <div className="w-full max-w-4xl aspect-video bg-surfaceHighlight rounded-xl overflow-hidden border border-black/5 shadow-2xl relative group">
              <img src={data} alt="Project Snapshot" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
          </div>
      )
  }

  // CHART RENDERER (ABSTRACT)
  if (type === 'chart') {
    if (data.type === 'drawdown-curve') {
        return (
            <div className="w-full max-w-lg h-64 bg-white rounded-xl border border-black/5 shadow-sm relative p-6">
                 <div className="absolute top-4 left-4 text-xs font-mono text-textSecondary">Risk Analysis</div>
                 <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Grid Lines */}
                    <line x1="0" y1="20" x2="100" y2="20" stroke="#000" strokeOpacity="0.05" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#000" strokeOpacity="0.05" />
                    <line x1="0" y1="80" x2="100" y2="80" stroke="#000" strokeOpacity="0.05" />

                    {/* Safe Zone */}
                    <path d="M0,85 L100,85" stroke="#EF4444" strokeWidth="0.5" strokeDasharray="2" />
                    <text x="2" y="83" className="text-[3px] fill-red-500 uppercase font-mono">Max Loss Limit</text>
                    
                    {/* Growth Curve */}
                    <path 
                        d="M0,60 C20,55 30,75 50,45 S80,30 100,10" 
                        fill="none" 
                        stroke="#3B82F6" 
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    
                    {/* Area under curve */}
                    <path 
                        d="M0,60 C20,55 30,75 50,45 S80,30 100,10 V100 H0 Z" 
                        fill="url(#blueGradient)" 
                        opacity="0.1"
                    />
                    
                    <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>

                    {/* Dot on end */}
                    <circle cx="100" cy="10" r="1.5" fill="#3B82F6" />
                 </svg>
            </div>
        )
    }
  }

  // LIST RENDERER
  if (type === 'list') {
      return (
          <div className="flex flex-col gap-3 w-full max-w-md">
              {data.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white border border-black/5 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                         <CheckCircle2 className="text-green-600" size={14} />
                      </div>
                      <span className="text-sm text-textPrimary font-medium">{item}</span>
                  </div>
              ))}
          </div>
      )
  }

  return <div className="text-red-500 text-xs">Visual type not supported</div>;
};

export default ProjectVisuals;
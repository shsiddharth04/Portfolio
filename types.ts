import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface VisualContent {
  type: 'diagram' | 'cards' | 'decision' | 'timeline' | 'metrics' | 'chart' | 'image' | 'list';
  data: any; // Flexible payload
}

export interface CaseStudyStep {
  id: string;
  stepName: string; // e.g., "Context", "Constraints"
  headline: string;
  subline?: string;
  visual: VisualContent;
}

export interface ProjectItem {
  title: string;
  type: string;
  role: string;
  description: string;
  highlights: string[];
  isPrimary?: boolean;
  images?: string[];
  caseStudy?: CaseStudyStep[];
}

export interface ArchiveProjectItem {
  project: string;
  category: string;
  timeframe: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export interface ThinkingProcessStep {
  id: string;
  label: string;
  description: string;
  exampleContext: string;
  exampleText: string;
}
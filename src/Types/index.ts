// tsx-output/src/types/index.ts — REMPLACE Portfolio/src/types/index.ts

export interface Project {
  year: string;
  title: string;
  role: string;// la base de Projet 
  description: string;
  color: string;
  status?: 'completed' | 'in-progress';
  category: 'ai' | 'web' | 'tools' | 'simulation' | 'professional '| 'data' ;
  links: { label: string; url: string; type: 'github' | 'gitlab' | 'external' }[];
}

export interface EducationEntry {
  title: string;
  institution: string;
  logo?: string;
  period: string;
  location: string;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export interface NavItem {
  id: string;
  label: string;
  num: string;
}
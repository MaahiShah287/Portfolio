import {
  Code2,
  BarChart3,
  PieChart,
  Brain,
  Wrench,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Award,
  GraduationCap,
  Briefcase,
  Send,
  CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  accent: string;
  bg: string;
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Programming & Querying',
    description: 'Writing clean, efficient code and queries for data manipulation.',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy'],
    accent: 'text-plum',
    bg: 'bg-plum-50',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Exploring, cleaning, and transforming raw data into insights.',
    skills: ['Data Cleaning', 'EDA', 'Statistical Analysis', 'Excel'],
    accent: 'text-rose',
    bg: 'bg-blush',
  },
  {
    icon: PieChart,
    title: 'BI & Visualization',
    description: 'Creating interactive dashboards and compelling visual stories.',
    skills: ['Power BI', 'Matplotlib', 'Seaborn', 'Tableau'],
    accent: 'text-lavender',
    bg: 'bg-lavender-light',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Applying predictive models to solve real-world problems.',
    skills: ['Scikit-learn', 'Classification', 'Regression', 'Model Evaluation'],
    accent: 'text-plum',
    bg: 'bg-plum-50',
  },
  {
    icon: Wrench,
    title: 'Tools',
    description: 'Essential tools for collaboration, version control, and productivity.',
    skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'],
    accent: 'text-rose',
    bg: 'bg-blush',
  },
];

export interface Project {
  number: string;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  previewType: 'churn' | 'blush' | 'lavender' | 'sql' | 'dashboard';
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Customer Churn Intelligence System',
    description:
      'An end-to-end machine learning pipeline that predicts customer churn with high recall, identifies high-risk customers, and provides actionable retention insights for business stakeholders.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'SQL', 'Matplotlib'],
    highlights: [
      'Built full ML pipeline from EDA to model evaluation',
      'Optimized for recall to catch at-risk customers',
      'ROC-AUC of 0.83 demonstrates strong discriminative power',
    ],
    github: '#',
    liveDemo: '#',
    featured: true,
    previewType: 'churn',
  },
  {
    number: '02',
    title: 'Coffee Shop Sales Analysis',
    description:
      'A comprehensive sales analytics project exploring transaction data to uncover revenue trends, peak hours, and top-performing products across multiple store locations.',
    tech: ['Python', 'Pandas', 'SQL', 'Power BI'],
    highlights: [
      'Identified peak sales hours and seasonal trends',
      'Created interactive Power BI dashboard',
      'Analyzed revenue across multiple store locations',
    ],
    github: '#',
    previewType: 'blush',
  },
  {
    number: '03',
    title: 'E-Commerce Sales Insights',
    description:
      'An in-depth analysis of e-commerce transaction data to understand customer purchasing behavior, product performance, and revenue distribution.',
    tech: ['SQL', 'Python', 'Excel', 'Power BI'],
    highlights: [
      'Segmented customers by purchasing behavior',
      'Tracked key revenue and profit KPIs',
      'Built visual dashboard for stakeholders',
    ],
    github: '#',
    previewType: 'lavender',
  },
  {
    number: '04',
    title: 'Superstore Performance Dashboard',
    description:
      'A retail analytics dashboard built to visualize regional sales performance, profit margins, and category-level trends from the Superstore dataset.',
    tech: ['Power BI', 'SQL', 'Excel'],
    highlights: [
      'Regional sales and profit analysis',
      'Category and sub-category performance tracking',
      'Interactive filtering and drill-down',
    ],
    github: '#',
    previewType: 'dashboard',
  },
];

export interface DashboardItem {
  title: string;
  description: string;
}

export const dashboards: DashboardItem[] = [
  {
    title: 'Coffee Shop Sales Dashboard',
    description: 'Interactive Power BI dashboard tracking daily sales, peak hours, and top products across store locations.',
  },
  {
    title: 'E-Commerce Sales Dashboard',
    description: 'Comprehensive e-commerce analytics covering revenue trends, customer segments, and product performance.',
  },
  {
    title: 'Superstore Dashboard',
    description: 'Regional retail performance dashboard with profit analysis, category breakdowns, and trend visualization.',
  },
];

export interface Certification {
  provider: string;
  title: string;
  icon: LucideIcon;
  link: string;
}

export const certifications: Certification[] = [
  {
    provider: 'IBM',
    title: 'Data Analytics Certificate',
    icon: Award,
    link: '#',
  },
  {
    provider: 'Deloitte',
    title: 'Data Analytics Virtual Internship',
    icon: Award,
    link: '#',
  },
  {
    provider: 'Cisco',
    title: 'Networking & Data Fundamentals',
    icon: Award,
    link: '#',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const contactIcons = {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Send,
  CheckCircle2,
  GraduationCap,
  Briefcase,
};

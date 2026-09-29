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
  Database,
  TrendingUp,
  FileSpreadsheet,
  Layers,
  Sparkles,
  CheckCircle2,
  Send,
  Binary,
  LineChart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ==========================================================================
   CONFIG & LINKS
   Easily customize contact links, social profiles, and placeholders.
   ========================================================================== */
export const contactConfig = {
  github: 'https://github.com/MaahiShah287',
  linkedin: 'https://www.linkedin.com/in/maahi-shah-137b1b394',
  email: 'shahmaahi14@gmail.com',
  // Link placeholders for easy future replacement
  placeholders: {
    github: '[ADD GITHUB LINK]',
    linkedin: '[ADD LINKEDIN LINK]',
    email: '[ADD EMAIL]',
    certificateLink: '[ADD CERTIFICATE LINK]',
    liveDemoLink: '[ADD LIVE DEMO LINK]',
    dashboardImage: '[UPLOAD DASHBOARD IMAGE]',
  },
};

/* ==========================================================================
   PERSONAL INFORMATION
   ========================================================================== */
export const personalInfo = {
  name: 'Maahi Shah',
  eyebrow: 'ASPIRING DATA ANALYST',
  role: 'Data Analyst | Python | SQL | Power BI | Excel',
  tagline: 'Computer Engineering student passionate about turning data into meaningful insights and building practical analytics solutions.',
  positioning: 'I am a Computer Engineering student developing my skills in Data Analytics and looking for opportunities where I can apply analytical and technical skills to real-world problems.',
  education: {
    degree: 'B.Tech — Computer Engineering',
    college: 'Shah & Anchor Kutchhi Engineering College',
    status: '3rd Year',
    cgpa: '9.2',
  },
};

/* ==========================================================================
   NAVIGATION
   All 9 required sticky navigation sections.
   ========================================================================== */
export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Dashboards', href: '#dashboards' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

/* ==========================================================================
   SKILLS & TOOLKIT (5 Categorized Groups - No fake percentages)
   ========================================================================== */
export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Querying',
    subtitle: 'Core programming and relational database manipulation',
    icon: Code2,
    skills: ['Python', 'SQL'],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    subtitle: 'Data exploration, hygiene, statistics, and storytelling',
    icon: BarChart3,
    skills: ['Exploratory Data Analysis', 'Data Cleaning', 'Data Visualization', 'Statistical Analysis'],
  },
  {
    id: 'bi',
    title: 'BI & Visualization',
    subtitle: 'Business intelligence dashboards and advanced reporting',
    icon: PieChart,
    skills: ['Power BI', 'Microsoft Excel', 'Power Query', 'Pivot Tables'],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Supervised predictive modeling & imbalanced data handling',
    icon: Brain,
    skills: ['Logistic Regression', 'Random Forest', 'SMOTE', 'Model Evaluation'],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Development workflow, version control, and app deployment',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Streamlit', 'VS Code'],
  },
];

/* ==========================================================================
   EXPERIENCE
   ========================================================================== */
export interface ExperienceItem {
  role: string;
  company: string;
  status: string;
  isBestPerformer: boolean;
  highlights: string[];
  certificateLink: string;
}

export const experienceData: ExperienceItem = {
  role: 'Data Analytics Intern',
  company: 'Elevate Labs',
  status: 'Completed',
  isBestPerformer: true,
  highlights: [
    'Worked on practical Data Analytics projects and delivered actionable business insights.',
    'Built dashboards and analytical solutions for structured data interpretation.',
    'Performed exploratory data analysis (EDA) and data cleansing workflows.',
    'Worked with Python, SQL, Power BI and data visualization to report key metrics.',
    'Completed multiple internship tasks and analytics problem statements.',
    'Received a Best Performer tag on the internship certificate for exceptional contribution.',
  ],
  certificateLink: contactConfig.placeholders.certificateLink,
};

/* ==========================================================================
   FEATURED PROJECTS (Exact Known Details & Metrics)
   ========================================================================== */
export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  dataset?: string;
  stats?: ProjectStat[];
  features: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  badge?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'churn-prediction',
    number: '01',
    badge: 'Machine Learning & Analytics',
    title: 'Customer Churn Intelligence System',
    description:
      'A machine-learning based customer churn analysis and prediction system designed to identify customers at high risk of churn and provide actionable insights.',
    technologies: ['Python', 'Machine Learning', 'Logistic Regression', 'SMOTE', 'Streamlit', 'SHAP'],
    dataset: 'Telco Customer Churn (7,043 customers, 27 features)',
    stats: [
      { label: 'Dataset Size', value: '7,043' },
      { label: 'Feature Count', value: '27' },
      { label: 'Churn Rate', value: '26.47%' },
      { label: 'High-Risk Identified', value: '172' },
      { label: 'Test Recall', value: '81.55%' },
      { label: 'ROC-AUC', value: '0.8288' },
      { label: 'Threshold', value: '0.4' },
    ],
    features: [
      'Interactive Streamlit web dashboard for real-time risk scoring',
      'Churn probability prediction with decision threshold tuned to 0.4',
      'SHAP-based explainability & personalized retention recommendations',
      'Early detection and targeted retention list for high-risk customers',
    ],
    githubUrl: contactConfig.github,
    liveDemoUrl: contactConfig.placeholders.liveDemoLink,
  },
  {
    id: 'clv-prediction',
    number: '02',
    badge: 'Predictive Modeling & RFM',
    title: 'Customer Lifetime Value Prediction',
    description:
      'An analytics and machine-learning project focused on customer segmentation, RFM analysis, and customer lifetime value prediction.',
    technologies: ['Python', 'Random Forest', 'RFM Analysis', 'Pandas', 'Scikit-learn', 'Data Visualization'],
    dataset: 'Online Retail Dataset',
    stats: [
      { label: 'Transactions', value: '541,909' },
      { label: 'Unique Customers', value: '4,335' },
      { label: 'R² Score', value: '0.57' },
      { label: 'Mean Abs Error', value: '£678.69' },
      { label: 'Top-Tier Customers', value: '119' },
      { label: 'Projected Revenue', value: '~£1.06M' },
    ],
    features: [
      'RFM (Recency, Frequency, Monetary) multi-tier customer segmentation',
      'Random Forest regression model for multi-period CLV projection',
      'Identification of 119 very high-value accounts generating ~£1.06M',
      'Cohort purchasing behavior mapping to prioritize customer retention',
    ],
    githubUrl: contactConfig.github,
    liveDemoUrl: contactConfig.placeholders.liveDemoLink,
  },
  {
    id: 'hr-analytics',
    number: '03',
    badge: 'BI & Workforce Intelligence',
    title: 'HR Analytics — Employee Attrition & Flight Risk Dashboard',
    description:
      'An interactive HR analytics dashboard designed to analyze employee attrition patterns and identify factors associated with employee turnover.',
    technologies: ['Power BI', 'Data Analytics', 'Data Visualization', 'DAX', 'Workforce Metrics'],
    dataset: 'Corporate HR Attrition & Satisfaction Records',
    features: [
      'Multi-angle employee attrition analysis across roles, tenure, and salaries',
      'Department-level turnover drivers, overtime impact, and satisfaction metrics',
      'Interactive Power BI report with dynamic slicers and drill-through pages',
      'Proactive flight-risk matrix to alert HR leadership to critical retention needs',
    ],
    githubUrl: contactConfig.github,
    liveDemoUrl: contactConfig.placeholders.liveDemoLink,
  },
  {
    id: 'ecommerce-sql',
    number: '04',
    badge: 'Database Analytics & SQL',
    title: 'E-Commerce Sales Analytics',
    description:
      'A SQL-based analytics project focused on analyzing e-commerce sales data and extracting business insights using SQL.',
    technologies: ['MySQL', 'SQL', 'Aggregations', 'GROUP BY', 'JOINs', 'Subqueries'],
    dataset: 'Relational E-Commerce Transaction Database',
    features: [
      'Multi-table relational sales analysis across orders, customers, and order items',
      'Customer purchasing behavior, repeat order frequency, and cohort breakdowns',
      'Product category performance, margin analysis, and inventory velocity',
      'Complex query optimization using nested subqueries, aggregations, and window functions',
    ],
    githubUrl: contactConfig.github,
    liveDemoUrl: contactConfig.placeholders.liveDemoLink,
  },
];

/* ==========================================================================
   DASHBOARDS (Separate Section - Distinct Design)
   ========================================================================== */
export interface DashboardCard {
  id: string;
  title: string;
  tools: string[];
  description: string;
  metrics?: { label: string; value: string }[];
  imagePlaceholder: string;
}

export const dashboardsData: DashboardCard[] = [
  {
    id: 'coffee-sales',
    title: 'Coffee Shop Sales Dashboard',
    tools: ['Excel', 'Power Query', 'Pivot Tables', 'Data Visualization'],
    description:
      'Executive performance dashboard tracking sales revenue, peak trading hours, and category breakdown across store locations.',
    metrics: [
      { label: 'Total Sales', value: ',812' },
      { label: 'Coffee Category', value: '41%' },
      { label: 'Tea Category', value: '30%' },
      { label: 'Peak Sales Month', value: 'June' },
    ],
    imagePlaceholder: contactConfig.placeholders.dashboardImage,
  },
  {
    id: 'ecommerce-bi',
    title: 'E-Commerce Sales Dashboard',
    tools: ['Power BI', 'Data Visualization'],
    description:
      'Interactive executive dashboard tracking revenue distribution, order volume, geographical customer spread, and sales growth trends.',
    imagePlaceholder: contactConfig.placeholders.dashboardImage,
  },
  {
    id: 'superstore-bi',
    title: 'Superstore Dashboard',
    tools: ['Power BI', 'Data Analytics'],
    description:
      'Multi-page retail performance dashboard delivering regional profit analysis, category drill-downs, and customer segment insights.',
    imagePlaceholder: contactConfig.placeholders.dashboardImage,
  },
];

/* ==========================================================================
   CERTIFICATIONS (All 5 Official Certifications)
   ========================================================================== */
export interface CertificateItem {
  id: string;
  provider: 'IBM' | 'Deloitte' | 'Cisco';
  title: string;
  credentialUrl: string;
}

export const certificationsData: CertificateItem[] = [
  {
    id: 'ibm-python',
    provider: 'IBM',
    title: 'Python for Data Science',
    credentialUrl: contactConfig.placeholders.certificateLink,
  },
  {
    id: 'ibm-analysis',
    provider: 'IBM',
    title: 'Data Analysis',
    credentialUrl: contactConfig.placeholders.certificateLink,
  },
  {
    id: 'ibm-viz',
    provider: 'IBM',
    title: 'Data Visualization',
    credentialUrl: contactConfig.placeholders.certificateLink,
  },
  {
    id: 'deloitte-analytics',
    provider: 'Deloitte',
    title: 'Data Analytics',
    credentialUrl: contactConfig.placeholders.certificateLink,
  },
  {
    id: 'cisco-datascience',
    provider: 'Cisco',
    title: 'Introduction to Data Science',
    credentialUrl: contactConfig.placeholders.certificateLink,
  },
];

/* ==========================================================================
   EDUCATION
   ========================================================================== */
export const educationData = {
  degree: 'B.Tech — Computer Engineering',
  institution: 'Shah & Anchor Kutchhi Engineering College',
  status: '3rd Year',
  cgpa: '9.2',
  coursework: [
    'Database Management Systems (DBMS)',
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Applied Statistics & Probability',
    'Data Warehousing & Mining',
  ],
};

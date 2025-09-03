export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  metrics: string[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  problem: string
  solution: string
  role: string
  impact: string[]
  tech: string[]
  github?: string
  demo?: string
  image?: string
}

export interface Skill {
  category: string
  items: string[]
}

export const experiences: Experience[] = [
  {
    id: 'nucleus',
    company: 'Nucleus Software',
    position: 'Software Engineer Intern',
    location: 'Remote',
    startDate: '2025-05',
    endDate: '2025-08',
    description: [
      'Developed enterprise fintech applications for 12 financial clusters',
      'Built reconciliation systems handling Oracle databases with 1M+ records',
      'Optimized database queries achieving millisecond-level performance',
      'Created comprehensive dashboards for 8 project managers'
    ],
    metrics: [
      '1M+ records processed',
      '12 financial clusters served',
      '~95% report time reduction',
      '8 PM dashboards delivered'
    ]
  },
  {
    id: 'nagarro',
    company: 'Nagarro Mena LLC',
    position: 'Software Engineer Intern',
    location: 'Remote',
    startDate: '2025-05',
    endDate: '2025-07',
    description: [
      'Improved React application performance by 15% through code optimization',
      'Reduced application load time by 10% implementing lazy loading',
      'Optimized Flask API endpoints reducing latency from 250ms to 180ms',
      'Implemented OWASP Top 10 security practices and Git workflows'
    ],
    metrics: [
      '+15% React performance',
      '-10% load time',
      '250ms → 180ms API latency',
      'OWASP Top 10 compliance'
    ]
  }
]

export const projects: Project[] = [
  {
    id: 'smartsolve',
    title: 'Smartsolve AI',
    subtitle: 'Intelligent Problem-Solving Platform',
    description: 'A React-based AI platform that leverages Gemini AI for intelligent problem-solving with a modular frontend architecture.',
    problem: 'Users needed an intuitive way to get AI-powered solutions to complex problems with a clean, responsive interface.',
    solution: 'Built a React + Flask application with Redux state management, OAuth 2.0 authentication, and a modular component architecture.',
    role: 'Full-Stack Developer',
    impact: [
      'Modular frontend architecture for easy maintenance',
      'Secure OAuth 2.0 authentication system',
      'Responsive design optimized for all devices'
    ],
    tech: ['React', 'Flask', 'Redux', 'OAuth 2.0', 'Tailwind CSS', 'Python'],
    github: 'https://github.com/maanav098/SmartSolve-AI',
    demo: 'https://smartsolve-ai.vercel.app'
  },
  {
    id: 'nexpend',
    title: 'Nexpend',
    subtitle: 'Financial Document Automation',
    description: 'Automated financial document processing system using OCR technology to extract and store data in Oracle databases.',
    problem: 'Manual financial document processing was time-consuming and error-prone, requiring automated ingestion and query capabilities.',
    solution: 'Developed a Tesseract OCR system that processes financial documents and stores structured data in Oracle databases with a query interface.',
    role: 'Backend Developer',
    impact: [
      'Automated document processing workflow',
      'Structured data extraction and storage',
      'Efficient query interface for financial data'
    ],
    tech: ['Tesseract OCR', 'Oracle DB', 'Python', 'Flask', 'SQL', 'OpenCV'],
    github: 'https://github.com/maanav098/Nexpend-AI'
  },
  {
    id: 'crop-prediction',
    title: 'Crop Price Prediction',
    subtitle: 'ML-Powered Agricultural Analytics',
    description: 'Machine learning model for crop price prediction using ensemble methods with robust preprocessing and hyperparameter tuning.',
    problem: 'Farmers and agricultural businesses needed accurate crop price predictions to make informed decisions about planting and selling.',
    solution: 'Implemented XGBoost, LightGBM, and GBDT ensemble models with comprehensive data preprocessing and cross-validation.',
    role: 'ML Engineer',
    impact: [
      'R² ≈ 0.98 prediction accuracy',
      '45k+ data entries processed',
      'Robust preprocessing pipeline'
    ],
    tech: ['XGBoost', 'LightGBM', 'GBDT', 'Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/maanav098/CropPricePrediction'
  }
]

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java','C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'TypeScript']
  },
  {
    category: 'Backend',
    items: ['Flask', 'Node.js', 'Django', 'Express.js', 'REST APIs']
  },
  {
    category: 'Data & ML',
    items: ['XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    category: 'Databases & Infrastructure',
    items: ['Oracle', 'MySQL', 'PostgreSQL', 'Linux', 'Git', 'Docker']
  },
  {
    category: 'Tools & Others',
    items: ['Postman', 'VS Code', 'Jupyter', 'Figma', 'Agile', 'OWASP']
  }
]

export const stats = [
  { label: 'Records Processed', value: '1M+' },
  { label: 'Employees Served', value: '500+' },
  { label: 'UI Performance Gain', value: '+15%' },
  { label: 'ML Model Accuracy', value: 'R² ≈ 0.98' }
]

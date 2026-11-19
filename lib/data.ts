export interface Profile {
  name: string
  avatarUrl?: string
  firstName: string
  lastName: string
  headline: string
  headlineFull: string
  tagline: string
  summary: string
  summaryShort: string
  recruiterSummary: string
  location: string
  email: string
  phone?: string
  availability: string
  resumeUrl: string
  siteUrl: string
  social: {
    github: string
    linkedin: string
    portfolio: string
  }
  focusAreas: string[]
}

export interface RecruiterSignal {
  title: string
  detail: string
}

export interface CapabilityPillar {
  title: string
  description: string
  skills: string[]
}

export interface HighlightStat {
  label: string
  value: string
  note?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  metrics: string[]
  technologies?: string[]
  highlights?: string[]
  isCurrentRole?: boolean
}

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  problem?: string
  solution?: string
  role?: string
  impact?: string[]
  tech: string[]
  github?: string
  demo?: string
  caseStudy?: string
  image?: string
  category?: string
  featured?: boolean
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Education {
  id: string
  school: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
}

export interface Certification {
  id: string
  issuer: string
  name: string
}

export interface LeadershipItem {
  id: string
  organization: string
  role: string
  description: string
  impact: string
}

export const profile: Profile = {
  name: 'Maanav Ghai',
  avatarUrl: '/Profile%20pic.jpeg',
  firstName: 'Maanav',
  lastName: 'Ghai',
  headline: 'Full-Stack AI Engineer',
  headlineFull: 'Full-Stack AI Engineer | Java • Spring Boot • Angular • Spring AI • RAG • LLMs',
  tagline: 'I build dependable backend systems and practical AI features with a bias toward product impact, clean engineering, and learning fast in real teams.',
  summary: 'I am an early-career software engineer with hands-on experience building Java, Spring Boot, Angular, and AI-enabled systems in real enterprise environments. My work spans microservices, REST APIs, auth and access control, data handling, and retrieval-based AI features where business context matters. What I bring is not just technical execution, but product judgment: I understand how to translate requirements into reliable systems, debug under constraints, and keep shipping improvements that are measurable and useful.',
  summaryShort: 'Early-career engineer building reliable Java and AI systems with a strong bias toward product value and practical execution.',
  recruiterSummary: 'Best suited for entry-level or early-career roles where backend fundamentals, AI curiosity, and product thinking matter more than title.',
  location: 'India',
  email: 'maanavg14@gmail.com',
  phone: '+91 9560186823',
  availability: '2026 Computer Science graduate, available immediately, and open to relocate across India and the UAE.',
  resumeUrl: '/Maanav_Ghai_Resume.pdf',
  siteUrl: 'https://maanav-ghai-portfolio.vercel.app',
  social: {
    github: 'https://github.com/maanav098',
    linkedin: 'https://linkedin.com/in/maanavghai',
    portfolio: 'https://maanav-ghai-portfolio.vercel.app'
  },
  focusAreas: [
    'Production-ready Spring AI and RAG systems',
    'Enterprise Java microservices and API architecture',
    'Angular and React interfaces that stay fast and clear',
    'LLM feature design grounded in business outcomes'
  ]
}

export const stats: HighlightStat[] = [
  { label: 'Company Clusters', value: '12', note: 'Excel-based tracking replaced across Nucleus clusters' },
  { label: 'Financial Records', value: '~1M', note: 'Handled by a revenue and resource allocation system' },
  { label: 'DSA Problems', value: '200+', note: 'Solved across practice platforms' },
  { label: 'Banking LOS', value: 'Live', note: 'Rule-engine changes delivered to a Mumbai-based bank' }
]

export const recruiterSignals: RecruiterSignal[] = [
  {
    title: 'Building in production, not just demos',
    detail: 'I have implemented Spring AI and RAG features inside a live enterprise learning platform, which matters more than showcasing a toy prototype in isolation.'
  },
  {
    title: 'Comfortable with systems, not just feature code',
    detail: 'I have worked across microservices, secure auth flows, API contracts, and million-record data systems where reliability and consistency really matter.'
  },
  {
    title: 'I care about outcomes, not just code output',
    detail: 'My work is tied to concrete workflow improvements: replacing spreadsheet tracking across 12 company clusters, reconciling about one million financial records, and delivering rule-engine changes for a live banking LOS.'
  },
  {
    title: 'Good teammate energy and ownership',
    detail: 'I am comfortable collaborating with clients, supporting other engineers, and taking responsibility for delivery quality without waiting for perfect conditions.'
  }
]

export const capabilityPillars: CapabilityPillar[] = [
  {
    title: 'AI Product Engineering',
    description: 'Builds RAG and LLM features that are grounded in application workflows, retrieval quality, and production constraints.',
    skills: ['Spring AI', 'RAG', 'LLM Integration', 'Prompt Engineering', 'nomic-embed-text', 'spaCy']
  },
  {
    title: 'Backend and Platform Thinking',
    description: 'Comfortable owning secure service logic, API contracts, persistence layers, and distributed backend responsibilities.',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Microservices', 'API Gateway', 'JWT']
  },
  {
    title: 'Frontend Delivery',
    description: 'Able to turn technical systems into clean user-facing products using modern React, Angular, and TypeScript stacks.',
    skills: ['Angular', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'TypeScript']
  },
  {
    title: 'Execution and Fundamentals',
    description: 'Strong on implementation discipline, debugging, system design basics, and using metrics to guide product decisions.',
    skills: ['Data Structures and Algorithms', 'Object-Oriented Design', 'Unit Testing', 'Jenkins', 'SonarQube', 'Power BI']
  }
]

export const experiences: Experience[] = [
  {
    id: 'infosys',
    company: 'Infosys',
    position: 'Digital Specialist Engineer',
    location: 'Mysore, India',
    startDate: '2026-05',
    endDate: '2026-10',
    description: [
      'Built a help assistant with Spring AI and RAG for Infy LearnX, an internal learning platform. Course content was chunked and stored as MariaDB embeddings; the closest sections were retrieved for each question and passed to the LLM.',
      'Led a team building the platform with Java 21, Spring Boot microservices, Angular, and MariaDB.',
      'Built JWT and role-based access with Spring Security, plus certificate issuance with duplicate prevention.'
    ],
    metrics: [
      'Spring AI + RAG help assistant',
      'Java 21 microservices and Angular',
      'JWT / role-based access',
      'Certificate duplicate prevention'
    ],
    technologies: ['Java 21', 'Spring Boot', 'Spring AI', 'Angular', 'MariaDB', 'JWT'],
    highlights: [
      'Retrieved course content grounds the assistant responses in internal learning material.',
      'Security and certificate workflows were built into the platform.'
    ],
  },
  {
    id: 'nucleus-software-engineer-intern',
    company: 'Nucleus Software',
    position: 'Software Development Engineer Intern',
    location: 'Noida, India',
    startDate: '2026-03',
    endDate: '2026-05',
    description: [
      'Enhanced the core rule engine for a Loan Origination System using Java and PL/SQL business validations.',
      'Delivered the changes to a Mumbai-based bank, where the LOS is live in production, and tested them against client scenarios.'
    ],
    metrics: [
      'LOS changes live at a Mumbai-based bank',
      'Java + PL/SQL business validations',
      'Tested against client scenarios'
    ],
    technologies: ['Java', 'PL/SQL', 'Rule Engine', 'Loan Origination Systems'],
    highlights: [
      'Worked on core product logic for a live banking deployment.',
      'Validated changes against real client scenarios.'
    ]
  },
  {
    id: 'nucleus-software-developer-intern',
    company: 'Nucleus Software',
    position: 'Project Intern',
    location: 'Noida, India',
    startDate: '2025-05',
    endDate: '2025-08',
    description: [
      'Developed and automated revenue and resource allocation tracking with Spring Boot, Oracle, and React, replacing Excel sheets used across 12 company clusters.',
      'Added user management, audit logging, reconciliation, and alerts for purchase orders and about one million financial records.'
    ],
    metrics: [
      '12 company clusters',
      'About 1M financial records',
      'Excel tracking replaced with a system',
      'User management, audit logging, reconciliation'
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'Oracle', 'SQL'],
    highlights: [
      'Replaced spreadsheet-based tracking across a dozen company clusters.',
      'Built validation and reconciliation around financial allocation data.'
    ]
  },
  {
    id: 'nagarro',
    company: 'Nagarro Mena LLC',
    position: 'Software Developer Intern',
    location: 'Dubai, UAE',
    startDate: '2024-05',
    endDate: '2024-07',
    description: [
      'Profiled slow Python/Flask API endpoints and fixed input-validation and error-handling gaps against OWASP guidelines.',
      'Refactored React components to reduce unnecessary re-renders.'
    ],
    metrics: ['Python/Flask API profiling', 'Input validation and error handling', 'React re-render optimization'],
    technologies: ['React', 'Python', 'Flask', 'Performance Optimization', 'OWASP'],
    highlights: [
      'Applied OWASP guidance while improving API input handling.',
      'Improved frontend behavior by removing unnecessary component work.'
    ]
  }
]

export const projects: Project[] = [
  {
    id: 'intprep',
    title: 'IntPrep',
    subtitle: 'AI Interview Practice Platform',
    description: 'A full-stack platform for resume-aware mock interviews and recruiter applicant screening.',
    problem: 'Generic interview practice can miss a candidate’s real experience and the company or role they are preparing for.',
    solution: 'Questions use candidate resume and company context. Resume references in generated feedback are checked against the actual resume text; the app also supports speech-to-text, sandboxed coding, and recruiter review workflows.',
    role: 'Built the full-stack product end to end.',
    impact: [
      'Reduced hallucinated-citation rate from 12% to 1.6% across 25+ runs.',
      'Company-aware question sourcing uses cached web search.',
      'Includes candidate practice and recruiter screening workflows.'
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'Docker', 'AWS EC2', 'WorkOS', 'Whisper'],
    github: 'https://github.com/maanav098/Intprep.co',
    demo: 'https://intprep.behavior.systems',
    caseStudy: '/intprep',
    category: 'AI'
  },
  {
    id: 'nexpend',
    title: 'Nexpend',
    subtitle: 'AI-powered financial document tracking',
    description: 'A document-processing application for extracting financial information from bills, checks, and receipts into structured data.',
    problem: 'Manual financial-document entry is repetitive and can introduce data-entry mistakes.',
    solution: 'Uses OCR to extract document information and a structured backend to persist it for follow-up workflows.',
    role: 'Full-stack project development.',
    impact: ['Processes bills, checks, and receipts into structured financial records.'],
    tech: ['Tesseract OCR', 'Python', 'Oracle', 'SQL', 'React'],
    github: 'https://github.com/maanav098/Nexpend-AI',
    category: 'Full-Stack'
  },
  {
    id: 'routemate',
    title: 'RouteMate',
    subtitle: 'Sales team REST API',
    description: 'A sales-team API for daily beat plans, GPS-checked outlet visits, orders, and manager reporting.',
    problem: 'Mobile sales workflows need trustworthy visit records and duplicate-safe order capture, even when connectivity is unreliable.',
    solution: 'Validates visits against a 150 m location radius, calculates prices server-side, and uses idempotency keys and transactions for orders.',
    role: 'Backend project development.',
    impact: ['13 API tests run against an in-memory database.', 'Includes JWT roles, Zod validation, and daily beat-compliance reporting.'],
    tech: ['Bun', 'TypeScript', 'Hono', 'SQLite', 'JWT', 'Zod'],
    github: 'https://github.com/maanav098/routemate',
    category: 'Backend'
  },
  {
    id: 'smartsolve-ai',
    title: 'SmartSolve AI',
    subtitle: 'Multimodal Gemini assistant',
    description: 'A full-stack AI chat application for coding and general questions, with image analysis and authentication.',
    problem: 'Switching between coding questions, general queries, and image-based questions fragments the assistant experience.',
    solution: 'A single React and TypeScript chat interface connects to Google Gemini and supports multimodal prompts.',
    role: 'Personal project development.',
    impact: ['Live web app with a public source repository.'],
    tech: ['React', 'TypeScript', 'Google Gemini'],
    github: 'https://github.com/maanav098/SmartSolve-AI',
    demo: 'https://smart-solve-ai.vercel.app',
    category: 'AI'
  },
  {
    id: 'fake-news-detection',
    title: 'Hybrid Fake News Detection',
    subtitle: 'English + Hindi classifier',
    description: 'A bilingual classifier combining text features, sentiment and clickbait signals, and multilingual MiniLM embeddings.',
    problem: 'Fake-news classification needs to handle both English and Hindi content and varied writing styles.',
    solution: 'Combines TF-IDF and engineered features with multilingual MiniLM embeddings and a stacked model.',
    role: 'Machine-learning project development.',
    impact: ['Reported 0.99 F1 and 0.999 ROC-AUC on the held-out test set.'],
    tech: ['Python', 'MiniLM', 'LightGBM', 'scikit-learn'],
    github: 'https://github.com/maanav098/Fake-News-Detection-English_Hindi',
    category: 'Machine Learning'
  },
  {
    id: 'amazon-ml-challenge',
    title: 'Amazon ML Challenge 2025',
    subtitle: 'Smart product pricing',
    description: 'A machine-learning solution submitted for the Amazon ML Challenge 2025.',
    problem: 'Estimate product prices from product listing information.',
    solution: 'Built a data-driven pricing model and evaluated it with the competition metric.',
    role: 'Machine-learning project development.',
    impact: ['The public GitHub repository reports a 51.24% SMAPE score.'],
    tech: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    github: 'https://github.com/maanav098/Amazon_ML_challenge',
    category: 'Machine Learning'
  }
]

export const skills: SkillGroup[] = [
  {
    category: 'AI and ML',
    items: ['Spring AI', 'RAG', 'LLM Integration', 'Prompt Engineering', 'Embedding-Based Semantic Search', 'spaCy', 'Gemini', 'Llama3', 'Ollama']
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'FastAPI', 'Node.js', 'Flask', 'REST APIs', 'Microservices', 'API Gateway', 'JWT']
  },
  {
    category: 'Frontend',
    items: ['Angular', 'React', 'Redux', 'Next.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    category: 'Core CS',
    items: ['Data Structures and Algorithms', 'Object-Oriented Design', 'System Design Fundamentals', 'Unit Testing', 'CI/CD Awareness', 'SonarQube', 'Jenkins']
  },
  {
    category: 'Languages and Data',
    items: ['Python', 'Java', 'C++', 'TypeScript', 'SQL', 'MySQL', 'Oracle', 'SQLite']
  },
  {
    category: 'Tools and Cloud',
    items: ['Git', 'Postman', 'AWS', 'Power BI']
  }
]

export const education: Education[] = [
  {
    id: 'muj',
    school: 'Manipal University Jaipur',
    degree: 'B.Tech',
    field: 'Computer Science Engineering (Minor: Computational Intelligence)',
    startDate: '2022-09',
    endDate: '2026-05',
    gpa: '7.14 CGPA'
  }
]

export const certifications: Certification[] = [
  {
    id: 'oracle-java-foundations',
    issuer: 'Oracle',
    name: 'Java Foundations'
  },
  {
    id: 'ibm-generative-ai-fundamentals',
    issuer: 'IBM',
    name: 'Generative AI Fundamentals'
  },
  {
    id: 'red-hat-rh134',
    issuer: 'Red Hat',
    name: 'RH134'
  }
]

export const leadership: LeadershipItem[] = [
  {
    id: 'acm',
    organization: 'ACM',
    role: 'Leadership Team Member',
    description: 'Led volunteers in the ACM student chapter at Manipal University Jaipur.',
    impact: 'Led 10+ volunteers in the ACM student chapter at Manipal University Jaipur.'
  }
]

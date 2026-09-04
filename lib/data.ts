export interface Profile {
  name: string
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
  problem: string
  solution: string
  role: string
  impact: string[]
  tech: string[]
  github?: string
  demo?: string
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
  firstName: 'Maanav',
  lastName: 'Ghai',
  headline: 'Full-Stack AI Engineer',
  headlineFull: 'Full-Stack AI Engineer | Java • Spring Boot • Angular • Spring AI • RAG • LLMs',
  tagline: 'Java, Spring Boot, Angular, Spring AI, RAG, and LLM systems for real production products.',
  summary: 'Full-stack AI engineer shipping production enterprise systems at Infosys, where he builds Spring AI and retrieval-augmented generation features into live applications while leading a four-member team across eight microservices. His work sits at the intersection of backend architecture, AI integration, clean frontend delivery, and measurable product impact.',
  summaryShort: 'Full-stack AI engineer building enterprise-grade AI products, secure microservices, and polished user experiences.',
  recruiterSummary: 'A strong fit for teams that need someone who can bridge backend systems, AI feature delivery, and product-minded execution without losing technical depth.',
  location: 'India',
  email: 'maanavg14@gmail.com',
  availability: 'Open to full-time product engineering roles, applied AI engineering teams, and selective high-impact collaborations.',
  resumeUrl: '/Maanav_Ghai.pdf',
  siteUrl: 'https://maanav-ghai-portfolio.vercel.app',
  social: {
    github: 'https://github.com/maanav098',
    linkedin: 'https://linkedin.com/in/maanavghai',
    portfolio: 'https://maanav-ghai-portfolio.vercel.app'
  },
  focusAreas: [
    'Spring AI and RAG product engineering',
    'Enterprise Java microservices',
    'Angular and React frontends',
    'LLM integration and evaluation-driven workflows'
  ]
}

export const stats: HighlightStat[] = [
  { label: 'Microservices Coordinated', value: '8', note: 'Across enterprise learning workflows' },
  { label: 'Database Scale', value: '1M+', note: 'Financial records queried at millisecond speed' },
  { label: 'Reporting Time Reduced', value: '95%', note: 'Through internal fintech automation' },
  { label: 'Team Leadership', value: '4', note: 'Trainees led on production delivery' }
]

export const recruiterSignals: RecruiterSignal[] = [
  {
    title: 'Already shipping production AI',
    detail: 'Built Spring AI and RAG features into a live enterprise learning platform instead of only experimenting in side projects.'
  },
  {
    title: 'Comfortable with scale and systems',
    detail: 'Worked across eight microservices, secure auth flows, API contracts, and million-record data systems.'
  },
  {
    title: 'Shows measurable business impact',
    detail: 'Repeatedly ties delivery to concrete outcomes like 95 percent time reduction, 30 percent API performance gain, and production workflow automation.'
  },
  {
    title: 'Can operate cross-functionally',
    detail: 'Led trainees, worked directly with clients, and handled delivery communication along with implementation.'
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
    location: 'Mysore, India (On-site)',
    startDate: '2026-05',
    endDate: 'Present',
    description: [
      'Engineering Infy LearnX on Java 21, Spring Boot microservices, and Angular for enterprise learning experiences.',
      'Architecting a Spring AI and RAG retrieval pipeline behind an API Gateway to power contextual AI-assisted learning features.',
      'Leading a four-member trainee team across sprint planning, code reviews, integration testing, and delivery coordination.',
      'Implemented JWT authentication, role-based access control, and corrected REST and DTO contract mismatches across eight backend microservices.',
      'Delivered an automated certificate issuance workflow covering course completion, persistence, duplicate prevention, and public verification.'
    ],
    metrics: [
      'Spring AI + RAG in production',
      '4-member team led',
      '8 microservices aligned',
      '22 automated tests validating certificate flow'
    ],
    technologies: ['Java 21', 'Spring Boot', 'Spring AI', 'Angular', 'API Gateway', 'JWT', 'Microservices'],
    highlights: [
      'Production AI features grounded in enterprise learning data.',
      'Security and contract consistency improvements across distributed services.'
    ],
    isCurrentRole: true
  },
  {
    id: 'nucleus-software-engineer-intern',
    company: 'Nucleus Software',
    position: 'Software Engineer Intern',
    location: 'Delhi, India (On-site)',
    startDate: '2026-03',
    endDate: '2026-05',
    description: [
      'Implemented business validations across configurable rule-engine components for a Loan Origination System used by a banking client.',
      'Built and refined PL/SQL-backed validation logic spanning rule, condition-builder, parameter, and rule-detail layers.',
      'Worked directly with the client to clarify requirements, share delivery updates, and run knowledge-transfer sessions.'
    ],
    metrics: [
      '4 core rule-engine components enhanced',
      'Client-facing delivery communication',
      'PL/SQL validation logic shipped'
    ],
    technologies: ['Java', 'PL/SQL', 'Rule Engine', 'Loan Origination Systems'],
    highlights: [
      'Strengthened product correctness through configurable validation logic.',
      'Handled direct client communication during delivery.'
    ]
  },
  {
    id: 'nucleus-software-developer-intern',
    company: 'Nucleus Software',
    position: 'Software Developer Intern',
    location: 'Delhi, India (On-site)',
    startDate: '2025-05',
    endDate: '2025-08',
    description: [
      'Engineered three enterprise fintech applications using Java, Spring Boot, and React to replace manual Excel-based processes.',
      'Architected a secure full-stack solution for querying and managing an Oracle database containing more than one million financial records.',
      'Tuned database queries for millisecond retrieval and shipped role-based dashboards for eight project managers.'
    ],
    metrics: [
      '3 enterprise fintech applications',
      '12 company clusters served',
      '1M+ financial records handled',
      '95% reporting-time reduction'
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'Oracle', 'SQL'],
    highlights: [
      'Replaced manual reporting flows with secure productized systems.',
      'Delivered measurable operational efficiency at enterprise scale.'
    ]
  },
  {
    id: 'nagarro',
    company: 'Nagarro Mena LLC',
    position: 'Software Developer Intern',
    location: 'Dubai, UAE (On-site)',
    startDate: '2024-05',
    endDate: '2024-07',
    description: [
      'Improved React UI performance by 15 percent through state-management optimization and component refactoring.',
      'Reduced page load times by 10 percent in a production-facing frontend.',
      'Enhanced backend API performance by 30 percent using Python and Flask, improving average response time from 250ms to 180ms.',
      'Enforced OWASP Top 10 security protocols across the application stack.'
    ],
    metrics: [
      '15% UI performance gain',
      '10% faster page loads',
      '30% API performance gain',
      '250ms to 180ms average response time'
    ],
    technologies: ['React', 'Python', 'Flask', 'Performance Optimization', 'OWASP'],
    highlights: [
      'Balanced frontend responsiveness with backend throughput improvements.',
      'Added practical security discipline to delivery.'
    ]
  }
]

export const projects: Project[] = [
  {
    id: 'intprep',
    title: 'IntPrep',
    subtitle: 'AI-Powered Interview Preparation and Evaluation Platform',
    description: 'An AI-native interview platform that parses resumes, adapts questions by role, and evaluates answers through multiple scoring signals.',
    problem: 'Interview preparation tools often feel generic and fail to adapt to a candidate profile, target role, and response quality in a grounded way.',
    solution: 'Built a FastAPI and Llama3/Ollama platform that uses pdfplumber and spaCy for resume parsing, generates adaptive interview questions, and combines keyword matching, embedding-based similarity, and LLM feedback for evaluation.',
    role: 'AI Product Engineer',
    impact: [
      'Adaptive question generation across multiple job categories',
      'Three-signal evaluation engine with semantic similarity and LLM feedback',
      'Role-specific response analytics and rubric-based scoring'
    ],
    tech: ['FastAPI', 'Llama3', 'Ollama', 'pdfplumber', 'spaCy', 'nomic-embed-text', 'Python'],
    github: 'https://github.com/maanav098',
    category: 'AI',
    featured: true
  },
  {
    id: 'nexpend',
    title: 'Nexpend',
    subtitle: 'AI-Powered Financial Tracking System',
    description: 'A document-intelligence workflow that extracts financial information from bills, checks, and receipts into structured Oracle data.',
    problem: 'Manual financial data entry from scanned documents is slow, repetitive, and vulnerable to human error.',
    solution: 'Created an AI-integrated application using Tesseract OCR to extract structured data across three financial document types and persist it into Oracle for downstream workflows.',
    role: 'Full-Stack Developer',
    impact: [
      'Automated ingestion of bills, checks, and receipts',
      'Structured OCR pipeline into Oracle-backed financial storage',
      'Reduced manual entry effort and lowered processing mistakes'
    ],
    tech: ['Tesseract OCR', 'Oracle', 'Python', 'SQL', 'Document Processing'],
    github: 'https://github.com/maanav098/Nexpend-AI',
    category: 'Full-Stack',
    featured: true
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
    field: 'Computer Science Engineering',
    startDate: '2022-09',
    endDate: '2026-05',
    gpa: '7.19 CGPA'
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
    id: 'aws-cloud-practitioner-essentials',
    issuer: 'AWS',
    name: 'Cloud Practitioner Essentials'
  }
]

export const leadership: LeadershipItem[] = [
  {
    id: 'acm',
    organization: 'ACM',
    role: 'Leadership Team Member',
    description: 'Advanced from organizing committee contributor into a leadership role managing volunteers and cross-functional execution.',
    impact: 'Led 10+ volunteers and drove 1,500+ event interactions while improving participation by 30%.'
  }
]

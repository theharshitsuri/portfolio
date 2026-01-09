export const personalInfo = {
  name: "Harshit Suri",
  title: "CS Student → Product Visionary",
  email: "harshitsinghsuri@usf.edu",
  phone: "(929) 451-6562",
  tagline: "Building AI products that people actually want to use",
  bio: "Computer Science @ USF. Shipped products at Bank of America and Delta.\nI don't just code, I figure out what to build and why it matters.",
  location: "Tampa, FL",
  links: {
    github: "https://github.com/theharshitsuri",
    linkedin: "https://linkedin.com/in/harshitsuri",
    resume: "/Harshit_Suri_Resume_SWE.pdf"
  }
};

export type TicketStatus = "SHIPPED" | "IN_PROGRESS" | "SHIPPED_MOSTLY" | "FAILED_LEARNED" | "ARCHIVED";
export type TicketPriority = "P0" | "P1" | "P2" | "P3";
export type TicketType = "FEATURE" | "PRODUCT" | "RESEARCH" | "TOOL";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  type: TicketType;
  tags: string[];
  persona: string;
  metrics?: string;
  timeline: string;
  link?: string;
  github?: string;
  learnings?: string;
  category: "product" | "technical" | "leadership" | "research";
}

export const tickets: Ticket[] = [
  {
    id: "HARSHIT-001",
    title: "LeaseLink: Student Sublease Marketplace",
    description: "Built a sublease marketplace for students using React + Firebase. Implemented secure auth and dynamic listing management with unique ID system.",
    status: "SHIPPED",
    priority: "P0",
    type: "PRODUCT",
    tags: ["React", "Firebase", "Auth", "Real-time DB"],
    persona: "Students",
    metrics: "Active users across 3 universities",
    timeline: "8 weeks",
    link: "https://www.leaselink.info",
    category: "product",
    learnings: "Talked to 50+ students before writing code. Best decision ever."
  },
  {
    id: "HARSHIT-002",
    title: "ModelSight: LLM Observability Platform",
    description: "Production-ready AI safety platform preventing 90% of hallucinations through prompt optimization. Multi-tenant SaaS with FastAPI + Next.js, supporting OpenAI/Anthropic/Gemini with real-time detection, cost tracking, and enterprise monitoring.",
    status: "SHIPPED",
    priority: "P0",
    type: "PRODUCT",
    tags: ["FastAPI", "Next.js", "AI/ML", "PostgreSQL", "Multi-tenant"],
    persona: "AI Engineers",
    metrics: "90% hallucination prevention, 3 LLM providers",
    timeline: "12 weeks",
    github: "https://github.com/theharshitsuri/modelsight",
    category: "product",
    learnings: "Built the reliability layer AI needs for production. Prompt optimization > post-detection."
  },
  {
    id: "HARSHIT-003",
    title: "MarketHours: AI Trading Social Network",
    description: "Full-stack trading platform with React Native + Node.js. AI-powered signals, real-time market data (stocks/forex/crypto), social feed, and push notifications. Complete with portfolio tracking, price alerts, and Firebase integration.",
    status: "SHIPPED",
    priority: "P0",
    type: "PRODUCT",
    tags: ["React Native", "Node.js", "MongoDB", "Firebase", "WebSockets"],
    persona: "Retail Traders",
    metrics: "Real-time data, AI signals, social features",
    timeline: "10 weeks",
    github: "https://github.com/theharshitsuri/markethours",
    category: "product",
    learnings: "Shipped a production mobile app end-to-end. Real-time systems are hard but worth it."
  },
  {
    id: "HARSHIT-004",
    title: "TheraWise: AI Mental Health Companion",
    description: "AI-powered virtual therapist using Flutter + GPT API. Personalized CBT exercises, mood tracking, and stress-relief strategies.",
    status: "ARCHIVED",
    priority: "P0",
    type: "PRODUCT",
    tags: ["Flutter", "OpenAI", "SQLite", "Mobile"],
    persona: "Mental Health Seekers",
    metrics: "4.8/5 user satisfaction",
    timeline: "6 weeks",
    github: "https://github.com/theharshitsuri/TheraWise",
    category: "product",
    learnings: "Privacy concerns killed growth. Should've addressed earlier."
  },
  {
    id: "HARSHIT-005",
    title: "Preppify: AI Interview Coach",
    description: "Flutter app for interview prep with Firebase auth. LLM-powered mock interviews across Finance, CS, Math, Engineering with real-time feedback.",
    status: "ARCHIVED",
    priority: "P1",
    type: "PRODUCT",
    tags: ["Flutter", "Firebase", "LLM", "Education"],
    persona: "Job Seekers",
    metrics: "500+ practice sessions",
    timeline: "5 weeks",
    github: "https://github.com/theharshitsuri/Preppify",
    category: "product",
    learnings: "Feedback quality matters more than question quantity. Pivoted mid-build."
  },
  {
    id: "HARSHIT-006",
    title: "Bank of America: Autobot Platform",
    description: "Enhanced automation platform for 1000+ system deployments. Optimized Angular front-end, reducing UI latency by 30%.",
    status: "SHIPPED",
    priority: "P0",
    type: "FEATURE",
    tags: ["Angular", "Automation", "Enterprise"],
    persona: "DevOps Engineers",
    metrics: "↓ 30% UI latency, 1000+ systems",
    timeline: "Summer 2025",
    category: "technical",
    learnings: "Enterprise scale is a different beast. Learned to think in systems, not features."
  },
  {
    id: "HARSHIT-007",
    title: "Delta Airlines: Predictive SQL Tool",
    description: "Built internal SQL tool that cut manual entry by 60% across 5 departments. Data analysis + feature engineering for LSTM forecasting.",
    status: "SHIPPED",
    priority: "P0",
    type: "TOOL",
    tags: ["SQL", "Python", "LSTM", "Data"],
    persona: "Data Analysts",
    metrics: "↓ 60% manual work, 5 departments",
    timeline: "Spring 2025",
    category: "technical",
    learnings: "Boring tools that save time > flashy features nobody uses."
  },
  {
    id: "HARSHIT-008",
    title: "RegDev: Workflow Automation Platform",
    description: "Led cross-functional team to build workflow automation tool. 80% reduction in manual data entry with intuitive PDF/data viewing interface.",
    status: "SHIPPED",
    priority: "P0",
    type: "TOOL",
    tags: ["Python", "PDF", "Automation", "UX"],
    persona: "Operations Teams",
    metrics: "↓ 80% manual entry time",
    timeline: "Summer 2024",
    category: "technical",
    learnings: "Domain experts don't care about tech stack. They care about saving time."
  },
  {
    id: "HARSHIT-009",
    title: "TEDx @ USF: VP Operations",
    description: "Led team of 17 to execute TEDx event. Managed $7K+ budget, coordinated logistics for 150+ attendees.",
    status: "SHIPPED",
    priority: "P1",
    type: "PRODUCT",
    tags: ["Leadership", "Events", "Operations"],
    persona: "Event Attendees",
    metrics: "150+ attendees, $7K budget",
    timeline: "Ongoing",
    category: "leadership",
    learnings: "Delegation is a skill. Learned it the hard way by trying to do everything myself."
  },
  {
    id: "HARSHIT-010",
    title: "SHPE: Corporate Partnerships",
    description: "VP of External Affairs. Secured $10K+ in partnerships, organized USF's largest club-led career fair (5+ companies, 200+ attendees).",
    status: "SHIPPED",
    priority: "P1",
    type: "PRODUCT",
    tags: ["Partnerships", "Leadership", "Events"],
    persona: "Students & Companies",
    metrics: "$10K+ partnerships, 200+ attendees",
    timeline: "2023-2024",
    category: "leadership",
    learnings: "Cold emails work if you provide value first. Got 80% response rate."
  },
  {
    id: "HARSHIT-011",
    title: "Automated Data Processing Script",
    description: "Python script to process 10,000+ CSV entries. Smart column detection using pandas, regex, BeautifulSoup.",
    status: "SHIPPED",
    priority: "P2",
    type: "TOOL",
    tags: ["Python", "Pandas", "Automation"],
    persona: "Data Teams",
    metrics: "10K+ entries processed",
    timeline: "2 weeks",
    category: "technical",
    learnings: "Automation pays off. This script saved 20+ hours/week."
  },
  {
    id: "HARSHIT-012",
    title: "Loan Origination Software",
    description: "Full mortgage processing system with secure auth, role-based access, and dynamic database views.",
    status: "ARCHIVED",
    priority: "P2",
    type: "PRODUCT",
    tags: ["Full-stack", "Auth", "Database"],
    persona: "Loan Officers",
    timeline: "4 weeks",
    github: "https://github.com/theharshitsuri/Loan_Origination_Software",
    category: "technical",
    learnings: "Good learning project, but solving problems I don't have is boring."
  },
  {
    id: "HARSHIT-013",
    title: "RISC-V Architecture Guide",
    description: "Wrote comprehensive guide to RISC-V assembly language and computer architecture for beginners.",
    status: "SHIPPED",
    priority: "P2",
    type: "RESEARCH",
    tags: ["Technical Writing", "Education", "Architecture"],
    persona: "CS Students",
    metrics: "1000+ downloads",
    timeline: "3 weeks",
    link: "https://drive.google.com/file/d/1WmUzMAmjydIloqXOaQMEGL0ga0i48t84/view",
    category: "research",
    learnings: "Teaching forces you to truly understand. Found gaps in my own knowledge."
  },
  {
    id: "HARSHIT-014",
    title: "Excel for Data Analytics Guide",
    description: "Comprehensive guide on Excel for business analytics. Covers PivotTables, Power Query, financial modeling.",
    status: "SHIPPED",
    priority: "P2",
    type: "RESEARCH",
    tags: ["Technical Writing", "Data", "Business"],
    persona: "Business Analysts",
    metrics: "500+ downloads",
    timeline: "2 weeks",
    link: "https://drive.google.com/file/d/13RMZrJ-_y6Uzc16ad1KGfD_Sng4ETWH4/view",
    category: "research",
    learnings: "Excel is underrated. Most 'AI' problems can be solved with a good spreadsheet."
  }
];

export const problemCategories = [
  {
    id: "product",
    title: "Need someone to build 0→1 AI products",
    icon: "",
    description: "I ship products people actually use"
  },
  {
    id: "technical",
    title: "Need technical depth + business sense",
    icon: "",
    description: "I code AND understand why it matters"
  },
  {
    id: "leadership",
    title: "Need someone who can lead teams",
    icon: "",
    description: "I've led teams and shipped results"
  },
  {
    id: "research",
    title: "Just browsing (show me everything)",
    icon: "",
    description: "Explore all my work"
  }
];

export const experience = [
  {
    company: "Bank of America",
    role: "Software Engineering Intern",
    period: "June 2025 - August 2025",
    highlights: [
      "Enhanced Autobot platforms for 1000+ systems",
      "Improved Angular front-end performance by 30%",
      "Collaborated on product roadmap alignment"
    ]
  },
  {
    company: "Delta Airlines",
    role: "Software Engineering Intern - Predictive Technology",
    period: "January 2025 - May 2025",
    highlights: [
      "Built SQL tool reducing manual entry by 60%",
      "Supported LSTM forecasting models",
      "Mapped data lineage for 100+ systems"
    ]
  },
  {
    company: "RegDev Inc.",
    role: "Software Engineering Intern",
    period: "June 2024 - August 2024",
    highlights: [
      "Led workflow automation tool (80% time reduction)",
      "Improved data analysis efficiency by 50%",
      "Built user-friendly PDF viewing interface"
    ]
  },
  {
    company: "Gupshup Technologies",
    role: "AI Engineering Intern",
    period: "May 2023 - July 2023",
    highlights: [
      "Automated analysis of 10K+ spreadsheet entries",
      "Implemented ReAct prompt engineering for GPT",
      "Optimized AI model responses"
    ]
  }
];

export const skills = {
  categories: [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", proficiency: 95, projects: 2 },
        { name: "Next.js", proficiency: 90, projects: 1 },
        { name: "Angular", proficiency: 75, projects: 1 }
      ]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Python", proficiency: 95, projects: 3 },
        { name: "FastAPI", proficiency: 90, projects: 1 },
        { name: "Node.js", proficiency: 85, projects: 1 },
        { name: "SQL", proficiency: 85, projects: 1 }
      ]
    },
    {
      name: "Mobile",
      icon: "📱",
      skills: [
        { name: "Flutter", proficiency: 85, projects: 2 },
        { name: "React Native", proficiency: 85, projects: 1 }
      ]
    },
    {
      name: "Database",
      icon: "💾",
      skills: [
        { name: "Firebase", proficiency: 80, projects: 3 },
        { name: "Database", proficiency: 85, projects: 4 }
      ]
    },
    {
      name: "AI/ML",
      icon: "🤖",
      skills: [
        { name: "OpenAI", proficiency: 90, projects: 2 },
        { name: "Claude", proficiency: 85, projects: 1 },
        { name: "Gemini", proficiency: 80, projects: 1 },
        { name: "LSTM", proficiency: 70, projects: 1 }
      ]
    },
    {
      name: "Tools & Other",
      icon: "🛠️",
      skills: [
        { name: "Git", proficiency: 90, projects: 10 },
        { name: "Jira", proficiency: 80, projects: 2 },
        { name: "Pandas", proficiency: 85, projects: 1 },
        { name: "WebSockets", proficiency: 80, projects: 1 }
      ]
    }
  ]
};

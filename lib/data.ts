export const personalInfo = {
  name: "Harshit Suri",
  email: "surih2003@gmail.com",
  location: "Charlotte, NC",
  links: {
    github: "https://github.com/theharshitsuri",
    linkedin: "https://www.linkedin.com/in/harshitsuri",
    resume: "/Harshit_Suri_Resume.pdf"
  },
  role: "Software Engineer at Bank of America"
};

export const stats = [
  { value: "3.91", label: "GPA, summa cum laude" },
  { value: "250+", label: "LeaseLink users at launch" },
  { value: "100+", label: "Team hours a month saved" },
  { value: "$10K", label: "Partnerships secured" }
];

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
    description: "A sublease marketplace for students, built to fix the trust problem and scattered listings in student housing. I led product strategy, the roadmap and go-to-market, and built the web and mobile apps end to end.",
    status: "SHIPPED",
    priority: "P0",
    type: "PRODUCT",
    tags: ["React", "Flutter", "Supabase"],
    persona: "Students",
    metrics: "250+ users, interest from 20+ universities",
    timeline: "2025",
    link: "https://www.leaselink.info",
    category: "product",
    learnings: "Talked to 50+ students before writing code. Best decision ever."
  },
  {
    id: "HARSHIT-002",
    title: "ModelSight: LLM Observability Platform",
    description: "An LLM proxy and observability platform that watches production AI for prompt and response drift, hallucinations and output quality, with automated evals and reliability alerting. Multi-tenant from day one.",
    status: "SHIPPED",
    priority: "P0",
    type: "PRODUCT",
    tags: ["FastAPI", "Next.js", "AI/ML", "PostgreSQL", "Multi-tenant"],
    persona: "AI Engineers",
    metrics: "Fault-tolerant proxy, CI/CD evals and alerting",
    timeline: "2026",
    link: "https://www.modelsight.net",
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
    title: "Bank of America: Confluence–SharePoint Dashboard",
    description: "Designed an automation dashboard in Python and Angular that moves team knowledge from Confluence to SharePoint, and led the enterprise Angular migration from v13 to v20. Took it from requirements to prototype in six weeks.",
    status: "SHIPPED",
    priority: "P0",
    type: "FEATURE",
    tags: ["Python", "Angular", "Automation"],
    persona: "Engineering Teams",
    metrics: "100+ team hours a month reclaimed",
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
    title: "TEDxUSF: Vice President",
    description: "Led a 17-person team to run TEDxUSF keynote events. Managed a $7K+ budget and the logistics for 150+ attendees.",
    status: "SHIPPED",
    priority: "P1",
    type: "PRODUCT",
    tags: ["Leadership", "Events", "Operations"],
    persona: "Event Attendees",
    metrics: "150+ attendees, $7K budget",
    timeline: "2023–2025",
    category: "leadership",
    learnings: "Delegation is a skill. Learned it the hard way by trying to do everything myself."
  },
  {
    id: "HARSHIT-010",
    title: "SHPE: Corporate Partnerships",
    description: "VP of External Affairs. Led a team of 9 to land 20+ corporate partnerships worth $10K, and organized USF's largest club-led career fair.",
    status: "SHIPPED",
    priority: "P1",
    type: "PRODUCT",
    tags: ["Partnerships", "Leadership", "Events"],
    persona: "Students & Companies",
    metrics: "$10K raised, 30% chapter growth",
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

// Filters for the Work section. Labels name what's inside, not vague umbrellas.
export const workFilters = [
  { id: "all", label: "All" },
  { id: "product", label: "Products" },
  { id: "technical", label: "Engineering" },
  { id: "leadership", label: "Leadership" },
  { id: "research", label: "Writing" }
] as const;

export type WorkFilter = (typeof workFilters)[number]["id"];

export const experience = [
  {
    company: "Bank of America",
    role: "Software Engineer",
    period: "July 2026 – Present",
    highlights: [
      "Build internal system-management applications in Java and Angular for enterprise technology environments",
      "Develop REST APIs, backend services and SQL workflows that connect these tools to enterprise platforms",
      "Work across design, testing, code review, CI/CD and production troubleshooting in an Agile team"
    ]
  },
  {
    company: "Bank of America",
    role: "Software Engineering Intern",
    period: "June – August 2025",
    highlights: [
      "Designed a Confluence–SharePoint dashboard in Python and Angular, projected to reclaim 100+ team hours a month",
      "Migrated the enterprise Angular front end from v13 to v20 for better maintainability and test stability",
      "Gathered requirements with product owners and delivered a prototype in six weeks"
    ]
  },
  {
    company: "Delta Air Lines",
    role: "Software Engineering Intern, Predictive Technology",
    period: "January – May 2025",
    highlights: [
      "Built a SQL-based internal tool that cut manual entry by 60% across 5 departments",
      "Did data analysis and feature engineering for LSTM forecasting models",
      "Mapped data lineage across 100+ systems on a large distributed data platform"
    ]
  },
  {
    company: "RegDev",
    role: "Technical Product Management Intern",
    period: "June – August 2024",
    highlights: [
      "Ran end-user interviews and defined workflow requirements",
      "Designed interfaces and built automation pipelines that cut manual processing by 80%"
    ]
  },
  {
    company: "Gupshup",
    role: "AI Engineering Intern",
    period: "May – July 2023",
    highlights: [
      "Automated processing of 10,000+ chatbot responses with Python, Pandas and regex",
      "Improved model accuracy and latency with ReAct prompting"
    ]
  }
];

export const education = {
  school: "University of South Florida",
  degree: "BS Computer Science · Summa cum laude · 3.91 GPA",
  period: "2022 – 2026",
  honors: "Presidential Scholar, Dean's List, Bulls LEAD, Resident Assistant, Teaching Assistant"
};

export const skills = {
  categories: [
    { name: "Languages", skills: ["Python", "Java", "SQL", "JavaScript", "C/C++", "HTML & CSS"] },
    { name: "Frameworks", skills: ["Angular", "React", "Next.js", "Flutter", "FastAPI"] },
    { name: "Backend & cloud", skills: ["REST APIs", "AWS", "Supabase", "PostgreSQL", "NoSQL", "CI/CD"] },
    { name: "AI", skills: ["LLM evals", "OpenAI", "Claude", "Gemini", "LSTM forecasting"] },
    { name: "Product", skills: ["User research", "Roadmapping", "Go-to-market", "Excel modeling"] },
    { name: "Tools", skills: ["Git", "Jira", "Pandas", "Confluence", "SharePoint"] }
  ]
};

export const personalInfo = {
  name: "Harshit Suri",
  initials: "HS",
  email: "surih2003@gmail.com",
  location: "Charlotte, NC",
  now: { role: "Software Engineer", org: "Bank of America" },
  links: {
    github: "https://github.com/theharshitsuri",
    linkedin: "https://www.linkedin.com/in/harshitsuri",
    resume: "/Harshit_Suri_Resume.pdf",
    leaselink: "https://www.leaselink.info/",
    modelsight: "https://www.modelsight.net",
  },
};

export interface Chapter {
  n: string;
  title: string;
  italic?: string;
  blurb: string;
  tags: string[];
  year: string;
  stack: string;
  details: string[];
  links?: { label: string; href: string }[];
}

// Five chapters: how I think, build and operate.
export const chapters: Chapter[] = [
  {
    n: "01",
    title: "LeaseLink",
    blurb:
      "A university-focused sublease marketplace solving trust and fragmentation in student housing. Shipped full-stack web and mobile, hit 250+ MVP users, and got inbound interest from 20+ universities.",
    tags: ["Product", "Marketplace", "0→1"],
    year: "2025 →",
    stack: "React · Flutter · Supabase",
    details: [
      "Defined the product strategy, roadmap and go-to-market, then built web and mobile end to end.",
      "Launched at USF and reached 250+ users, enough pull from 20+ other universities to drive a nationwide rebuild.",
      "Talked to 50+ students before writing code. Still the best decision on the project.",
    ],
    links: [{ label: "leaselink.info", href: "https://www.leaselink.info/" }],
  },
  {
    n: "02",
    title: "ModelSight",
    blurb:
      "LLM observability for production: prompt and response drift, hallucination detection, automated evals and reliability alerting. Multi-tenant from day one. Side project, AI-native at the core.",
    tags: ["AI", "Observability", "Backend"],
    year: "2026 →",
    stack: "FastAPI · Next.js · PostgreSQL",
    details: [
      "A fault-tolerant LLM proxy that sits between apps and model providers and watches every call.",
      "CI/CD evaluation and alerting pipelines catch quality regressions before users do.",
      "Lesson so far: preventing bad output upstream beats detecting it afterwards.",
    ],
    links: [
      { label: "modelsight.net", href: "https://www.modelsight.net" },
      { label: "code", href: "https://github.com/theharshitsuri/modelsight" },
    ],
  },
  {
    n: "03",
    title: "Bank of America",
    blurb:
      "Joined full-time after interning in summer ’25. Shipped a Confluence→SharePoint automation dashboard projected to save 100+ team-hours a month, and led an Angular v13→v20 migration across the enterprise front end.",
    tags: ["Enterprise", "Automation", "Fintech"],
    year: "2025 →",
    stack: "Java · Angular · Python · SQL",
    details: [
      "Now building internal system-management apps, REST APIs and SQL workflows for enterprise technology environments.",
      "As an intern, took the dashboard from requirements with product owners to a working prototype in six weeks.",
      "Moved the Angular architecture seven major versions forward, improving maintainability and test stability.",
    ],
  },
  {
    n: "04",
    title: "Delta Air Lines",
    blurb:
      "Predictive Technology org. Built an internal SQL automation tool that cut manual operational work by 60% across 5 departments, and mapped data lineage for 100+ systems feeding LSTM forecasting.",
    tags: ["Ops", "Data", "Forecasting"],
    year: "2025",
    stack: "SQL · Python · LSTM",
    details: [
      "The tool replaced hand-entered operational data for five departments.",
      "Did the data analysis and feature engineering behind LSTM forecasting models for operational planning.",
      "Lesson: boring tools that save time beat flashy features nobody uses.",
    ],
  },
  {
    n: "05",
    title: "TEDxUSF",
    italic: " & leadership",
    blurb:
      "Vice President — led a 17-person team, ran a $7K+ budget, and produced events for 150+ attendees. Separately, secured $10K in corporate partnerships as VP External Affairs at SHPE.",
    tags: ["Leadership", "Ops", "Partnerships"],
    year: "2023–25",
    stack: "Strategy · Partnerships",
    details: [
      "TEDxUSF: coordinated the team, budget and logistics for keynote events.",
      "SHPE: led a team of 9 to land 20+ partnerships, driving 30% chapter growth.",
      "Lesson: delegation is a skill. I learned it the hard way by trying to do everything myself.",
    ],
  },
];

// Everything else, kept short.
export const moreWork = [
  { title: "MarketHours", note: "AI trading social network, React Native", href: "https://github.com/theharshitsuri/markethours" },
  { title: "TheraWise", note: "AI mental-health companion, Flutter", href: "https://github.com/theharshitsuri/TheraWise" },
  { title: "Preppify", note: "AI interview coach, Flutter", href: "https://github.com/theharshitsuri/Preppify" },
  { title: "Loan Origination Software", note: "Full-stack mortgage processing", href: "https://github.com/theharshitsuri/Loan_Origination_Software" },
  { title: "RISC-V Architecture Guide", note: "1,000+ downloads", href: "https://drive.google.com/file/d/1WmUzMAmjydIloqXOaQMEGL0ga0i48t84/view" },
  { title: "Excel for Data Analytics", note: "500+ downloads", href: "https://drive.google.com/file/d/13RMZrJ-_y6Uzc16ad1KGfD_Sng4ETWH4/view" },
];

export const experience = [
  {
    period: "2026 — Now",
    company: "Bank of America",
    role: "Software Engineer",
    text: "Returned full-time after interning in summer ’25. Building internal system-management apps in Java and Angular, plus the REST APIs, backend services and SQL workflows that connect them to enterprise platforms — uptime, observability and migration discipline as the floor, not the ceiling.",
  },
  {
    period: "Summer 2025",
    company: "Bank of America",
    role: "Software Engineering Intern",
    text: "Designed a Confluence → SharePoint automation dashboard in Python and Angular, projected to save 100+ team-hours a month. Migrated the enterprise Angular front end from v13 to v20, and delivered a prototype in six weeks.",
  },
  {
    period: "Spring 2025",
    company: "Delta Air Lines",
    role: "SWE Intern — Predictive Technology",
    text: "Built a SQL-based internal automation tool that cut manual operational work by 60% across 5 departments. Supported LSTM forecasting and mapped data lineage for 100+ systems.",
  },
  {
    period: "Summer 2024",
    company: "RegDev",
    role: "Technical Product Management Intern",
    text: "Defined workflow requirements, ran end-user interviews, designed interfaces, and built automation pipelines that cut manual processing by 80%. PDF-heavy domain, real users, real friction removed.",
  },
  {
    period: "Summer 2023",
    company: "Gupshup",
    role: "AI Engineering Intern",
    text: "Automated processing for 10,000+ chatbot responses with Python, Pandas and regex, and improved accuracy and latency with ReAct prompting — my first real lesson in making LLMs behave in production.",
  },
  {
    period: "2022 — 2026",
    company: "University of South Florida",
    role: "BS Computer Science · Summa cum laude · 3.91",
    text: "Presidential Scholar and Dean’s List. TEDxUSF Vice President, SHPE VP External Affairs, resident assistant and teaching assistant — and the campus was the first deployment surface for my product ideas.",
  },
];

export const principles = [
  { title: "Reduce friction", text: "The best software doesn’t add features. It removes the steps you didn’t realize you were tolerating." },
  { title: "Systems over features", text: "Look for the right unit of abstraction. Solve the problem one level deeper than the symptom suggests." },
  { title: "Ship to learn", text: "Iteration beats theory. Put something real in front of a real person — that’s where direction comes from." },
  { title: "AI as a primitive", text: "Models are a new substrate. The interesting work is in the workflow on top, not the model below." },
];

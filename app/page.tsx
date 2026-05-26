"use client";

import { useState } from "react";

const briefs = {
  swe: {
    tab: "Software Engineering",
    kicker: "Recommended read",
    title: "A software engineer who understands systems and users.",
    body:
      "Harshit has shipped production-style tooling across enterprise environments and personal products: Angular modernization, SQL automation, full-stack marketplaces, backend infrastructure, and internal platforms that reduce operational friction.",
    tags: ["Python", "SQL", "Angular", "React", "FastAPI"],
    proof: [
      ["Bank of America", "Angular v13 to v20 migration and automation dashboard prototype delivered in 6 weeks."],
      ["Delta Air Lines", "SQL automation reduced manual operational work by 60% across 5 departments."],
      ["LeaseLink", "Full-stack web and mobile product acquired 250+ MVP users."],
    ],
  },
  ai: {
    tab: "AI Systems",
    kicker: "AI systems angle",
    title: "A builder focused on reliability, observability, and workflow automation.",
    body:
      "The AI thread is practical: LLM observability, hallucination detection concepts, automated evaluation pipelines, ReAct prompt optimization, NLP coursework, forecasting support, and data systems that help teams trust outputs.",
    tags: ["LLM Monitoring", "Prompt Engineering", "NLP", "Forecasting", "AI Evaluation"],
    proof: [
      ["ModelSight", "Designed around prompt drift, response drift, hallucination checks, traceability, and reliability alerts."],
      ["Gupshup", "Automated 10,000+ chatbot response workflows and improved model accuracy and latency."],
      ["Delta Air Lines", "Supported feature engineering and LSTM forecasting workflows for operational planning."],
    ],
  },
  product: {
    tab: "Product Engineering",
    kicker: "Product engineering angle",
    title: "A product-minded engineer who can decide what to build and then ship it.",
    body:
      "Harshit has worked across discovery, stakeholder interviews, roadmap planning, go-to-market thinking, interface design, and implementation. The result is a profile that can move from ambiguous user pain to working software.",
    tags: ["Product Discovery", "Roadmaps", "UX Iteration", "Stakeholders", "Full-Stack"],
    proof: [
      ["RegDev", "Conducted end-user interviews and feedback cycles to improve usability and workflow alignment."],
      ["LeaseLink", "Led product strategy, engineering, roadmap planning, and user acquisition direction."],
      ["Bank of America", "Collaborated with product owners and stakeholders to deliver a production-ready prototype."],
    ],
  },
  leadership: {
    tab: "Leadership",
    kicker: "Leadership angle",
    title: "A technical contributor with operational leadership reps.",
    body:
      "Beyond engineering, Harshit has led event operations, partnership outreach, tutoring, and student-facing programs. That matters because technical projects still need communication, trust, and execution discipline.",
    tags: ["Operations", "Partnerships", "Mentorship", "Communication", "Execution"],
    proof: [
      ["TEDxUSF", "Led a 17-member operations and logistics team for keynote events with 150+ attendees."],
      ["SHPE USF", "Cultivated over $10,000 in corporate partnerships and directed external affairs."],
      ["USF Tutor", "Guided 15+ students weekly through engineering and computer science coursework."],
    ],
  },
} as const;

const archive = [
  {
    label: "Product - Students",
    title: "LeaseLink: Student Sublease Marketplace",
    body: "Built a student sublease marketplace with secure authentication, dynamic listing management, and a real-time database. Active users across 3 universities.",
    tags: ["React", "Firebase", "Auth", "Real-Time DB"],
    link: "https://www.leaselink.info/",
    action: "Live demo",
  },
  {
    label: "Product - AI Engineers",
    title: "ModelSight: LLM Observability Platform",
    body: "Multi-tenant AI safety and observability platform for prompt optimization, hallucination monitoring, cost tracking, and enterprise LLM monitoring across providers.",
    tags: ["FastAPI", "Next.js", "AI/ML", "PostgreSQL"],
    link: "https://github.com/theharshitsuri/modelsight",
    action: "Code",
  },
  {
    label: "Product - Retail Traders",
    title: "MarketHours: AI Trading Social Network",
    body: "Full-stack trading platform with AI-powered signals, real-time market data across stocks, forex, and crypto, social feed, portfolio tracking, alerts, and notifications.",
    tags: ["React Native", "Node.js", "MongoDB", "WebSockets"],
    link: "https://github.com/theharshitsuri/markethours",
    action: "Code",
  },
  {
    label: "Product - Mental Health",
    title: "TheraWise: AI Mental Health Companion",
    body: "AI-powered virtual therapist concept with personalized CBT exercises, mood tracking, stress-relief strategies, and mobile-first interaction design.",
    tags: ["Flutter", "OpenAI", "SQLite", "Mobile"],
    link: "https://github.com/theharshitsuri/TheraWise",
    action: "Code",
  },
  {
    label: "Product - Education",
    title: "Preppify: AI Interview Coach",
    body: "Flutter interview-prep app with Firebase authentication and LLM-powered mock interviews across finance, CS, math, and engineering with real-time feedback.",
    tags: ["Flutter", "Firebase", "LLM", "Education"],
    link: "https://github.com/theharshitsuri/Preppify",
    action: "Code",
  },
  {
    label: "Enterprise - Bank of America",
    title: "Autobot Platform",
    body: "Enhanced an enterprise automation platform for 1000+ system deployments and optimized the Angular front end, reducing UI latency by 30%.",
    tags: ["Angular", "Automation", "Enterprise"],
    action: "Summer 2025",
  },
  {
    label: "Enterprise - Delta Air Lines",
    title: "Predictive SQL Tool",
    body: "Built an internal SQL tool that cut manual entry by 60% across 5 departments while supporting data analysis and feature engineering for LSTM forecasting.",
    tags: ["SQL", "Python", "LSTM", "Data"],
    action: "Spring 2025",
  },
  {
    label: "Enterprise - RegDev",
    title: "Workflow Automation Platform",
    body: "Led work on a workflow automation tool with an intuitive PDF and data viewing interface that reduced manual data entry time by 80%.",
    tags: ["Python", "PDF", "Automation", "UX"],
    action: "Summer 2024",
  },
  {
    label: "Leadership - TEDxUSF",
    title: "VP Operations",
    body: "Led a 17-person team to execute TEDx programming, manage a $7K+ operating budget, and coordinate logistics for 150+ attendees.",
    tags: ["Leadership", "Events", "Operations"],
    action: "Ongoing",
  },
  {
    label: "Leadership - SHPE",
    title: "Corporate Partnerships",
    body: "Served as VP of External Affairs, secured $10K+ in partnerships, and helped organize a club-led career fair with 5+ companies and 200+ attendees.",
    tags: ["Partnerships", "Leadership", "Events"],
    action: "2023-2024",
  },
  {
    label: "Automation - Data",
    title: "Automated Data Processing Script",
    body: "Python automation for processing 10,000+ CSV entries with smart column detection using Pandas, Regex, and BeautifulSoup.",
    tags: ["Python", "Pandas", "Automation"],
    action: "10K+ entries",
  },
  {
    label: "Full-stack - Finance",
    title: "Loan Origination Software",
    body: "Mortgage processing system with secure authentication, role-based access, and dynamic database views for loan workflow management.",
    tags: ["Full-stack", "Auth", "Database"],
    link: "https://github.com/theharshitsuri/Loan_Origination_Software",
    action: "Code",
  },
  {
    label: "Technical writing - Architecture",
    title: "RISC-V Architecture Guide",
    body: "Comprehensive beginner guide to RISC-V assembly language and computer architecture, designed to make low-level systems concepts easier to learn.",
    tags: ["Technical Writing", "Education", "Architecture"],
    link: "https://drive.google.com/file/d/1WmUzMAmjydIloqXOaQMEGL0ga0i48t84/view",
    action: "Live demo",
  },
  {
    label: "Technical writing - Data",
    title: "Excel for Data Analytics Guide",
    body: "Business analytics guide covering PivotTables, Power Query, financial modeling, and practical spreadsheet workflows for analysis.",
    tags: ["Technical Writing", "Data", "Business"],
    link: "https://drive.google.com/file/d/13RMZrJ-_y6Uzc16ad1KGfD_Sng4ETWH4/view",
    action: "Live demo",
  },
];

const experience = [
  {
    date: "Jun 2025 - Aug 2025",
    title: "Software Engineering Intern - Bank of America",
    body: "Designed a Confluence-SharePoint automation dashboard using Python and Angular, projected to save 100+ team hours per month. Migrated enterprise Angular frontend architecture from v13 to v20.",
    tags: ["Python", "Angular", "Enterprise Automation", "UI Optimization"],
  },
  {
    date: "Jan 2025 - May 2025",
    title: "Software Engineering Intern, Predictive Technology - Delta Air Lines",
    body: "Built a SQL-based internal automation tool that reduced manual operational work by 60% across 5 departments. Supported LSTM forecasting workflows and mapped lineage for 100+ systems.",
    tags: ["SQL", "Forecasting", "LSTM", "Data Engineering"],
  },
  {
    date: "May 2024 - Aug 2024",
    title: "Technical Product Management Intern - RegDev",
    body: "Defined workflow requirements, conducted end-user interviews, designed interfaces, and built automation pipelines that reduced processing overhead by 80%.",
    tags: ["Python", "OCR", "Product Management", "Workflow Automation"],
  },
  {
    date: "May 2023 - Jul 2023",
    title: "AI Engineering Intern - Gupshup",
    body: "Automated processing and formatting workflows for 10,000+ chatbot responses using Python, Pandas, and Regex. Improved model accuracy and latency using ReAct prompt strategies.",
    tags: ["Python", "Pandas", "NLP", "Prompt Engineering"],
  },
];

const skills = [
  ["Languages", "Python, SQL, JavaScript, Java, C/C++, HTML/CSS"],
  ["Frameworks", "React, Flutter, Angular, FastAPI, Firebase, Supabase, Git"],
  ["AI & Data", "Prompt Engineering, NLP, Forecasting Models, Data Analysis, Workflow Automation"],
  ["Product", "Product Discovery, Stakeholder Communication, UX Iteration, Technical Product Management"],
];

function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-xs text-[#f8f3e8]">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeBrief, setActiveBrief] = useState<keyof typeof briefs>("swe");
  const brief = briefs[activeBrief];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080806] text-[#f8f3e8]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(127,183,255,0.14),transparent_26rem),radial-gradient(circle_at_16%_82%,rgba(90,167,255,0.13),transparent_28rem),linear-gradient(135deg,#080806_0%,#10120f_56%,#080806_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(248,243,232,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(248,243,232,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />

      <header className="sticky top-0 z-20 mx-auto grid w-[min(1200px,calc(100%-32px))] grid-cols-[1fr_auto_1fr] items-center gap-5 py-4 backdrop-blur-xl max-lg:grid-cols-[1fr_auto]">
        <a className="flex items-center gap-3 font-black" href="#">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#5aa7ff] text-[#08100c]">HS</span>
          <span>Harshit Suri</span>
        </a>
        <nav className="flex gap-1 rounded-full border border-white/15 bg-white/[0.05] p-1.5 max-lg:hidden">
          {["Brief", "Cases", "Experience", "Stack"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-[#a9aa9f] hover:bg-white/10 hover:text-[#f8f3e8]">
              {item}
            </a>
          ))}
        </nav>
        <a className="justify-self-end rounded-full bg-[#f8f3e8] px-5 py-3 font-black text-[#080806]" href="mailto:harshitsinghsuri@usf.edu">
          Email
        </a>
      </header>

      <section className="mx-auto grid min-h-[88vh] w-[min(1200px,calc(100%-32px))] grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] items-center gap-10 py-16 max-lg:grid-cols-1">
        <div className="min-w-0">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-[#5aa7ff]">CS + Product Engineer - AI Systems Builder - USF 2026</p>
          <h1 className="mb-5 max-w-[9.2ch] text-[clamp(3.25rem,6vw,6.4rem)] font-black leading-[0.92] tracking-normal">
            Proof that engineering judgment can move the business.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[#a9aa9f]">
            I build software where the hard part is not only writing code, but deciding what should exist, who it helps, how it scales, and how to prove it worked.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="rounded-full bg-[#5aa7ff] px-5 py-3 font-black text-[#07100d]" href="#brief">Generate your brief</a>
            <a className="rounded-full border border-white/15 bg-white/[0.075] px-5 py-3 font-black" href="https://github.com/theharshitsuri" target="_blank" rel="noreferrer">GitHub</a>
            <a className="rounded-full border border-white/15 bg-white/[0.075] px-5 py-3 font-black" href="https://www.linkedin.com/in/harshitsuri" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="rounded-full border border-white/15 bg-white/[0.075] px-5 py-3 font-black" href="mailto:harshitsinghsuri@usf.edu">Contact</a>
          </div>
        </div>

        <aside className="relative min-h-[650px] overflow-hidden rounded-lg border border-white/15 bg-white/[0.055] shadow-2xl max-lg:min-h-[520px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_32%,rgba(90,167,255,0.3),transparent_18rem),linear-gradient(135deg,rgba(90,167,255,0.08),transparent_42%),linear-gradient(90deg,rgba(248,243,232,0.05)_1px,transparent_1px),linear-gradient(rgba(248,243,232,0.05)_1px,transparent_1px)] bg-[size:auto,auto,58px_58px,58px_58px]" />
          <div className="relative grid min-h-[650px] grid-rows-[auto_1fr_auto] gap-5 p-6 max-lg:min-h-[520px]">
            <div className="flex items-center justify-between gap-4 text-sm text-[#a9aa9f]">
              <span>Candidate decision brief</span>
              <span className="flex items-center gap-2 before:h-2 before:w-2 before:rounded-full before:bg-[#5aa7ff] before:shadow-[0_0_18px_#5aa7ff]">Available for 2026 roles</span>
            </div>
            <div className="self-end rounded-lg border border-white/15 bg-black/75 p-6 backdrop-blur-xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-[#a9aa9f]">Why this candidate</p>
              <h2 className="mb-4 text-[clamp(2rem,4vw,4.35rem)] font-black leading-[0.96]">Technical builder with product taste.</h2>
              <p className="leading-7 text-[#a9aa9f]">Enterprise internship experience, AI product work, measurable automation impact, and leadership outside the codebase.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {[
                ["Honors", "Summa cum laude"],
                ["MVP traction", "250+ users"],
                ["Automation", "100+ hrs/mo"],
              ].map(([label, value]) => (
                <div key={label} className="min-h-28 rounded-lg border border-white/15 bg-white/[0.06] p-4">
                  <span className="block text-xs font-black uppercase tracking-[0.11em] text-[#a9aa9f]">{label}</span>
                  <strong className="mt-3 block text-2xl leading-none">{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section id="brief" className="mx-auto w-[min(1200px,calc(100%-32px))] py-20">
        <div className="mb-6 grid grid-cols-[minmax(220px,0.45fr)_1fr] gap-7 max-lg:grid-cols-1">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5aa7ff]">Adaptive brief</p>
          <h2 className="text-[clamp(2.1rem,4.8vw,5.2rem)] font-black leading-none">Tell the page what you are looking for.</h2>
        </div>
        <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {(Object.keys(briefs) as Array<keyof typeof briefs>).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveBrief(key)}
              className={`rounded-full border px-5 py-3 transition hover:-translate-y-0.5 ${
                activeBrief === key ? "border-transparent bg-[#f3c969] font-black text-[#131006]" : "border-white/15 bg-white/[0.075] text-[#f8f3e8]"
              }`}
            >
              {briefs[key].tab}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1200px,calc(100%-32px))] grid-cols-2 gap-4 pb-20 max-lg:grid-cols-1">
        <article className="min-h-80 rounded-lg border border-white/15 bg-white/[0.075] p-7">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-[#5aa7ff]">{brief.kicker}</p>
          <h3 className="mb-4 text-[clamp(1.7rem,3vw,3.25rem)] font-black leading-none">{brief.title}</h3>
          <p className="leading-7 text-[#a9aa9f]">{brief.body}</p>
          <TagList tags={brief.tags} />
        </article>
        <aside className="grid gap-3 rounded-lg border border-white/15 bg-white/[0.075] p-7">
          {brief.proof.map(([title, body]) => (
            <div key={title} className="grid grid-cols-[120px_1fr] gap-3 rounded-lg border border-white/15 bg-black/25 p-4 max-sm:grid-cols-1">
              <strong className="text-[#5aa7ff]">{title}</strong>
              <p className="leading-7 text-[#a9aa9f]">{body}</p>
            </div>
          ))}
        </aside>
      </section>

      <section className="mx-auto grid w-[min(1200px,calc(100%-32px))] grid-cols-4 gap-3 pb-20 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          ["Education", "USF CS", "May 2026"],
          ["Academic signal", "Summa", "cum laude"],
          ["Enterprise reach", "100+", "systems mapped"],
          ["Community", "$10K+", "partnerships"],
        ].map(([label, top, bottom]) => (
          <article key={label} className="min-h-44 rounded-lg border border-white/15 bg-white/[0.075] p-6">
            <span className="block text-xs font-black uppercase tracking-[0.11em] text-[#a9aa9f]">{label}</span>
            <strong className="mt-9 block text-[clamp(1.9rem,3vw,3.25rem)] leading-none">
              {top}<br />{bottom}
            </strong>
          </article>
        ))}
      </section>

      <section id="cases" className="mx-auto w-[min(1200px,calc(100%-32px))] py-20">
        <SectionHead eyebrow="Case studies" title="Two projects that explain the operating style." />
        <div className="grid grid-cols-[1.05fr_0.95fr] gap-4 max-lg:grid-cols-1">
          {[
            ["0 to 1 marketplace", "LeaseLink", "Student housing and subleasing platform built around a real campus need. Led product strategy, roadmap, full-stack web and mobile development, go-to-market direction, and platform scaling.", ["React", "Flutter", "Supabase", "Real-Time Systems"], "250+ MVP users - interest from 20+ universities"],
            ["AI reliability infrastructure", "ModelSight", "Enterprise-focused LLM observability concept for prompt and response drift, hallucination detection, automated evaluations, reliability alerting, traceability, and compliance workflows.", ["FastAPI", "AI Evaluation", "LLM Monitoring", "Backend Infrastructure"], "Designed for production LLM behavior monitoring"],
          ].map(([label, title, body, tags, meta]) => (
            <article key={title as string} className="flex min-h-[430px] flex-col justify-between rounded-lg border border-white/15 bg-white/[0.075] p-7">
              <div>
                <span className="block text-xs font-black uppercase tracking-[0.11em] text-[#a9aa9f]">{label as string}</span>
                <h3 className="my-5 text-[clamp(2rem,4.3vw,4.2rem)] font-black leading-none">{title as string}</h3>
                <p className="leading-7 text-[#a9aa9f]">{body as string}</p>
              </div>
              <div>
                <TagList tags={tags as string[]} />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.11em] text-[#a9aa9f]">{meta as string}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1200px,calc(100%-32px))] py-20">
        <SectionHead eyebrow="Project archive" title="The broader body of work from products, internships, leadership, and writing." />
        <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-1">
          {archive.map((project) => (
            <article key={project.title} className="flex min-h-[300px] flex-col justify-between rounded-lg border border-white/15 bg-white/[0.075] p-6">
              <div>
                <span className="block text-xs font-black uppercase tracking-[0.11em] text-[#a9aa9f]">{project.label}</span>
                <h3 className="my-4 text-xl font-black leading-tight">{project.title}</h3>
                <p className="leading-7 text-[#a9aa9f]">{project.body}</p>
                <TagList tags={project.tags} />
              </div>
              {project.link ? (
                <a className="mt-5 w-fit rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm font-black" href={project.link} target="_blank" rel="noreferrer">
                  {project.action}
                </a>
              ) : (
                <span className="mt-5 w-fit rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm font-black">{project.action}</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto w-[min(1200px,calc(100%-32px))] py-20">
        <SectionHead eyebrow="Experience" title="Internship work with concrete operational impact." />
        <div className="grid gap-3">
          {experience.map((role) => (
            <article key={role.title} className="grid grid-cols-[210px_1fr] gap-6 rounded-lg border border-white/15 bg-white/[0.075] p-6 max-lg:grid-cols-1">
              <span className="text-xs font-black uppercase tracking-[0.11em] text-[#a9aa9f]">{role.date}</span>
              <div>
                <h3 className="mb-3 text-xl font-black">{role.title}</h3>
                <p className="leading-7 text-[#a9aa9f]">{role.body}</p>
                <TagList tags={role.tags} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="mx-auto w-[min(1200px,calc(100%-32px))] py-20">
        <SectionHead eyebrow="Stack" title="A builder profile that spans code, data, AI, and product decisions." />
        <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {skills.map(([title, body]) => (
            <article key={title} className="min-h-52 rounded-lg border border-white/15 bg-white/[0.075] p-6">
              <h3 className="mb-3 text-xl font-black text-[#5aa7ff]">{title}</h3>
              <p className="leading-7 text-[#a9aa9f]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto my-20 grid w-[min(1200px,calc(100%-32px))] grid-cols-[1fr_auto] items-center gap-6 rounded-lg border border-white/15 bg-white/[0.075] p-8 max-lg:grid-cols-1">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-[#5aa7ff]">Close the loop</p>
          <h2 className="mb-3 text-[clamp(2.1rem,4.8vw,5.2rem)] font-black leading-none">For teams that need someone who can build and reason.</h2>
          <p className="leading-7 text-[#a9aa9f]">Open to software engineering, AI systems, product engineering, and technical product roles.</p>
        </div>
        <div className="grid gap-3">
          <a className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center font-black" href="mailto:harshitsinghsuri@usf.edu">Email</a>
          <a className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center font-black" href="https://www.linkedin.com/in/harshitsuri" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-center font-black" href="https://github.com/theharshitsuri" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </main>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-7 grid grid-cols-[minmax(220px,0.45fr)_1fr] gap-7 max-lg:grid-cols-1">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5aa7ff]">{eyebrow}</p>
      <h2 className="text-[clamp(2.1rem,4.8vw,5.2rem)] font-black leading-none">{title}</h2>
    </div>
  );
}

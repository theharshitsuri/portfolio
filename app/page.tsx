import { experience, moreWork, personalInfo, principles } from "@/lib/data";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ChapterList from "@/components/ChapterList";

function SectionHead({ num, label, children }: { num: string; label: string; children: React.ReactNode }) {
  return (
    <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-[1fr_1.6fr] md:items-end">
      <Reveal>
        <p className="eyebrow">
          {num} — {label}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="h-section">{children}</h2>
      </Reveal>
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();
  const { links } = personalInfo;

  return (
    <>
      <Nav />

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
          <div aria-hidden className="hero-grid" />
          <div aria-hidden className="hero-glow" />

          <div className="col relative">
            <Reveal>
              <div className="mono mb-16 flex flex-col gap-1.5 text-[0.75rem] text-[var(--ink-faint)] sm:mb-24 sm:flex-row sm:justify-between">
                <span>
                  <span className="text-[var(--ink-dim)]">{personalInfo.initials}</span> · {personalInfo.location}
                </span>
                <span>Portfolio · v2026.10</span>
                <span>USF — Summa cum laude</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="display">
                Harshit
                <br />
                Suri<span className="text-[var(--accent)]">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="lead mt-12 max-w-[46rem] sm:mt-16">
                CS + Product Engineer. I build <span className="serif">AI-native</span> products,
                internal tools, and operational systems{" "}
                <span className="dim">
                  — software where the hard part isn&rsquo;t writing code, but deciding what should
                  exist, who it helps, and how to prove it worked.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mono mt-16 flex items-center gap-2.5 text-[0.75rem] text-[var(--ink-faint)] sm:mt-24">
                <span aria-hidden className="size-1.5 rounded-full bg-[var(--accent)]" />
                {personalInfo.now.role}
                <span className="text-[var(--ink)]">@ {personalInfo.now.org}</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-24 sm:py-36">
          <div className="col">
            <SectionHead num="02" label="Featured">
              Five chapters that show how I think,{" "}
              <span className="faint">build, and operate.</span>
            </SectionHead>

            <Reveal>
              <ChapterList />
            </Reveal>

            <Reveal className="mt-20 grid gap-8 md:grid-cols-[1fr_1.6fr]">
              <p className="eyebrow">Also built</p>
              <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {moreWork.map((w) => (
                  <li key={w.title}>
                    <a href={w.href} target="_blank" rel="noreferrer" className="group block">
                      <span className="chapter-title body font-medium text-[var(--ink)] group-hover:text-[var(--accent)]">
                        {w.title} <span className="mono text-[var(--ink-faint)]">↗</span>
                      </span>
                      <span className="small mt-0.5 block text-[var(--ink-faint)]">{w.note}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 sm:py-36">
          <div className="col">
            <SectionHead num="03" label="Selected experience">
              Trained inside enterprises. <span className="faint">Building like a founder.</span>
            </SectionHead>

            <ol className="border-t border-[var(--rule)]">
              {experience.map((e) => (
                <li key={e.company + e.period} className="border-b border-[var(--rule)]">
                  <Reveal className="grid gap-3 py-9 md:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1.5fr)] md:gap-10 md:py-11">
                    <p className="mono text-[0.75rem] text-[var(--ink-faint)] md:pt-2">{e.period}</p>
                    <div>
                      <h3 className="text-[1.75rem] font-medium leading-[1.1] tracking-[-0.025em]">
                        {e.company}
                      </h3>
                      <p className="mono mt-2 text-[0.75rem] text-[var(--ink-faint)]">{e.role}</p>
                    </div>
                    <p className="body mt-2 text-[var(--ink-dim)] md:mt-0">{e.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Philosophy */}
        <section id="about" className="border-y border-[var(--rule)] bg-[var(--bg-elev)] py-24 sm:py-36">
          <div className="col">
            <div className="mb-20 grid gap-8 md:grid-cols-[1fr_1.6fr] md:items-end">
              <Reveal>
                <p className="eyebrow">04 — Philosophy</p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-[clamp(1.75rem,3.6vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.028em]">
                  I&rsquo;m interested in software that <span className="serif">compresses complexity</span>{" "}
                  — tools that help small teams move with the cognitive overhead of one.
                </p>
              </Reveal>
            </div>

            <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p, i) => (
                <li key={p.title} className="border-t border-[var(--rule-strong)] pt-6">
                  <Reveal delay={i * 0.05}>
                    <p className="mono text-[0.75rem] text-[var(--accent)]">— 0{i + 1}</p>
                    <h3 className="mt-4 text-[1.25rem] font-medium tracking-[-0.018em]">{p.title}</h3>
                    <p className="body mt-2 text-[var(--ink-dim)]">{p.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-28 sm:py-40">
          <div className="col">
            <Reveal>
              <p className="eyebrow">05 — Contact</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-10 sm:mt-14">
                Have a problem worth <span className="serif">solving?</span>
                <br />
                <span className="dim">I&rsquo;m probably interested.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="email-link mt-14 inline-block break-all text-[clamp(1.5rem,4.4vw,3.5rem)] font-medium tracking-[-0.03em]"
              >
                {personalInfo.email}
              </a>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="link-row mt-14 flex flex-wrap gap-x-10 gap-y-3">
                <a href={links.linkedin} target="_blank" rel="noreferrer">↗ linkedin</a>
                <a href={links.github} target="_blank" rel="noreferrer">↗ github</a>
                <a href={links.resume} target="_blank" rel="noreferrer">↗ resume / pdf</a>
                <a href={links.leaselink} target="_blank" rel="noreferrer">↗ leaselink → live</a>
                <a href={links.modelsight} target="_blank" rel="noreferrer">↗ modelsight → live</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--rule)]">
        <div className="col mono flex flex-col gap-2 py-8 text-[0.75rem] text-[var(--ink-faint)] sm:flex-row sm:justify-between">
          <span>© {year} {personalInfo.name}</span>
          <span>USF ’26 · Summa cum laude · {personalInfo.location}</span>
          <a href="#top" className="nav-link transition-colors">↩ back to top</a>
        </div>
      </footer>
    </>
  );
}

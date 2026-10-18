import { ArrowUpRight } from "lucide-react";
import { experience, personalInfo, skills, stats } from "@/lib/data";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import WorkSection from "@/components/WorkSection";

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <h2 className="type-title-1 text-label">{title}</h2>
      <p className="type-body mt-3 text-label-2">{subtitle}</p>
    </Reveal>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav />

      <main id="top" className="mx-auto max-w-[61.25rem] px-5">
        {/* Hero */}
        <section className="pb-8 pt-32 sm:pb-12 sm:pt-44">
          <Reveal>
            <p className="type-footnote inline-flex items-center gap-2 font-medium text-label-2">
              <span aria-hidden className="size-2 rounded-full bg-green" />
              {personalInfo.availability}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="type-display mt-5 text-label">{personalInfo.name}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="type-title-2 mt-4 max-w-3xl text-label-2">
              I figure out what to build, why it matters, and then I ship it.
            </p>
            <p className="type-body mt-5 max-w-xl text-label-2">
              Computer Science at USF. Built products at Bank of America and Delta, and
              shipped my own from first interview to launch.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${personalInfo.email}`} className="pressable btn btn-primary">
              Email me
            </a>
            <a href="#work" className="pressable btn btn-secondary">
              See my work
            </a>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.2}>
            <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-separator pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col pr-4">
                  <dt className="type-footnote order-2 mt-1 text-label-2">{stat.label}</dt>
                  <dd className="type-title-1 tabular -order-1 text-label">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Work */}
        <section id="work" className="py-16 sm:py-24">
          <SectionHeader
            title="Work"
            subtitle="Products I've launched, tools I've built inside big companies, and the teams I've led. Including the ones that didn't take off."
          />
          <WorkSection />
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 sm:py-24">
          <SectionHeader
            title="Experience"
            subtitle="Four internships across banking, aviation and AI."
          />
          <Reveal>
            <ol className="card overflow-hidden">
              {experience.map((exp, i) => (
                <li
                  key={exp.company}
                  className="relative px-6 py-6 sm:px-8 sm:py-7"
                >
                  {i > 0 && (
                    // Inset separator, like a grouped list.
                    <span
                      aria-hidden
                      className="absolute inset-x-6 top-0 h-px bg-separator sm:inset-x-8"
                    />
                  )}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="type-headline text-label">{exp.company}</h3>
                      <p className="type-callout mt-0.5 text-label-2">{exp.role}</p>
                    </div>
                    <p className="type-footnote tabular shrink-0 text-label-3">{exp.period}</p>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="type-callout flex gap-3 text-label-2">
                        <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-label-3" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* Toolkit */}
        <section id="toolkit" className="py-16 sm:py-24">
          <SectionHeader title="Toolkit" subtitle="What I reach for, grouped by where it fits." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.categories.map((cat, i) => (
              <Reveal key={cat.name} delay={(i % 3) * 0.05} className="card p-6">
                <h3 className="type-caption uppercase tracking-[0.06em] text-label-3">
                  {cat.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="type-footnote rounded-full bg-fill px-3 py-1.5 font-medium text-label"
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 text-center sm:py-32">
          <Reveal>
            <h2 className="type-title-1 mx-auto max-w-2xl text-label">
              Let&rsquo;s build what&rsquo;s next.
            </h2>
            <p className="type-body mx-auto mt-4 max-w-md text-label-2">
              I&rsquo;m looking for new-grad PM and SWE roles starting in 2026. The fastest way
              to reach me is email.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${personalInfo.email}`} className="pressable btn btn-primary">
                {personalInfo.email}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-3">
              {[
                { href: personalInfo.links.linkedin, label: "LinkedIn", external: true },
                { href: personalInfo.links.github, label: "GitHub", external: true },
                { href: personalInfo.links.resume, label: "Résumé (SWE)" },
                { href: personalInfo.links.resumePM, label: "Résumé (PM)" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { target: "_blank" })}
                  className="link type-callout inline-flex items-center gap-0.5"
                >
                  {l.label}
                  <ArrowUpRight aria-hidden className="size-4" strokeWidth={2.25} />
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-separator">
        <div className="mx-auto flex max-w-[61.25rem] flex-col gap-1 px-5 py-6 sm:flex-row sm:justify-between">
          <p className="type-footnote text-label-3">
            © {year} {personalInfo.name}
          </p>
          <p className="type-footnote text-label-3">{personalInfo.location}</p>
        </div>
      </footer>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { personalInfo } from "@/lib/data";

const links = [
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#about", label: "about", wide: true },
  { href: personalInfo.links.resume, label: "resume", external: true },
];

export default function Nav() {
  // The edge line appears only once content actually sits under the bar.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "material fixed inset-x-0 top-0 z-50 transition-shadow duration-200",
        scrolled && "scroll-edge"
      )}
    >
      <nav aria-label="Primary" className="col flex h-15 items-center justify-between gap-4">
        <a href="#top" className="mono flex shrink-0 items-center gap-2.5 whitespace-nowrap text-[0.8125rem]">
          <span aria-hidden className="size-1.5 rounded-full bg-[var(--accent)]" />
          harshit suri
        </a>
        <div className="flex items-center gap-4 sm:gap-7">
          <ul className="flex items-center gap-3.5 sm:gap-7">
            {links.map((l) => (
              <li key={l.label} className={clsx(l.wide && "hidden sm:block")}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="nav-link mono text-[0.75rem] text-[var(--ink-dim)] transition-colors duration-150 sm:text-[0.8125rem]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="pressable pill hidden sm:inline-flex">
            say hello →
          </a>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { personalInfo } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Toolkit", hideOnSmall: true },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  // The scroll-edge line appears only once content actually sits under the bar.
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
      <nav
        aria-label="Primary"
        className="mx-auto flex h-13 max-w-[61.25rem] items-center justify-between gap-4 px-5"
      >
        <a
          href="#top"
          className="type-callout font-semibold tracking-[-0.015em] text-label"
        >
          {personalInfo.name}
        </a>
        <ul className="flex items-center gap-5 sm:gap-7">
          {links.map((link) => (
            <li key={link.href} className={clsx(link.hideOnSmall && "hidden sm:block")}>
              <a
                href={link.href}
                className="nav-link type-footnote text-label-2 transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

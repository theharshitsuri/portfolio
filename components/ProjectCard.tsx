"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import clsx from "clsx";
import type { Ticket, TicketStatus, TicketType } from "@/lib/data";

const statusMeta: Record<TicketStatus, { label: string; dot: string }> = {
  SHIPPED: { label: "Shipped", dot: "bg-green" },
  IN_PROGRESS: { label: "In progress", dot: "bg-accent" },
  SHIPPED_MOSTLY: { label: "Mostly shipped", dot: "bg-orange" },
  FAILED_LEARNED: { label: "Didn't work out", dot: "bg-red" },
  ARCHIVED: { label: "Archived", dot: "bg-label-3" },
};

const typeLabel: Record<TicketType, string> = {
  PRODUCT: "Product",
  FEATURE: "Feature",
  TOOL: "Tool",
  RESEARCH: "Writing",
};

export default function ProjectCard({ project }: { project: Ticket }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const status = statusMeta[project.status];

  return (
    <article className="card flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <p className="type-caption text-label-3">
          {typeLabel[project.type]} · For {project.persona}
        </p>
        <span className="type-caption inline-flex shrink-0 items-center gap-1.5 text-label-2">
          <span aria-hidden className={clsx("size-1.5 rounded-full", status.dot)} />
          {status.label}
        </span>
      </div>

      <h3 className="type-headline mt-3 text-label">{project.title}</h3>
      <p className="type-callout mt-2 text-label-2">{project.description}</p>

      {project.metrics && (
        <p className="type-callout mt-4 font-semibold text-label">{project.metrics}</p>
      )}

      <p className="type-footnote mt-1 text-label-3">
        {project.timeline} · {project.tags.join(", ")}
      </p>

      <div className="mt-auto pt-5">
        {project.learnings && (
          <>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
              className="pressable -mx-2 inline-flex min-h-9 items-center gap-1 rounded-lg px-2 type-footnote font-medium text-label-2 hover:text-label"
            >
              What I learned
              <motion.span
                aria-hidden
                animate={{ rotate: open ? 180 : 0 }}
                className="inline-flex"
              >
                <ChevronDown className="size-4" strokeWidth={2.25} />
              </motion.span>
            </button>

            {/* Height animates on a spring from wherever it is, so a second
                tap mid-animation reverses smoothly. */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  key="learnings"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="type-callout mt-2 rounded-xl bg-fill px-4 py-3 text-label">
                    {project.learnings}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {(project.link || project.github) && (
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link type-callout inline-flex items-center gap-0.5"
              >
                {project.type === "RESEARCH" ? "Read the guide" : "Visit site"}
                <ArrowUpRight aria-hidden className="size-4" strokeWidth={2.25} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link type-callout inline-flex items-center gap-0.5"
              >
                View code
                <ArrowUpRight aria-hidden className="size-4" strokeWidth={2.25} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

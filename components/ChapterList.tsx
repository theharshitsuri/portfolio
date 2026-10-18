"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { chapters, type Chapter } from "@/lib/data";

function ChapterRow({
  chapter,
  open,
  onToggle,
}: {
  chapter: Chapter;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <li className="border-b border-[var(--rule)]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="chapter-row group grid w-full cursor-pointer grid-cols-[1fr_auto] gap-x-6 gap-y-4 py-9 text-left [-webkit-tap-highlight-color:transparent] md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1.3fr)_minmax(0,1fr)_4.5rem] md:items-center md:gap-x-8 md:py-12"
      >
        <span className="mono col-start-1 text-[0.75rem] text-[var(--ink-faint)] md:self-start md:pt-1">
          — {chapter.n}
        </span>
        <span className="mono col-start-2 row-start-1 flex flex-col items-end gap-2 text-right text-[0.75rem] text-[var(--ink-faint)] md:col-start-5">
          {chapter.year}
          <span aria-hidden className="chapter-arrow hidden text-[0.875rem] md:block">
            {open ? "−" : "+"}
          </span>
        </span>

        <h3 className="chapter-title h-chapter col-span-2 md:col-span-1 md:col-start-2 md:row-start-1">
          {chapter.title}
          {chapter.italic && <span className="serif">{chapter.italic}</span>}
        </h3>

        <p className="body col-span-2 text-[var(--ink-dim)] md:col-span-1 md:col-start-3 md:row-start-1">
          {chapter.blurb}
        </p>

        <span className="col-span-2 flex flex-wrap items-center gap-1.5 md:col-span-1 md:col-start-4 md:row-start-1">
          {chapter.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
          <span className="chapter-arrow mono ml-auto text-[0.75rem] text-[var(--ink-faint)] md:hidden">
            {open ? "close −" : "more +"}
          </span>
        </span>
      </button>

      {/* Height and opacity ride the default critically damped spring.
          Tapping again mid-animation reverses from wherever it is. */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 pb-10 md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,2.3fr)_4.5rem] md:gap-x-8">
              <div className="hidden md:block" />
              <p className="eyebrow md:pt-1">{chapter.stack}</p>
              <div>
                <ul className="space-y-3">
                  {chapter.details.map((d) => (
                    <li key={d} className="body flex gap-3 text-[var(--ink)]">
                      <span aria-hidden className="mono pt-px text-[var(--accent)]">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
                {chapter.links && (
                  <div className="link-row mt-6 flex flex-wrap gap-x-7 gap-y-2">
                    {chapter.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                        ↗ {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function ChapterList() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ol className="border-t border-[var(--rule)]">
      {chapters.map((c) => (
        <ChapterRow
          key={c.n}
          chapter={c}
          open={openId === c.n}
          onToggle={() => setOpenId((cur) => (cur === c.n ? null : c.n))}
        />
      ))}
    </ol>
  );
}

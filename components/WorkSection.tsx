"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { tickets, workFilters, type WorkFilter } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SegmentedControl from "./SegmentedControl";

export default function WorkSection() {
  const [filter, setFilter] = useState<WorkFilter>("all");

  const visible =
    filter === "all" ? tickets : tickets.filter((t) => t.category === filter);

  return (
    <>
      <SegmentedControl
        label="Filter projects"
        options={workFilters}
        value={filter}
        onChange={setFilter}
      />

      <p className="type-footnote mt-3 text-label-3 tabular" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      {/* Cards that stay keep their place and glide to their new slot;
          cards that leave fade and shrink slightly in place. */}
      <motion.ul layout className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}

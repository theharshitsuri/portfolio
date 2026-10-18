"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { useId } from "react";
import { springSnappy } from "@/lib/motion";

interface Option<T extends string> {
  id: T;
  label: string;
}

// iOS-style segmented control. The thumb is a shared layout element, so it
// slides from wherever it currently is. Tapping again mid-slide retargets the
// spring from its live position instead of jumping.
export default function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly Option<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
}) {
  const layoutId = useId();

  return (
    <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div
        role="radiogroup"
        aria-label={label}
        className="inline-flex rounded-[0.6875rem] bg-fill p-[0.1875rem]"
      >
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              // Respond on press, not release.
              onPointerDown={(e) => {
                if (e.button === 0) onChange(option.id);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onChange(option.id);
                }
              }}
              className={clsx(
                "pressable relative min-h-8 whitespace-nowrap rounded-[0.5rem] px-4 type-footnote font-medium",
                selected ? "text-label" : "text-label-2"
              )}
            >
              {selected && (
                <motion.span
                  layoutId={layoutId}
                  transition={springSnappy}
                  className="absolute inset-0 rounded-[0.5rem] bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_1px_rgba(0,0,0,0.04)] dark:bg-[#636366]"
                />
              )}
              <span className="relative">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

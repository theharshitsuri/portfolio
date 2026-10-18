"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";
import { spring } from "@/lib/motion";

// Every motion default is the critically damped spring in lib/motion.
// reducedMotion="user" swaps transforms for opacity-only changes
// when the visitor has asked for reduced motion.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={spring}>
      {children}
    </MotionConfig>
  );
}

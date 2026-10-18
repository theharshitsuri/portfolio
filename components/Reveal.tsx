"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { spring } from "@/lib/motion";

// A quiet entrance: a short rise plus fade, on the default critically damped spring.
// Under reduced motion, MotionConfig drops the rise and keeps the fade.
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ ...spring, duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

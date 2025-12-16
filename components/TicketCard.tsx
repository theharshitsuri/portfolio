"use client";

import { Ticket } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";

const statusConfig = {
  SHIPPED: {
    label: "SHIPPED",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    borderColor: "border-l-emerald-500",
    glow: "shadow-emerald-500/20"
  },
  IN_PROGRESS: {
    label: "IN PROGRESS",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    borderColor: "border-l-blue-500",
    glow: "shadow-blue-500/20"
  },
  SHIPPED_MOSTLY: {
    label: "SHIPPED (mostly)",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    borderColor: "border-l-yellow-500",
    glow: "shadow-yellow-500/20"
  },
  FAILED_LEARNED: {
    label: "FAILED (learned tons)",
    color: "bg-red-500/20 text-red-400 border-red-500/30",
    borderColor: "border-l-red-500",
    glow: "shadow-red-500/20"
  },
  ARCHIVED: {
    label: "ARCHIVED",
    color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    borderColor: "border-l-gray-500",
    glow: "shadow-gray-500/20"
  }
};

const priorityConfig = {
  P0: { label: "P0", color: "bg-red-500", ring: "ring-red-500/50" },
  P1: { label: "P1", color: "bg-orange-500", ring: "ring-orange-500/50" },
  P2: { label: "P2", color: "bg-blue-500", ring: "ring-blue-500/50" },
  P3: { label: "P3", color: "bg-gray-500", ring: "ring-gray-500/50" }
};

const typeIcons = {
  FEATURE: "",
  PRODUCT: "",
  RESEARCH: "",
  TOOL: ""
};

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const status = statusConfig[ticket.status];
  const priority = priorityConfig[ticket.priority];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
      }}
      className={`
        bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl
        rounded-2xl border border-white/20 ${status.borderColor} border-l-4 
        overflow-hidden cursor-pointer transition-all duration-300
        hover:border-white/30 hover:bg-white/15
        ${status.glow} shadow-2xl
      `}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header Bar */}
      <div className="bg-black/30 px-4 py-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-blue-400">{ticket.id}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${status.color}`}>
            {status.label}
          </span>
          <div className={`w-2.5 h-2.5 rounded-full ${priority.color} ring-2 ${priority.ring} animate-pulse`} title={priority.label}></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">{ticket.type}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">
          {ticket.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{ticket.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {ticket.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
          {ticket.metrics && (
            <div className="bg-white/5 px-3 py-1.5 rounded-lg">
              <span className="text-emerald-300 font-medium">{ticket.metrics}</span>
            </div>
          )}
          <div className="bg-white/5 px-3 py-1.5 rounded-lg">
            <span className="text-blue-300 font-medium">{ticket.timeline}</span>
          </div>
        </div>

        {/* Learnings (Expanded) */}
        {isExpanded && ticket.learnings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-4 bg-blue-500/10 rounded-xl border-l-2 border-blue-400 backdrop-blur-sm"
          >
            <div className="mb-2">
              <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Lessons Learned</p>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">{ticket.learnings}</p>
          </motion.div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-4">
          {ticket.link && (
            <a
              href={ticket.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30"
            >
              Live Demo
            </a>
          )}
          {ticket.github && (
            <a
              href={ticket.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 bg-white/10 text-white rounded-lg text-xs font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { problemCategories } from "@/lib/data";
import { motion } from "framer-motion";

interface ProblemSelectorProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProblemSelector({ selectedCategory, onSelectCategory }: ProblemSelectorProps) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          What problem are you solving today?
        </h2>
        <p className="text-gray-400 text-lg">Pick what matters to you, and I'll show you the relevant work.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {problemCategories.map((category, idx) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCategory(category.id)}
            className={`
              p-6 rounded-2xl text-left transition-all duration-300
              ${selectedCategory === category.id
                ? "bg-blue-600/20 border-2 border-blue-500 shadow-2xl shadow-blue-500/30"
                : "bg-white/5 backdrop-blur-lg border-2 border-white/10 hover:border-white/30 hover:bg-white/10"
              }
            `}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-white mb-2 text-lg">{category.title}</h3>
                <p className="text-sm text-gray-300">{category.description}</p>
              </div>
              {selectedCategory === category.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/30"
                />
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MetaAnalytics() {
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Time tracker
    const interval = setInterval(() => {
      setTimeOnPage((prev) => prev + 1);
    }, 1000);

    // Scroll tracker
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const depth = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
      setScrollDepth(Math.min(depth, 100));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence>
        {!isMinimized ? (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-5 w-80"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <h3 className="font-bold text-sm text-white">PM Analysis: This Portfolio</h3>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-gray-400">User Problem:</span>
                <span className="font-medium text-white">"30s attention span"</span>
              </div>

              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-gray-400">Hypothesis:</span>
                <span className="font-medium text-white">Tickets = 3x engagement</span>
              </div>

              <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                <span className="text-gray-400">A/B Test:</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/30">
                  Running now
                </span>
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between p-2 bg-blue-500/10 rounded-lg">
                  <span className="text-gray-300">Time on Page:</span>
                  <span className="font-mono font-bold text-blue-400">{formatTime(timeOnPage)}</span>
                </div>

                <div className="flex items-center justify-between p-2 bg-purple-500/10 rounded-lg">
                  <span className="text-gray-300">Scroll Depth:</span>
                  <span className="font-mono font-bold text-purple-400">{scrollDepth}%</span>
                </div>
              </div>

              <div className="pt-2 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <div className="text-gray-400 mb-1 text-xs">Success Metric:</div>
                <div className="text-sm font-semibold text-white">
                  {timeOnPage > 30 ? "You're still reading this →" : "Keep reading..."}
                </div>
              </div>
            </div>

            <a
              href="mailto:harshitsinghsuri@usf.edu"
              className="mt-4 block w-full text-center px-4 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30"
            >
              Submit Feedback
            </a>
          </motion.div>
        ) : (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setIsMinimized(false)}
            className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-2xl shadow-blue-500/50 hover:bg-blue-500 hover:scale-110 transition-all text-xs font-semibold"
          >
            Analytics
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

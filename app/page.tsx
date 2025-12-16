"use client";

import { useState } from "react";
import { tickets, personalInfo, experience, skills } from "@/lib/data";
import TicketCard from "@/components/TicketCard";
import ProblemSelector from "@/components/ProblemSelector";
import MetaAnalytics from "@/components/MetaAnalytics";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("research");

  const filteredTickets = selectedCategory === "research" 
    ? tickets 
    : tickets.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Solid Background */}
      <div className="fixed inset-0 -z-10 bg-black" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="border-b border-white/10 backdrop-blur-sm bg-black/30">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full mb-4">
                  <span className="text-sm text-blue-300 font-semibold">Available for New Grad PM & SWE roles • 2026</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
                  {personalInfo.name}
                </h1>
                
                <p className="text-2xl md:text-3xl text-blue-400 font-bold mb-4">
                  {personalInfo.title}
                </p>
                
                <p className="text-gray-300 text-lg max-w-2xl mb-6 leading-relaxed whitespace-pre-line">
                  {personalInfo.bio}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all text-sm font-semibold shadow-lg shadow-blue-500/30"
                  >
                    Email Me
                  </a>
                  <a
                    href={personalInfo.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-xl hover:bg-white/20 transition-all text-sm font-semibold border border-white/20"
                  >
                    GitHub
                  </a>
                  <a
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-xl hover:bg-white/20 transition-all text-sm font-semibold border border-white/20"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personalInfo.links.resume}
                    download="Harshit_Suri_Resume_SWE.pdf"
                    className="px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-xl hover:bg-white/20 transition-all text-sm font-semibold border border-white/20"
                  >
                    Resume
                  </a>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-2xl p-8 rounded-2xl border border-white/20 shadow-2xl"
              >
                <div className="mb-4">
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Quick Stats</div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-400">4</div>
                      <div className="text-xs text-gray-400">Top Companies</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400">12+</div>
                      <div className="text-xs text-gray-400">Projects Shipped</div>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white">$10K+</div>
                      <div className="text-xs text-gray-400">Partnerships</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">200+</div>
                      <div className="text-xs text-gray-400">Event Attendees</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Problem Selector */}
        <ProblemSelector 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Tickets Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === "research" ? "All Projects" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Work`}
            </h2>
            <span className="text-sm text-gray-400 font-mono px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              {filteredTickets.length} ticket{filteredTickets.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTickets.map((ticket, idx) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <TicketCard ticket={ticket} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="text-blue-400 font-bold text-lg">{exp.company}</div>
                      <span className="text-gray-500">•</span>
                      <div className="text-gray-400 text-sm">{exp.period}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">Internship</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-8 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Skills & Tools</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm font-semibold border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-xl text-sm font-semibold border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-xl text-sm font-semibold border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-xl text-sm font-semibold border border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 backdrop-blur-sm bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {personalInfo.name}
          </p>
        </div>
      </footer>

      {/* Meta Analytics Widget */}
      <MetaAnalytics />
      </div>
    </div>
  );
}

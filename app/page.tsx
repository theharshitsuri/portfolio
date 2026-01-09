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

  // Timeline Node Component
  function TimelineNode({ exp, idx }: { exp: typeof experience[0]; idx: number }) {
    const isLeft = idx % 2 === 0;
    
    return (
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className={`relative flex items-start gap-8 ${
          isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        } flex-row pl-16 md:pl-0`}
      >
        {/* Content Card - Takes half width on desktop */}
        <div className={`flex-1 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="font-bold text-white text-xl mb-2">{exp.role}</h3>
                <div className="text-blue-400 font-semibold text-lg mb-1">{exp.company}</div>
                <div className="text-gray-500 text-sm font-mono">{exp.period}</div>
              </div>
            </div>
            
            {/* Highlights - Always Visible */}
            <div className="space-y-3">
              {exp.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Timeline Node - Centered */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-500 border-4 border-black shadow-lg shadow-blue-500/50 group z-10"
          >
            <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 group-hover:opacity-40" />
            <div className="relative flex items-center justify-center h-full">
              <span className="text-white font-bold text-sm md:text-base">{idx + 1}</span>
            </div>
          </motion.div>
          
          {/* Connecting Line to Card */}
          <div className={`absolute top-1/2 ${
            isLeft 
              ? 'left-full md:left-full ml-2 md:ml-2' 
              : 'right-full md:right-full mr-2 md:mr-2'
          } w-6 md:w-12 h-0.5 ${
            isLeft 
              ? 'bg-blue-500/50' 
              : 'bg-blue-500/50'
          }`} />
        </div>
        
        {/* Empty space for alternating layout on desktop */}
        <div className="hidden md:block flex-1 md:w-1/2" />
      </motion.div>
    );
  }

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
                      <div className="text-3xl font-bold text-white">$13K+</div>
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

        {/* Experience Section - Interactive Timeline */}
        <section className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
            <p className="text-gray-400 text-sm">My journey building products at scale</p>
          </div>
          
          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/40 transform md:-translate-x-1/2" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <TimelineNode key={idx} exp={exp} idx={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - Minimal Abstract */}
        <section className="mb-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Tools</h2>
            <p className="text-gray-400 text-sm">What I work with</p>
          </div>
          
          {/* Simple Tag Cloud */}
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.categories.map((category) => (
              category.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))
            ))}
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

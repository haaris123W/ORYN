import React from "react";
import { motion } from "motion/react";
import { projects } from "../data";
import { Project } from "../types";

interface WorkProps {
  onOpenProjectDetail: (project: Project) => void;
}

export default function Work({ onOpenProjectDetail }: WorkProps) {
  return (
    <section id="work" className="py-32 md:py-36 bg-white relative border-b border-zinc-200 overflow-hidden">
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[9px] font-mono font-bold tracking-wider text-[#7c3aed] uppercase">
              Proven Deliveries
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-zinc-900 tracking-tighter leading-[1.1]">
              Our Work
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-sans max-w-lg">
              Below are the systems we have deployed for regional enterprises, driving real productivity improvements.
            </p>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-zinc-50 border border-zinc-200 rounded-[32px] overflow-hidden flex flex-col justify-between hover:border-[#7c3aed]/30 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Info details */}
                <div className="p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-[#7c3aed] uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold font-sans text-zinc-900 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer row with metrics */}
              <div className="px-8 pb-8 pt-4 border-t border-zinc-200/50 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[8px] font-mono tracking-widest text-[#7c3aed] uppercase font-bold">
                    {project.metricLabel}
                  </span>
                  <div className="text-xl font-black text-zinc-900 tracking-tighter">
                    {project.metric}
                  </div>
                </div>

                <button
                  onClick={() => onOpenProjectDetail(project)}
                  className="rounded-full bg-zinc-900 hover:bg-[#7c3aed] text-white p-3 transition-colors cursor-pointer"
                  aria-label="View case details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4.5 w-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

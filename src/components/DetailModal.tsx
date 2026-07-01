import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Award, Clock, DollarSign, Target, TrendingUp } from "lucide-react";
import { Service, Project } from "../types";

interface DetailProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  project: Project | null;
}

export default function DetailModal({ isOpen, onClose, service, project }: DetailProps) {
  return (
    <AnimatePresence>
      {isOpen && (service || project) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-[#fafafa] border border-zinc-200 rounded-3xl w-full max-w-xl overflow-hidden relative z-10 shadow-2xl p-6 md:p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-950 transition-colors p-2 z-30 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Displaying Service details */}
            {service && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/25 text-[9px] font-mono font-bold tracking-wider text-[#7c3aed]">
                    Service Deep Breakdown
                  </span>
                  <h3 className="font-sans font-black text-2xl text-zinc-950 tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Benefits / Deliverables list */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[10px] font-bold tracking-wide text-zinc-500">
                    Deliverables Included
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <Check size={14} className="text-[#7c3aed] shrink-0 mt-0.5" />
                        <span className="text-zinc-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Displaying Case/Project details */}
            {project && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/25 text-[9px] font-mono font-bold tracking-wider text-[#7c3aed]">
                    Case Study Summary
                  </span>
                  <h3 className="font-sans font-black text-2xl text-zinc-950 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed">
                    A close partnership with {project.clientName} established in {project.year} to modernize core operational workflows, automate customer transactions, and optimize overall retail efficiency.
                  </p>
                </div>

                {/* High impact metric card inside */}
                <div className="p-5 rounded-2xl border border-zinc-200 flex justify-between items-center bg-white shadow-sm">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-wider block font-bold">
                      Key Value Reached
                    </span>
                    <span className="font-sans font-black text-lg text-zinc-900 tracking-tight">
                      {project.metricLabel}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] font-black text-md border border-[#7c3aed]/25">
                    {project.metric}
                  </div>
                </div>

                {/* Meta list */}
                <div className="space-y-3 font-sans">
                  <h4 className="font-mono text-[10px] font-bold tracking-wide text-zinc-500">
                    System Deployment Sheet
                  </h4>
                  <div className="border border-zinc-200 rounded-2xl overflow-hidden divide-y divide-zinc-150 text-xs shadow-sm">
                    <div className="bg-white p-3.5 flex justify-between animate-none">
                      <span className="text-zinc-500 font-medium">Partner Brand:</span>
                      <strong className="text-zinc-900 font-sans font-bold tracking-tight">{project.clientName}</strong>
                    </div>
                    <div className="bg-white p-3.5 flex justify-between animate-none">
                      <span className="text-zinc-500 font-medium">Launch Quarter:</span>
                      <strong className="text-zinc-900 font-bold">Q3, {project.year}</strong>
                    </div>
                    <div className="bg-white p-3.5 flex justify-between animate-none">
                      <span className="text-zinc-500 font-medium">Deployment Verticals:</span>
                      <strong className="text-[#7c3aed] font-mono font-bold tracking-wider text-[10px]">{project.category}</strong>
                    </div>
                    <div className="bg-white p-3.5 flex justify-between animate-none">
                      <span className="text-zinc-500 font-medium">Integration Success:</span>
                      <strong className="text-zinc-900 font-sans font-bold tracking-tight">Exceeded Estimates</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Accept / Done Button */}
            <div className="pt-6 border-t border-zinc-200 mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors cursor-pointer text-[10px] font-bold tracking-wider"
              >
                Close Breakdown
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

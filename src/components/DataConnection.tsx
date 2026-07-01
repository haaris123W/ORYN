import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, MessageSquare, Database, ArrowRight, Check } from "lucide-react";

export default function DataConnection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Client Orders on Web",
      module: "Oryn Web",
      icon: <Globe className="text-[#7c3aed]" size={20} />,
      desc: "A patient books an appointment or a customer places an item in their cart at your Oryn Web storefront.",
      impact: "Client-facing portal registers session state directly."
    },
    {
      title: "2. Instant WhatsApp Update",
      module: "Oryn Chat",
      icon: <MessageSquare className="text-emerald-500" size={20} />,
      desc: "Oryn Chat automatically schedules and fires a WhatsApp booking/order confirmation, updating the guest.",
      impact: "Zero manual messaging overhead for your assistant."
    },
    {
      title: "3. Dashboard Database Syncs",
      module: "Oryn Core",
      icon: <Database className="text-[#2563eb]" size={20} />,
      desc: "Oryn Core automatically deducts item counts, lists client history, and updates your live business sales dashboards.",
      impact: "One real source of truth across all channels."
    }
  ];

  return (
    <section id="why-oryn" className="py-32 md:py-36 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-900">
      {/* Background radial overlay */}
      <div className="absolute inset-0 opacity-30 select-none pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#2563eb]/10 blur-[130px]" />
      </div>

      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Headings */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-wider font-bold text-zinc-400 uppercase">
            Unified System Philosophy
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter leading-[1.08]">
            One shared data layer. No spreadsheets.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
            Our modules are not separate products awkwardly bolted together. When anything happens on your storefront, your automated WhatsApp channels and management dashboards update instantly.
          </p>
        </div>

        {/* Bento Grid layout representing live interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left panel: Step selection */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer outline-none ${
                  activeStep === idx
                    ? "bg-white/5 border-white/20 shadow-md shadow-black/40"
                    : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <div className={`p-3 rounded-xl ${activeStep === idx ? "bg-white/10" : "bg-white/5"}`}>
                  {step.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400">
                    {step.module}
                  </span>
                  <h3 className="font-sans font-bold text-zinc-100 text-base sm:text-lg">
                    {step.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Right panel: Live Visual Simulator */}
          <div className="lg:col-span-7 bg-zinc-900/50 border border-white/10 rounded-[40px] p-8 md:p-10 relative overflow-hidden min-h-[420px] flex flex-col justify-between shadow-2xl backdrop-blur-sm">
            
            {/* Simulator heading */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed] animate-pulse" />
                <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-400 uppercase">
                  ORYN DATA ENGINE — SIMULATOR LIVE
                </span>
              </div>
              <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
                ACTIVE STATE
              </span>
            </div>

            {/* Simulated Live View */}
            <div className="relative flex-1 flex flex-col justify-center py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="inline-flex p-3 bg-white/5 rounded-2xl border border-white/10 text-white">
                    {steps[activeStep].icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold font-sans tracking-tight text-white">
                      {steps[activeStep].title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
                      {steps[activeStep].desc}
                    </p>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex gap-3 items-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                      <Check size={12} />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-wider">
                      IMPACT: {steps[activeStep].impact}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom layout dots */}
            <div className="flex gap-2 justify-end border-t border-white/5 pt-4 mt-4">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-305 ${
                    activeStep === i ? "w-8 bg-[#7c3aed]" : "w-2 bg-white/10"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

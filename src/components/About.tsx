import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Heart, Users } from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "No IT Department Required",
      desc: "Small and medium local businesses shouldn't need a dedicated tech support team or a patchwork of separate software vendors to run modern business workflows.",
      icon: <ShieldCheck className="text-[#7c3aed]" size={20} />
    },
    {
      title: "Shared Common Vision",
      desc: "Our goal is for clinics, clothing showrooms, and hardware outlets to operate smoothly in the cloud, syncing operations seamlessly.",
      icon: <Heart className="text-[#7c3aed]" size={20} />
    }
  ];

  return (
    <section id="about" className="py-32 md:py-36 bg-white relative border-b border-zinc-200 overflow-hidden">
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left panel: Large vision block */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[9px] font-mono tracking-wider font-bold text-[#7c3aed] uppercase">
              Mission & Conviction
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-5.5xl text-zinc-900 tracking-tighter leading-[1.1] max-w-xl">
              Modern digital infrastructure, made collaborative.
            </h2>
            <p className="text-zinc-650 text-sm sm:text-base leading-relaxed tracking-normal">
              Oryn Systems is built on a simple belief: growing regional businesses shouldn't have to face a frustrating maze of five different disconnected web hosts and spreadsheets.
            </p>
            <p className="text-zinc-650 text-sm leading-relaxed">
              We look ahead to an integrated era where clinic bookings, order receipts, and physical retail counters run smoothly inside one connected operating setup.
            </p>
          </div>

          {/* Right panel: Core values */}
          <div className="lg:col-span-6 space-y-8 pt-4 lg:pt-14">
            {pillars.map((p, i) => (
              <div key={i} className="flex gap-4 items-start p-6 rounded-[24px] bg-zinc-50 border border-zinc-200 shadow-sm">
                <div className="p-3 bg-white border border-zinc-200 rounded-xl shrink-0">
                  {p.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-zinc-900 text-sm sm:text-base tracking-tight font-sans">
                    {p.title}
                  </h3>
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

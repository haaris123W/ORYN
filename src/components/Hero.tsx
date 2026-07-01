import React from "react";
import { motion } from "motion/react";
import { Zap, Compass, TrendingUp, Layers, Activity, ShieldCheck } from "lucide-react";
import Threads from "./Threads";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  // Premium local business brands matching original design
  const brands = [
    { name: "Apex Capital", icon: <TrendingUp size={16} className="text-[#a78bfa]" /> },
    { name: "Summit Digital", icon: <Compass size={16} className="text-zinc-400" /> },
    { name: "Nova Systems", icon: <Zap size={16} className="text-[#a78bfa]" /> },
    { name: "Spectra Studios", icon: <Layers size={16} className="text-zinc-400" /> },
    { name: "Beacon Health", icon: <Activity size={16} className="text-[#a78bfa]" /> },
    { name: "Vanguard Tech", icon: <ShieldCheck size={16} className="text-zinc-400" /> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-black pt-36 pb-16 md:pt-48 md:pb-24 border-b border-zinc-900"
    >
      {/* Inline Styles for infinite looping scrolling brand marques and premium dither styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .dither-mesh {
          background-image: url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' fill='rgba(255,255,255,0.08)'/%3E%3Crect x='2' y='2' width='2' height='2' fill='rgba(255,255,255,0.08)'/%3E%3C/svg%3E");
          background-repeat: repeat;
        }
        .premium-glow-purple {
          background: radial-gradient(circle at 65% 35%, rgba(124, 58, 237, 0.3) 0%, rgba(59, 7, 100, 0) 55%);
        }
        .premium-glow-blue {
          background: radial-gradient(circle at 25% 65%, rgba(6, 182, 212, 0.18) 0%, rgba(29, 78, 216, 0) 50%);
        }
        .retro-blueprint {
          background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* Redesigned Premium Static Dithered Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#09090b]">
        {/* Static Premium Ambient Lighting Glows (Sexy glowing backdrop) */}
        <div className="absolute inset-0 premium-glow-purple" />
        <div className="absolute inset-0 premium-glow-blue" />

        {/* Blueprint Grid Structure */}
        <div className="absolute inset-0 retro-blueprint" />

        {/* Threads Wave Animation Background */}
        <div className="absolute inset-0 opacity-55 pointer-events-auto z-0">
          <Threads
            amplitude={1.3}
            distance={0.15}
            enableMouseInteraction={true}
            color={[0.486, 0.227, 0.929]}
          />
        </div>

        {/* Pristine Bayer Dither Mesh Overlay (Dithers everything below) */}
        <div className="absolute inset-0 dither-mesh opacity-95" />

        {/* Ambient Dark Gradient Vignette for flawless high-contrast text reading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-[#09090b]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-transparent to-[#09090b]/80" />
      </div>

      {/* Centered Content Container */}
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Centered Display Block */}
        <div className="max-w-5xl space-y-10 flex flex-col items-center">
          
          <div className="space-y-8">
            {/* Little pill indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-zinc-400 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>India's Growing Cities Operating System</span>
            </motion.div>
 
            {/* Giant Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] leading-[0.95] tracking-tighter text-white max-w-5xl"
            >
              The digital backbone <br className="hidden sm:inline" />
              for local business.
            </motion.h1>
            
            {/* Subtitle text containing the one-line description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 font-sans text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Oryn Systems builds the integrated business operating system for small and medium businesses — combining Oryn Core (ERP), Oryn Web (Storefront), and Oryn Chat (WhatsApp Automation) in one unified ecosystem.
            </motion.p>
          </div>

          {/* Pill CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto pb-12"
          >
            {/* Primary button */}
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-10 py-4.5 bg-white hover:bg-zinc-100 text-black font-extrabold text-xs sm:text-sm md:text-base tracking-wide rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl active:scale-[0.99] hover:scale-[1.015]"
            >
              Initialize project ↗
            </button>

            {/* Secondary button */}
            <button
              onClick={() => {
                const section = document.querySelector("#services");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="w-full sm:w-auto px-10 py-4.5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm md:text-base tracking-wide rounded-full transition-all duration-200 cursor-pointer shadow active:scale-[0.99] hover:scale-[1.015] border border-white/10"
            >
              Explore Modules
            </button>
          </motion.div>



        </div>

      </div>
    </section>
  );
}

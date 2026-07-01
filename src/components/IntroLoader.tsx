import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [lockIndex, setLockIndex] = useState(0);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>(["O", "R", "Y", "N"]);
  const [isFinished, setIsFinished] = useState(false);

  const target = "ORYN";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Cycle unlocked letters every 45ms
  useEffect(() => {
    if (lockIndex >= target.length) return;

    const interval = setInterval(() => {
      setScrambledLetters((prev) => {
        const next = [...prev];
        for (let i = lockIndex; i < target.length; i++) {
          next[i] = chars[Math.floor(Math.random() * chars.length)];
        }
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [lockIndex]);

  // Lock letters sequentially left to right every 400ms
  useEffect(() => {
    if (lockIndex >= target.length) {
      const timeout = setTimeout(() => {
        setIsFinished(true);
      }, 500);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setScrambledLetters((prev) => {
        const next = [...prev];
        next[lockIndex] = target[lockIndex];
        return next;
      });
      setLockIndex((prev) => prev + 1);
    }, 400);

    return () => clearInterval(interval);
  }, [lockIndex]);

  // Handle ultimate loader exit sequence
  useEffect(() => {
    if (isFinished) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1600);
      return () => clearTimeout(timeout);
    }
  }, [isFinished, onComplete]);

  // Circular progress ring dimensions
  const r = 18;
  const c = 2 * Math.PI * r;
  const progress = lockIndex / target.length; // From 0.0 to 1.0
  const strokeDashoffset = c * (1 - progress);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center font-sans overflow-hidden select-none">
      {/* Soft purple radial glow behind content */}
      <div 
        id="radial-glow"
        className="absolute w-80 h-80 rounded-full bg-[#8B7FE8]/15 blur-[100px] pointer-events-none" 
      />

      <div className="relative flex flex-col items-center gap-12 z-10">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key="scramble-container"
              exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 md:gap-5"
            >
              {target.split("").map((targetChar, index) => {
                const isLocked = index < lockIndex;
                const displayChar = isLocked ? targetChar : scrambledLetters[index];

                return (
                  <div
                    key={index}
                    className="w-12 h-16 md:w-16 md:h-20 flex items-center justify-center"
                  >
                    <span
                      style={{ color: isLocked ? "#8B7FE8" : "rgba(139, 127, 232, 0.25)" }}
                      className={`text-4xl md:text-6xl font-black tracking-tight transition-all duration-200 ${
                        isLocked ? "scale-105 filter-none" : "scale-95 blur-[1px] opacity-40"
                      }`}
                    >
                      {displayChar}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="final-wordmark"
              initial={{ scale: 0.85, filter: "blur(12px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              <span className="text-white">Oryn </span>
              <span className="text-[#8B7FE8]">Systems</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Circular progress ring below */}
        <div 
          id="progress-ring-container"
          className="relative w-12 h-12 transition-opacity duration-300" 
          style={{ opacity: isFinished ? 0 : 1 }}
        >
          <svg className="w-full h-full rotate-[-90deg]">
            {/* Background circle ring */}
            <circle
              cx="24"
              cy="24"
              r={r}
              className="fill-none stroke-zinc-900"
              strokeWidth="2.5"
            />
            {/* Clockwise stroke filling progress */}
            <circle
              cx="24"
              cy="24"
              r={r}
              className="fill-none transition-all duration-300 ease-out"
              stroke="#8B7FE8"
              strokeWidth="2.5"
              strokeDasharray={c}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

import { supabase } from "@/lib/supabase";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Loader2, Sparkles, FileText, Send } from "lucide-react";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "10000",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState<any | null>(null);

  const availableServices = [
    "Oryn Web (Online Storefront Integration)",
    "Oryn Chat (WhatsApp Automation & Sync)",
    "Oryn Core (Business ERP & Invoicing)",
    "Full Suite Operating System Sync",
  ];

  const handleServiceToggle = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || selectedServices.length === 0) {
      alert("Please fill out your Name, Email, and select at least one Service!");
      return;
    }

    setLoading(true);

    const budget = parseInt(form.budget);
    const { error } = await supabase.from("proposal_requests").insert({
      name: form.name,
      email: form.email,
      company: form.company,
      budget,
      services: selectedServices,
      message: form.message,
    });

    if (error) {
      setLoading(false);
      console.error("Failed to submit proposal request:", error);
      alert("Your proposal request could not be sent. Please try again.");
      return;
    }

    // Simulate elite business OS deployment proposal compilation
    setTimeout(() => {
      setLoading(false);
      const baseMonthlyRate = budget;
      const calculatedCost = baseMonthlyRate + (selectedServices.length - 1) * 2500;
      const calculatedTimeline = selectedServices.length * 1 + 2;

      // Compile proposal data structure
      setProposal({
        client: form.name,
        company: form.company || "Your Business",
        email: form.email,
        servicesSelected: selectedServices,
        estimatedCost: calculatedCost.toLocaleString(),
        timelineWeeks: calculatedTimeline,
        milestones: [
          { name: "Phase 1: Workflow Discovery & Integration Mapping", duration: "Week 1" },
          { name: `Phase 2: Custom Configuration & Sync Setup`, duration: "Week 2" },
          { name: "Phase 3: Real-Time Stock & Database Synchronization", duration: `Week 3` },
          { name: "Phase 4: Staff Training & Live Production Deployment", duration: `Week ${calculatedTimeline}` },
        ],
        proposalID: `ORYN-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      });
    }, 1500);
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      company: "",
      budget: "10000",
      message: "",
    });
    setSelectedServices([]);
    setProposal(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-[#fafafa] border border-zinc-250 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative z-10 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-950 transition-colors p-2 z-30 cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Left Column: Branding / Info block */}
            <div className="w-full md:w-[320px] bg-white border-b md:border-b-0 md:border-r border-zinc-200 p-8 flex flex-col justify-between shrink-0">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-black tracking-widest text-[#18181b] text-xs">
                    Oryn Systems<span className="text-[#7c3aed]">.</span>
                  </span>
                </div>

                <div className="space-y-3 pt-6">
                  <h4 className="font-sans font-black text-xl text-zinc-900 tracking-tighter leading-tight">
                    Let's Build Your Project Proposal
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                    Choose your parameters, and our dynamic estimation engine will build a high-fidelity campaign proposal detailing milestones and budgeting projections instantly.
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="hidden md:block pt-10">
                <div className="border border-zinc-200 p-4 rounded-2xl bg-zinc-50 relative">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[8px] font-mono font-bold text-[#7c3aed] mb-2">
                    ● Dispatch Online
                  </span>
                  <div className="space-y-1">
                    <p className="text-[9px] text-zinc-500 font-mono">
                      Latency: 12ms
                    </p>
                    <p className="text-[9px] text-zinc-500 font-mono">
                      Engine Status: Optimized
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Handler or Compiled Proposal Viewer */}
            <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-white">
              {!proposal ? (
                /* Contact & Setup Form block */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7c3aed]/10 text-[9px] font-mono text-zinc-650 border border-[#7c3aed]/20">
                      Build Proposal
                    </span>
                    <h3 className="text-lg font-black text-zinc-900 tracking-tight">
                      Get In Touch
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold tracking-wider text-zinc-550 font-sans">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7c3aed] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold tracking-wider text-zinc-550 font-sans">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7c3aed] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-wider text-zinc-550 font-sans">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Inc."
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7c3aed] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Multi-Select Services */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-wider text-zinc-550 font-sans block">
                      Services Needed * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableServices.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleServiceToggle(srv)}
                            className={`flex items-center justify-between text-xs text-left px-3 py-2.5 rounded-2xl border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#7c3aed]/10 border-[#7c3aed] text-zinc-900 font-semibold shadow-sm"
                                : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300"
                            }`}
                          >
                            <span>{srv}</span>
                            {isSelected && <Check size={14} className="text-[#7c3aed]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* General range Budget */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-wider text-zinc-550 font-sans block">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-2.5 text-sm text-zinc-950 focus:outline-none focus:border-[#7c3aed] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="5000" className="text-zinc-950">₹5,000 - ₹10,000 / mo</option>
                      <option value="15000" className="text-zinc-950">₹10,000 - ₹25,000 / mo</option>
                      <option value="30000" className="text-zinc-950">₹25,000 - ₹50,000 / mo</option>
                      <option value="60000" className="text-zinc-950">₹50,000+ / mo</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-wider text-zinc-550 font-sans">
                      Project Notes / Timeline Details
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us everything about your goals..."
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#7c3aed] focus:bg-white resize-none transition-all"
                    />
                  </div>

                  {/* Form Submission CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-all font-bold tracking-wider text-xs cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Compiling Campaign proposal...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Generate Instant Campaign Proposal</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Proposal Display Dashboard Block */
                <div className="space-y-6 animate-fade-in">
                  {/* Proposal Header card element */}
                  <div className="border border-zinc-200 bg-zinc-50 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative overflow-hidden">
                    {/* decorative background ambient glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#7c3aed]/5 blur-xl" />

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7c3aed]/10 text-[9px] font-mono font-bold text-[#7c3aed]">
                          <Sparkles size={10} /> Proposal Ready
                        </span>
                        <span className="font-mono text-[9px] text-[#7c3aed]">
                          ID: {proposal.proposalID}
                        </span>
                      </div>
                      <h3 className="font-sans font-black text-xl text-zinc-900 tracking-tighter">
                        Campaign Statement
                      </h3>
                      <p className="text-[10px] text-zinc-500 font-mono">
                        Date Compiled: {proposal.date}
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-4 py-2 text-xs rounded-full border border-zinc-200 text-zinc-650 hover:text-zinc-905 hover:bg-zinc-100 transition-colors cursor-pointer font-bold tracking-wider bg-white"
                    >
                      Build Another
                    </button>
                  </div>

                  {/* Detail breakdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Segment 1 */}
                    <div className="bg-zinc-50/50 p-4 rounded-2xl border border-zinc-200">
                      <span className="text-[10px] font-mono text-zinc-500 tracking-wide block">
                        Estimated Scope Cost
                      </span>
                      <span className="font-sans font-black text-2xl text-zinc-900 block mt-1">
                        ₹{proposal.estimatedCost} / mo
                      </span>
                    </div>

                    {/* Segment 2 */}
                    <div className="bg-zinc-50/50 p-4 rounded-2xl border border-zinc-200">
                      <span className="text-[9px] font-mono text-zinc-500 tracking-widest block">
                        Active Plan Duration
                      </span>
                      <span className="font-sans font-black text-2xl text-zinc-900 block mt-1">
                        {proposal.timelineWeeks} Weeks Total
                      </span>
                    </div>
                  </div>

                  {/* Milestones and roadmap items display */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[9px] font-bold tracking-wider text-[#7c3aed]">
                      Roadmap Timeline
                    </h4>
                    <div className="border border-zinc-200 rounded-2xl overflow-hidden divide-y divide-zinc-150 shadow-sm bg-white">
                      {proposal.milestones.map((m: any, i: number) => (
                        <div key={i} className="bg-zinc-50/20 p-4 flex justify-between items-center text-xs gap-4">
                          <span className="text-zinc-800 font-bold font-sans text-[11px] tracking-tight">
                            {m.name}
                          </span>
                          <span className="font-mono text-[9px] text-[#7c3aed] font-bold bg-[#7c3aed]/10 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                            {m.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success statement */}
                  <div className="p-4 rounded-2xl border border-[#7c3aed]/20 bg-[#7c3aed]/5 text-xs text-zinc-650 leading-relaxed font-sans shadow-sm">
                    Our performance consultants have received your details! We'll reach out to your business email <strong className="text-zinc-900 font-bold">{proposal.email}</strong> within 12 business hours with a finalized agreement contract.
                  </div>
                </div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

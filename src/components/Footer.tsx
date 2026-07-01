import { supabase } from "@/lib/supabase";
import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  Globe, 
  ArrowRight, 
  Check, 
  Sparkles
} from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setIsSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      message: form.message,
      source: "website",
    });

    if (error) {
      setIsSubmitting(false);
      console.error("Failed to submit contact form:", error);
      alert("Your message could not be sent. Please try again.");
      return;
    }

    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", mobile: "", message: "" });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer 
      id="contact"
      className="bg-[#09090b] text-white relative pt-20 pb-10 border-t border-zinc-900 overflow-hidden"
    >
      {/* Dynamic backdrop gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7c3aed]/5 blur-[150px] rounded-full pointer-events-none select-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#3b0764]/10 blur-[130px] rounded-full pointer-events-none select-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Combined Layout: Contact on Left, Content Columns on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Left Side: Start a Conversation Contact Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-[9px] font-bold tracking-widest text-[#7c3aed] uppercase flex items-center gap-1">
                <Sparkles size={10} /> GET IN TOUCH WITH US
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-none">
                Start a <span className="text-[#7c3aed]">Conversation</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                We'd love to hear from you !
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#7c3aed]/10 border border-[#7c3aed]/20 p-8 rounded-[24px] text-center space-y-4 py-16">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-500">
                  <Check size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-lg">Message Sent Successfully</h4>
                  <p className="text-zinc-400 text-xs max-w-xs mx-auto">
                    Thanks for reaching out! Our regional lead Consultant will review your request and contact you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                      Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#121214] border border-zinc-800/80 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-650 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50 transition-all font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                      Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#121214] border border-zinc-800/80 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-650 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Mobile field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-mobile" className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                    Mobile (optional)
                  </label>
                  <input
                    id="form-mobile"
                    type="text"
                    placeholder="+91 *** *** ****"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full bg-[#121214] border border-zinc-800/80 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-650 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50 transition-all font-sans"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    placeholder="Let us know how we can help you.."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#121214] border border-zinc-800/80 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-zinc-650 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/50 transition-all resize-none font-sans"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] disabled:opacity-50 text-white rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-lg shadow-[#7c3aed]/20"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Side Columns: Separated by vertical line on large screens */}
          <div className="lg:col-span-5 lg:border-l lg:border-zinc-800/60 lg:pl-12 flex flex-col justify-between space-y-10 lg:space-y-0">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
              {/* Top half links */}
              <div className="grid grid-cols-2 gap-8">
                {/* Column: Services */}
                <div className="space-y-4">
                  <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                    Services
                  </h4>
                  <ul className="space-y-2.5 text-zinc-400 text-xs font-medium">
                    <li>
                      <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors">
                        Oryn Web
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors">
                        Oryn Chat
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors">
                        Oryn Core
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column: Company */}
                <div className="space-y-4">
                  <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                    Company
                  </h4>
                  <ul className="space-y-2.5 text-zinc-400 text-xs font-medium">
                    <li>
                      <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="hover:text-white transition-colors">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={(e) => scrollToSection(e, "#services")} className="hover:text-white transition-colors">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#work" onClick={(e) => scrollToSection(e, "#work")} className="hover:text-white transition-colors">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="#why-oryn" onClick={(e) => scrollToSection(e, "#why-oryn")} className="hover:text-white transition-colors">
                        Why Oryn
                      </a>
                    </li>
                    <li>
                      <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="hover:text-white transition-colors">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column: Contact info details */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase">
                  Contact
                </h4>
                <ul className="space-y-3.5 text-zinc-400 text-xs font-medium">
                  <li className="flex items-center gap-3">
                    <Mail size={14} className="text-zinc-500 shrink-0" />
                    <a href="mailto:contact@orynsystems.com" className="hover:text-white transition-colors">
                      contact@orynsystems.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={14} className="text-zinc-500 shrink-0" />
                    <a href="tel:+919049281123" className="hover:text-white transition-colors">
                      +91 90492 81123
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe size={14} className="text-zinc-500 shrink-0" />
                    <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="hover:text-white transition-colors">
                      orynsystems.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* Separator line */}
        <div className="border-t border-zinc-900 my-4" />

        {/* Legal disclosures & copyrights row */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-zinc-500">
          <div>
            <span>© 2026 Oryn Systems Pvt Ltd. All rights reserved.</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-4">
              <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="hover:text-zinc-300 transition-colors">
                Terms and Conditions
              </a>
              <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

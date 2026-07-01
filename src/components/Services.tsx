import React from "react";
import { services } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onOpenContact: () => void;
  onOpenServiceDetail: (service: Service) => void;
}

export default function Services({ onOpenContact, onOpenServiceDetail }: ServicesProps) {
  return (
    <section id="services" className="py-32 md:py-36 bg-[#fafafa] relative border-b border-zinc-200 overflow-hidden">
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">
        
        {/* Symmetric Bento Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl space-y-3">
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-zinc-900 tracking-tighter leading-[1.1]">
              Our Services
            </h2>
            <p className="text-zinc-650 text-sm md:text-base leading-relaxed font-sans max-w-lg">
              We engineer beautiful web architectures, custom message automation systems, and real-time operational ERP backbones that empower your business.
            </p>
          </div>
        </div>

        {/* 3-Column Modern Grid for the 3 Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Oryn Web */}
          <div className="bg-white border border-zinc-200 rounded-[32px] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group hover:border-[#7c3aed]/30 hover:shadow-lg transition-all duration-300 flex-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-black text-2.5xl sm:text-3xl text-zinc-900 tracking-tight">
                  Oryn Web
                </h3>
              </div>
              <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-wider font-mono">
                "A professional online storefront, connected to Core"
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Allow businesses to sell online with custom storefronts. Features browse products, pricing, interactive shopping carts, direct checkout, and real-time synchronization.
              </p>
              
              {/* Tags Rendering styled cleanly */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Catalog", "Cart & Checkout", "Real-time Stock Sync"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-500 font-mono text-[10px] uppercase font-bold tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-8 flex justify-between items-center">
              <button
                onClick={() => {
                  const s = services.find((sv) => sv.id === "oryn-web");
                  if (s) onOpenServiceDetail(s);
                }}
                className="text-zinc-500 hover:text-[#7c3aed] transition-colors cursor-pointer text-xs font-semibold"
              >
                What's included?
              </button>
              
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1 text-xs font-bold tracking-wide text-[#7c3aed] hover:text-zinc-950 transition-all cursor-pointer"
              >
                <span>Initialize project ↗</span>
              </button>
            </div>
          </div>

          {/* Card 2: Oryn Chat */}
          <div className="bg-white border border-zinc-200 rounded-[32px] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group hover:border-[#7c3aed]/30 hover:shadow-lg transition-all duration-300 flex-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-black text-2.5xl sm:text-3xl text-zinc-900 tracking-tight">
                  Oryn Chat
                </h3>
                <span className="px-2.5 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20">
                  Coming soon
                </span>
              </div>
              <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-wider font-mono">
                "WhatsApp, automated and synchronized"
              </p>
              <p className="text-zinc-650 text-sm leading-relaxed">
                Most customer conversations already happen on WhatsApp. Oryn Chat turns that into a highly structured channel — automated order confirmations, order updates, direct product sharing, and manual inbox reply fallbacks.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Auto-confirmations", "Product Sharing", "WhatsApp Notifications"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-500 font-mono text-[10px] uppercase font-bold tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-8 flex justify-between items-center">
              <button
                onClick={() => {
                  const s = services.find((sv) => sv.id === "oryn-chat");
                  if (s) onOpenServiceDetail(s);
                }}
                className="text-zinc-500 hover:text-[#7c3aed] transition-colors cursor-pointer text-xs font-semibold"
              >
                What's included?
              </button>
              
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1 text-xs font-bold tracking-wide text-[#7c3aed] hover:text-zinc-950 transition-all cursor-pointer"
              >
                <span>Automate channel ↗</span>
              </button>
            </div>
          </div>

          {/* Card 3: Oryn Core */}
          <div className="bg-white border border-zinc-200 rounded-[32px] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group hover:border-[#7c3aed]/30 hover:shadow-lg transition-all duration-300 flex-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-black text-2.5xl sm:text-3xl text-zinc-900 tracking-tight">
                  Oryn Core
                </h3>
              </div>
              <p className="text-[#7c3aed] text-xs font-bold uppercase tracking-wider font-mono">
                "The central business operating system underneath it all"
              </p>
              <p className="text-zinc-650 text-sm leading-relaxed">
                Provides a central ERP dashboard for inventory tracking, low-stock alerts, customer history, vendor profiles, purchase orders, dynamic invoicing, and live dashboard metrics (today's sales, pending payments).
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Inventory & ERP", "Sales & PDF Invoicing", "Admin & Staff Roles"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-500 font-mono text-[10px] uppercase font-bold tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-100 mt-8 flex justify-between items-center">
              <button
                onClick={() => {
                  const s = services.find((sv) => sv.id === "oryn-core");
                  if (s) onOpenServiceDetail(s);
                }}
                className="text-zinc-500 hover:text-[#7c3aed] transition-colors cursor-pointer text-xs font-semibold"
              >
                What's included?
              </button>
              
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1 text-xs font-bold tracking-wide text-[#7c3aed] hover:text-zinc-950 transition-all cursor-pointer"
              >
                <span>Access system ↗</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

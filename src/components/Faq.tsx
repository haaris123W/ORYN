import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "What is Oryn Web?",
      answer: "Oryn Web is our professional storefront system designed for local enterprises. We build highly responsive platforms with rich product catalogs, local SEO, contact portals, and direct WhatsApp click-to-chat integration, making sure customers find and contact you instantly."
    },
    {
      id: 2,
      question: "How does Oryn Chat work?",
      answer: "Most local customer conversations already happen on WhatsApp. Oryn Chat structures this workflow, providing automated confirmations, frictionless product sharing, customer updates, and easy team inbox management."
    },
    {
      id: 3,
      question: "What makes Oryn Core different from a standard ERP?",
      answer: "Oryn Core is a light, focused multi-tenant ERP engineered specifically to keep your business running smoothly. It integrates inventory and stock levels, client databases, vendor interactions, invoice preparation, and live dashboard analytics in one secure interface."
    },
    {
      id: 4,
      question: "How do these systems work together?",
      answer: "All three components are fully synchronized. When a customer browses and orders on your Oryn Web storefront, Oryn Chat instantly sends order notifications over WhatsApp, while Oryn Core automatically updates your live inventory and sales dashboards in real-time."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-32 md:py-36 bg-[#fafafa] relative border-b border-zinc-200">
      <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Bold Multi-line Title matching the layout inspired by the reference image */}
          <div className="lg:col-span-5">
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-zinc-900 tracking-tighter leading-[1.05] max-w-md">
              Frequently asked questions
            </h2>
          </div>

          {/* Right Column: Clean stack with a separator, matching image layout guidelines in Light Theme styling */}
          <div className="lg:col-span-7 divide-y divide-zinc-200 border-t border-zinc-200">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-6">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-start gap-4 text-left group cursor-pointer"
                  >
                    {/* Plus / Minus identical to layout but using clean thin markers */}
                    <span className="mt-1 shrink-0 text-[#7c3aed] transition-transform duration-200">
                      {isOpen ? (
                        <Minus size={18} strokeWidth={2.5} />
                      ) : (
                        <Plus size={18} strokeWidth={2.5} />
                      )}
                    </span>
                    
                    <span className="font-sans font-bold text-base sm:text-lg text-zinc-900 group-hover:text-[#7c3aed] transition-colors leading-tight">
                      {item.question}
                    </span>
                  </button>

                  {/* Clean transitions for reading answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-8 text-zinc-650 text-sm md:text-base leading-relaxed font-sans max-w-xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

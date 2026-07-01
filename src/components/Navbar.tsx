import React, { useState, useEffect } from "react";
import { Mail, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data";
import { Service } from "../types";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenServiceDetail?: (service: Service) => void;
}

export default function Navbar({ onOpenContact, onOpenServiceDetail }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Why Oryn", href: "#why-oryn" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      id="navbar"
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 rounded-full border border-zinc-200/80 bg-white/95 backdrop-blur-md py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.015)]"
    >
      <div className="px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center group" aria-label="Home">
          <div className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center text-white font-black text-sm transition-transform duration-250 group-hover:scale-105 shadow-md shadow-[#7c3aed]/10">
            O
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            if (item.name === "Services") {
              return (
                <div
                  key={item.name}
                  className="relative py-2"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setDropdownOpen(!dropdownOpen);
                      const element = document.querySelector("#services");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="flex items-center gap-1 text-xs font-semibold tracking-wider text-zinc-600 hover:text-[#7c3aed] transition-colors duration-200 cursor-pointer py-1"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180 text-[#7c3aed]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-[380px] bg-white border border-zinc-200/80 rounded-2xl shadow-xl p-4 flex flex-col gap-3.5 z-50 backdrop-blur-md"
                      >
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => {
                              setDropdownOpen(false);
                              const element = document.querySelector("#services");
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth", block: "start" });
                              }
                              if (onOpenServiceDetail) {
                                onOpenServiceDetail(service);
                              }
                            }}
                            className="text-left group/item cursor-pointer focus:outline-none w-full"
                          >
                            <div className="flex items-center justify-between">
                              <span className="block text-xs font-bold text-zinc-800 group-hover/item:text-[#7c3aed] transition-colors duration-155">
                                {service.title}
                              </span>
                              {service.id === "oryn-chat" && (
                                <span className="px-1.5 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20">
                                  Coming soon
                                </span>
                              )}
                            </div>
                            <span className="block text-[10px] text-zinc-500 font-sans leading-normal mt-0.5 group-hover/item:text-zinc-800 transition-colors duration-155">
                              {service.description}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollClick(e, item.href)}
                className="text-xs font-semibold tracking-wider text-zinc-600 hover:text-[#7c3aed] transition-colors duration-200"
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Let's Talk CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="flex items-center justify-center gap-2 px-5 py-2 bg-[#7c3aed] border border-transparent hover:bg-white hover:border-[#7c3aed] text-white hover:text-[#7c3aed] rounded-full text-[11px] font-bold tracking-wider transition-all duration-200 cursor-pointer shadow-sm shadow-[#7c3aed]/10"
          >
            <Mail size={12} className="opacity-90" />
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-600 hover:text-[#7c3aed] p-2 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border border-zinc-200 rounded-2xl mx-2 mt-2 overflow-hidden absolute top-full left-0 w-[calc(100%-1rem)] shadow-lg"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navItems.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.name} className="flex flex-col gap-1">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="text-zinc-650 hover:text-[#7c3aed] text-xs font-semibold tracking-wider py-1.5 flex items-center justify-between w-full text-left cursor-pointer"
                      >
                        <span>Services</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-[#7c3aed]" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 overflow-hidden flex flex-col gap-3 border-l border-zinc-100 mt-2"
                          >
                            {services.map((service) => (
                              <button
                                key={service.id}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileServicesOpen(false);
                                  const element = document.querySelector("#services");
                                  if (element) {
                                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                                  }
                                  if (onOpenServiceDetail) {
                                    onOpenServiceDetail(service);
                                  }
                                }}
                                className="py-2.5 px-2 rounded-lg text-left text-zinc-700 hover:text-[#7c3aed] hover:bg-zinc-50 transition-colors block cursor-pointer"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[11px] font-bold">{service.title}</span>
                                  {service.id === "oryn-chat" && (
                                    <span className="px-1.5 py-0.2 rounded text-[7px] font-bold uppercase tracking-wider bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20">
                                      Coming soon
                                    </span>
                                  )}
                                </div>
                                <span className="block text-[9px] text-zinc-500 font-sans mt-0.5 leading-normal">
                                  {service.description}
                                </span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollClick(e, item.href)}
                    className="text-zinc-600 hover:text-[#7c3aed] text-xs font-semibold tracking-wider py-1.5 list-none"
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-zinc-100 flex flex-col items-stretch">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-[11px] font-bold tracking-wider text-white cursor-pointer shadow-sm shadow-[#7c3aed]/15"
                >
                  <Mail size={12} />
                  <span>Let's Talk</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

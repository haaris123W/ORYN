import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import DataConnection from "./components/DataConnection";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import DetailModal from "./components/DetailModal";
import IntroLoader from "./components/IntroLoader";
import { Service, Project } from "./types";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleOpenServiceDetail = (service: Service) => {
    setSelectedService(service);
    setSelectedProject(null);
  };

  const handleOpenProjectDetail = (project: Project) => {
    setSelectedProject(project);
    setSelectedService(null);
  };

  const handleCloseDetailModal = () => {
    setSelectedService(null);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-800 font-sans selection:bg-[#7c3aed]/10 selection:text-[#7c3aed]">
      {/* Intro Loader playing on every page load with graceful fade out */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="intro-loader"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999]"
          >
            <IntroLoader onComplete={() => setShowLoader(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Structural navigation header */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenServiceDetail={handleOpenServiceDetail}
      />

      {/* Main app body */}
      <main className="relative">
        {/* Sections */}
        <Hero onOpenContact={handleOpenContact} />
        
        <Services
          onOpenContact={handleOpenContact}
          onOpenServiceDetail={handleOpenServiceDetail}
        />

        <Work onOpenProjectDetail={handleOpenProjectDetail} />

        <DataConnection />

        <About />
        
        <Faq />
      </main>

      {/* Footer element */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive modal dialogs */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
      />

      <DetailModal
        isOpen={selectedService !== null || selectedProject !== null}
        onClose={handleCloseDetailModal}
        service={selectedService}
        project={selectedProject}
      />
    </div>
  );
}

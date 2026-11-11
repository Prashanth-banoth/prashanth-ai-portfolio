
"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import CustomCursor from "@/components/sections/ui/CustomCursor";
import Preloader from "@/components/sections/ui/Preloader";
import ExperienceSection from "@/components/sections/ExperienceSection";

import { Menu, X } from "lucide-react";

const Universe = dynamic(
  () => import("@/components/3d/Universe"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[#050510]" />
    ),
  }
);

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${darkMode
        ? "bg-[#050510] text-white"
        : "bg-[#f4f7ff] text-[#111827]"
        }`}

    >
      <Preloader />
      <CustomCursor />
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col overflow-hidden"
      >
        {/* 3D Universe */}
        <div className="absolute inset-0 z-0">
          <Universe />
        </div>

        {/* Navigation */}


        <nav className="relative z-20 flex items-center justify-between px-6 py-7 md:px-16">
          <a href="#home" className="text-xl font-bold tracking-widest">
            PB<span className="text-blue-500">.</span>
          </a>

          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 md:flex">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm opacity-70 transition hover:text-blue-500 hover:opacity-100"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full border px-4 py-2 text-sm transition ${darkMode
                ? "border-white/20 hover:bg-white/10"
                : "border-black/20 hover:bg-black/5"
                }`}
            >
              {darkMode ? "☀ Light" : "☾ Dark"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-white/20 p-2 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div
              className={`absolute left-0 right-0 top-full mx-6 rounded-2xl border p-5 shadow-xl backdrop-blur-xl md:hidden ${darkMode
                ? "border-white/10 bg-[#101020]"
                : "border-black/10 bg-white"
                }`}
            >
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm transition hover:bg-blue-500/10 hover:text-blue-500"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </nav>



        {/* Hero Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
          <div className="mb-7 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs tracking-[0.25em] text-blue-400 backdrop-blur-md">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-400" />
            FRONTEND DEVELOPER & AI ENTHUSIAST
          </div>

          <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-8xl">
            Exploring
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Digital Universes
            </span>
          </h2>

          <p
            className={`mt-7 max-w-xl text-base leading-8 md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            I'm Prashanth Banoth — a frontend developer
            passionate about creating immersive digital
            experiences and exploring the future of AI.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-105 hover:bg-blue-500"
            >
              Explore My Work ↗
            </a>
            <a
              href="/resume.pdf"
              download="Prashanth-Banoth-Resume.pdf"
              className="rounded-full border border-blue-500/40 bg-blue-500/10 px-8 py-4 text-sm font-semibold text-blue-400 backdrop-blur-md transition hover:scale-105 hover:bg-blue-500/20"
            >
              Download Resume ↓
            </a>

            <a
              href="mailto:prashanthbanoth23@gmail.com"
              className={`rounded-full border px-8 py-4 text-sm font-semibold backdrop-blur-md transition hover:scale-105 ${darkMode
                ? "border-white/20 hover:bg-white/10"
                : "border-black/20 hover:bg-black/5"
                }`}
            >
              Contact Me
            </a>
          </div>

          <div className="absolute bottom-8 flex flex-col items-center gap-3 text-xs tracking-[0.3em] opacity-50">
            SCROLL TO EXPLORE
            <div className="h-10 w-px animate-pulse bg-current" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection darkMode={darkMode} />
      <ExperienceSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />

    </main>
  );
}

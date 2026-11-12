
"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import CustomCursor from "@/components/sections/ui/CustomCursor";
import Preloader from "@/components/sections/ui/Preloader";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HireMeGame from '@/components/sections/HireMeGame';
import { Menu, X } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hero section reference
  const heroRef = useRef<HTMLElement | null>(null);

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.25]
  );

  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  );

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
        ref={heroRef}
        id="home"
        className="relative flex min-h-screen flex-col overflow-hidden"
      >
        {/* Developer Background Video with Scroll Animation */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            scale: videoScale,
            opacity: videoOpacity,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source
              src="/developer.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#050510]/60" />
        </motion.div>

        {/* NAVIGATION */}
        <nav className="relative z-20 flex items-center justify-between px-4 py-5 sm:px-6 md:px-16 md:py-7">
          <a
            href="#home"
            className="text-xl font-bold tracking-widest"
          >
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
                  className={`text-sm transition hover:text-blue-500 hover:opacity-100 ${darkMode ? "text-white/80" : "text-gray-800"
                    }`}
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
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
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

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-7 max-w-full rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-[9px] tracking-[0.15em] text-blue-400 shadow-lg shadow-blue-500/10 backdrop-blur-md sm:px-5 sm:text-xs sm:tracking-[0.25em]"
          >
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            FRONTEND DEVELOPER & AI ENTHUSIAST
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-8xl"
          >
            Exploring
            <br />

            <motion.span
              animate={{
                textShadow: [
                  "0px 0px 10px rgba(59,130,246,0.2)",
                  "0px 0px 30px rgba(59,130,246,0.7)",
                  "0px 0px 10px rgba(59,130,246,0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent"
            >
              Digital Universes
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className={`mt-7 max-w-xl text-base leading-8 md:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            I'm Prashanth Banoth — a frontend developer
            passionate about creating immersive digital
            experiences and exploring the future of AI.
          </motion.p>

          {/* HERO BUTTONS */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.5,
                },
              },
            }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.08,
                y: -5,
                boxShadow: "0px 12px 35px rgba(37,99,235,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
            >
              Explore My Work ↗
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Prashanth-Banoth-Resume.pdf"
              whileHover={{
                scale: 1.08,
                y: -5,
                boxShadow: "0px 12px 35px rgba(59,130,246,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="rounded-full border border-blue-500/40 bg-blue-500/10 px-8 py-4 text-sm font-semibold text-blue-400 backdrop-blur-md"
            >
              Download Resume ↓
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.08,
                y: -5,
                borderColor: "rgba(59,130,246,0.8)",
                boxShadow: "0px 12px 35px rgba(59,130,246,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className={`rounded-full border px-8 py-4 text-sm font-semibold backdrop-blur-md ${darkMode
                  ? "border-white/20 bg-white/[0.04] text-white hover:bg-white/10"
                  : "border-black/20 bg-white/70 text-gray-800 hover:bg-black/5"
                }`}
            >
              Contact Me ↗
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 flex flex-col items-center gap-3 text-xs tracking-[0.3em] opacity-50">
            SCROLL TO EXPLORE
            <div className="h-10 w-px animate-pulse bg-current" />
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <AboutSection darkMode={darkMode} />
      <ExperienceSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <HireMeGame darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
    </main>
  );
}

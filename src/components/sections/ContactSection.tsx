
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Mail,
  Code2,
  Sparkles,
} from "lucide-react";

export default function ContactSection({
  darkMode,
}: {
  darkMode: boolean;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className={`relative overflow-hidden px-6 py-28 md:px-16 md:py-36 transition-colors duration-700 ${darkMode
        ? "bg-[#080817] text-white"
        : "bg-[#edf2ff] text-[#111827]"
        }`}
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div
          className={`contact-content relative overflow-hidden rounded-[2rem] border px-6 py-16 text-center shadow-2xl md:px-16 md:py-24 ${darkMode
            ? "border-white/10 bg-white/[0.035] shadow-blue-950/20"
            : "border-white bg-white/75 shadow-blue-900/10"
            }`}
        >
          {/* Card glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />

          <div className="relative z-10">
            {/* Availability */}
            <div className="contact-content mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-medium tracking-wide text-emerald-500">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Heading */}
            <p className="contact-content mb-5 text-sm font-semibold tracking-[0.35em] text-blue-500">
              GET IN TOUCH
            </p>

            <h2 className="contact-content text-4xl font-bold leading-tight md:text-7xl">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Extraordinary.
              </span>
            </h2>

            <p
              className={`contact-content mx-auto mt-7 max-w-2xl text-sm leading-8 md:text-base ${darkMode ? "text-gray-400" : "text-gray-600"
                }`}
            >
              I'm open to frontend development opportunities,
              internships, collaborations and exciting projects.
              Let's connect and create something meaningful.
            </p>

            {/* Contact buttons */}
            <div className="contact-content mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prashanthbanoth23%40gmail.com&su=Portfolio%20Contact"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-blue-500/40"
              >
                <Mail className="h-4 w-4" />
                Email Me
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="https://github.com/Prashanth-banoth"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${darkMode
                  ? "border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/10"
                  : "border-slate-300 bg-white/70 text-slate-800 hover:border-blue-300 hover:bg-blue-50"
                  }`}
              >
                <Code2 className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="https://linkedin.com/in/prashanth-b-9319b92ba"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${darkMode
                    ? "border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/10"
                    : "border-slate-300 bg-white/70 text-slate-800 hover:border-blue-300 hover:bg-blue-50"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                </svg>

                LinkedIn

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Bottom divider */}
            <div
              className={`contact-content mx-auto mt-16 h-px max-w-2xl ${darkMode
                ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
                : "bg-gradient-to-r from-transparent via-slate-300 to-transparent"
                }`}
            />

            {/* Footer */}
            <div className="contact-content mt-8 flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
              <p className="text-gray-500">
                © {new Date().getFullYear()} Prashanth Banoth. All rights reserved.
              </p>

              <p className="inline-flex items-center gap-2 text-blue-500">
                <Sparkles className="h-3.5 w-3.5" />
                Designed & Built with passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

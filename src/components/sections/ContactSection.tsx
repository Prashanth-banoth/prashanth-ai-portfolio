
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
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
      className={`relative overflow-hidden px-6 py-28 md:px-16 md:py-36 ${
        darkMode
          ? "bg-[#080817] text-white"
          : "bg-[#edf2ff] text-[#111827]"
      }`}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
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
          className={`contact-content mx-auto mt-7 max-w-2xl text-base leading-8 md:text-lg ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I'm open to frontend development opportunities,
          internships, collaborations and exciting projects.
          Let's connect and create something meaningful.
        </p>

        <div className="contact-content mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="mailto:prashanthbanoth23@gmail.com"
            className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-105 hover:bg-blue-500"
          >
            Email Me ↗
          </a>

          <a
            href="https://github.com/Prashanth-banoth"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border px-8 py-4 text-sm font-semibold transition hover:scale-105 ${
              darkMode
                ? "border-white/20 hover:bg-white/10"
                : "border-black/20 hover:bg-black/5"
            }`}
          >
            GitHub ↗
          </a>
        </div>

        <div
          className={`contact-content mx-auto mt-20 border-t pt-8 text-sm ${
            darkMode
              ? "border-white/10 text-gray-500"
              : "border-black/10 text-gray-500"
          }`}
        >
          © {new Date().getFullYear()} Prashanth Banoth. All rights reserved.
        </div>
      </div>
    </section>
  );
}

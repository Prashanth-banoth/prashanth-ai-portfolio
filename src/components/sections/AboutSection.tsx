
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AboutSectionProps {
  darkMode: boolean;
}

export default function AboutSection({
  darkMode,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 65%",
          scrub: 1,
        },
      });

      // Section label
      timeline.fromTo(
        ".about-label",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );

      // Main heading
      timeline.fromTo(
        ".about-heading",
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.2"
      );

      // Description
      timeline.fromTo(
        ".about-description",
        {
          x: -60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Feature cards
      timeline.fromTo(
        ".about-card",
        {
          y: 90,
          opacity: 0,
          scale: 0.9,
          rotateX: 12,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.2"
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 md:px-16 ${
        darkMode
          ? "bg-[#050510] text-white"
          : "bg-[#f4f7ff] text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Label */}
        <p className="about-label mb-6 text-sm font-semibold tracking-[0.35em] text-blue-500">
          01 / ABOUT ME
        </p>

        {/* Heading */}
        <h2 className="about-heading text-4xl font-bold leading-tight md:text-7xl">
          Building the future,
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            one experience at a time.
          </span>
        </h2>

        {/* Description */}
        <p
          className={`about-description mt-10 max-w-3xl text-lg leading-9 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I'm Prashanth Banoth, a frontend developer
          passionate about building modern web applications,
          interactive user interfaces, and exploring
          Agentic AI and emerging technologies.
        </p>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Frontend",
              description: "React, Next.js and TypeScript",
            },
            {
              number: "02",
              title: "Creative Tech",
              description: "3D experiences and motion design",
            },
            {
              number: "03",
              title: "Artificial Intelligence",
              description:
                "Generative AI and Agentic AI fundamentals",
            },
          ].map((item) => (
            <div
              key={item.number}
              className={`about-card group rounded-2xl border p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/50 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:bg-blue-500/[0.08] hover:shadow-xl hover:shadow-blue-500/10"
                  : "border-black/10 bg-white/70 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
              }`}
            >
              <span className="text-sm font-semibold text-blue-500 transition group-hover:text-cyan-400">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-bold transition group-hover:text-blue-400">
                {item.title}
              </h3>

              <p className="mt-3 text-sm opacity-60">
                {item.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

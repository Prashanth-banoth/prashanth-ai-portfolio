
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
      gsap.fromTo(
        ".about-reveal",
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 25%",
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative flex min-h-screen items-center justify-center px-6 py-32 md:px-16 ${
        darkMode
          ? "bg-[#050510] text-white"
          : "bg-[#f4f7ff] text-gray-900"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <p className="about-reveal mb-6 text-sm font-semibold tracking-[0.35em] text-blue-500">
          01 / ABOUT ME
        </p>

        <h2 className="about-reveal text-4xl font-bold leading-tight md:text-7xl">
          Building the future,
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            one experience at a time.
          </span>
        </h2>

        <p
          className={`about-reveal mt-10 max-w-3xl text-lg leading-9 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I'm Prashanth Banoth, a frontend developer
          passionate about building modern web applications,
          interactive user interfaces, and exploring
          Agentic AI and emerging technologies.
        </p>

        <div className="about-reveal mt-14 grid gap-6 md:grid-cols-3">
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
              description: "Generative AI and Agentic AI fundamentals",
            },
          ].map((item) => (
            <div
              key={item.number}
              className={`rounded-2xl border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                  : "border-black/10 bg-white/70 hover:bg-white"
              }`}
            >
              <span className="text-sm text-blue-500">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm opacity-60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExperienceSection({
  darkMode,
}: {
  darkMode: boolean;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className={`relative overflow-hidden px-6 py-28 md:px-16 md:py-36 ${
        darkMode
          ? "bg-[#050510] text-white"
          : "bg-[#f4f7ff] text-[#111827]"
      }`}
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-blue-500">
          MY JOURNEY
        </p>

        <h2 className="text-4xl font-bold md:text-6xl">
          Experience{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            & Education
          </span>
        </h2>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-bold">Professional Experience</h3>

          <div className="timeline-item relative border-l-2 border-blue-500/40 pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-blue-500 bg-[#050510]" />

            <p className="text-sm font-semibold tracking-wider text-blue-500">
              AUG 2026 - NOV 2026
            </p>

            <h4 className="mt-3 text-xl font-bold">
              Frontend Developer Intern
            </h4>

            <p className="mt-1 text-sm text-blue-500">
              GGST Innovations Pvt. Ltd.
            </p>

            <p
              className={`mt-4 max-w-2xl text-sm leading-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Worked on a recruitment management platform using
              Next.js, React, TypeScript and Tailwind CSS. Contributed
              to API integration, data tables, search, filtering,
              pagination and dashboard interfaces.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"].map(
                (skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-xs ${
                      darkMode
                        ? "border-white/10 text-gray-300"
                        : "border-slate-200 text-slate-600"
                    }`}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="mb-8 text-2xl font-bold">Education</h3>

          <div className="timeline-item relative border-l-2 border-purple-500/40 pl-8">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-purple-500 bg-[#050510]" />

            <p className="text-sm font-semibold tracking-wider text-purple-500">
              2022 – 2026
            </p>

            <h4 className="mt-3 text-xl font-bold">
              Bachelor of Technology – Electronics & Communication Engineering
            </h4>

            <p className="mt-2 text-sm text-purple-500">
              Guru Nanak Institutions Technical Campus, Hyderabad
            </p>

            <p
              className={`mt-4 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              CGPA: 8.89 / 10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

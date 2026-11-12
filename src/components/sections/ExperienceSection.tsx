
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
];

export default function ExperienceSection({
  darkMode,
}: {
  darkMode: boolean;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 65%",
            end: "bottom 75%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".timeline-item",
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 70%",
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
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="experience-heading">
          <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-blue-500">
            MY JOURNEY
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Experience{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              & Education
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl text-sm leading-8 md:text-base ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My professional journey, technical growth, and academic
            foundation in building digital experiences.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mt-20">
          <h3 className="mb-10 text-2xl font-bold">
            Professional Experience
          </h3>

          <div className="relative">
            {/* Animated timeline */}
            <div
              className={`absolute bottom-0 left-[7px] top-0 w-[2px] origin-top ${
                darkMode ? "bg-white/10" : "bg-slate-200"
              }`}
            />
            <div className="timeline-line absolute bottom-0 left-[7px] top-0 w-[2px] origin-top bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500" />

            <div className="timeline-item relative pl-10">
              {/* Timeline dot */}
              <div className="absolute left-0 top-7 h-4 w-4 rounded-full border-[3px] border-blue-500 bg-[#050510] shadow-[0_0_18px_rgba(59,130,246,0.8)]" />

              {/* Experience card */}
              <div
                className={`group rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 md:p-8 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.035] hover:border-blue-500/40 hover:bg-white/[0.06]"
                    : "border-slate-200 bg-white/80 shadow-lg shadow-slate-200/40 hover:border-blue-300 hover:shadow-xl"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-500">
                    AUG 2026 - NOV 2026
                  </span>

                  <span className="text-xs font-medium text-blue-500">
                    Professional Experience
                  </span>
                </div>

                <h4 className="mt-6 text-xl font-bold md:text-2xl">
                  Frontend Developer Intern
                </h4>

                <p className="mt-2 font-medium text-blue-500">
                  GGST Innovations Pvt. Ltd.
                </p>

                <p
                  className={`mt-5 max-w-3xl text-sm leading-8 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Worked on a recruitment management platform using
                  Next.js, React, TypeScript and Tailwind CSS. Contributed
                  to API integration, data tables, search, filtering,
                  pagination and dashboard interfaces.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border px-3 py-2 text-xs transition-colors duration-300 ${
                        darkMode
                          ? "border-white/10 bg-white/[0.03] text-gray-300 group-hover:border-blue-500/30"
                          : "border-slate-200 bg-slate-50 text-slate-600 group-hover:border-blue-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="mb-10 text-2xl font-bold">Education</h3>

          <div className="relative">
            <div
              className={`absolute bottom-0 left-[7px] top-0 w-[2px] ${
                darkMode ? "bg-white/10" : "bg-slate-200"
              }`}
            />

            <div className="timeline-item relative pl-10">
              <div className="absolute left-0 top-7 h-4 w-4 rounded-full border-[3px] border-purple-500 bg-[#050510] shadow-[0_0_18px_rgba(168,85,247,0.8)]" />

              <div
                className={`group rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 md:p-8 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.035] hover:border-purple-500/40 hover:bg-white/[0.06]"
                    : "border-slate-200 bg-white/80 shadow-lg shadow-slate-200/40 hover:border-purple-300 hover:shadow-xl"
                }`}
              >
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-500">
                  2022 - 2026
                </span>

                <h4 className="mt-6 text-xl font-bold leading-relaxed md:text-2xl">
                  Bachelor of Technology
                </h4>

                <p className="mt-2 text-sm font-medium text-purple-500">
                  Electronics & Communication Engineering
                </p>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Guru Nanak Institutions Technical Campus, Hyderabad
                </p>

                <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-purple-500/20 bg-purple-500/10 px-5 py-3">
                  <span className="text-sm text-purple-500">
                    Academic Performance
                  </span>
                  <span className="text-lg font-bold text-purple-500">
                    8.89 CGPA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

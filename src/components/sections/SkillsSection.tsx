
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive web experiences.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    accent: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-500/15",
  },
  {
    number: "02",
    title: "Programming & Database",
    description: "Writing structured code and working with data.",
    skills: ["Python", "OOP", "MySQL", "REST APIs"],
    accent: "from-purple-500 to-pink-400",
    glow: "group-hover:shadow-purple-500/15",
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description: "Tools I use to build and manage projects.",
    skills: ["Git", "GitHub", "VS Code", "Redux"],
    accent: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-500/15",
  },
  {
    number: "04",
    title: "AI Fundamentals",
    description: "Exploring modern AI concepts and technologies.",
    skills: [
      "Generative AI",
      "LLM Fundamentals",
      "Prompt Engineering",
      "Agentic AI Fundamentals",
    ],
    accent: "from-pink-500 to-purple-500",
    glow: "group-hover:shadow-pink-500/15",
  },
];

export default function SkillsSection({
  darkMode,
}: {
  darkMode: boolean;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-heading",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".skill-card",
        {
          y: 65,
          opacity: 0,
          rotateX: 8,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      className={`relative overflow-hidden px-6 py-28 md:px-16 md:py-36 ${
        darkMode
          ? "bg-[#080817] text-white"
          : "bg-[#edf2ff] text-[#111827]"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="skills-heading mb-16">
          <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-blue-500">
            MY EXPERTISE
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl leading-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies and tools I use to build web applications,
            explore creative development, and learn emerging AI concepts.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className={`skill-card group relative overflow-hidden rounded-3xl border p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.5deg] hover:shadow-2xl md:p-9 ${
                darkMode
                  ? `border-white/10 bg-white/[0.035] hover:border-white/20 ${group.glow}`
                  : `border-slate-200 bg-white/80 shadow-lg shadow-slate-200/40 hover:border-blue-300 ${group.glow}`
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Gradient accent */}
              <div
                className={`absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r ${group.accent} opacity-70 transition-all duration-500 group-hover:h-1 group-hover:opacity-100`}
              />

              {/* Soft card glow */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${group.accent} opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              <div className="relative z-10">
                {/* Card number */}
                <div className="mb-8 flex items-center justify-between">
                  <span
                    className={`bg-gradient-to-r ${group.accent} bg-clip-text text-sm font-bold tracking-[0.25em] text-transparent`}
                  >
                    / {group.number}
                  </span>

                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${group.accent} shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-transform duration-500 group-hover:scale-150`}
                  />
                </div>

                {/* Category */}
                <h3 className="text-2xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                  {group.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`cursor-default rounded-xl border px-4 py-2.5 text-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                        darkMode
                          ? "border-white/10 bg-white/[0.04] text-gray-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

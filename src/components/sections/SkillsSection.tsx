
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive web experiences.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Programming & Database",
    description: "Writing structured code and working with data.",
    skills: ["Python", "OOP", "MySQL", "REST APIs"],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description: "Tools I use to build and manage projects.",
    skills: ["Git", "GitHub", "VS Code", "Redux"],
  },
  {
    number: "04",
    title: "AI Fundamentals",
    description: "Exploring modern AI concepts and technologies.",
    skills: ["Generative AI", "LLM Fundamentals", "Prompt Engineering", "Agentic AI Fundamentals"],
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
        ".skill-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 75%",
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
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16">
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

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className={`skill-card group rounded-3xl border p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 md:p-9 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:border-blue-500/40 hover:bg-white/[0.06]"
                  : "border-slate-200 bg-white/70 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10"
              }`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-blue-500">
                  / {group.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
              </div>

              <h3 className="text-2xl font-bold">
                {group.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-7 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {group.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                      darkMode
                        ? "border-white/10 bg-white/[0.04] text-gray-300 group-hover:border-blue-500/30"
                        : "border-slate-200 bg-slate-50 text-slate-700 group-hover:border-blue-300"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

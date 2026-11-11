
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    number: "01",
    category: "FRONTEND DEVELOPMENT",
    title: "Recruitment Management System",
    description:
      "A recruitment management platform with candidate, client, role, commission and replacement management, including API-driven tables and dashboards.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    accent: "from-blue-500 to-cyan-400",
    status: "Professional Experience",
  },
  {
    number: "02",
    category: "AI & BACKEND DEVELOPMENT",
    title: "AI SRE Agent",
    description:
      "An AI-powered log analysis project designed to identify errors, detect critical issues and generate structured summaries from application logs.",
    technologies: ["Python", "FastAPI", "LangGraph", "Docker"],
    accent: "from-purple-500 to-blue-500",
    status: "Personal Project",
  },
  {
    number: "03",
    category: "GENERATIVE AI",
    title: "Agentic AI Task Assistant",
    description:
      "A beginner-friendly AI assistant project exploring task-oriented interactions using the Google Gemini API.",
    technologies: ["Python", "Google Gemini API", "LLM Fundamentals"],
    accent: "from-cyan-400 to-emerald-400",
    status: "Personal Project",
  },
];

export default function ProjectsSection({
  darkMode,
}: {
  darkMode: boolean;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      className={`relative overflow-hidden px-6 py-28 md:px-16 md:py-36 ${
        darkMode
          ? "bg-[#050510] text-white"
          : "bg-[#f4f7ff] text-[#111827]"
      }`}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold tracking-[0.35em] text-blue-500">
            SELECTED WORK
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Projects{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              & Experiments
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl leading-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of projects where I explore frontend
            development, backend technologies and AI concepts.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-2 md:p-10 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:border-blue-500/40 hover:bg-white/[0.06]"
                  : "border-slate-200 bg-white/80 shadow-sm hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
              }`}
            >
              <div
                className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-[70px] transition duration-500 group-hover:opacity-25`}
              />

              <div className="relative z-10">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-widest text-blue-500">
                    / {project.number}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${
                      darkMode
                        ? "border-white/10 text-gray-400"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-blue-500">
                  {project.category}
                </p>

                <h3 className="max-w-lg text-2xl font-bold leading-snug md:text-3xl">
                  {project.title}
                </h3>

                <p
                  className={`mt-5 max-w-xl text-sm leading-8 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-2 text-xs ${
                        darkMode
                          ? "border-white/10 bg-white/[0.04] text-gray-300"
                          : "border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-10 h-px w-full ${
                    darkMode ? "bg-white/10" : "bg-slate-200"
                  }`}
                />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-blue-500">
                    PROJECT {project.number}
                  </span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

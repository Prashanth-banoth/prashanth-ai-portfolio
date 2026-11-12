
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "FULL-STACK & AI DEVELOPMENT",
    title: "AI-Powered Job Board",
    description:
      "A full-stack job portal built with Django to manage job listings, candidates and applications. Integrated Google Gemini API to generate context-aware AI responses using prompt engineering.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "SQL",
      "Google Gemini API",
      "JavaScript",
    ],
    accent: "from-blue-500 to-cyan-400",
    status: "Personal Project",
    icon: BrainCircuit,
    preview: "jobboard",
  },
  {
    number: "02",
    category: "GENERATIVE AI & FRONTEND",
    title: "AI Code Assistant",
    description:
      "An interactive AI code assistant built with React.js and TypeScript that generates code suggestions from user prompts through the Google Gemini API, with asynchronous loading and error handling.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API",
    ],
    accent: "from-purple-500 to-blue-500",
    status: "Personal Project",
    icon: Code2,
    preview: "codeassistant",
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
        ".projects-heading",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { y: 70, opacity: 0, rotateX: 7 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#projects",
            start: "top 70%",
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
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="projects-heading mb-16">
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
            A collection of projects combining full-stack development,
            frontend engineering and AI-powered applications.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <article
                key={project.number}
                className={`project-card group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "border-white/10 bg-white/[0.035] hover:border-blue-500/40 hover:shadow-blue-500/10"
                    : "border-slate-200 bg-white/80 shadow-lg shadow-slate-200/40 hover:border-blue-300 hover:shadow-blue-500/10"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gradient glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} opacity-[0.08] blur-[80px] transition-opacity duration-500 group-hover:opacity-25`}
                />

                <div className="relative z-10 p-6 md:p-9">
                  {/* Project header */}
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-[0.25em] text-blue-500">
                      / {project.number}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-wide ${
                        darkMode
                          ? "border-white/10 bg-white/[0.04] text-gray-400"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project visual preview */}
                  <div
                    className={`relative mb-8 flex h-48 items-center justify-center overflow-hidden rounded-2xl border transition-all duration-500 group-hover:scale-[1.015] md:h-56 ${
                      darkMode
                        ? "border-white/10 bg-[#0b1020]"
                        : "border-slate-200 bg-slate-100"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-[0.08]`}
                    />

                    <div className="absolute -left-10 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

                    {/* AI-Powered Job Board Preview */}
                    {project.preview === "jobboard" && (
                      <div className="relative w-[82%] rounded-xl border border-white/10 bg-[#111a2e]/95 p-5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <ProjectIcon className="h-4 w-4 text-blue-400" />
                            <span className="text-xs font-semibold text-white">
                              AI Job Board
                            </span>
                          </div>

                          <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[9px] text-emerald-400">
                            AI ENABLED
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {["Jobs", "Candidates", "Applications"].map(
                            (item, i) => (
                              <div
                                key={item}
                                className="rounded-lg border border-white/10 bg-white/[0.04] p-2"
                              >
                                <p className="text-[8px] text-gray-400">
                                  {item}
                                </p>

                                <div
                                  className={`mt-2 h-2 w-8 rounded-full bg-gradient-to-r ${project.accent}`}
                                  style={{ opacity: 1 - i * 0.15 }}
                                />
                              </div>
                            )
                          )}
                        </div>

                        <div className="mt-4 rounded-lg border border-blue-400/20 bg-blue-500/10 p-3">
                          <p className="text-[9px] font-semibold text-blue-300">
                            GEMINI AI RESPONSE
                          </p>

                          <p className="mt-2 text-[10px] leading-4 text-gray-300">
                            Generating context-aware responses...
                          </p>
                        </div>
                      </div>
                    )}

                    {/* AI Code Assistant Preview */}
                    {project.preview === "codeassistant" && (
                      <div className="relative w-[82%] rounded-xl border border-white/10 bg-[#111a2e]/95 p-5 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                        <div className="mb-4 flex items-center gap-2">
                          <ProjectIcon className="h-4 w-4 text-purple-400" />

                          <span className="text-xs font-semibold text-white">
                            AI Code Assistant
                          </span>

                          <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400" />
                        </div>

                        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                          <p className="text-[9px] text-gray-400">
                            Your prompt
                          </p>

                          <p className="mt-2 text-[10px] text-blue-300">
                            Create a React component...
                          </p>
                        </div>

                        <div className="mt-3 rounded-lg border border-purple-400/20 bg-purple-500/10 p-3">
                          <p className="mb-2 text-[9px] font-semibold text-purple-300">
                            GEMINI GENERATED CODE
                          </p>

                          <div className="space-y-2 font-mono text-[9px]">
                            <p className="text-cyan-300">
                              function App() {"{"}
                            </p>

                            <p className="pl-3 text-gray-300">
                              return (
                            </p>

                            <p className="pl-6 text-emerald-300">
                              {"<div>Hello World</div>"}
                            </p>

                            <p className="pl-3 text-gray-300">);</p>

                            <p className="text-cyan-300">{"}"}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Category */}
                  <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-blue-500">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="max-w-lg text-2xl font-bold leading-snug transition-colors duration-300 group-hover:text-blue-500 md:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-5 max-w-xl text-sm leading-8 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-lg border px-3 py-2 text-xs transition-all duration-300 ${
                          darkMode
                            ? "border-white/10 bg-white/[0.04] text-gray-300 hover:border-blue-500/40 hover:text-white"
                            : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    className={`mt-9 flex items-center justify-between border-t pt-5 ${
                      darkMode ? "border-white/10" : "border-slate-200"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-wider text-blue-500">
                      PROJECT {project.number}
                    </span>

                    <div className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500">
                      Explore
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

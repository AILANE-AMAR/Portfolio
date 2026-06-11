import { Code, GitBranch, ExternalLink } from "lucide-react";
import type { Project } from "../Types";
import { projets } from "../Data/Project";
import { useEffect, useRef } from "react";

const categoryColors: Record<string, string> = {
  data: "badge-info",
  tools: "badge-warning",
  web: "badge-error",
  simulation: "badge-secondary",
  ai: "badge-primary",
  professional: "badge-neutral",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="section-reveal card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Color accent bar */}
      <div className="h-1 w-full" style={{ background: project.color }} />

      <div className="card-body">
        {/* HEADER */}
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
              {project.title}
            </h3>
            <p className="text-xs opacity-50 mt-0.5">
              {project.role} · {project.year}
            </p>
          </div>
          <span className={`badge badge-sm badge-outline ${project.status === 'completed' ? 'badge-success' : 'badge-warning'} shrink-0`}>
            {project.status === 'completed' ? '✓ Done' : 'En cours'}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm opacity-70 mt-2 leading-relaxed">
          {project.description}
        </p>

        {/* CATEGORY */}
        <div className="mt-3">
          <span className={`badge badge-sm ${categoryColors[project.category] ?? 'badge-neutral'}`}>
            {project.category}
          </span>
        </div>

        {/* LINKS */}
        <div className="card-actions justify-end mt-4">
          {project.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer"
              className="btn btn-sm btn-outline btn-primary gap-1.5">
              {link.type === "github" && <Code size={14} />}
              {link.type === "gitlab" && <GitBranch size={14} />}
              {link.type === "external" && <ExternalLink size={14} />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-sm opacity-50 tracking-widest uppercase">/02 — Selected Work</p>
        <h2 className="text-4xl font-bold mt-1" style={{ fontFamily: "var(--font-display)" }}>
          Mes <span className="text-primary italic">Projets</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projets.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
import { Code, GitBranch, ExternalLink } from "lucide-react";
import type { Project } from "../Types";

export const projets: Project[] = [
  {
    year: "2025",
    title: "Analyse du réseau Bitcoin",
    role: "Big Data Analyst",
    description:
      "Analyse de données transactionnelles Bitcoin à grande échelle. Traitement avec PySpark et pandas, puis visualisation du réseau avec NetworkX.",
    color: "#f7931a",
    status: "completed",
    category: "tools",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/your-repo/bitcoin-analysis",
        type: "github",
      },
    ],
  },
  {
    year: "2025",
    title: "Système de Gestion de Magasin",
    role: "Java Desktop Developer",
    description:
      "Application desktop de gestion de produits, stocks, ventes et utilisateurs avec JavaFX et base PostgreSQL.",
    color: "#4CAF50",
    status: "completed",
    category: "tools",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/your-repo/store-management",
        type: "github",
      },
    ],
  },
  {
    year: "2025",
    title: "Monitoring System",
    role: "Backend Developer",
    description:
      "Outil de monitoring CPU/RAM avec Flask, automatisation Bash & Crontab, alertes e-mail et scraping CERT-FR.",
    color: "#2196F3",
    status: "completed",
    category: "tools",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/your-repo/monitoring-system",
        type: "github",
      },
    ],
  },
  {
    year: "2025",
    title: "Elite Cars Rental",
    role: "Full Stack Developer",
    description:
      "Application web de location de voitures avec front office utilisateur et back office admin. PHP MVC + PostgreSQL.",
    color: "#ff4081",
    status: "completed",
    category: "web",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AILANE-AMAR/Voiture.git",
        type: "github",
      },
    ],
  },
  {
    year: "2024",
    title: "Small World - Jeu de société",
    role: "Java Developer (POO & MVC)",
    description:
      "Jeu de société développé en Java Swing pour apprendre la POO et l’architecture MVC.",
    color: "#9c27b0",
    status: "completed",
    category: "simulation",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/your-repo/small-world",
        type: "github",
      },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-lg transition-all">

      <div className="card-body">

        {/* HEADER */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">
              {project.title}
            </h3>

            <p className="text-sm opacity-60">
              {project.role} • {project.year}
            </p>
          </div>

          <span className="badge badge-success badge-outline">
            {project.status}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm opacity-80 mt-2">
          {project.description}
        </p>

        {/* CATEGORY */}
        <div className="mt-3">
          <span className="badge badge-primary">
            {project.category}
          </span>
        </div>

        {/* LINKS */}
        <div className="card-actions justify-end mt-4">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              className="btn btn-sm btn-outline btn-primary"
            >
              {link.type === "github" && <Code size={16} />}
              {link.type === "gitlab" && <GitBranch size={16} />}
              {link.type === "external" && <ExternalLink size={16} />}

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

      {/* TITLE */}
      <div className="mb-10">
        <p className="text-sm opacity-60">/02 — Selected Work</p>
        <h2 className="text-4xl font-bold">
          Mes <span className="text-primary">Projets</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projets.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
}
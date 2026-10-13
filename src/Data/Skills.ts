import type { SkillCategory } from '../Types';

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Langages",
    icon: "💻",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL", "C / C++"],
  },
  {
    id: "frontend",
    title: "Front-end",
    icon: "🎨",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "DaisyUI"],
  },
  {
    id: "backend",
    title: "Back-end & APIs",
    icon: "⚙️",
    items: ["Node.js / Express", "Spring Boot", "Flask", "APIs REST", "PHP MVC"],
  },
  {
    id: "db",
    title: "Bases de données",
    icon: "🗄️",
    items: ["PostgreSQL", "MySQL", "Prisma (ORM, migrations)", "Modélisation relationnelle", "SQL d'agrégation"],
  },
  {
    id: "ai",
    title: "IA & Automatisation",
    icon: "🤖",
    items: ["PyTorch", "OCR et extraction de documents", "Classification par LLM", "RAG", "n8n"],
  },
  {
    id: "data",
    title: "Data",
    icon: "📊",
    items: ["pandas", "PySpark", "NumPy", "Matplotlib", "NetworkX"],
  },
  {
    id: "integrations",
    title: "Intégrations",
    icon: "🔌",
    items: ["Microsoft Graph (Outlook, SharePoint / OneDrive)", "SSO / OAuth", "Webhooks"],
  },
  {
    id: "tools",
    title: "Qualité & Exploitation",
    icon: "🛠️",
    items: ["Git (branches, pull requests, revues)", "Tests automatisés", "Docker", "Linux", "Bash", "Crontab", "Supervision", "Scrum / Agile"],
  },
];
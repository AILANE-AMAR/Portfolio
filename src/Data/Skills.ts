import type { SkillCategory } from '../Types';

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Langages",
    icon: "💻",
    items: ["Python", "Java", "JavaScript", "C", "C++", "R"],
  },
  {
    id: "data",
    title: "Data & BI",
    icon: "📊",
    items: ["pandas", "PySpark", "NumPy", "Matplotlib", "NetworkX", "Streamlit"],
  },
  {
    id: "frontend",
    title: "Front-end",
    icon: "🎨",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS", "DaisyUI"],
  },
  {
    id: "backend",
    title: "Back-end",
    icon: "⚙️",
    items: ["Node.js", "Flask", "Spring Boot", "PHP MVC"],
  },
  {
    id: "db",
    title: "Bases de données",
    icon: "🗄️",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    id: "tools",
    title: "Outils & DevOps",
    icon: "🛠️",
    items: ["Git", "Bash", "Crontab", "Linux", "Scrum / Agile"],
  },
];
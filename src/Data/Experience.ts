import type { ExperienceEntry } from '../Types';

export const experiences: ExperienceEntry[] = [
  {
    id: "liris",
    title: "Research Intern – Deep Learning",
    company: "LIRIS – Université Claude Bernard Lyon 1",
    period: "Juin 2026 — Août 2026",
    location: "Lyon, France",
    description:
      "Développement d'un pipeline d'analyse d'images histopathologiques avec Python et PyTorch. Implémentation de modèles de Deep Learning (Vision Transformer, ABMIL) pour la prédiction de la réponse tumorale et comparaison de modèles de fondation dans un contexte de recherche en IA.",
    tags: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
      "Research",
    ],
  },
  {
    id: "asso",
    title: "Trésorier",
    company: "Association des Informaticiens Lyonnais",
    period: "Oct. 2025 — Présent",
    location: "Villeurbanne, France",
    description:
      "Gestion financière de l'association étudiante : suivi du budget, organisation d'événements tech, coordination avec les partenaires.",
    tags: ["Gestion", "Organisation", "Finance", "Bénévolat"],
  },
  {
    id: "cafe",
    title: "Barista",
    company: "Columbus Café",
    period: "Sept. 2025 — Présent",
    location: "Lyon, France",
    description:
      "Service client, préparation de boissons, gestion du flux en heure de pointe. Développement des soft skills : communication, rigueur, travail en équipe.",
    tags: ["Service client", "Travail en équipe", "Rigueur"],
  },
];
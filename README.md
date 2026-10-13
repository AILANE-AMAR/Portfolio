# Portfolio – Amar AILANE

Portfolio personnel d'un étudiant en Master Informatique (Lyon 1), développeur full-stack, à la recherche d'une **alternance de 12 à 24 mois** en développement, data et IA appliquée.

Le site présente mes projets, mes compétences et mon parcours.

## À propos

Étudiant en M1 Informatique à l'Université Claude Bernard Lyon 1, je développe des applications web complètes (API REST, base de données, interface React) pour des besoins métier concrets. Suite à mon stage de recherche en Deep Learning, je m'intéresse à l'IA appliquée : classification, extraction de documents, OCR et automatisations avec validation humaine.

## Projets présentés

| Projet | Description | Technologies |
|---|---|---|
| **Trésorerie Asso** | Application web de gestion de trésorerie pour une association étudiante (projet réel) | Java, Spring Boot, PostgreSQL, React |
| **Analyse du réseau Bitcoin** | Analyse de données transactionnelles à grande échelle, modélisation en graphes | PySpark, pandas, NetworkX |
| **Système de Gestion de Magasin** | Application desktop de gestion de produits, stocks et ventes | JavaFX, PostgreSQL |
| **Monitoring System** | Supervision CPU / RAM avec alertes e-mail automatisées | Python, Flask |
| **Elite Cars Rental** | Site de réservation de voitures avec front office et back office | PHP MVC, PostgreSQL |
| **Small World** | Jeu de société en Java, architecture MVC | Java, Swing |

## Compétences

- **Web & APIs** : TypeScript, Node.js / Express, Next.js, React, Tailwind CSS, Spring Boot, Flask, APIs REST
- **Données** : PostgreSQL, Prisma, MySQL, modélisation relationnelle, SQL d'agrégation
- **IA & automatisation** : OCR et extraction de documents, classification par LLM avec validation humaine, RAG, n8n, PyTorch
- **Intégrations** : Microsoft Graph (Outlook, SharePoint / OneDrive), SSO / OAuth, webhooks
- **Qualité & exploitation** : Git (branches, pull requests, revues), tests automatisés, Docker, Linux, Bash, sauvegardes, supervision
- **Langages** : TypeScript, JavaScript, Java, Python, SQL, C / C++

## Expérience

- **Stage de recherche – Deep Learning pour la prédiction en oncologie** (juin – août 2026), LIRIS, Université Lyon 1 : pipeline de traitement d'images histopathologiques, Vision Transformers et Multiple Instance Learning.
- **Trésorier de l'Association des informaticiens lyonnais** (depuis octobre 2025) : budget, coordination du bureau, outil de trésorerie.

## Formation

- Master Informatique (M1 en cours), Université Claude Bernard Lyon 1, 2026 – 2028
- L3 Informatique, Université Claude Bernard Lyon 1, 2025 – 2026
- L2 Informatique, Université d'Avignon, 2024 – 2025

## Stack du portfolio

- [React](https://react.dev/) et [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) pour le bundling et le serveur de développement
- ESLint pour la qualité du code

Les projets affichés sont décrits dans un fichier de données typé (`Project`), ce qui permet d'en ajouter un simplement : titre, rôle, description, année, catégorie, couleur et liens.

## Lancer le projet

Prérequis : Node.js 18 ou plus.

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire la version de production
npm run build

# Prévisualiser le build
npm run preview
```

Le site est ensuite accessible sur http://localhost:5173.

## Ajouter un projet

Ajouter un objet dans la liste des projets, en respectant le type `Project` :

```typescript
{
  year: "2026",
  title: "Nom du projet",
  role: "Mon rôle",
  description: "Courte description du projet et des technologies utilisées.",
  color: "#00bfa5",
  status: "completed",
  category: "web",
  links: [
    { label: "GitHub", url: "https://github.com/...", type: "github" },
  ],
}
```

## Contact

- Email : ailaneamar8@gmail.com
- GitHub : [AILANE-AMAR](https://github.com/AILANE-AMAR)
- Localisation : Lyon
import { Download, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.475 5.92.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.286 0 .322.216.696.825.578C20.565 21.795 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const About = () => {
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
    <section
      id="about"
      className="min-h-screen flex items-center pt-24 pb-20 px-6 max-w-6xl mx-auto"
    >
      <div ref={ref} className="section-reveal w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div>
          <p className="text-sm font-medium opacity-50 tracking-widest uppercase mb-4">
            /01 — À propos
          </p>

          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bonjour, je suis{" "}
            <span className="text-primary italic">Amar</span>
            <span className="block">Ailane.</span>
          </h1>

          <p className="text-lg opacity-70 leading-relaxed mb-4">
            Étudiant en <strong>L3 Informatique</strong> à l'Université Claude Bernard Lyon 1, je cherche un
            stage en développement de <strong>3 à 4 mois</strong> à partir de fin avril.
          </p>

          <p className="text-base opacity-60 leading-relaxed mb-8">
            Curieux et rigoureux, j'aime construire des projets concrets — des outils de monitoring aux
            analyses Big Data, en passant par des applications web full-stack. Je parle kabyle (langue
            maternelle), français et anglais courant.
          </p>

          {/* BADGES */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Lyon, France", "Disponible dès avril", "Stage 3–4 mois"].map((b) => (
              <span key={b} className="badge badge-primary badge-outline px-3 py-2 text-xs font-medium">
                {b}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-3">
            <a href="/CV-G.pdf" download className="btn btn-primary rounded-full gap-2">
              <Download size={16} />
              Télécharger CV
            </a>
            <a href="mailto:ailaneamar8@gmail.com" className="btn btn-outline btn-primary rounded-full gap-2">
              <Mail size={16} />
              Me contacter
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/AILANE-AMAR" target="_blank" rel="noreferrer"
              className="btn btn-ghost btn-circle btn-sm opacity-60 hover:opacity-100 hover:text-primary transition">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="btn btn-ghost btn-circle btn-sm opacity-60 hover:opacity-100 hover:text-primary transition">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT — DECORATIVE CARD */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
            </div>
            {/* Inner card */}
            <div className="absolute inset-8 rounded-3xl bg-base-200 border border-base-300 flex items-center justify-center shadow-xl">
              <div className="text-center p-6">
                <div className="text-5xl mb-3" style={{ fontFamily: "var(--font-display)" }}>AA</div>
                <div className="text-xs opacity-50 tracking-widest uppercase">Développeur</div>
                <div className="text-xs opacity-50 tracking-widest uppercase">Full Stack</div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-2 -right-4 badge badge-primary shadow-md text-xs">React</div>
            <div className="absolute top-1/2 -right-8 badge badge-secondary shadow-md text-xs">Python</div>
            <div className="absolute -bottom-2 -right-4 badge badge-accent shadow-md text-xs">Java</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
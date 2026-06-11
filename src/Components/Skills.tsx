import { skillCategories } from "../Data/Skills";
import { useEffect, useRef } from "react";

export default function Skills() {
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
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-sm opacity-50 tracking-widest uppercase">/03 — Compétences</p>
        <h2 className="text-4xl font-bold mt-1" style={{ fontFamily: "var(--font-display)" }}>
          Mes <span className="text-primary italic">Skills</span>
        </h2>
      </div>

      <div ref={ref} className="section-reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.id}
            className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="card-body">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="badge badge-outline badge-sm hover:badge-primary transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
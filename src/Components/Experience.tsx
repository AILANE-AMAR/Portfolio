import { MapPin, Calendar } from "lucide-react";
import { experiences } from "../Data/Experience";
import { useEffect, useRef } from "react";

export default function Experience() {
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
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-sm opacity-50 tracking-widest uppercase">/05 — Expériences</p>
        <h2 className="text-4xl font-bold mt-1" style={{ fontFamily: "var(--font-display)" }}>
          Mes <span className="text-primary italic">Expériences</span>
        </h2>
      </div>

      <div ref={ref} className="section-reveal grid gap-6 md:grid-cols-2">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="card-body">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-0.5">{exp.company}</p>
                </div>
                <span className="badge badge-success badge-outline badge-sm shrink-0">Actuel</span>
              </div>

              <div className="flex flex-wrap gap-4 mt-2 text-sm opacity-60">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {exp.location}
                </span>
              </div>

              <p className="text-sm opacity-70 mt-3 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <span key={tag} className="badge badge-outline badge-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
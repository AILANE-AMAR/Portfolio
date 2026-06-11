import { MapPin, Calendar } from "lucide-react";
import { education } from "../Data/Education";
import { useEffect, useRef } from "react";

export default function Education() {
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
    <section id="parcours" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-sm opacity-50 tracking-widest uppercase">/04 — Formation</p>
        <h2 className="text-4xl font-bold mt-1" style={{ fontFamily: "var(--font-display)" }}>
          Mon <span className="text-primary italic">Parcours</span>
        </h2>
      </div>

      <div ref={ref} className="section-reveal relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-base-300 hidden md:block" />

        <div className="flex flex-col gap-8">
          {education.map((entry, i) => (
            <div
              key={i}
              className="relative md:pl-16"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Dot */}
              <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-base-100 border-2 border-primary items-center justify-center shadow-sm">
                <span className="text-primary font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  {i + 1}
                </span>
              </div>

              <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all">
                <div className="card-body">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                        {entry.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{entry.institution}</p>
                    </div>
                    {i === 0 && (
                      <span className="badge badge-primary badge-sm">En cours</span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm opacity-60">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {entry.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {entry.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
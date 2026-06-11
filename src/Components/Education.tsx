import { MapPin, Calendar } from "lucide-react";
import { education } from "../Data/Education";
import { useEffect, useRef } from "react";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="parcours" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-sm opacity-50 tracking-widest uppercase">
          /04 — Formation
        </p>

        <h2
          className="text-4xl font-bold mt-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Mon <span className="text-primary italic">Parcours</span>
        </h2>
      </div>

      <div ref={ref} className="section-reveal relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-base-300 hidden md:block"></div>

        <div className="flex flex-col gap-8">
          {education.map((entry, i) => (
            <div key={i} className="relative md:pl-16">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-0 top-8 w-12 h-12 rounded-full bg-base-100 border-2 border-primary items-center justify-center shadow">
                <span className="font-bold text-primary">
                  {i + 1}
                </span>
              </div>

              <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="card-body">

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex gap-4 items-center">

                      <img
                        src={entry.logo}
                        alt={entry.institution}
                        className="w-16 h-16 rounded-xl object-contain bg-white p-2 border"
                      />

                      <div>
                        <h3
                          className="font-bold text-xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {entry.title}
                        </h3>

                        <p className="text-primary font-medium">
                          {entry.institution}
                        </p>
                      </div>
                    </div>

                    {i === 0 && (
                      <span className="badge badge-primary">
                        En cours
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-6 mt-5 text-sm opacity-70">

                    <div className="flex items-center gap-2">
                      <Calendar size={15} />
                      {entry.period}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={15} />
                      {entry.location}
                    </div>

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
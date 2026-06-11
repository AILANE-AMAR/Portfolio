import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef, useEffect } from "react";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.475 5.92.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.286 0 .322.216.696.825.578C20.565 21.795 24 17.298 24 12c0-6.63-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
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
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-sm opacity-50 tracking-widest uppercase">/06 — Contact</p>
        <h2 className="text-4xl font-bold mt-1" style={{ fontFamily: "var(--font-display)" }}>
          Travaillons <span className="text-primary italic">ensemble</span>
        </h2>
      </div>

      <div ref={ref} className="section-reveal grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT */}
        <div>
          <p className="text-base opacity-70 leading-relaxed mb-8">
            Je recherche un stage de 3 à 4 mois à partir de fin avril. Si vous avez une opportunité
            ou simplement envie d'échanger, n'hésitez pas à me contacter.
          </p>

          <div className="flex flex-col gap-4">
            <a href="mailto:ailaneamar8@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-base-200 hover:bg-base-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs opacity-50 uppercase tracking-wider">Email</p>
                <p className="text-sm font-medium">ailaneamar8@gmail.com</p>
              </div>
            </a>

            <a href="tel:+33748224078"
              className="flex items-center gap-4 p-4 rounded-2xl bg-base-200 hover:bg-base-300 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs opacity-50 uppercase tracking-wider">Téléphone</p>
                <p className="text-sm font-medium">07 48 22 40 78</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs opacity-50 uppercase tracking-wider">Localisation</p>
                <p className="text-sm font-medium">Lyon, France (69008)</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <a href="https://github.com/AILANE-AMAR" target="_blank" rel="noreferrer"
              className="btn btn-outline btn-sm rounded-full gap-2 hover:btn-primary transition-all">
              <GithubIcon size={15} /> GitHub
            </a>
            <a href="https://linkedin.com/in/amar-ailane" target="_blank" rel="noreferrer"
              className="btn btn-outline btn-sm rounded-full gap-2 hover:btn-primary transition-all">
              <LinkedinIcon size={15} /> LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body">
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Envoyer un message
            </h3>

            <div className="flex flex-col gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs opacity-60 uppercase tracking-wider">Nom</span>
                </label>
                <input type="text" placeholder="Votre nom" className="input input-bordered input-sm rounded-xl w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs opacity-60 uppercase tracking-wider">Email</span>
                </label>
                <input type="email" placeholder="votre@email.com" className="input input-bordered input-sm rounded-xl w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xs opacity-60 uppercase tracking-wider">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered rounded-xl w-full resize-none"
                  rows={4}
                  placeholder="Votre message..."
                />
              </div>

              <a
                href="mailto:ailaneamar8@gmail.com"
                className="btn btn-primary rounded-full gap-2 w-full mt-2"
              >
                <Send size={15} />
                Envoyer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
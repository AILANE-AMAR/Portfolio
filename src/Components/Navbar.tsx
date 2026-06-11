import { LayoutGrid, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#work", label: "Projets" },
  { href: "#skills", label: "Skills" },
  { href: "#parcours", label: "Parcours" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-base-100/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-base-content"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-content">
            <LayoutGrid size={15} />
          </span>
          Amar <span className="text-primary">Ailane</span>
        </a>

        {/* CENTER LINKS - Desktop */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium bg-base-200/60 rounded-full px-2 py-1.5 border border-base-300/50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-base-content/70 hover:text-base-content hover:bg-base-100 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="hidden md:flex btn btn-primary btn-sm rounded-full shadow-sm shadow-primary/30">
          Me contacter
        </a>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden btn btn-ghost btn-sm btn-circle text-base-content"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="md:hidden bg-base-100/95 backdrop-blur-xl border-t border-base-300/50 px-6 py-4 flex flex-col gap-1 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium px-3 py-2.5 rounded-xl hover:bg-base-200 hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary btn-sm rounded-full mt-2"
            onClick={() => setOpen(false)}
          >
            Me contacter
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
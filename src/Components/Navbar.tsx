import { LayoutGrid } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-base-200 px-6">

      {/* LEFT - LOGO */}
      <div className="flex-1">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <LayoutGrid size={18} />
          Amar <span className="text-primary">AILANE</span>
        </a>
      </div>

      {/* CENTER - LINKS */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#work" className="hover:text-primary transition">
          Projets
        </a>

        <a href="#skills" className="hover:text-primary transition">
          Skills
        </a>

        <a href="#parcours" className="hover:text-primary transition">
          Parcours
        </a>

        <a href="#contact" className="hover:text-primary transition">
          Contact
        </a>
      </div>

      {/* RIGHT - CTA */}
      <div className="flex-none">
        <a href="#contact" className="btn btn-primary btn-sm rounded-full">
          Me contacter
        </a>
      </div>
    </div>
  );
};

export default Navbar;
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-md"
          : "bg-white/30 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-4 max-w-6xl mx-auto">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-indigo-600">
          Biblioteca Digital
        </h1>

        {/* LINKS */}
        <div className="flex gap-6 font-medium">
          <a href="#libros" className="hover:text-indigo-600 transition">
            Libros
          </a>
          <a href="#proyectos" className="hover:text-indigo-600 transition">
            Proyectos
          </a>
          <a href="#tips" className="hover:text-indigo-600 transition">
            Tips
          </a>
        </div>

      </div>
    </nav>
  );
}
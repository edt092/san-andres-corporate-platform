"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border px-6 md:px-20 py-1.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 -my-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/parasoles-y-domos-san-andres-logo.png"
            alt="Parasoles y Domos San Andrés"
            className="h-24 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-text-dark text-sm font-semibold hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/573118712937"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-9 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover-lift"
          >
            Cotizar Gratis
          </a>
          <button
            className="md:hidden text-text-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-2 pb-3 border-t border-border pt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-text-dark text-sm font-semibold hover:text-primary transition-colors"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/573118712937"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Cotizar Gratis
          </a>
        </nav>
      )}

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-transparent">
        <div
          className="h-full bg-primary transition-none"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}

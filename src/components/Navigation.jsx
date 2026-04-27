import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation({ colors, content }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Sobre", to: "/sobre" },
    { label: "Procedimentos", to: "/procedimentos" },
    { label: "Resultados", to: "/resultados" },
    { label: "Identidade", to: "/identidade-visual" },
    { label: "Conteúdos", to: "/conteudos" },
    { label: "Contato", to: "/contato" },
  ];

  const linkBase =
    "text-sm font-medium transition-colors hover:opacity-70";

  const activeStyle = (isActive) => ({
    color: isActive ? colors.teal : colors.darkGray,
  });

  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-sm border-b-2"
      style={{ borderColor: colors.teal }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo -> Home */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
              alt="Logo Dr. Eduardo Mazão"
              className="w-10 h-10"
            />
            <div className="hidden sm:block">
              <p className="font-serif text-sm font-bold" style={{ color: colors.teal }}>
                DR. EDUARDO
              </p>
              <p className="text-xs" style={{ color: colors.gold }}>
                Cirurgião Plástico
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkBase}
                style={({ isActive }) => activeStyle(isActive)}
                end={item.to === "/"} // importante: Home só ativa em "/"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA desktop */}
          <a
            href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-6 py-2 rounded-full font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: colors.teal }}
          >
            Agendar
          </a>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left text-sm font-medium"
                style={({ isActive }) => ({
                  color: isActive ? colors.teal : colors.darkGray,
                })}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-3 w-full justify-center px-6 py-3 rounded-full font-medium text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: colors.teal }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
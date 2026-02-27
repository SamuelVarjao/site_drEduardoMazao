import React from "react";

const defaultColors = {
  offwhite: "#fdfbf5",
  darkGray: "#306078",
  gold: "#EDE3C8",
  teal: "#6A93A5",
  tealDeep: "#3A515B",
  soft: "#c7dfeb",
};

const Footer = ({ colors }) => {
  const c = colors || defaultColors;

  return (
    <footer className="bg-white border-t-2 py-12" style={{ borderColor: c.teal }}>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ color: c.tealDeep }}
      >
        <p className="mb-4">
          © 2026 Dr. Eduardo Mazão - Cirurgião Plástico. Todos os direitos reservados.
        </p>
        <p className="text-sm">Sua saúde é nossa prioridade.</p>
      </div>
    </footer>
  );
};

export default Footer;
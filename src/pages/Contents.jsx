import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const colors = {
  offwhite: "#fdfbf5",
  darkGray: "#306078",
  gold: "#EDE3C8",
  teal: "#6A93A5",
  tealDeep: "#3A515B",
  soft: "#c7dfeb",
};

function useScrollAnimation() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isVisible];
}

export default function Contents() {
  const [ref1, isVisible1] = useScrollAnimation();

  return (
    <section className="min-h-screen py-20" style={{ backgroundColor: colors.offwhite }}>
      <div
        ref={ref1}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000"
        style={{
          opacity: isVisible1 ? 1 : 0,
          transform: isVisible1 ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <h1 className="font-serif text-5xl font-bold mb-6" style={{ color: colors.teal }}>
          Conteúdos
        </h1>

        <p className="text-xl mb-10" style={{ color: colors.darkGray }}>
          Estamos preparando conteúdos para você.
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-4 rounded-full font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: colors.teal, color: "white" }}
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
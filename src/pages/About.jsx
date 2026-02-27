import React, { useState, useEffect, useRef } from "react";

const defaultColors = {
  offwhite: "#fdfbf5",
  darkGray: "#306078",
  gold: "#EDE3C8",
  teal: "#6A93A5",
  tealDeep: "#3A515B",
  soft: "#c7dfeb",
};

const About = ({ content, colors }) => {
  const mergedColors = colors || defaultColors;

  const useScrollAnimation = () => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);

    return [elementRef, isVisible];
  };

  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();

  return (
    <section className="min-h-screen py-20" style={{ backgroundColor: mergedColors.offwhite }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div
              ref={ref1}
              className="w-full aspect-square rounded-lg flex items-center justify-center border-2 border-dashed transition-all duration-1000"
              style={{
                borderColor: mergedColors.teal,
                backgroundColor: mergedColors.soft,
                opacity: isVisible1 ? 1 : 0,
                transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}palestra2.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}palestra2.webp`}
                  alt="Foto do Dr. Eduardo Mazão 3"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover rounded-lg"
                />
              </picture>
            </div>

            <div
              ref={ref2}
              className="w-full aspect-video rounded-lg flex items-center justify-center border-2 border-dashed transition-all duration-1000"
              style={{
                borderColor: mergedColors.teal,
                backgroundColor: mergedColors.soft,
                opacity: isVisible2 ? 1 : 0,
                transform: isVisible2 ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}aula2.webp`} type="image/webp" />
                <img
                  src={`${import.meta.env.BASE_URL}aula2.webp`}
                  alt="Foto do Dr. Eduardo Mazão 3"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                  className="w-full h-full object-cover rounded-lg"
                />
              </picture>
            </div>
          </div>

          <div
            ref={ref3}
            className="transition-all duration-1000"
            style={{
              opacity: isVisible3 ? 1 : 0,
              transform: isVisible3 ? "translateX(0)" : "translateX(50px)",
            }}
          >
            <h1 className="font-serif text-5xl font-bold mb-8" style={{ color: mergedColors.darkGray }}>
              Sobre o Dr. {content?.doctor?.name?.split(" ")?.[2] || ""}
            </h1>

            <p className="text-lg leading-relaxed mb-8" style={{ color: mergedColors.darkGray }}>
              {content?.doctor?.about || ""}
            </p>

            <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: mergedColors.teal }}>
              Filosofia de Atendimento
            </h2>
            <ul className="space-y-4">
              {[
                "Naturalidade acima de volume",
                "Anatomia como guia",
                "Segurança absoluta",
                "Planejamento individualizado",
                "Clareza e transparência",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: mergedColors.teal }}
                  ></div>
                  <span style={{ color: mergedColors.darkGray }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-sm mb-4" style={{ color: mergedColors.tealDeep }}>
                Idiomas:
              </p>
              <ul className="space-y-2 text-sm" style={{ color: mergedColors.darkGray }}>
                <li>• Português (nativo)</li>
                <li>• Inglês (avançado)</li>
                <li>• Espanhol (básico)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
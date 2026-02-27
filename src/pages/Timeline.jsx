import React, { useState, useEffect, useRef } from "react";

const defaultColors = {
  offwhite: "#fdfbf5",
  darkGray: "#306078",
  gold: "#EDE3C8",
  teal: "#6A93A5",
  tealDeep: "#3A515B",
  soft: "#c7dfeb",
};

const defaultContent = {
  timeline: [
    {
      period: "2013–2019",
      title: "Graduação em Medicina",
      description:
        "Atuação em hospital, pronto-socorro e centro cirúrgico com formação clínica sólida.",
      image: "aula1.webp",
    },
    {
      period: "2019–2022",
      title: "Residência de Cirurgia Geral",
      description:
        "Treinamento técnico intenso em procedimentos cirúrgicos essenciais e refinamento de habilidades.",
      image: "cirurgia1_cortado.webp",
    },
    {
      period: "2022–2025",
      title: "Residência em Cirurgia Plástica",
      description:
        "Especialização avançada em cirurgia estética e reparadora com foco em naturalidade.",
      image: "procedimento2.webp",
    },
    {
      period: "2023–2025",
      title: "Cursos e Aprimoramentos",
      description:
        "Lipo HD, rinomodelação, contorno corporal e técnicas modernas.",
      image: "curso3.jpg",
    },
    {
      period: "2025",
      title: "Imersão no AdventHealth Nicholson Center",
      description:
        "Treinamento em um instituto especializado nos EUA em técnicas avançadas de rejucenescimento facial.",
      image: "perfil4.JPG",
    },
  ],
};

const Timeline = ({ content, colors }) => {
  const mergedColors = colors || defaultColors;
  const mergedContent = content || defaultContent;
  const timelineItems = mergedContent?.timeline || defaultContent.timeline;

  const useScrollAnimation = () => {
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
  };

  const [ref1, isVisible1] = useScrollAnimation();

  return (
    <section className="min-h-screen py-20" style={{ backgroundColor: mergedColors.teal }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl font-bold text-center mb-16 text-white">
          Trajetória Profissional
        </h1>

        <div
          ref={ref1}
          className="relative transition-all duration-1000"
          style={{
            opacity: isVisible1 ? 1 : 0,
            transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{ backgroundColor: mergedColors.gold }}
          />

          <div className="space-y-12">
            {timelineItems.map((item, idx) => {
              const reverse = idx % 2 !== 0;

              return (
                <div
                  key={idx}
                  className={`md:flex gap-12 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg p-8">
                      <p
                        className="font-serif text-xl font-bold mb-2"
                        style={{ color: mergedColors.teal }}
                      >
                        {item.period}
                      </p>
                      <h3
                        className="font-serif text-2xl font-bold mb-4"
                        style={{ color: mergedColors.teal }}
                      >
                        {item.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: mergedColors.darkGray }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm">
                      <div className="aspect-[4/3] w-full">
                        <img
                          src={`${import.meta.env.BASE_URL}${item.image}`}
                          alt={`Imagem: ${item.title}`}
                          loading="lazy"
                          decoding="async"
                          width="800"
                          height="600"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {timelineItems.length === 0 && (
              <div className="bg-white rounded-lg p-8" style={{ color: mergedColors.darkGray }}>
                Nenhum item de trajetória disponível no momento.
              </div>
            )}
          </div>
        </div>

        <div className="mt-20 bg-white rounded-lg p-10">
          <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: mergedColors.teal }}>
            Perfil de Pacientes
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: mergedColors.darkGray }}>
            Adultos e público maduro (30–70+) que buscam naturalidade e segurança acima da estética
            agressiva. Pacientes que entendem o valor de uma abordagem criteriosa e personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
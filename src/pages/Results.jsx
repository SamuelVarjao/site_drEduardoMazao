import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ZoomIn } from "lucide-react";
import ZoomLightbox from "../components/ZoomLightbox";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);

    setMatches(mql.matches);

    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

const defaultColors = {
  offwhite: "#fdfbf5",
  darkGray: "#306078",
  gold: "#EDE3C8",
  teal: "#6A93A5",
  tealDeep: "#3A515B",
  soft: "#c7dfeb",
};

const defaultContent = {
  testimonials: [
    {
      name: "Patricia Almeida",
      text: "Excelente profissional, zeloso ao extremo, cuida de cada detalhe que leva a perfeição! Minha autoestima está nas alturas, me sinto mais jovem , mais confiante e claro mais bonita, minha rinoplastia foi um sucesso, meu nariz ficou lindo, perfeito! Gratidão Dr. Eduardo",
    },
    {
      name: "Sueli Linhan Silva",
      text: "Tenho 72 anos de idade, com o passar dos anos a pele da minha face foi ficando cada dia mais flácida e isso me deixava muito triste. Conheci o Dr. Eduardo Mazão no Hospital Heliópolis de São Paulo. Ele fez um procedimento de reposição dos músculos da face. A cirurgia foi um sucesso. A recuperação foi tranquila, sem edemas, a cicatrização foi perfeita, quase invisível. Estou muito feliz, confiante e a minha aparência é de quem rejuvenesceu. Os cuidados dispensados pelo Dr Eduardo me deixaram muito segura. Só tenho que agradecer por tudo.",
    },
    { name: "Danilo Modesto", text: "Excelente profissional. Confio de olhos fechados! Humano, empático e detalhista! Recomendo 👏🏽👏🏽" },
    { name: "Caroline Carvalho de Oliveira Reno", text: "Excelente cirurgião plástico. Extremamente competente e atencioso. Recomendo sem dúvidas !!!" },
    { name: "Mary Elisa Marques Ferreira", text: "Atendida com muito cuidado, fiquei especialmente contente com a cirurgia. Pós operatório perfeito. Muito obrigada Dr. Eduardo Maazao" },
    { name: "Sheila Costa", text: "Excelente cirurgião, indico seu trabalho de olhos fechados🙏🏻🙏🏻" },
    { name: "Gustavo Koffs", text: "Excelente profissional. Competente, humano, ético. 👏🏻👏🏻👏🏻" },
    { name: "Elza Corinto", text: "Um profissional excelente, muito educado, zeloso, cuidadoso e o mais importante o respeito pelo paciente e o preculpação de ter um bom resultado. E o amor pelo que faz." },
    { name: "Fellype Ribeiro", text: "Recomendo de olhos fechados. Cirurgião Plástico mais que competente, atencioso aos mínimos detalhes e de uma técnica impecável!" },
    { name: "Guilherme Curtarelli", text: "Muito atencioso!" },
    { name: "Vanessa Amaral", text: "O Dr Eduardo fez a minha cirurgia das mamas e agradeço a ele o resto da minha vida" },
  ],
};

/**
 * Galeria de antes e depois, separada por procedimento.
 * Cada grupo possui um ou mais pares (antes/depois).
 */
const resultsGallery = [
  {
    title: "Blefaroplastia",
    pairs: [
      { before: "results/blefaroplastia_antes1.webp", after: "results/blefaroplastia_depois1.webp" },
    ],
  },
  {
    title: "Blefaroplastia Superior",
    pairs: [
      { before: "results/blefaroplastia_superior_antes1.webp", after: "results/blefaroplastia_superior_depois1.webp" },
      { before: "results/blefaroplastia_superior_antes2.webp", after: "results/blefaroplastia_superior_depois2.webp" },
      { before: "results/blefaroplastia_superior_antes3.webp", after: "results/blefaroplastia_superior_depois3.webp" },
    ],
  },
  {
    title: "Blefaroplastia Superior e Inferior",
    pairs: [
      { before: "results/blefaroplastia_superior_inferior_a.webp", after: "results/blefaroplastia_superior_inferior_d.webp" },
    ],
  },
  {
    title: "Correção de Ectrópio",
    pairs: [
      { before: "results/correcao_ectoprio_antes.webp", after: "results/correcao_ectoprio_depois.webp" },
    ],
  },
  {
    title: "Facelift",
    pairs: [
      { before: "results/facelift_antes1.webp", after: "results/facelift_depois1.webp" },
      { before: "results/facelift_antes2.webp", after: "results/facelift_depois2.webp" },
    ],
  },
  {
    title: "Facelift Secundário",
    pairs: [
      { before: "results/facelift_secundario_antes.webp", after: "results/facelift_secundario_depois.webp" },
      { before: "results/facelift_secundario_antes2.webp", after: "results/facelift_secundario_depois2.webp" },
    ],
  },
  {
    title: "Lifting Temporal e Blefaroplastia",
    pairs: [
      { before: "results/lifting_temporal_blefaroplastia_a.webp", after: "results/lifting_temporal_blefaroplastia_d.webp" },
      { before: "results/lifting_temporal_blefaroplastia_antes2.webp", after: "results/lifting_temporal_blefaroplastia_depois2.webp" },
    ],
  },
  {
    title: "Otoplastia",
    pairs: [
      { before: "results/otoplastia_antes.webp", after: "results/otoplastia_depois.webp" },
      { before: "results/otoplastia_antes2.webp", after: "results/otoplastia_depois2.webp" },
      { before: "results/otoplastia_antes3.webp", after: "results/otoplastia_depois3.webp" },
    ],
  },
  {
    title: "Ptose Palpebral",
    pairs: [
      { before: "results/ptose_palpebral_antes.webp", after: "results/ptose_palpebral_depois.webp" },
      { before: "results/ptose_palpebral_antes2.webp", after: "results/ptose_palpebral_depois2.webp" },
    ],
  },
  {
    title: "Ptose Palpebral Bilateral",
    pairs: [
      { before: "results/ptose_palpebral_bilateral_antes.webp", after: "results/ptose_palpebral_bilateral_depois.webp" },
    ],
  },
  {
    title: "Ptose Palpebral e Blefaroplastia Superior",
    pairs: [
      { before: "results/ptose_palpebral_blefaroplastia_superior_antes.webp", after: "results/ptose_palpebral_blefaroplastia_superior_depois.webp" },
    ],
  },
  {
    title: "Rinosseptoplastia",
    pairs: [
      { before: "results/rinosseptoplastia_antes.webp", after: "results/rinosseptoplastia_depois.webp" },
      { before: "results/rinosseptoplastia_antes1.webp", after: "results/rinosseptoplastia_depois1.webp" },
    ],
  },
  {
    title: "Abdominoplastia Convencional",
    pairs: [
      { before: "results/abdominoplastia_convencional_antes.webp", after: "results/abdominoplastia_convencional_depois.webp" },
      { before: "results/abdominoplastia_convencional_antes2.webp", after: "results/abdominoplastia_convencional_depois2.webp" },
      { before: "results/abdominoplastia_convencional_antes3.webp", after: "results/abdominoplastia_convencional_depois3.webp" },
      { before: "results/abdominoplastia_convencional_antes4.webp", after: "results/abdominoplastia_convencional_depois4.webp" },
    ],
  },
  {
    title: "Abdominoplastia em Âncora",
    pairs: [
      { before: "results/abdominoplastia_ancora_antes.webp", after: "results/abdominoplastia_ancora_depois.webp" },
      { before: "results/abdominoplastia_ancora_antes2.webp", after: "results/abdominoplastia_ancora_depois2.webp" },
    ],
  },
];

function useScrollAnimation() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [elementRef, isVisible];
}

export default function Results({ content, colors }) {
  const mergedColors = colors || defaultColors;
  const mergedContent = content || defaultContent;

  const testimonials =
    mergedContent?.testimonials?.length ? mergedContent.testimonials : defaultContent.testimonials;

  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const textHeight = isDesktop ? "16rem" : "9.5rem";
  const cardHeight = isDesktop ? "380px" : "320px";
  const perPage = isDesktop ? 3 : 2;

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < testimonials.length; i += perPage) {
      out.push(testimonials.slice(i, i + perPage));
    }
    return out.length ? out : [[]];
  }, [testimonials, perPage]);

  const totalPages = pages.length;
  const [page, setPage] = useState(0);
  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaX.current > threshold) goPrev();
    else if (touchDeltaX.current < -threshold) goNext();
    touchDeltaX.current = 0;
  };

  const [openTestimonial, setOpenTestimonial] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const openImage = useCallback((images, startIndex = 0) => {
    const fullUrls = images.map((img) => `${import.meta.env.BASE_URL}${img}`);
    setLightbox({ images: fullUrls, startIndex });
  }, []);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenTestimonial(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section className="min-h-[100svh] py-20" style={{ backgroundColor: mergedColors.darkGray }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Resultados e Depoimentos
          </h1>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
            Galeria de Resultados
          </h2>

          <p
            className="flex items-center gap-1.5 mb-8 text-[11px] sm:text-xs italic text-white/55"
            role="note"
          >
            <ZoomIn size={12} className="flex-shrink-0" />
            <span>Toque ou clique nas imagens para ampliar. No celular, pinça ou duplo toque para zoom.</span>
          </p>

          <div
            ref={ref1}
            className="transition-all duration-1000 mb-20"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {resultsGallery.map((group) => {
              const groupImages = group.pairs.flatMap((p) => [p.before, p.after]);

              return (
                <div key={group.title} className="mb-14 last:mb-0">
                  <h3
                    className="font-serif text-xl sm:text-2xl font-bold mb-5 pb-2 border-b"
                    style={{ color: "white", borderColor: mergedColors.teal }}
                  >
                    {group.title}
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.pairs.map((pair, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <button
                              type="button"
                              onClick={() => openImage(groupImages, idx * 2)}
                              className="aspect-square rounded-lg overflow-hidden border-2 w-full cursor-zoom-in block"
                              style={{
                                borderColor: mergedColors.teal,
                                backgroundColor: mergedColors.tealDeep,
                              }}
                            >
                              <img
                                src={`${import.meta.env.BASE_URL}${pair.before}`}
                                alt={`Antes - ${group.title}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                              />
                            </button>
                            <p className="mt-2 text-center text-sm" style={{ color: "#8FA3AD" }}>
                              Antes
                            </p>
                          </div>

                          <div>
                            <button
                              type="button"
                              onClick={() => openImage(groupImages, idx * 2 + 1)}
                              className="aspect-square rounded-lg overflow-hidden border-2 w-full cursor-zoom-in block"
                              style={{
                                borderColor: mergedColors.teal,
                                backgroundColor: mergedColors.tealDeep,
                              }}
                            >
                              <img
                                src={`${import.meta.env.BASE_URL}${pair.after}`}
                                alt={`Depois - ${group.title}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                              />
                            </button>
                            <p className="mt-2 text-center text-sm" style={{ color: "#8FA3AD" }}>
                              Depois
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-10">
            Depoimentos de Pacientes
          </h2>

          <div
            ref={ref2}
            className="transition-all duration-1000"
            style={{
              opacity: isVisible2 ? 1 : 0,
              transform: isVisible2 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="relative md:px-14">
              <div
                className="overflow-hidden touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className={[
                    "flex",
                    prefersReducedMotion
                      ? ""
                      : "transition-transform duration-700 ease-in-out will-change-transform",
                  ].join(" ")}
                  style={{ transform: `translateX(-${page * 100}%)` }}
                >
                  {pages.map((group, pageIdx) => (
                    <div key={pageIdx} className="min-w-full px-1">
                      <div
                        className={`grid gap-6 items-stretch auto-rows-fr ${
                          isDesktop ? "grid-cols-3" : "grid-cols-2"
                        }`}
                      >
                        {group.map((test, idx) => (
                          <button
                            key={`${test.name}-${idx}`}
                            type="button"
                            onClick={() => setOpenTestimonial(test)}
                            className="bg-white rounded-lg p-6 md:p-8 text-left hover:shadow-lg transition-shadow w-full flex flex-col"
                            style={{ height: cardHeight }}
                          >
                            <div className="flex gap-1 mb-4">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} style={{ color: mergedColors.teal }}>
                                  ★
                                </span>
                              ))}
                            </div>

                            <div
                              className="text-base md:text-lg leading-relaxed italic pr-2"
                              style={{
                                color: mergedColors.darkGray,
                                height: textHeight,
                                overflowY: "auto",
                                WebkitOverflowScrolling: "touch",
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              {"“"}{test.text}{"”"}
                            </div>

                            <p
                              className="font-serif font-bold mt-auto pt-5"
                              style={{ color: mergedColors.teal }}
                            >
                              {test.name}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {totalPages > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/15 transition"
                    aria-label="Depoimento anterior"
                    title="Anterior"
                  >
                    <span className="text-white text-xl leading-none">‹</span>
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/15 transition"
                    aria-label="Próximo depoimento"
                    title="Próximo"
                  >
                    <span className="text-white text-xl leading-none">›</span>
                  </button>
                </>
              )}
            </div>

            {testimonials.length === 0 && (
              <div className="bg-white rounded-lg p-10 mt-8" style={{ color: mergedColors.darkGray }}>
                Nenhum depoimento disponível no momento.
              </div>
            )}
          </div>
        </div>
      </section>

      {openTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenTestimonial(null)}
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div
            className="w-full max-w-2xl rounded-xl bg-white p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-serif text-2xl font-bold" style={{ color: mergedColors.teal }}>
                  {openTestimonial.name}
                </p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: mergedColors.teal }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="px-3 py-2 rounded-lg hover:opacity-80"
                onClick={() => setOpenTestimonial(null)}
                style={{ backgroundColor: mergedColors.soft, color: mergedColors.darkGray }}
              >
                Fechar
              </button>
            </div>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: mergedColors.darkGray }}>
              {"“"}{openTestimonial.text}{"”"}
            </p>
          </div>
        </div>
      )}

      {lightbox && (
        <ZoomLightbox
          images={lightbox.images}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

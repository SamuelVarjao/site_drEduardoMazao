import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
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
  const clampLines = isDesktop ? 10 : 6;
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

  const resultsGallery = useMemo(
    () => [
      { id: 3, before: "image3.webp", after: "image4.webp", title: "Rinoplastia" },
      { id: 4, before: "image5.webp", after: "image6.webp", title: "Blefaroplastia" },
      { id: 5, before: "procedimentoantes5.webp", after: "procedimentodepois5.webp", title: "Facelift Secundário" },
      { id: 7, before: "procedimentoantes7.webp", after: "procedimentodepois7.webp", title: "Facelift" },
      { id: 8, before: "image9.webp", after: "image10.webp", title: "Abdominoplastia" },
      { id: 10, before: "otoplastia_antes2.webp", after: "otoplastia_depois_2.webp", title: "Otoplastia" },
    ],
    [],
  );

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
          <h1 className="font-serif text-5xl font-bold text-center mb-16 text-white">
            Resultados e Depoimentos
          </h1>

          <h2 className="font-serif text-3xl font-bold text-white mb-10">Galeria de Resultados</h2>

          <div
            ref={ref1}
            className="grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {resultsGallery.map((item) => (
              <div key={item.id} className="bg-white/5 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <button
                      type="button"
                      onClick={() => openImage([item.before, item.after], 0)}
                      className="aspect-square rounded-lg overflow-hidden border-2 w-full cursor-zoom-in"
                      style={{
                        borderColor: mergedColors.teal,
                        backgroundColor: mergedColors.tealDeep,
                      }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${item.before}`}
                        alt={`Antes - ${item.title}`}
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="600"
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
                      onClick={() => openImage([item.before, item.after], 1)}
                      className="aspect-square rounded-lg overflow-hidden border-2 w-full cursor-zoom-in"
                      style={{
                        borderColor: mergedColors.teal,
                        backgroundColor: mergedColors.tealDeep,
                      }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${item.after}`}
                        alt={`Depois - ${item.title}`}
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="600"
                        className="w-full h-full object-cover"
                      />
                    </button>
                    <p className="mt-2 text-center text-sm" style={{ color: "#8FA3AD" }}>
                      Depois
                    </p>
                  </div>
                </div>

                <p className="font-serif font-bold text-white">{item.title}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-bold text-white mb-10">Depoimentos de Pacientes</h2>

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
  className={`grid gap-6 items-stretch auto-rows-fr ${isDesktop ? "grid-cols-3" : "grid-cols-2"}`}
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

    {/* Área do texto sem cortar: vira "scroll" quando ultrapassar */}
    <div
      className="text-base md:text-lg leading-relaxed italic pr-2"
      style={{
        color: mergedColors.darkGray,
        height: textHeight,
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
      }}
      onClick={(e) => {
        // Se o usuário clicar/rolar no texto, não abre o modal sem querer
        e.stopPropagation();
      }}
    >
      {"\u201C"}{test.text}{"\u201D"}
    </div>

    <p className="font-serif font-bold mt-auto pt-5" style={{ color: mergedColors.teal }}>
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
              {"\u201C"}{openTestimonial.text}{"\u201D"}
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
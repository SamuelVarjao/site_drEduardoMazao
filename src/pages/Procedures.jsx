import React, { useEffect, useRef, useState, useCallback } from "react";
import ZoomLightbox from "../components/ZoomLightbox";

const defaultColors = {
  offwhite: "#fdfbf5",
  darkGray: "#306078",
  gold: "#EDE3C8",
  teal: "#6A93A5",
  tealDeep: "#3A515B",
  soft: "#c7dfeb",
};

const defaultContent = {
  procedures: {
    face: [
      {
        name: "Blefaroplastia",
        description:
          "Cirurgia das pálpebras para correção de excesso de pele, flacidez ou bolsas sob os olhos.",
        image: "bleferoplastia.webp",
        gallery: [
          "ptose_bleferoplastia_a_d.webp",
          "correcao_ectoprio_antes_depois.webp",
          "ptose_palpebral_a_d.webp",
          "ptose_palpebral_antes_depois.webp",
          "ptose_bilateral_antes_depois.webp",
          "ptose_suspensaofrontal_a_d.webp",
        ],
      },
      {
        name: "Lifting de Supercílios",
        description:
          "Elevação e reposicionamento dos supercílios para um olhar mais aberto e jovem.",
        image: "blefaroplastia_lifting_supercilios_novo.webp",
        gallery: ["lifting_temporal_novo.webp"],
      },
      {
        name: "Lifting Facial",
        description:
          "Rejuvenescimento facial com elevação de tecidos, restaurando volume e definição.",
        image: "facelifiting.webp",
        gallery: [],
      },
      {
        name: "Lifting Cervical",
        description:
          "Rejuvenescimento do pescoço com reposicionamento de tecidos, devolvendo contorno e definição à região cervical.",
        image: "",
        gallery: [],
      },
      {
        name: "Rinoplastia",
        description:
          "Remodelagem da estrutura óssea e cartilaginosa do nariz para melhorar a estética.",
        image: "rinoplastia.webp",
        gallery: ["rinosseptoplastia_novo.webp"],
      },
      {
        name: "Otoplastia",
        description:
          "Correção de orelhas proeminentes ou assimétricas reposicionando tamanho, formato e posição.",
        image: "otoplastia.webp",
        gallery: [
          "otoplastia_a_d.webp",
          "otoplastia_a_d_2.webp",
          "otoplastia_a_d_3.webp",
        ],
      },
      {
        name: "Preenchedores",
        description:
          "Tratamento com ácido hialurônico para harmonização, volume e hidratação facial.",
        image: "",
        gallery: [],
      },
      {
        name: "Toxina Botulínica",
        description:
          "Suavização de linhas de expressão com aplicação precisa, respeitando a naturalidade dos traços.",
        image: "",
        gallery: [],
      },
    ],
    breast: [
      {
        name: "Mastopexia",
        description: "Elevação das mamas para restaurar posição e formato natural.",
        image: "mastopexia.webp",
        gallery: [
          "mastopexia_protese_a_d.webp",
          "mastopexia_sem_protese_a_d.webp",
        ],
      },
      {
        name: "Prótese de Silicone",
        description: "Aumento de volume com naturalidade e proporção ao corpo.",
        image: "protese_mamaria.webp",
        gallery: [
          "inclusao_protese_mama_a_d.webp",
          "protese_mama_a_d.webp",
        ],
      },
      {
        name: "Redução Mamária",
        description: "Redução de volume com alívio de desconforto físico e estético.",
        image: "reducao_mamaria.webp",
        gallery: [
          "mamoplastia_redutora_a_d.webp",
          "mamoplastia_redutora_a_d_2.webp",
        ],
      },
    ],
    body: [
      {
        name: "Abdominoplastia Convencional",
        description:
          "Correção de flacidez e excesso de pele na região abdominal, com cicatriz horizontal.",
        image: "abdominoplastia_convencional_novo.webp",
        gallery: [
          "abdominoplastia_convencional_a_d.webp",
          "abdominoplastia_a_d_2.webp",
          "abdominoplastia_a_d_3.webp",
        ],
      },
      {
        name: "Abdominoplastia em Âncora",
        description:
          "Técnica indicada para casos de grande excesso de pele, com cicatriz em formato de âncora para um contorno abdominal harmônico.",
        image: "abdominoplastia_ancora_novo.webp",
        gallery: ["abdominoplastia_ancora_a_d.webp"],
      },
    ],
  },
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

const Procedures = ({
  content,
  colors,
  selectedProcedureCategory,
  setSelectedProcedureCategory,
}) => {
  const mergedColors = colors || defaultColors;
  const mergedContent = content || defaultContent;

  const [ref1, isVisible1] = useScrollAnimation();
  const [lightbox, setLightbox] = useState(null); // { images: [], startIndex: 0 }

  const safeCategory = selectedProcedureCategory || "face";
  const proceduresByCategory = mergedContent?.procedures || defaultContent.procedures;
  const proceduresList = proceduresByCategory?.[safeCategory] || [];

  const openLightbox = useCallback((images, startIndex = 0) => {
    const fullUrls = images.map((img) => `${import.meta.env.BASE_URL}${img}`);
    setLightbox({ images: fullUrls, startIndex });
  }, []);

  return (
    <>
      <section
        className="min-h-screen py-20"
        style={{ backgroundColor: mergedColors.offwhite }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="font-serif text-5xl font-bold text-center mb-12"
            style={{ color: mergedColors.darkGray }}
          >
            Procedimentos
          </h1>

          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[
              { key: "face", label: "Rosto" },
              { key: "breast", label: "Mamas" },
              { key: "body", label: "Corpo" },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedProcedureCategory?.(cat.key)}
                className="px-6 py-2 rounded-full font-medium transition-all"
                style={{
                  backgroundColor:
                    safeCategory === cat.key ? mergedColors.teal : mergedColors.gold,
                  color: "white",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div
            ref={ref1}
            className="grid md:grid-cols-2 gap-8 transition-all duration-700"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {proceduresList.map((proc, idx) => {
              const hasImage =
                typeof proc.image === "string" && proc.image.trim().length > 0;
              const gallery = Array.isArray(proc.gallery) ? proc.gallery : [];

              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden border-t-4"
                  style={{ borderColor: mergedColors.teal }}
                >
                  {hasImage ? (
                    <button
                      type="button"
                      onClick={() => openLightbox(
                        [proc.image, ...gallery],
                        0
                      )}
                      className="h-56 sm:h-64 w-full overflow-hidden cursor-zoom-in block"
                      style={{ backgroundColor: mergedColors.soft }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${proc.image}`}
                        alt={`Imagem do procedimento: ${proc.name}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </button>
                  ) : (
                    <div
                      className="h-48 flex items-center justify-center"
                      style={{ backgroundColor: mergedColors.soft }}
                    >
                      <div className="text-center px-6">
                        <p
                          className="font-serif text-xl font-bold"
                          style={{ color: mergedColors.teal }}
                        >
                          {proc.name}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="p-10">
                    {hasImage && (
                      <p
                        className="font-serif text-xl font-bold mb-3"
                        style={{ color: mergedColors.teal }}
                      >
                        {proc.name}
                      </p>
                    )}

                    <p
                      className="leading-relaxed mb-6"
                      style={{ color: mergedColors.darkGray }}
                    >
                      {proc.description}
                    </p>

                    {gallery.length > 0 && (
                      <div className="mb-6">
                        <p
                          className="text-sm font-medium mb-3"
                          style={{ color: mergedColors.teal }}
                        >
                          Resultados — Antes e Depois
                        </p>
                        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
                          {gallery.map((img, gIdx) => (
                            <button
                              key={gIdx}
                              type="button"
                              onClick={() => openLightbox(
                                hasImage ? [proc.image, ...gallery] : gallery,
                                hasImage ? gIdx + 1 : gIdx
                              )}
                              className="flex-shrink-0 w-40 sm:w-48 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-transform hover:scale-[1.02] snap-start cursor-zoom-in"
                              style={{ borderColor: mergedColors.soft }}
                            >
                              <img
                                src={`${import.meta.env.BASE_URL}${img}`}
                                alt={`${proc.name} - Antes e Depois ${gIdx + 1}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-sm italic text-gray-500">
                      * A indicação depende sempre da avaliação presencial.
                    </p>
                  </div>
                </div>
              );
            })}

            {proceduresList.length === 0 && (
              <div
                className="bg-white rounded-lg p-10"
                style={{ color: mergedColors.darkGray }}
              >
                Nenhum procedimento disponível nesta categoria.
              </div>
            )}
          </div>
        </div>
      </section>

      {lightbox && (
        <ZoomLightbox
          images={lightbox.images}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

export default Procedures;
import React, { useEffect, useRef, useState, useCallback } from "react";
import { ZoomIn } from "lucide-react";
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
        name: "Blefaroplastia Superior e Inferior",
        description:
          "Cirurgia que rejuvenesce as pálpebras superiores e inferiores, removendo o excesso de pele e as bolsas de gordura para um olhar mais descansado e jovem.",
        images: ["procedures/blefaroplastia_superior_inferior.webp"],
      },
      {
        name: "Blefaroplastia Superior",
        description:
          "Correção do excesso de pele da pálpebra superior, aliviando o peso sobre os olhos e abrindo o olhar.",
        images: [
          "procedures/blefaroplastia_superior1.webp",
          "procedures/blefaroplastia_superior2.webp",
          "procedures/blefaroplastia_superior3.webp",
        ],
      },
      {
        name: "Blefaroplastia",
        description:
          "Cirurgia das pálpebras para correção de excesso de pele, flacidez ou bolsas, harmonizando a região dos olhos.",
        images: ["procedures/blefaroplastia1.webp"],
      },
      {
        name: "Correção de Ectrópio",
        description:
          "Procedimento que reposiciona a pálpebra inferior voltada para fora, restaurando o contato correto com o olho e o conforto ocular.",
        images: ["procedures/correcao_ectoprio.webp"],
      },
      {
        name: "Facelift",
        description:
          "Rejuvenescimento facial com reposicionamento dos tecidos profundos e da pele, restaurando contorno e firmeza ao rosto e ao pescoço.",
        images: ["procedures/facelift1.webp", "procedures/facelift3.webp"],
      },
      {
        name: "Facelift Secundário",
        description:
          "Procedimento de revisão do lifting facial, refinando resultados anteriores e tratando a flacidez que retorna com o tempo.",
        images: [
          "procedures/facelift_secundario1.webp",
          "procedures/facelift_secundario2.webp",
        ],
      },
      {
        name: "Lifting Temporal e Blefaroplastia",
        description:
          "Combina a elevação da região temporal e da sobrancelha com a cirurgia das pálpebras, ampliando e rejuvenescendo o olhar.",
        images: [
          "procedures/lifting_temporal_blefaroplastia.webp",
          "procedures/lifting_temporal_blefaroplastia2.webp",
        ],
      },
      {
        name: "Otoplastia",
        description:
          "Correção de orelhas proeminentes ou assimétricas, ajustando tamanho, formato e posição de maneira natural.",
        images: [
          "procedures/otoplastia.webp",
          "procedures/otoplastia2.webp",
          "procedures/otoplastia3.webp",
          "procedures/otoplastia4.webp",
        ],
      },
      {
        name: "Ptose Palpebral",
        description:
          "Correção da queda da pálpebra superior, elevando-a para melhorar o campo de visão e a simetria do olhar.",
        images: [
          "procedures/ptose_palpebral.webp",
          "procedures/ptose_palpebral2.webp",
        ],
      },
      {
        name: "Ptose Palpebral Bilateral",
        description:
          "Tratamento da queda das pálpebras superiores em ambos os olhos, restaurando simetria e abertura ocular.",
        images: ["procedures/ptose_palpebral_bilateral.webp"],
      },
      {
        name: "Ptose Palpebral e Blefaroplastia Superior",
        description:
          "Une a correção da queda palpebral à remoção do excesso de pele, devolvendo um olhar mais aberto e descansado.",
        images: ["procedures/ptose_palpebral_blefaroplastia_superior.webp"],
      },
      {
        name: "Ptose Palpebral com Suspensão Frontal e Fáscia Lata",
        description:
          "Técnica indicada para ptose acentuada, na qual a pálpebra é suspensa ao músculo frontal com auxílio de fáscia lata.",
        images: ["procedures/ptose_palpebral_suspensao_frontal_com_fascia_lata.webp"],
      },
      {
        name: "Rinosseptoplastia",
        description:
          "Cirurgia que combina o refinamento estético do nariz à correção do septo, melhorando a aparência e a respiração.",
        images: [
          "procedures/rinosseptoplastia1.webp",
          "procedures/rinosseptoplastia2.webp",
          "procedures/rinosseptoplastia3.webp",
          "procedures/rinosseptoplastia4.webp",
          "procedures/rinosseptoplastia5.webp",
          "procedures/rinosseptoplastia6.webp",
          "procedures/rinosseptoplastia_correcao_cicatriz1.webp",
          "procedures/rinosseptoplastia_correcao_cicatriz2.webp",
          "procedures/rinosseptoplastia_correcao_cicatriz3.webp",
        ],
      },
      {
        name: "Câncer de Pele",
        description:
          "Tratamento cirúrgico de lesões cutâneas malignas, com remoção da lesão e reconstrução estética da área afetada, preservando função e harmonia da região.",
        images: [],
      },
    ],
    breast: [
      {
        name: "Inclusão de Próteses",
        description:
          "Aumento do volume das mamas com implantes de silicone, respeitando a proporção e a naturalidade do corpo.",
        images: [
          "procedures/inclusao_proteses_mama.webp",
          "procedures/inclusao_proteses2.webp",
          "procedures/inclusao_proteses3.webp",
        ],
      },
      {
        name: "Mamoplastia Redutora",
        description:
          "Redução do volume das mamas com remodelagem, aliviando desconfortos físicos e melhorando o contorno.",
        images: [
          "procedures/mamoplastia_redutora.webp",
          "procedures/mastopexia_redutora.webp",
        ],
      },
      {
        name: "Mastopexia com Prótese",
        description:
          "Eleva e reposiciona as mamas associando o implante de silicone para restaurar firmeza e volume.",
        images: [
          "procedures/mastopexia_proteses.webp",
          "procedures/mastopexia_proteses2.webp",
          "procedures/mastopexia_proteses3.webp",
          "procedures/mastopexia_proteses4.webp",
        ],
      },
      {
        name: "Mastopexia Redutora Secundária",
        description:
          "Procedimento de revisão que reduz e reposiciona as mamas, refinando resultados de cirurgias anteriores.",
        images: ["procedures/mastopexia_redutora_secundaria.webp"],
      },
      {
        name: "Mastopexia sem Prótese",
        description:
          "Elevação das mamas com remodelagem do próprio tecido, devolvendo posição e formato naturais sem implantes.",
        images: [
          "procedures/mastopexia_sem_proteses2.webp",
          "procedures/mastopexia_sem_proteses3.webp",
        ],
      },
      {
        name: "Troca de Próteses",
        description:
          "Substituição de implantes mamários antigos por novos, atualizando volume, formato ou corrigindo alterações.",
        images: ["procedures/troca_proteses_mama.webp"],
      },
    ],
    body: [
      {
        name: "Abdominoplastia Convencional",
        description:
          "Correção de flacidez e excesso de pele do abdômen, com reposicionamento da musculatura e cicatriz horizontal baixa.",
        images: [
          "procedures/abdominoplastia_convencional.webp",
          "procedures/abdominoplastia_convencional2.webp",
          "procedures/abdominoplastia_convencional3.webp",
          "procedures/abdominoplastia_convencionais3.webp",
        ],
      },
      {
        name: "Abdominoplastia em Âncora",
        description:
          "Indicada para grande excesso de pele, associa cicatriz horizontal e vertical em formato de âncora para um contorno abdominal harmônico.",
        images: [
          "procedures/abdominoplastia_ancora.webp",
          "procedures/abdominoplastia_ancora2.webp",
        ],
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

    let observer;
    // rAF garante que o layout já foi calculado antes de medir a posição.
    const raf = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        // Acima da dobra: anima imediatamente ao entrar na página
        // (sem depender de scroll, evitando a página em branco).
        setIsVisible(true);
        return;
      }

      // Abaixo da dobra: anima quando entrar na viewport via scroll.
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
    };
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
            className="font-serif text-4xl sm:text-5xl font-bold text-center mb-12"
            style={{ color: mergedColors.darkGray }}
          >
            Procedimentos
          </h1>

          <div className="flex justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
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

          <p
            className="flex items-center justify-center gap-1.5 mb-10 sm:mb-12 text-[11px] sm:text-xs italic opacity-70"
            style={{ color: mergedColors.tealDeep }}
            role="note"
          >
            <ZoomIn size={12} className="flex-shrink-0" />
            <span>Toque ou clique nas imagens para ampliar. No celular, pinça ou duplo toque para zoom.</span>
          </p>

          <div
            ref={ref1}
            className="grid sm:grid-cols-2 gap-6 sm:gap-8 transition-all duration-700"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {proceduresList.map((proc, idx) => {
              const images = Array.isArray(proc.images)
                ? proc.images.filter((i) => typeof i === "string" && i.trim())
                : [];
              const cover = images[0];
              const extra = images.slice(1);

              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden border-t-4 flex flex-col"
                  style={{ borderColor: mergedColors.teal }}
                >
                  {cover && (
                    <button
                      type="button"
                      onClick={() => openLightbox(images, 0)}
                      className="h-60 sm:h-72 w-full overflow-hidden cursor-zoom-in block"
                      style={{ backgroundColor: mergedColors.soft }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${cover}`}
                        alt={`Imagem do procedimento: ${proc.name}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  )}

                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <p
                      className="font-serif text-xl sm:text-2xl font-bold mb-3"
                      style={{ color: mergedColors.teal }}
                    >
                      {proc.name}
                    </p>

                    <p
                      className="leading-relaxed mb-6"
                      style={{ color: mergedColors.darkGray }}
                    >
                      {proc.description}
                    </p>

                    {extra.length > 0 && (
                      <div className="mb-6">
                        <p
                          className="text-sm font-medium mb-3"
                          style={{ color: mergedColors.teal }}
                        >
                          Galeria do procedimento
                        </p>
                        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
                          {extra.map((img, gIdx) => (
                            <button
                              key={gIdx}
                              type="button"
                              onClick={() => openLightbox(images, gIdx + 1)}
                              className="flex-shrink-0 w-32 sm:w-36 aspect-square rounded-lg overflow-hidden border-2 transition-transform hover:scale-[1.03] snap-start cursor-zoom-in"
                              style={{ borderColor: mergedColors.soft }}
                            >
                              <img
                                src={`${import.meta.env.BASE_URL}${img}`}
                                alt={`${proc.name} ${gIdx + 2}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-sm italic text-gray-500 mt-auto">
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

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Instagram,
  MessageCircle,
  ChevronRight,
  Heart,
  Award,
  Shield,
  Clock,
} from "lucide-react";

const Home = ({ setSelectedProcedureCategory }) => {
  const navigate = useNavigate();

  const colors = {
    offwhite: "#fdfbf5",
    darkGray: "#306078",
    gold: "#EDE3C8",
    teal: "#6A93A5",
    tealDeep: "#3A515B",
    soft: "#c7dfeb",
  };

  const content = {
    doctor: {
      name: "Dr. Eduardo Mazão",
      title: "Cirurgião Plástico",
      crm: "CRM: 215.230 | RQE: 139.422",
      tagline: "Cirurgia plástica moderna, segura e guiada pela sutileza.",
      about:
        "Dr. Eduardo Mazão é Cirurgião Plástico com formação completa em cirurgia geral e cirurgia plástica, além de aprimoramentos em técnicas modernas de rejuvenescimento facial, mamas e contorno corporal.",
      philosophy: [
        {
          icon: Heart,
          title: "Naturalidade acima de volume",
          description: "Resultados sutis, elegantes e proporcionais.",
        },
        {
          icon: Award,
          title: "Formação sólida",
          description:
            "Anos de prática e especialização em cirurgia geral e cirurgia plástica.",
        },
        {
          icon: Shield,
          title: "Segurança em primeiro lugar",
          description: "Indicação criteriosa, orientação clara e transparência total.",
        },
        {
          icon: Clock,
          title: "Acompanhamento cuidadoso",
          description: "Do pré ao pós-operatório.",
        },
      ],
    },
    contact: {
      whatsapp: "+55 (11) 98978-3539",
      phone: "+55 (11) 98978-3539",
      instagram: "@dr.eduardo.mazao",
      address: "Rua do Rocio 199, Vila Olimpia, São Paulo, SP",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.3098193738065!2d-46.68617597559967!3d-23.593219199437662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce577758f05d13%3A0x835701f0798e4f00!2sEduardo%20Maz%C3%A3o%20Miranda%20-%20Cirurgi%C3%A3o%20Pl%C3%A1stico%20-%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1771418150442!5m2!1spt-BR!2sbr",
    },
    procedures: {
      face: [
        {
          name: "Blefaroplastia",
          description:
            "Cirurgia das pálpebras para correção de excesso de pele, flacidez ou bolsas sob os olhos.",
            image: "bleferoplastia.webp",
        },
        {
          name: "Lifting Facial",
          description:
            "Rejuvenescimento facial com elevação de tecidos, restaurando volume e definição.",
            image: "facelifiting.webp",
        },
        {
          name: "Lipo de Papada",
          description:
            "Remoção de gordura localizada no queixo e pescoço para melhorar contorno.",
            image: "",
        },
        {
          name: "Rinoplastia",
          description:
            "Remodelagem da estrutura óssea e cartilaginosa do nariz para melhorar a estética.",
            image: "rinoplastia.webp",
        },
        {
          name: "Otoplastia",
          description:
            "Correção de orelhas proeminentes ou assimétricas reposicionando tamanho, formato e posição.",
            image: "otoplastia.webp",
        },
      ],
      breast: [
        {
          name: "Mastopexia",
          description: "Elevação das mamas para restaurar posição e formato natural.",
          image: "mastopexia.webp",
        },
        {
          name: "Prótese de Silicone",
          description: "Aumento de volume com naturalidade e proporção ao corpo.",
          image: "protese_mamaria.webp",
        },
        {
          name: "Redução Mamária",
          description: "Redução de volume com alívio de desconforto físico e estético.",
          image: "reducao_mamaria.webp",
        },
      ],
      body: [
        {
          name: "Lipoaspiração",
          description: "Remoção de gordura localizada em diferentes regiões do corpo.",
          image: "",
        },
        {
          name: "Lipo HD",
          description:
            "Técnica avançada de escultura corporal com maior definição e naturalidade.",
            image: "",
        },
        {
          name: "Abdominoplastia",
          description: "Correção de flacidez e excesso de pele na região abdominal.",
          image: "abdominoplastia.webp",
        },
      ],
      male: [
        {
          name: "Ginecomastia",
          description:
            "Redução do tecido mamário em homens para contorno mais definido.",
            image: "",
        },
        {
          name: "Contorno Corporal",
          description: "Escultura e definição do tórax, abdômen e flancos.",
          image: "",
        },
      ],
    },
    testimonials: [
      {
        name: "Patricia Almeida",
        text: "Excelente profissional, zeloso ao extremo, cuida de cada detalhe que leva a perfeição! Minha autoestima está nas alturas, me sinto mais jovem , mais confiante e claro mais bonita, minha rinoplastia foi um sucesso, meu nariz ficou lindo, perfeito! Gratidão Dr. Eduardo",
      },
      {
        name: "Sueli Linhan Silva",
        text: "Tenho 72 anos de idade, com o passar dos anos a pele da minha face foi ficando cada dia mais flácida e isso me deixava muito triste. Conheci o Dr. Eduardo Mazão no Hospital Heliópolis de São Paulo. Ele fez um procedimento de reposição dos músculos da face. A cirurgia foi um sucesso. A recuperação foi tranquila, sem edemas, a cicatrização foi perfeita, quase invisível. Estou muito feliz, confiante e a minha aparência é de quem rejuvenesceu. Os cuidados dispensados pelo Dr Eduardo me deixaram muito segura. Só tenho que agradecer por tudo.",
      },
      {
        name: "Danilo Modesto",
        text: "Excelente profissional. Confio de olhos fechados! Humano, empático e detalhista! Recomendo 👏🏽👏🏽",
      },
      {
        name: "Caroline Carvalho de Oliveira Reno",
        text: "Excelente cirurgião plástico. Extremamente competente e atencioso. Recomendo sem dúvidas !!!",
      },
      {
        name: "Mary Elisa Marques Ferreira",
        text: "Atendida com muito cuidado, fiquei especialmente contente com a cirurgia. Pós operatório perfeito. Muito obrigada Dr. Eduardo Maazao",
      },
      {
        name: "Sheila Costa",
        text: "Excelente cirurgião, indico seu trabalho de olhos fechados🙏🏻🙏🏻",
      },
      {
        name: "Gustavo Koffs",
        text: "Excelente profissional. Competente, humano, ético. 👏🏻👏🏻👏🏻",
      },
      {
        name: "Elza Corinto",
        text: "Um profissional excelente, muito educado, zeloso, cuidadoso e o mais importante o respeito pelo paciente e o preculpação de ter um bom resultado. E o amor pelo que faz.",
      },
      {
        name: "Fellype Ribeiro",
        text: "Recomendo de olhos fechados. Cirurgião Plástico mais que competente, atencioso aos mínimos detalhes e de uma técnica impecável!",
      },
      {
        name: "Guilherme Curtarelli",
        text: "Muito atencioso!",
      },
      {
        name: "Vanessa Amaral",
        text: "O Dr Eduardo fez a minha cirurgia das mamas e agradeço a ele o resto da minha vida",
      },      
    ],
  };

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

  const HeroSection = () => {
    const [ref1, isVisible1] = useScrollAnimation();
    const [ref2, isVisible2] = useScrollAnimation();

    return (
      <section
        className="relative min-h-[100svh] flex items-center py-10 sm:py-0"
        style={{ backgroundColor: colors.offwhite }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={ref1}
              className="flex items-center justify-center md:order-2 transition-all duration-1000"
              style={{
                opacity: isVisible1 ? 1 : 0,
                transform: isVisible1 ? "translateX(0)" : "translateX(50px)",
              }}
            >
              <div
                className="w-full aspect-square rounded-lg flex items-center justify-center border-2 border-dashed"
                style={{ borderColor: colors.teal, backgroundColor: colors.soft }}
              >
                <picture>
                  <source
                    srcSet={`${import.meta.env.BASE_URL}perfil3_cortado.webp`}
                    type="image/webp"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}perfil3_cortado.webp`}
                    alt="Foto do Dr. Eduardo Mazão"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="600"
                    height="600"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </picture>
              </div>
            </div>

            <div
              ref={ref2}
              className="md:order-1 transition-all duration-1000"
              style={{
                opacity: isVisible2 ? 1 : 0,
                transform: isVisible2 ? "translateX(0)" : "translateX(-50px)",
              }}
            >
              <h1
                className="font-serif text-5xl md:text-6xl font-bold mb-4"
                style={{ color: colors.darkGray }}
              >
                {content.doctor.name}
              </h1>

              <p className="text-lg font-medium mb-2" style={{ color: colors.teal }}>
                {content.doctor.title} – {content.doctor.crm}
              </p>

              <p className="text-2xl leading-relaxed mb-10 sm:mb-8" style={{ color: colors.teal }}>
                {content.doctor.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-12">
                <a
                  href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-medium text-white transition-opacity hover:opacity-80 flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.teal }}
                >
                  <MessageCircle size={20} />
                  Agendar Avaliação
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProcedureCategory?.("face");
                    navigate("/procedimentos");
                  }}
                  className="px-8 py-4 rounded-full font-medium border-2 transition-colors hover:opacity-70"
                  style={{ borderColor: colors.teal, color: colors.teal }}
                >
                  Ver Procedimentos
                </button>
              </div>

              <div className="flex gap-6 mt-2 sm:mt-0 pb-8 sm:pb-0">
                <a
                  href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <MessageCircle size={24} style={{ color: colors.teal }} />
                </a>
                <a
                  href={`https://instagram.com/${content.contact.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <Instagram size={24} style={{ color: colors.teal }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const PilarsSection = () => {
    const [ref1, isVisible1] = useScrollAnimation();

    return (
      <section className="pt-24 pb-20 sm:py-20" style={{ backgroundColor: colors.teal }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Os Pilares do Atendimento
          </h2>

          <div
            ref={ref1}
            className="grid md:grid-cols-4 gap-8 transition-all duration-1000"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {content.doctor.philosophy.map((pilar, idx) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={idx}
                  className="text-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-6">
                    <Icon size={48} style={{ color: colors.gold }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-white">
                    {pilar.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{pilar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  const AboutHomeSection = () => {
    const [ref1, isVisible1] = useScrollAnimation();
    const [ref2, isVisible2] = useScrollAnimation();

    return (
      <section className="py-20" style={{ backgroundColor: colors.offwhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={ref1}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible1 ? 1 : 0,
                transform: isVisible1 ? "translateX(0)" : "translateX(-50px)",
              }}
            >
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-6"
                style={{ color: colors.darkGray }}
              >
                Conheça o <span style={{ color: colors.teal }}>Doutor</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: colors.darkGray }}>
                {content.doctor.about}
              </p>

              <button
                type="button"
                onClick={() => navigate("/trajetoria")}
                className="inline-flex items-center gap-2 font-medium transition-all hover:gap-3 group px-6 py-3 rounded-full border-2"
                style={{ color: colors.teal, borderColor: colors.teal }}
              >
                Conheça a trajetória completa
                <ChevronRight size={20} />
              </button>
            </div>

            <div
              ref={ref2}
              className="flex items-center justify-center transition-all duration-1000"
              style={{
                opacity: isVisible2 ? 1 : 0,
                transform: isVisible2 ? "translateX(0)" : "translateX(50px)",
              }}
            >
              <div
                className="w-full aspect-square rounded-lg flex items-center justify-center border-2 border-dashed"
                style={{ borderColor: colors.teal, backgroundColor: colors.soft }}
              >
                <picture>
                  <source
                    srcSet={`${import.meta.env.BASE_URL}procedimento1.webp`}
                    type="image/webp"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}procedimento1.webp`}
                    alt="Foto do Dr. Eduardo Mazão 2"
                    loading="lazy"
                    fetchPriority="high"
                    decoding="async"
                    width="600"
                    height="600"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ProceduresHomeSection = () => {
    const [ref1, isVisible1] = useScrollAnimation();

    return (
      <section className="py-20" style={{ backgroundColor: colors.darkGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Principais Procedimentos
          </h2>

          <div
            ref={ref1}
            className="grid md:grid-cols-4 gap-6 transition-all duration-1000"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {Object.entries(content.procedures).map(([category, procedures]) => (
              <div
                key={category}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-48 flex items-center justify-center border-b-4"
                  style={{ borderColor: colors.teal, backgroundColor: colors.soft }}
                >
                  <div className="text-center">
                    <p
                      className="font-serif text-2xl font-bold capitalize mb-2"
                      style={{ color: colors.teal }}
                    >
                      {category === "male"
                        ? "Masculino"
                        : category === "breast"
                        ? "Mamas"
                        : category === "body"
                        ? "Corpo"
                        : "Rosto"}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  {procedures.map((proc, idx) => (
                    <p
                      key={idx}
                      className="text-sm leading-relaxed mb-4 last:mb-0"
                      style={{ color: colors.darkGray }}
                    >
                      • {proc.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => navigate("/procedimentos")}
              className="px-8 py-4 rounded-full font-medium border-2 transition-colors hover:opacity-70"
              style={{ borderColor: colors.gold, color: colors.gold }}
            >
              Explorar Todos os Procedimentos
            </button>
          </div>
        </div>
      </section>
    );
  };

const ResultsHomeSection = () => {
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();

  const AUTOPLAY_MS = 5000;

  const [perView, setPerView] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches ? 3 : 1
  );
  const [page, setPage] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e) => setPerView(e.matches ? 3 : 1);
    handler(mq);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const total = content.testimonials?.length || 0;
  const totalPages = Math.max(1, Math.ceil(total / perView));

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    if (total <= perView) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [total, perView, totalPages]);

  const MAX_CHARS = 180;
  const truncate = (text = "") => {
    const t = String(text).trim();
    if (t.length <= MAX_CHARS) return { text: t, truncated: false };
    return { text: t.slice(0, MAX_CHARS).trimEnd(), truncated: true };
  };

  return (
    <section className="py-20" style={{ backgroundColor: colors.offwhite }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: colors.darkGray }}
        >
          Resultados e Depoimentos
        </h2>

        <div
          ref={ref1}
          className="grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible1 ? 1 : 0,
            transform: isVisible1 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {[
            {
              title: "Facelift sem cervicoplastia",
              before: "procedimentoantes1.webp",
              after: "procedimentodepois1.webp",
            },
            {
              title: "Blefaroplastia",
              before: "image11.webp",
              after: "image12.webp",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="px-6 pb-2">
                <p className="font-serif text-lg font-bold mb-2" style={{ color: colors.teal }}>
                  {item.title}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-2">
                <div>
                  <div
                    className="aspect-square rounded-lg overflow-hidden border-2"
                    style={{ borderColor: colors.teal, backgroundColor: colors.soft }}
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
                  </div>
                  <p
                    className="font-serif text-lg font-bold mb-1"
                    style={{ color: colors.darkGray }}
                  >
                    Antes
                  </p>
                </div>

                <div>
                  <div
                    className="aspect-square rounded-lg overflow-hidden border-2"
                    style={{ borderColor: colors.teal, backgroundColor: colors.soft }}
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
                  </div>
                  <p
                    className="font-serif text-lg font-bold mb-1"
                    style={{ color: colors.darkGray }}
                  >
                    Depois
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={ref2}
          className="transition-all duration-1000"
          style={{
            opacity: isVisible2 ? 1 : 0,
            transform: isVisible2 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex"
              style={{
                width: `${totalPages * 100}%`,
                transform: `translateX(-${page * (100 / totalPages)}%)`,
                transition: "transform 700ms ease-in-out",
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const start = pageIndex * perView;
                const slice = content.testimonials.slice(start, start + perView);

                return (
                  <div
                    key={pageIndex}
                    className="grid gap-8"
                    style={{
                      width: `${100 / totalPages}%`,
                      gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))`,
                      padding: "0 2px",
                    }}
                  >
                    {slice.map((test, idx) => {
                      const { text, truncated } = truncate(test.text);

                      return (
                        <div
                          key={`${pageIndex}-${idx}`}
                          className="rounded-lg p-8 flex flex-col justify-between"
                          style={{
                            backgroundColor: colors.teal,
                            minHeight: "240px",
                          }}
                        >
<div>
  <p className="text-white text-lg leading-relaxed italic">
    {`\u201C${text}${truncated ? "\u2026" : "\u201D"}`}
    {truncated && (
      <>
        {" "}
        <Link
          to="/resultados"
          className="underline font-medium"
          style={{ color: colors.gold }}
        >
          mais...
        </Link>
        <span className="text-white">{"\u201D"}</span>
      </>
    )}
  </p>
</div>

                          <div className="mt-6">
                            <p className="font-serif font-bold text-white">{test.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Ir para grupo ${i + 1}`}
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: page === i ? 28 : 10,
                    backgroundColor: page === i ? colors.teal : colors.soft,
                  }}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              to="/resultados"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border-2 transition-opacity hover:opacity-80"
              style={{ borderColor: colors.teal, color: colors.teal }}
            >
              Ver todos os resultados e depoimentos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

  const LogoHomeSection = () => {
    const [ref1, isVisible1] = useScrollAnimation();
    const [ref2, isVisible2] = useScrollAnimation();

    return (
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#1a2e38" }}>
        {/* Background watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.04 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
            alt=""
            className="w-[500px] h-[500px]"
            style={{
              animation: "gentle-logo-spin 40s linear infinite",
              filter: "brightness(2)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logo with animation */}
            <div
              ref={ref1}
              className="flex items-center justify-center transition-all duration-1000"
              style={{
                opacity: isVisible1 ? 1 : 0,
                transform: isVisible1 ? "scale(1)" : "scale(0.8)",
              }}
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${colors.teal}20 0%, transparent 70%)`,
                    transform: "scale(2)",
                  }}
                />
                <img
                  src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
                  alt="Logo Dr. Eduardo Mazão"
                  className="relative w-48 h-48 sm:w-56 sm:h-56"
                  style={{
                    animation: "gentle-logo-spin 30s linear infinite",
                    filter: `drop-shadow(0 0 40px ${colors.teal}25)`,
                  }}
                />
              </div>
            </div>

            {/* Text */}
            <div
              ref={ref2}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible2 ? 1 : 0,
                transform: isVisible2 ? "translateX(0)" : "translateX(50px)",
              }}
            >
              <p
                className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
                style={{ color: colors.gold }}
              >
                Identidade Visual
              </p>
              <h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                style={{ color: colors.offwhite }}
              >
                Fibonacci, o Náutilo e a{" "}
                <span style={{ color: colors.gold }}>Proporção Áurea</span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: colors.soft }}
              >
                A logo do Dr. Eduardo Mazão nasce da união entre a concha do
                náutilo e a espiral de Fibonacci &mdash; dois símbolos universais
                de harmonia, crescimento ordenado e beleza natural.
              </p>
              <p
                className="leading-relaxed mb-8"
                style={{ color: colors.soft, opacity: 0.7 }}
              >
                Uma identidade visual que reflete os mesmos valores que guiam
                cada procedimento: precisão, naturalidade e proporção.
              </p>

              <Link
                to="/identidade-visual"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border-2 transition-all hover:gap-3 group"
                style={{ borderColor: colors.gold, color: colors.gold }}
              >
                Conheça a história completa
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes gentle-logo-spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    );
  };

  const FinalCTA = () => {
    const [ref1, isVisible1] = useScrollAnimation();

    return (
      <section className="py-20" style={{ backgroundColor: colors.teal }}>
        <div
          ref={ref1}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000"
          style={{
            opacity: isVisible1 ? 1 : 0,
            transform: isVisible1 ? "scale(1)" : "scale(0.95)",
          }}
        >
          <p className="text-xl leading-relaxed mb-8 text-white">
            O primeiro passo é entender sua queixa, seus objetivos e discutir possibilidades
            reais. Uma avaliação criteriosa e transparente é o início de uma jornada segura.
          </p>
          <a
            href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: colors.gold, color: colors.darkGray }}
          >
            <MessageCircle size={20} />
            Começar Avaliação via WhatsApp
          </a>
        </div>
      </section>
    );
  };

  return (
    <>
      <HeroSection />
      <PilarsSection />
      <AboutHomeSection />
      <ProceduresHomeSection />
      <ResultsHomeSection />
      <LogoHomeSection />
      <FinalCTA />
    </>
  );
};

export default Home;
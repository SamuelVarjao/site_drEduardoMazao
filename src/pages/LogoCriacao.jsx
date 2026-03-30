import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const colors = {
  offwhite: "#fdfbf5",
  darkGray: "#306078",
  gold: "#EDE3C8",
  teal: "#6A93A5",
  tealDeep: "#3A515B",
  soft: "#c7dfeb",
  darkBg: "#1a2e38",
};

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, isVisible];
}

const storyContent = [
  {
    number: "01",
    title: "Leonardo de Pisa",
    subtitle: "O Matemático que Mudou o Mundo",
    text: "Leonardo de Pisa, mais conhecido como Fibonacci, foi um matemático italiano do século XIII. Ele teve papel importante na difusão do sistema de numeração indo-arábico \u2014 muito mais prático do que os numerais romanos utilizados até então.",
    highlight: "Em sua obra Liber Abaci (1202), apresentou um problema matemático envolvendo a reprodução de coelhos que daria origem a uma das sequências numéricas mais famosas da história.",
  },
  {
    number: "02",
    title: "A Sequência",
    subtitle: "Harmonia Matemática",
    text: "A lógica é simples: cada número é a soma dos dois anteriores. Dessa sequência deriva a espiral de Fibonacci, construída a partir de quadrados cujos lados seguem os valores da sequência. Ao se traçarem curvas dentro desses quadrados, forma-se uma espiral visualmente equilibrada e harmônica.",
    highlight: "À medida que a sequência cresce, a divisão entre um número e o anterior se aproxima progressivamente de 1,618\u2026 \u2014 o número áureo \u03A6.",
  },
  {
    number: "03",
    title: "A Proporção Áurea",
    subtitle: "\u03A6 = 1,618\u2026",
    text: "Ao longo da história, essa proporção tornou-se associada à ideia de beleza, equilíbrio e organização. Presente no Homem Vitruviano de Leonardo da Vinci (1490) e no Pantheon grego (128 d.C.), a proporção áurea revela um padrão universal de harmonia.",
    highlight: "Frequentemente utilizada na arte e na arquitetura, além de ser encontrada em padrões observados na natureza.",
  },
  {
    number: "04",
    title: "O Náutilo",
    subtitle: "Crescimento com Proporção",
    text: "O náutilo é um molusco marinho antigo, conhecido sobretudo por sua concha formada por câmaras internas que aumentam de tamanho à medida que o animal cresce.",
    highlight: "Em vez de abandonar sua estrutura anterior, ele a amplia progressivamente, preservando a proporcionalidade \u2014 símbolo de crescimento ordenado, harmonia natural e precisão estrutural.",
  },
  {
    number: "05",
    title: "A União",
    subtitle: "O Logotipo do Dr. Eduardo Mazão",
    text: "Este logotipo foi criado a partir da união de dois elementos marcantes: a concha do náutilo e a espiral de Fibonacci. Essa combinação simboliza a relação entre harmonia, precisão e natureza.",
    highlight: "Natureza e matemática. Harmonia e proporcionalidade. Uma identidade visual que reflete os valores que guiam cada procedimento.",
  },
];

export default function LogoCriacao() {
  const storyRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0.15);

  // Scroll-driven rotation
  useEffect(() => {
    const handleScroll = () => {
      if (!storyRef.current) return;
      const rect = storyRef.current.getBoundingClientRect();
      const scrollable = storyRef.current.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      setRotation(progress * 360);
      setLogoOpacity(0.15 + progress * 0.15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [heroRef, heroVisible] = useScrollAnimation(0.1);

  return (
    <div style={{ backgroundColor: colors.darkBg }}>
      {/* ===== HERO ===== */}
      <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden">
        {/* Background rotating logo watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.06 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
            alt=""
            className="w-[600px] h-[600px]"
            style={{
              transform: `rotate(${rotation}deg)`,
              willChange: "transform",
              filter: "brightness(2)",
            }}
          />
        </div>

        <div
          ref={heroRef}
          className="relative z-10 text-center max-w-3xl mx-auto px-6 transition-all duration-1000"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="mb-10">
            <img
              src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
              alt="Logo Dr. Eduardo Mazão"
              className="w-28 h-28 sm:w-36 sm:h-36 mx-auto"
              style={{
                animation: "gentle-spin 30s linear infinite",
              }}
            />
          </div>

          <p
            className="text-sm font-medium tracking-[0.3em] uppercase mb-6"
            style={{ color: colors.gold }}
          >
            Identidade Visual
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ color: colors.offwhite }}
          >
            A História por Trás
            <br />
            <span style={{ color: colors.gold }}>da Logo</span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: colors.soft }}
          >
            Uma identidade visual construída sobre a união entre natureza e
            matemática, harmonia e proporcionalidade.
          </p>

          <div className="mt-12 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.gold}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
              style={{ opacity: 0.6 }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== STORY WITH SCROLL-DRIVEN ROTATION ===== */}
      <section ref={storyRef} className="relative">
        <div className="md:grid md:grid-cols-2">
          {/* Left: sticky logo */}
          <div className="hidden md:flex sticky top-0 h-screen items-center justify-center">
            <div className="relative">
              {/* Subtle radial glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${colors.teal}20 0%, transparent 70%)`,
                  transform: "scale(1.5)",
                }}
              />
              <img
                src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
                alt="Logo Dr. Eduardo Mazão"
                className="relative w-56 h-56 lg:w-72 lg:h-72"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  willChange: "transform",
                  opacity: 0.85 + (rotation / 360) * 0.15,
                  filter: `drop-shadow(0 0 40px ${colors.teal}30)`,
                }}
              />
            </div>
          </div>

          {/* Right: scrollable story */}
          <div className="relative">
            {storyContent.map((block, idx) => (
              <StoryBlock key={idx} block={block} idx={idx} isLast={idx === storyContent.length - 1} />
            ))}
          </div>
        </div>

        {/* Mobile: fixed mini logo */}
        <div
          className="md:hidden fixed bottom-20 right-4 z-40 pointer-events-none"
          style={{ opacity: logoOpacity }}
        >
          <img
            src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
            alt=""
            className="w-14 h-14"
            style={{
              transform: `rotate(${rotation}deg)`,
              willChange: "transform",
              filter: `drop-shadow(0 0 20px ${colors.teal}40)`,
            }}
          />
        </div>
      </section>

      {/* ===== FINAL SECTION ===== */}
      <FinalSection />

      {/* CSS Animation */}
      <style>{`
        @keyframes gentle-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function StoryBlock({ block, idx, isLast }) {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center px-6 sm:px-10 lg:px-16 ${isLast ? "pb-20" : ""}`}
    >
      <div
        className="max-w-lg transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        {/* Number */}
        <span
          className="font-serif text-7xl sm:text-8xl font-bold block mb-2"
          style={{ color: colors.gold, opacity: 0.2 }}
        >
          {block.number}
        </span>

        {/* Subtitle */}
        <p
          className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
          style={{ color: colors.teal }}
        >
          {block.subtitle}
        </p>

        {/* Title */}
        <h2
          className="font-serif text-3xl sm:text-4xl font-bold mb-6"
          style={{ color: colors.offwhite }}
        >
          {block.title}
        </h2>

        {/* Text */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-6"
          style={{ color: colors.soft }}
        >
          {block.text}
        </p>

        {/* Highlight */}
        <div
          className="border-l-2 pl-5 py-1"
          style={{ borderColor: colors.gold }}
        >
          <p
            className="text-base leading-relaxed italic"
            style={{ color: colors.gold }}
          >
            {block.highlight}
          </p>
        </div>

        {/* Visual elements per block */}
        {block.number === "01" && (
          <>
            <div className="flex gap-3 items-center flex-wrap mt-8">
              {[1, 1, 2, 3, 5, 8, 13, 21].map((n, i) => (
                <span
                  key={i}
                  className="font-serif text-2xl sm:text-3xl font-bold"
                  style={{ color: colors.gold, opacity: 0.3 + i * 0.09 }}
                >
                  {n}
                </span>
              ))}
              <span
                className="font-serif text-2xl sm:text-3xl"
                style={{ color: colors.soft, opacity: 0.5 }}
              >
                ...
              </span>
            </div>
          </>
        )}

        {block.number === "02" && (
          <>
            <div className="mt-8 flex items-center gap-5">
              <div className="text-center">
                <div className="font-serif text-5xl sm:text-6xl font-bold" style={{ color: colors.gold }}>
                  {"\u03A6"}
                </div>
                <div className="text-sm mt-1" style={{ color: colors.soft, opacity: 0.7 }}>
                  = 1,618...
                </div>
              </div>
              <div className="h-14 w-px" style={{ backgroundColor: colors.gold, opacity: 0.3 }} />
              <div className="text-sm leading-relaxed" style={{ color: colors.soft, opacity: 0.7 }}>
                <p>Proporção Áurea</p>
                <p>Número de Ouro</p>
                <p>Divina Proporção</p>
              </div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
              <img
                src={`${import.meta.env.BASE_URL}espiral_fibonacci.webp`}
                alt="Espiral de Fibonacci"
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <p className="text-xs text-center py-2" style={{ color: colors.soft, opacity: 0.5 }}>
                Espiral de Fibonacci
              </p>
            </div>
          </>
        )}

        {block.number === "03" && (
          <>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { name: "Homem Vitruviano", year: "1490", author: "Leonardo da Vinci", image: "homem_virtruviano.webp" },
                { name: "Pantheon", year: "128 d.C.", author: "Grécia Antiga", image: "pantheon.webp" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: `${colors.teal}15`,
                    border: `1px solid ${colors.gold}20`,
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.image}`}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-serif text-sm font-bold" style={{ color: colors.gold }}>
                      {item.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: colors.soft, opacity: 0.7 }}>
                      {item.author} &mdash; {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
              <img
                src={`${import.meta.env.BASE_URL}natureza_fibonacci.webp`}
                alt="Espiral de Fibonacci representada na natureza"
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <p className="text-xs text-center py-2" style={{ color: colors.soft, opacity: 0.5 }}>
                A proporção áurea na natureza
              </p>
            </div>
          </>
        )}

        {block.number === "04" && (
          <>
            <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
              <img
                src={`${import.meta.env.BASE_URL}nautilo_meio.webp`}
                alt="Concha de náutilo partida ao meio"
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <p className="text-xs text-center py-2" style={{ color: colors.soft, opacity: 0.5 }}>
                Concha de náutilo partida ao meio
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              {["Crescimento Ordenado", "Harmonia Natural", "Precisão Estrutural"].map((attr, i) => (
                <div
                  key={i}
                  className="rounded-lg px-3 py-2 text-center flex-1"
                  style={{
                    backgroundColor: `${colors.gold}10`,
                    border: `1px solid ${colors.gold}18`,
                  }}
                >
                  <p className="text-xs font-medium" style={{ color: colors.gold }}>
                    {attr}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {block.number === "05" && (
          <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
            <img
              src={`${import.meta.env.BASE_URL}logo_criacao.webp`}
              alt="Processo de criação da logo"
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
            <p className="text-xs text-center py-2" style={{ color: colors.soft, opacity: 0.5 }}>
              A criação da identidade visual
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FinalSection() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: colors.offwhite }}
    >
      <div
        ref={ref}
        className="max-w-3xl mx-auto px-6 text-center transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <div className="mb-10">
          <img
            src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
            alt="Logo Dr. Eduardo Mazão"
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto"
            style={{
              animation: "gentle-spin 40s linear infinite",
              filter: `drop-shadow(0 0 30px ${colors.teal}20)`,
            }}
          />
        </div>

        <h2
          className="font-serif text-3xl sm:text-4xl font-bold mb-6"
          style={{ color: colors.darkGray }}
        >
          Natureza e Matemática.
          <br />
          <span style={{ color: colors.teal }}>Harmonia e Proporcionalidade.</span>
        </h2>

        <p
          className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: colors.tealDeep }}
        >
          Uma identidade visual que traduz a união entre precisão, crescimento
          ordenado e a busca natural pela proporção perfeita &mdash; os mesmos
          valores que guiam cada procedimento do Dr. Eduardo Mazão.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: colors.teal, color: "white" }}
        >
          Voltar ao Início
        </Link>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Procedures from "./pages/Procedures";
import Results from "./pages/Results";
import Contents from "./pages/Contents";
import Contact from "./pages/Contact";
import LogoCriacao from "./pages/LogoCriacao";

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
      { title: "Naturalidade acima de volume", description: "Resultados sutis, elegantes e proporcionais." },
      { title: "Formação sólida", description: "Anos de prática e especialização em cirurgia geral e cirurgia plástica." },
      { title: "Segurança em primeiro lugar", description: "Indicação criteriosa, orientação clara e transparência total." },
      { title: "Acompanhamento cuidadoso", description: "Do pré ao pós-operatório." },
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
        "Lipo HD, rinomodelação, rejuvenescimento facial, contorno corporal e técnicas modernas.",
      image: "curso3.webp",
    },
    {
      period: "2025",
      title: "Imersão no AdventHealth Nicholson Center",
      description:
        "Treinamento em um instituto especializado nos EUA em técnicas avançadas de rejucenescimento facial.",
      image: "perfil4.webp",
    },
  ],
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
          name: "Lifting Facial",
          description:
            "Rejuvenescimento facial com elevação de tecidos, restaurando volume e definição.",
          image: "facelifiting.webp",
          gallery: [],
        },
        {
          name: "Lipo de Papada",
          description:
            "Remoção de gordura localizada no queixo e pescoço para melhorar contorno.",
          image: "",
          gallery: [],
        },
        {
          name: "Rinoplastia",
          description:
            "Remodelagem da estrutura óssea e cartilaginosa do nariz para melhorar a estética.",
          image: "rinoplastia.webp",
          gallery: [],
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
          name: "Lipoaspiração",
          description: "Remoção de gordura localizada em diferentes regiões do corpo.",
          image: "",
          gallery: [],
        },
        {
          name: "Lipo HD",
          description:
            "Técnica avançada de escultura corporal com maior definição e naturalidade.",
          image: "",
          gallery: [],
        },
        {
          name: "Abdominoplastia",
          description: "Correção de flacidez e excesso de pele na região abdominal.",
          image: "abdominoplastia.webp",
          gallery: [
            "abdominoplastia_a_d_2.webp",
            "abdominoplastia_a_d_3.webp",
            "abdominoplastia_ancora_a_d.webp",
            "abdominoplastia_convencional_a_d.webp",
          ],
        },
      ],
      male: [
        {
          name: "Ginecomastia",
          description:
            "Redução do tecido mamário em homens para contorno mais definido.",
          image: "",
          gallery: [],
        },
        {
          name: "Contorno Corporal",
          description: "Escultura e definição do tórax, abdômen e flancos.",
          image: "",
          gallery: [],
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

export default function App() {
  const [selectedProcedureCategory, setSelectedProcedureCategory] = useState("face");

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'DM Sans', 'Lato', 'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
        .font-serif { font-family: 'Playfair Display', 'Cormorant', serif; }
        * { scroll-behavior: smooth; }
      `}</style>

      <ScrollToTop />
      <Navigation colors={colors} content={content} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              content={content}
              colors={colors}
              setSelectedProcedureCategory={setSelectedProcedureCategory}
            />
          }
        />
        <Route path="/sobre" element={<About content={content} colors={colors} />} />
        <Route path="/trajetoria" element={<Timeline content={content} colors={colors} />} />
        <Route
          path="/procedimentos"
          element={
            <Procedures
              content={content}
              colors={colors}
              selectedProcedureCategory={selectedProcedureCategory}
              setSelectedProcedureCategory={setSelectedProcedureCategory}
            />
          }
        />
        <Route path="/resultados" element={<Results content={content} colors={colors} />} />
        <Route path="/identidade-visual" element={<LogoCriacao />} />
        <Route path="/conteudos" element={<Contents colors={colors} />} />
        <Route path="/contato" element={<Contact content={content} colors={colors} />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <FloatingWhatsApp content={content} colors={colors} />
      <Footer colors={colors} />
    </div>
  );
}
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
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
    crm: "CRM: 215.230 | RQE: 147.050",
    tagline: "Cirurgia plástica moderna, segura e guiada pela sutileza.",
    about:
      "Dr. Eduardo Mazão é Cirurgião Plástico com formação completa em cirurgia geral e cirurgia plástica, além de aprimoramentos em técnicas modernas em rejuvenescimento facial e rinoplastia.",

    philosophy: [
      {
        title: "Formação sólida",
        description:
          "Residência médica em cirurgia geral e cirurgia plástica, além de pós-graduação em cirurgia plástica facial.",
      },
      {
        title: "Segurança em primeiro lugar",
        description: "Indicação criteriosa, orientação clara e transparência total.",
      },
      {
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
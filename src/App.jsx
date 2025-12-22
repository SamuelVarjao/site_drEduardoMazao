import React, { useState } from 'react';
import { Menu, X, MessageCircle, Instagram, Mail, ChevronDown } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);



  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'journey', label: 'Trajetória' },
    { id: 'procedures', label: 'Procedimentos' },
    { id: 'results', label: 'Resultados' },
    { id: 'contact', label: 'Contato' },
  ];

  const pillars = [
    {
      title: 'Naturalidade',
      description: 'Resultados sutis, elegantes e proporcionais que preservam sua essência.',
    },
    {
      title: 'Formação Sólida',
      description: 'Anos de prática e especialização em cirurgia geral e cirurgia plástica.',
    },
    {
      title: 'Segurança',
      description: 'Indicação criteriosa, orientação clara e transparência total em cada etapa.',
    },
    {
      title: 'Acompanhamento',
      description: 'Cuidado dedicado do pré ao pós-operatório, sempre presente.',
    },
  ];

  const procedures = [
    {
      category: 'Face',
      items: ['Blefaroplastia', 'Lifting Facial', 'Lipo de Papada'],
    },
    {
      category: 'Mamas',
      items: ['Prótese', 'Mastopexia', 'Redução'],
    },
    {
      category: 'Corpo',
      items: ['Lipoaspiração', 'Lipo HD', 'Abdominoplastia'],
    },
    {
      category: 'Masculino',
      items: ['Ginecomastia', 'Contorno Corporal'],
    },
  ];

  function ProcedureCard({ name, desc, ind, obj }) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-slate-50 hover:shadow-lg transition-all">
      <h5 className="text-xl font-bold mb-3" style={{ color: '#274046' }}>{name}</h5>
      <p className="text-slate-700 mb-3">{desc}</p>
      <p className="text-sm text-slate-600"><strong>Indicação:</strong> {ind}</p>
      <p className="text-sm text-slate-600 mb-3"><strong>Objetivo:</strong> {obj}</p>
      <p className="text-xs italic text-slate-500">
        A indicação depende sempre da avaliação presencial.
      </p>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-tight" style={{ color: '#2E2E2E' }}>
                Dr. Eduardo Mazão
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm font-medium transition-colors hover:text-amber-600"
                  style={{ color: '#2E2E2E' }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/5511999999999?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-all hover:shadow-lg"
                style={{ backgroundColor: '#274046', color: '#FAF9F7' }}
              >
                <MessageCircle size={18} />
                <span>Agendar</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: '#2E2E2E' }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 rounded-lg font-medium"
                style={{ backgroundColor: '#274046', color: '#FAF9F7' }}
              >
                Agendar via WhatsApp
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#2E2E2E' }}>
                  Dr. Eduardo Mazão
                </h2>
                <p className="text-xl font-medium" style={{ color: '#274046' }}>
                  Cirurgião Plástico — CRM / RQE
                </p>
                <p className="text-lg leading-relaxed text-slate-600 max-w-lg">
                  Cirurgia plástica moderna, segura e guiada pela sutileza.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://wa.me/5511999999999?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl text-center"
                  style={{ backgroundColor: '#C9AA7A', color: '#2E2E2E' }}
                >
                  Agendar Avaliação
                </a>
                <a
                  href="#procedures"
                  className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all text-center"
                  style={{ borderColor: '#274046', color: '#274046' }}
                >
                  Ver Procedimentos
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-6 pt-8">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <MessageCircle size={28} style={{ color: '#274046' }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <Instagram size={28} style={{ color: '#274046' }} />
                </a>
                <a href="mailto:contato@drcirurgiaplastica.com" className="transition-transform hover:scale-110">
                  <Mail size={28} style={{ color: '#274046' }} />
                </a>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-full min-h-96">
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <img src="/IMG_6939.JPEG.jpg" alt="Foto do Dr. Eduardo Mazão" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4" style={{ color: '#2E2E2E' }}>
              Princípios do Atendimento
            </h3>
            <p className="text-lg text-slate-600">
              A abordagem completa que guia meu trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border-l-4 transition-all hover:shadow-lg"
                style={{ borderColor: '#C9AA7A' }}
              >
                <h4 className="text-2xl font-bold mb-3" style={{ color: '#274046' }}>
                  {pillar.title}
                </h4>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-8" style={{ color: '#2E2E2E' }}>
            Sobre o Doutor
          </h3>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            Dr. Eduardo Mazão é Cirurgião Plástico com formação completa em cirurgia geral e cirurgia plástica, além de aprimoramentos contínuos em técnicas modernas de rejuvenescimento facial, estética de mamas e contorno corporal.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-8">
            Minha filosofia se baseia na naturalidade acima de volume, anatomia como guia, segurança absoluta e planejamento individualizado. Cada procedimento é realizado com transparência total e cuidado dedicado.
          </p>
          <button
            onClick={() => setJourneyOpen(true)}
            className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            style={{ backgroundColor: '#274046', color: '#FAF9F7' }}
          >
              Conheça Minha Trajetória
            <ChevronDown className="ml-2 rotate-90" size={20} />
          </button>

        </div>
      </section>

      {/* Procedures Section */}
      <section id="procedures" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-16 text-center" style={{ color: '#2E2E2E' }}>
            Procedimentos Principais
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedures.map((proc, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow-md transition-all hover:shadow-xl"
                style={{ backgroundColor: '#FAF9F7' }}
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#274046' }}>
                  {proc.category}
                </h4>
                <ul className="space-y-3">
                  {proc.items.map((item, i) => (
                    <li key={i} className="text-slate-700 flex items-start">
                      <span className="mr-3" style={{ color: '#C9AA7A' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
<button
  onClick={() => setProceduresOpen(true)}
  className="inline-block px-10 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
  style={{ backgroundColor: '#274046', color: '#FAF9F7' }}
>
  Conhecer Todos os Procedimentos
</button>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6" style={{ color: '#2E2E2E' }}>
            Comece Sua Avaliação
          </h3>
          <p className="text-xl text-slate-700 mb-12 leading-relaxed">
            O primeiro passo é entender sua queixa, seus objetivos e discutir as possibilidades reais de cada procedimento. Estou aqui para ajudá-lo com clareza e segurança.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-12 py-5 rounded-lg font-bold text-lg transition-all hover:shadow-2xl text-center"
            style={{ backgroundColor: '#C9AA7A', color: '#2E2E2E' }}
          >
            <MessageCircle size={22} />
            <span>Agendar via WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2E2E2E', color: '#FAF9F7' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-bold mb-4">Dr. Eduardo Mazão</h5>
              <p className="text-sm opacity-75">Cirurgião Plástico especializado em naturalidade e segurança.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contato</h5>
              <p className="text-sm opacity-75">WhatsApp: (11) 99999-9999</p>
              <p className="text-sm opacity-75">Email: clinica@email.com</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Redes</h5>
              <div className="flex space-x-4">
                <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            <p>© 2026 Dr. Eduardo Mazão. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {journeyOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl p-8 sm:p-12">

      {/* Botão fechar */}
      <button
        onClick={() => setJourneyOpen(false)}
        className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
      >
        <X size={28} />
      </button>

      {/* Conteúdo */}
      <h3 className="text-4xl font-bold mb-10" style={{ color: '#2E2E2E' }}>
        Trajetória Profissional
      </h3>

      {/* Linha do tempo */}
      <div className="space-y-8 border-l-2 pl-6" style={{ borderColor: '#C9AA7A' }}>
        <div>
          <h4 className="text-xl font-bold" style={{ color: '#274046' }}>
            2013–2019 — Graduação em Medicina
          </h4>
          <p className="text-slate-700 mt-2">
            Atuação em hospital, pronto-socorro e centro cirúrgico, com sólida base clínica e cirúrgica.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold" style={{ color: '#274046' }}>
            2019–2022 — Residência em Cirurgia Geral
          </h4>
          <p className="text-slate-700 mt-2">
            Treinamento técnico intenso em procedimentos cirúrgicos essenciais e tomada de decisão em cenários complexos.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold" style={{ color: '#274046' }}>
            2022–2025 — Residência em Cirurgia Plástica
          </h4>
          <p className="text-slate-700 mt-2">
            Especialização avançada em cirurgia estética e reparadora, com foco em naturalidade e segurança.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold" style={{ color: '#274046' }}>
            2023–2025 — Cursos e aprimoramentos
          </h4>
          <p className="text-slate-700 mt-2">
            Lipo HD, rinomodelação, rejuvenescimento facial, contorno corporal e técnicas modernas.
          </p>
        </div>
      </div>

      {/* Idiomas */}
      <div className="mt-12">
        <h4 className="text-2xl font-bold mb-4" style={{ color: '#274046' }}>
          Idiomas
        </h4>
        <ul className="text-slate-700 space-y-1">
          <li>Português — nativo</li>
          <li>Inglês — nível a definir</li>
          <li>Espanhol — nível a definir</li>
        </ul>
      </div>

      {/* Perfil de pacientes */}
      <div className="mt-10">
        <h4 className="text-2xl font-bold mb-4" style={{ color: '#274046' }}>
          Perfil de Pacientes
        </h4>
        <p className="text-slate-700 leading-relaxed">
          Adultos e público maduro (30–70+), com busca por naturalidade, segurança e resultados elegantes,
          evitando estética agressiva.
        </p>
      </div>
    </div>
  </div>
)}

{proceduresOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
    <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl p-8 sm:p-12">

      {/* Fechar */}
      <button
        onClick={() => setProceduresOpen(false)}
        className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
      >
        <X size={28} />
      </button>

      <h3 className="text-4xl font-bold mb-12 text-center" style={{ color: '#2E2E2E' }}>
        Procedimentos
      </h3>

      {/* GRID DE CATEGORIAS */}
      <div className="space-y-14">

        {/* FACE */}
        <div>
          <h4 className="text-2xl font-bold mb-6" style={{ color: '#274046' }}>Face</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Blefaroplastia', desc: 'Cirurgia das pálpebras para rejuvenescimento do olhar.', ind: 'Excesso de pele ou bolsas', obj: 'Aparência mais leve e descansada' },
              { name: 'Lifting Facial', desc: 'Reposicionamento dos tecidos faciais com naturalidade.', ind: 'Flacidez facial avançada', obj: 'Rejuvenescimento global do rosto' },
              { name: 'Lipo de Papada', desc: 'Remoção de gordura localizada abaixo do queixo.', ind: 'Acúmulo de gordura submentoniana', obj: 'Definir contorno facial' },
            ].map((p, i) => (
              <ProcedureCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* MAMAS */}
        <div>
          <h4 className="text-2xl font-bold mb-6" style={{ color: '#274046' }}>Mamas</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Mastopexia', desc: 'Elevação das mamas com ou sem prótese.', ind: 'Flacidez mamária', obj: 'Reposicionar e harmonizar' },
              { name: 'Prótese Mamária', desc: 'Aumento mamário com planejamento individualizado.', ind: 'Hipomastia ou desejo estético', obj: 'Volume proporcional' },
              { name: 'Redução Mamária', desc: 'Redução do volume mamário com alívio funcional.', ind: 'Mamas volumosas', obj: 'Conforto e proporção' },
            ].map((p, i) => (
              <ProcedureCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* CORPO */}
        <div>
          <h4 className="text-2xl font-bold mb-6" style={{ color: '#274046' }}>Corpo</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Lipoaspiração', desc: 'Remoção de gordura localizada.', ind: 'Gordura resistente', obj: 'Melhorar contorno corporal' },
              { name: 'Abdominoplastia', desc: 'Correção de flacidez abdominal.', ind: 'Excesso de pele', obj: 'Abdome mais firme' },
              { name: 'Lipo HD', desc: 'Definição muscular de alta precisão.', ind: 'Perfil atlético', obj: 'Realce anatômico' },
            ].map((p, i) => (
              <ProcedureCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* MASCULINO */}
        <div>
          <h4 className="text-2xl font-bold mb-6" style={{ color: '#274046' }}>Masculino</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Ginecomastia', desc: 'Correção do aumento mamário masculino.', ind: 'Volume mamário excessivo', obj: 'Tórax masculino definido' },
              { name: 'Contorno Corporal', desc: 'Modelagem corporal adaptada ao biotipo masculino.', ind: 'Desarmonia corporal', obj: 'Definição e proporção' },
            ].map((p, i) => (
              <ProcedureCard key={i} {...p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
)}


    </div>
  );
}
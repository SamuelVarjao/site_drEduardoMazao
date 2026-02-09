import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Instagram, MessageCircle, MapPin, ChevronRight, Heart, Award, Shield, Clock } from 'lucide-react';

const DrEduardoWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProcedureCategory, setSelectedProcedureCategory] = useState('face');

  const content = {
    doctor: {
      name: 'Dr. Eduardo Mazão',
      title: 'Cirurgião Plástico',
      crm: 'CRM / RQE',
      tagline: 'Cirurgia plástica moderna, segura e guiada pela sutileza.',
      about: 'Dr. Eduardo Mazão é Cirurgião Plástico com formação completa em cirurgia geral e cirurgia plástica, além de aprimoramentos em técnicas modernas de rejuvenescimento facial, mamas e contorno corporal.',
      philosophy: [
        { icon: Heart, title: 'Naturalidade acima de volume', description: 'Resultados sutis, elegantes e proporcionais.' },
        { icon: Award, title: 'Formação sólida', description: 'Anos de prática e especialização em cirurgia geral e cirurgia plástica.' },
        { icon: Shield, title: 'Segurança em primeiro lugar', description: 'Indicação criteriosa, orientação clara e transparência total.' },
        { icon: Clock, title: 'Acompanhamento cuidadoso', description: 'Do pré ao pós-operatório.' }
      ]
    },
    contact: {
      whatsapp: '+55 (11) 99999-9999',
      phone: '+55 (11) 3333-3333',
      email: 'contato@dreduardomazao.com.br',
      instagram: '@dreduardomazao',
      address: 'São Paulo, SP',
      mapEmbedUrl: ''
    },
    timeline: [
      { period: '2013–2019', title: 'Graduação em Medicina', description: 'Atuação em hospital, pronto-socorro e centro cirúrgico com formação clínica sólida.', image: 'aula1.JPEG' },
      { period: '2019–2022', title: 'Residência de Cirurgia Geral', description: 'Treinamento técnico intenso em procedimentos cirúrgicos essenciais e refinamento de habilidades.', image: 'cirurgia1_cortado.jpg' },
      { period: '2022–2025', title: 'Residência em Cirurgia Plástica', description: 'Especialização avançada em cirurgia estética e reparadora com foco em naturalidade.', image: 'procedimento2.jpg' },
      { period: '2023–2025', title: 'Cursos e Aprimoramentos', description: 'Lipo HD, rinomodelação, rejuvenescimento facial, contorno corporal e técnicas modernas.', image: 'curso3.jpg' }
    ],
    procedures: {
      face: [
        { name: 'Blefaroplastia', description: 'Cirurgia das pálpebras para correção de excesso de pele, flacidez ou bolsas sob os olhos.' },
        { name: 'Lifting Facial', description: 'Rejuvenescimento facial com elevação de tecidos, restaurando volume e definição.' },
        { name: 'Lipo de Papada', description: 'Remoção de gordura localizada no queixo e pescoço para melhorar contorno.' }
      ],
      breast: [
        { name: 'Mastopexia', description: 'Elevação das mamas para restaurar posição e formato natural.' },
        { name: 'Prótese de Silicone', description: 'Aumento de volume com naturalidade e proporção ao corpo.' },
        { name: 'Redução Mamária', description: 'Redução de volume com alívio de desconforto físico e estético.' }
      ],
      body: [
        { name: 'Lipoaspiração', description: 'Remoção de gordura localizada em diferentes regiões do corpo.' },
        { name: 'Lipo HD', description: 'Técnica avançada de escultura corporal com maior definição e naturalidade.' },
        { name: 'Abdominoplastia', description: 'Correção de flacidez e excesso de pele na região abdominal.' }
      ],
      male: [
        { name: 'Ginecomastia', description: 'Redução do tecido mamário em homens para contorno mais definido.' },
        { name: 'Contorno Corporal', description: 'Escultura e definição do tórax, abdômen e flancos.' }
      ]
    },
    testimonials: [
      { name: 'Marisa S.', age: 52, text: 'Resultado absolutamente natural. O Dr. Eduardo entendeu exatamente o que eu queria. Muito seguro!' },
      { name: 'Carlos M.', age: 58, text: 'Profissionalismo, cuidado e excelentes resultados. Recomendo muito.' },
      { name: 'Patricia L.', age: 48, text: 'Ficou exatamente como sonhava. Muito feliz e segura com o procedimento.' }
    ]
  };

const colors = {
  offwhite: '#fdfbf5',   
  darkGray: '#306078',  
  gold: '#EDE3C8',
  teal: '#6A93A5',      
  tealDeep: '#3A515B',   
  soft: '#c7dfeb'        
};


  const useScrollAnimation = () => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);

    return [elementRef, isVisible];
  };

  const Navigation = () => (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b-2" style={{ borderColor: colors.teal }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <img
  src={`${import.meta.env.BASE_URL}icone_dredu.svg`}
  alt="Logo Dr. Eduardo Mazão"
  className="w-10 h-10"
/>

            <div className="hidden sm:block">
              <p className="font-serif text-sm font-bold" style={{ color: colors.teal }}>DR. EDUARDO</p>
              <p className="text-xs" style={{ color: colors.gold }}>Cirurgião Plástico</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Sobre', id: 'about' },
              { label: 'Trajetória', id: 'timeline' },
              { label: 'Procedimentos', id: 'procedures' },
              { label: 'Resultados', id: 'results' },
              { label: 'Conteúdos', id: 'contents' },
              { label: 'Contato', id: 'contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: currentPage === item.id ? colors.teal : colors.darkGray }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a
            href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-6 py-2 rounded-full font-medium text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: colors.teal }}
          >
            Agendar
          </a>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Sobre', id: 'about' },
              { label: 'Trajetória', id: 'timeline' },
              { label: 'Procedimentos', id: 'procedures' },
              { label: 'Resultados', id: 'results' },
              { label: 'Contato', id: 'contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-sm font-medium"
                style={{ color: colors.darkGray }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );

  const HeroSection = () => {
    const [ref1, isVisible1] = useScrollAnimation();
    const [ref2, isVisible2] = useScrollAnimation();

    return (
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: colors.offwhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              ref={ref1}
              className="flex items-center justify-center md:order-2 transition-all duration-1000"
              style={{
                opacity: isVisible1 ? 1 : 0,
                transform: isVisible1 ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <div className="w-full aspect-square rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: colors.teal, backgroundColor: colors.soft }}>
                <picture>
  <source
    srcSet={`${import.meta.env.BASE_URL}perfil3_cortado.jpeg`}
    type="image/jpeg"
  />
  <img
    src={`${import.meta.env.BASE_URL}perfil3_cortado.jpeg`}
    alt="Foto do Dr. Eduardo Mazão"
    loading="eager"
    fetchpriority="high"
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
                transform: isVisible2 ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4" style={{ color: colors.darkGray }}>
                {content.doctor.name}
              </h1>
              <p className="text-lg font-medium mb-2" style={{ color: colors.teal }}>
                {content.doctor.title} – {content.doctor.crm}
              </p>
              <p className="text-2xl leading-relaxed mb-8" style={{ color: colors.teal }}>
                {content.doctor.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-medium text-white transition-opacity hover:opacity-80 flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.teal }}
                >
                  <MessageCircle size={20} />
                  Agendar Avaliação
                </a>
                <button
                  onClick={() => setCurrentPage('procedures')}
                  className="px-8 py-4 rounded-full font-medium border-2 transition-colors hover:opacity-70"
                  style={{ borderColor: colors.teal, color: colors.teal }}
                >
                  Ver Procedimentos
                </button>
              </div>

              <div className="flex gap-4">
                <a href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
                  <MessageCircle size={24} style={{ color: colors.teal }} />
                </a>
                <a href={`https://instagram.com/${content.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
                  <Instagram size={24} style={{ color: colors.teal }} />
                </a>
                <a href={`mailto:${content.contact.email}`} className="transition-opacity hover:opacity-70">
                  <Mail size={24} style={{ color: colors.teal }} />
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
      <section className="py-20" style={{ backgroundColor: colors.teal }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Os Pilares do Atendimento
          </h2>

          <div 
            ref={ref1}
            className="grid md:grid-cols-4 gap-8 transition-all duration-1000"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {content.doctor.philosophy.map((pilar, idx) => {
              const Icon = pilar.icon;
              return (
                <div key={idx} className="text-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex justify-center mb-6">
                    <Icon size={48} style={{ color: colors.gold }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-white">
                    {pilar.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {pilar.description}
                  </p>
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
                transform: isVisible1 ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.darkGray }}>
                Conheça o <span style={{ color: colors.teal }}>Doutor</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: colors.darkGray }}>
                {content.doctor.about}
              </p>
              <button
                onClick={() => setCurrentPage('about')}
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
                transform: isVisible2 ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <div className="w-full aspect-square rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: colors.teal, backgroundColor: colors.soft }}>
                <picture>
  <source
    srcSet={`${import.meta.env.BASE_URL}procedimento1.jpg`}
    type="image/jpeg"
  />
  <img
    src={`${import.meta.env.BASE_URL}procedimento1.jpg`}
    alt="Foto do Dr. Eduardo Mazão 2"
    loading="lazy"
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
              transform: isVisible1 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {Object.entries(content.procedures).map(([category, procedures]) => (
              <div key={category} className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 flex items-center justify-center border-b-4" style={{ borderColor: colors.teal, backgroundColor: colors.soft }}>
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold capitalize mb-2" style={{ color: colors.teal }}>
                      {category === 'male' ? 'Masculino' : category === 'breast' ? 'Mamas' : category === 'body' ? 'Corpo' : 'Rosto'}
                    </p>
                    <p className="text-xs"style={{ color: '#8FA3AD' }}>(Imagem ilustrativa)</p>
                  </div>
                </div>
                <div className="p-6">
                  {procedures.map((proc, idx) => (
                    <p key={idx} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: colors.darkGray }}>
                      • {proc.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('procedures')}
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

    return (
      <section className="py-20" style={{ backgroundColor: colors.offwhite }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: colors.darkGray }}>
            Resultados e Depoimentos
          </h2>

          <div 
            ref={ref1}
            className="grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {[1, 2, 3].map(idx => (
              <div key={idx}>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="aspect-square rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: colors.teal, backgroundColor: colors.soft }}>
                    <div className="text-center text-xs"style={{ color: '#8FA3AD' }}>
                      <p>Antes</p>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: colors.teal, backgroundColor: colors.soft }}>
                    <div className="text-center text-xs"style={{ color: '#8FA3AD' }}>
                      <p>Depois</p>
                    </div>
                  </div>
                </div>
                <p className="font-serif text-lg font-bold mb-2" style={{ color: colors.teal }}>Procedimento {idx}</p>
                <p className="text-sm"style={{ color: colors.tealDeep }}>Descrição do procedimento realizado</p>
              </div>
            ))}
          </div>

          <div 
            ref={ref2}
            className="grid md:grid-cols-3 gap-8 transition-all duration-1000"
            style={{
              opacity: isVisible2 ? 1 : 0,
              transform: isVisible2 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {content.testimonials.map((test, idx) => (
              <div key={idx} className="p-8 rounded-lg" style={{ backgroundColor: colors.teal }}>
                <p className="text-white text-lg leading-relaxed mb-6 italic">
                  "{test.text}"
                </p>
                <div>
                  <p className="font-serif font-bold text-white">{test.name}</p>
                  <p className="text-sm" style={{ color: colors.gold }}>{test.age} anos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
            transform: isVisible1 ? 'scale(1)' : 'scale(0.95)'
          }}
        >
          <p className="text-xl leading-relaxed mb-8 text-white">
            O primeiro passo é entender sua queixa, seus objetivos e discutir possibilidades reais. Uma avaliação criteriosa e transparente é o início de uma jornada segura.
          </p>
          <a
            href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, '')}`}
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

  const AboutPage = () => {
    const [ref1, isVisible1] = useScrollAnimation();
    const [ref2, isVisible2] = useScrollAnimation();
    const [ref3, isVisible3] = useScrollAnimation();

    return (
      <section className="min-h-screen py-20" style={{ backgroundColor: colors.offwhite }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <div 
                ref={ref1}
                className="w-full aspect-square rounded-lg flex items-center justify-center border-2 border-dashed transition-all duration-1000" 
                style={{ 
                  borderColor: colors.teal, 
                  backgroundColor: colors.soft,
                  opacity: isVisible1 ? 1 : 0,
                  transform: isVisible1 ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
<picture>
  <source
    srcSet={`${import.meta.env.BASE_URL}palestra2.JPG`}
    type="image/jpeg"
  />
  <img
    src={`${import.meta.env.BASE_URL}palestra2.JPG`}
    alt="Foto do Dr. Eduardo Mazão 3"
    loading="lazy"
    decoding="async"
    width="600"
    height="600"
    className="w-full h-full object-cover rounded-lg"
  />
</picture>
              </div>
              
              <div 
                ref={ref2}
                className="w-full aspect-video rounded-lg flex items-center justify-center border-2 border-dashed transition-all duration-1000" 
                style={{ 
                  borderColor: colors.teal, 
                  backgroundColor: colors.soft,
                  opacity: isVisible2 ? 1 : 0,
                  transform: isVisible2 ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
<picture>
  <source
    srcSet={`${import.meta.env.BASE_URL}aula2.jpg`}
    type="image/jpeg"
  />
  <img
    src={`${import.meta.env.BASE_URL}aula2.jpg`}
    alt="Foto do Dr. Eduardo Mazão 3"
    loading="lazy"
    decoding="async"
    width="600"
    height="600"
    className="w-full h-full object-cover rounded-lg"
  />
</picture>
              </div>
            </div>

            <div 
              ref={ref3}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible3 ? 1 : 0,
                transform: isVisible3 ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <h1 className="font-serif text-5xl font-bold mb-8" style={{ color: colors.darkGray }}>
                Sobre o Dr. {content.doctor.name.split(' ')[2]}
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: colors.darkGray }}>
                {content.doctor.about}
              </p>

              <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: colors.teal }}>Filosofia de Atendimento</h2>
              <ul className="space-y-4">
                {[
                  'Naturalidade acima de volume',
                  'Anatomia como guia',
                  'Segurança absoluta',
                  'Planejamento individualizado',
                  'Clareza e transparência'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: colors.teal }}></div>
                    <span style={{ color: colors.darkGray }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="text-sm mb-4"style={{ color: colors.tealDeep }}>Idiomas:</p>
                <ul className="space-y-2 text-sm" style={{ color: colors.darkGray }}>
                  <li>• Português (nativo)</li>
                  <li>• Inglês (avançado)</li>
                  <li>• Espanhol (básico)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const TimelinePage = () => {
    const [ref1, isVisible1] = useScrollAnimation();

    return (
      <section className="min-h-screen py-20" style={{ backgroundColor: colors.teal }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-center mb-16 text-white">
            Trajetória Profissional
          </h1>

          <div 
            ref={ref1}
            className="relative transition-all duration-1000"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style={{ backgroundColor: colors.gold }}></div>

<div className="space-y-12">
  {content.timeline.map((item, idx) => {
    const reverse = idx % 2 !== 0;

    return (
      <div
        key={idx}
        className={`md:flex gap-12 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg p-8">
            <p className="font-serif text-xl font-bold mb-2" style={{ color: colors.teal }}>
              {item.period}
            </p>
            <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: colors.teal }}>
              {item.title}
            </h3>
            <p className="leading-relaxed" style={{ color: colors.darkGray }}>
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
</div>

          </div>

          <div className="mt-20 bg-white rounded-lg p-10">
            <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: colors.teal }}>
              Perfil de Pacientes
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: colors.darkGray }}>
              Adultos e público maduro (30–70+) que buscam naturalidade e segurança acima da estética agressiva. Pacientes que entendem o valor de uma abordagem criteriosa e personalizada.
            </p>
          </div>
        </div>
      </section>
    );
  };

  const ProceduresPage = () => {
    const [ref1, isVisible1] = useScrollAnimation();

    return (
      <section className="min-h-screen py-20" style={{ backgroundColor: colors.offwhite }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-center mb-12" style={{ color: colors.darkGray }}>
            Procedimentos
          </h1>

          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[
              { key: 'face', label: 'Rosto' },
              { key: 'breast', label: 'Mamas' },
              { key: 'body', label: 'Corpo' },
              { key: 'male', label: 'Masculino' }
            ].map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelectedProcedureCategory(cat.key)}
                className="px-6 py-2 rounded-full font-medium transition-all"
                style={{
                  backgroundColor: selectedProcedureCategory === cat.key ? colors.teal : colors.gold,
                  color: 'white'
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
              transform: isVisible1 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {content.procedures[selectedProcedureCategory].map((proc, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden border-t-4" style={{ borderColor: colors.teal }}>
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: colors.soft }}>
                  <div className="text-center">
                    <p className="font-serif text-xl font-bold mb-2" style={{ color: colors.teal }}>{proc.name}</p>
                    <p className="text-xs"style={{ color: '#8FA3AD' }}>(Imagem ilustrativa do procedimento)</p>
                  </div>
                </div>
                <div className="p-10">
                  <p className="leading-relaxed mb-6"style={{ color: colors.darkGray }}>
                    {proc.description}
                  </p>
                  <p className="text-sm italic text-gray-500">
                    * A indicação depende sempre da avaliação presencial.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContentsPage = () => {
  const [ref1, isVisible1] = useScrollAnimation();

  return (
    <section className="min-h-screen py-20" style={{ backgroundColor: colors.offwhite }}>
      <div
        ref={ref1}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000"
        style={{
          opacity: isVisible1 ? 1 : 0,
          transform: isVisible1 ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <h1 className="font-serif text-5xl font-bold mb-6" style={{ color: colors.teal }}>
          Conteúdos
        </h1>

        <p className="text-xl mb-10" style={{ color: colors.darkGray }}>
          Estamos preparando conteúdos para você
        </p>

        <button
          onClick={() => setCurrentPage('home')}
          className="px-8 py-4 rounded-full font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: colors.teal, color: 'white' }}
        >
          Voltar ao início
        </button>
      </div>
    </section>
  );
};

  const ResultsPage = () => {
    const [ref1, isVisible1] = useScrollAnimation();
    const [ref2, isVisible2] = useScrollAnimation();

    return (
      <section className="min-h-screen py-20" style={{ backgroundColor: colors.darkGray }}>
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
              transform: isVisible1 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {[1, 2, 3, 4, 5, 6].map(idx => (
              <div key={idx}>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="aspect-square rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: colors.teal, backgroundColor: colors.tealDeep }}>
                    <div className="text-center">
                      <p className="text-sm"style={{ color: '#8FA3AD' }}>Antes</p>
                    </div>
                  </div>
                  <div className="aspect-square rounded-lg flex items-center justify-center border-2 border-dashed" style={{ borderColor: colors.teal, backgroundColor: colors.tealDeep }}>
                    <div className="text-center">
                      <p className="text-sm"style={{ color: '#8FA3AD' }}>Depois</p>
                    </div>
                  </div>
                </div>
                <p className="font-serif font-bold text-white">Procedimento {idx}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-bold text-white mb-10">Depoimentos de Pacientes</h2>
          <div 
            ref={ref2}
            className="grid md:grid-cols-2 gap-8 transition-all duration-1000"
            style={{
              opacity: isVisible2 ? 1 : 0,
              transform: isVisible2 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {content.testimonials.map((test, idx) => (
              <div key={idx} className="bg-white rounded-lg p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: colors.teal }}>★</span>
                  ))}
                </div>
                <p className="text-xl leading-relaxed mb-8" style={{ color: colors.darkGray }}>
                  "{test.text}"
                </p>
                <div>
                  <p className="font-serif font-bold" style={{ color: colors.teal }}>{test.name}</p>
                  <p className="text-sm"style={{ color: colors.tealDeep }}>{test.age} anos</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 rounded-full font-medium text-white transition-opacity hover:opacity-80" style={{ backgroundColor: colors.gold, color: colors.darkGray }}>
              Ver Todos os Depoimentos
            </button>
          </div>
        </div>
      </section>
    );
  };

  const ContactPage = () => {
    const [ref1, isVisible1] = useScrollAnimation();
    const [ref2, isVisible2] = useScrollAnimation();

    return (
      <section className="min-h-screen py-20" style={{ backgroundColor: colors.offwhite }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-center mb-16" style={{ color: colors.darkGray }}>
            Entre em Contato
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div 
              ref={ref1}
              className="bg-white rounded-lg p-10 transition-all duration-1000"
              style={{
                opacity: isVisible1 ? 1 : 0,
                transform: isVisible1 ? 'translateX(0)' : 'translateX(-50px)'
              }}
            >
              <h2 className="font-serif text-2xl font-bold mb-8" style={{ color: colors.teal }}>
                Envie uma Mensagem
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGray }}>Nome</label>
                  <input type="text" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{ borderColor: colors.teal }} placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGray }}>Email</label>
                  <input type="email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{ borderColor: colors.teal }} placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGray }}>Telefone</label>
                  <input type="tel" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{ borderColor: colors.teal }} placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: colors.darkGray }}>Mensagem</label>
                  <textarea rows="5" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2" style={{ borderColor: colors.teal }} placeholder="Sua mensagem..."></textarea>
                </div>
                <button type="submit" className="w-full py-3 rounded-full font-medium text-white transition-opacity hover:opacity-80" style={{ backgroundColor: colors.teal }}>
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div 
              ref={ref2}
              className="transition-all duration-1000"
              style={{
                opacity: isVisible2 ? 1 : 0,
                transform: isVisible2 ? 'translateX(0)' : 'translateX(50px)'
              }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: colors.teal }}>WhatsApp</h3>
                  <a href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg transition-opacity hover:opacity-70" style={{ color: colors.teal }}>
                    <MessageCircle size={24} />
                    {content.contact.whatsapp}
                  </a>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: colors.teal }}>Telefone</h3>
                  <a href={`tel:${content.contact.phone}`} className="flex items-center gap-3 text-lg transition-opacity hover:opacity-70" style={{ color: colors.teal }}>
                    <Phone size={24} />
                    {content.contact.phone}
                  </a>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: colors.teal }}>Email</h3>
                  <a href={`mailto:${content.contact.email}`} className="flex items-center gap-3 text-lg transition-opacity hover:opacity-70" style={{ color: colors.teal }}>
                    <Mail size={24} />
                    {content.contact.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: colors.teal }}>Instagram</h3>
                  <a href={`https://instagram.com/${content.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg transition-opacity hover:opacity-70" style={{ color: colors.teal }}>
                    <Instagram size={24} />
                    {content.contact.instagram}
                  </a>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: colors.teal }}>Localização</h3>
                  <p className="flex items-center gap-3 text-lg" style={{ color: colors.darkGray }}>
                    <MapPin size={24} style={{ color: colors.teal }} />
                    {content.contact.address}
                  </p>
                </div>
              </div>

              <div className="mt-12 rounded-lg overflow-hidden h-80" style={{ border: '2px dashed', borderColor: colors.teal }}>
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: colors.soft }}>
                  <div className="text-center">
                    <MapPin size={40} style={{ color: colors.teal, margin: '0 auto' }} className="mb-2" />
                    <p className=" font-medium"style={{ color: colors.tealDeep }}>Localização</p>
                    <p className="text-xs"style={{ color: '#8FA3AD' }}>Será inserido a localização</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const FloatingWhatsApp = () => (
    <a
      href={`https://wa.me/${content.contact.whatsapp.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 z-40"
      style={{ backgroundColor: colors.teal }}
      title="Enviar WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
    </a>
  );

  const Footer = () => (
    <footer className="bg-white border-t-2 py-12" style={{ borderColor: colors.teal }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"style={{ color: colors.tealDeep }}>
        <p className="mb-4">© 2026 Dr. Eduardo Mazão - Cirurgião Plástico. Todos os direitos reservados.</p>
        <p className="text-sm">Sua saúde é nossa prioridade.</p>
      </div>
    </footer>
  );

const renderPage = () => {
  switch (currentPage) {
    case 'about':
      return <AboutPage />;
    case 'timeline':
      return <TimelinePage />;
    case 'procedures':
      return <ProceduresPage />;
    case 'results':
      return <ResultsPage />;
    case 'contents':
      return <ContentsPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return (
        <>
          <HeroSection />
          <PilarsSection />
          <AboutHomeSection />
          <ProceduresHomeSection />
          <ResultsHomeSection />
          <FinalCTA />
        </>
      );
  }
};

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'DM Sans', 'Lato', 'Montserrat', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
        .font-serif {
          font-family: 'Playfair Display', 'Cormorant', serif;
        }
        * {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navigation />
      {renderPage()}
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default DrEduardoWebsite;
import React, { useState, useEffect, useRef } from "react";
import { Phone, Instagram, MessageCircle, MapPin } from "lucide-react";

const defaultColors = {
  offwhite: "#fdfbf5",
  darkGray: "#306078",
  gold: "#EDE3C8",
  teal: "#6A93A5",
  tealDeep: "#3A515B",
  soft: "#c7dfeb",
};

const defaultContent = {
  contact: {
    whatsapp: "+55 (11) 98978-3539",
    phone: "+55 (11) 98978-3539",
    instagram: "@dr.eduardo.mazao",
    address: "Rua do Rocio 199, Vila Olimpia, São Paulo, SP",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.3098193738065!2d-46.68617597559967!3d-23.593219199437662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce577758f05d13%3A0x835701f0798e4f00!2sEduardo%20Maz%C3%A3o%20Miranda%20-%20Cirurgi%C3%A3o%20Pl%C3%A1stico%20-%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1771418150442!5m2!1spt-BR!2sbr",
  },
};

const Contact = ({ content, colors }) => {
  const mergedColors = colors || defaultColors;
  const mergedContent = content || defaultContent;

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

  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();

  return (
    <section className="min-h-screen py-20" style={{ backgroundColor: mergedColors.offwhite }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl font-bold text-center mb-16" style={{ color: mergedColors.darkGray }}>
          Entre em Contato
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            ref={ref1}
            className="bg-white rounded-lg p-10 transition-all duration-1000"
            style={{
              opacity: isVisible1 ? 1 : 0,
              transform: isVisible1 ? "translateX(0)" : "translateX(-50px)",
            }}
          >
            <h2 className="font-serif text-2xl font-bold mb-8" style={{ color: mergedColors.teal }}>
              Envie uma Mensagem
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: mergedColors.darkGray }}>
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: mergedColors.teal }}
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: mergedColors.darkGray }}>
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: mergedColors.teal }}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: mergedColors.darkGray }}>
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: mergedColors.teal }}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: mergedColors.darkGray }}>
                  Mensagem
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: mergedColors.teal }}
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-medium text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: mergedColors.teal }}
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div
            ref={ref2}
            className="transition-all duration-1000"
            style={{
              opacity: isVisible2 ? 1 : 0,
              transform: isVisible2 ? "translateX(0)" : "translateX(50px)",
            }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: mergedColors.teal }}>
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${(mergedContent.contact?.whatsapp || "").replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg transition-opacity hover:opacity-70"
                  style={{ color: mergedColors.teal }}
                >
                  <MessageCircle size={24} />
                  {mergedContent.contact?.whatsapp || ""}
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: mergedColors.teal }}>
                  Telefone
                </h3>
                <a
                  href={`tel:${mergedContent.contact?.phone || ""}`}
                  className="flex items-center gap-3 text-lg transition-opacity hover:opacity-70"
                  style={{ color: mergedColors.teal }}
                >
                  <Phone size={24} />
                  {mergedContent.contact?.phone || ""}
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: mergedColors.teal }}>
                  Instagram
                </h3>
                <a
                  href={`https://instagram.com/${(mergedContent.contact?.instagram || "").replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg transition-opacity hover:opacity-70"
                  style={{ color: mergedColors.teal }}
                >
                  <Instagram size={24} />
                  {mergedContent.contact?.instagram || ""}
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: mergedColors.teal }}>
                  Localização
                </h3>
                <p className="flex items-center gap-3 text-lg" style={{ color: mergedColors.darkGray }}>
                  <MapPin size={24} style={{ color: mergedColors.teal }} />
                  {mergedContent.contact?.address || ""}
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-lg overflow-hidden h-80" style={{ border: "2px dashed", borderColor: mergedColors.teal }}>
              <iframe
                src={mergedContent.contact?.mapEmbedUrl || defaultContent.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
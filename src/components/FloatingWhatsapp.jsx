import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp({ content, colors }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const href = `https://wa.me/${content.contact.whatsapp.replace(/\D/g, "")}`;

  return createPortal(
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar WhatsApp"
      style={{
        position: "fixed",
        right: 20,
        bottom: `calc(20px + env(safe-area-inset-bottom))`,
        width: 64,
        height: 64,
        borderRadius: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.teal,
        boxShadow: "0 20px 40px rgba(0,0,0,.25)",
        zIndex: 2147483647, 
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
      }}
    >
      <MessageCircle size={32} color="#fff" />
    </a>,
    document.body
  );
}
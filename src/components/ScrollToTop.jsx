import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sempre que a rota mudar, leva a página ao topo.
 * Usa "instant" para evitar conflito com o scroll-behavior smooth global.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

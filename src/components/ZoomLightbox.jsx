import React, { useEffect, useRef, useState, useCallback } from "react";

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const DOUBLE_TAP_ZOOM = 2.5;
const WHEEL_STEP = 0.15;

export default function ZoomLightbox({ images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const containerRef = useRef(null);
  const imgRef = useRef(null);

  // Pinch state
  const pinchStartDist = useRef(0);
  const pinchStartScale = useRef(1);

  // Pan state
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });

  // Double-tap detection
  const lastTap = useRef(0);
  // Marca o último toque, para ignorar o clique sintético que o navegador
  // dispara depois de um toque (evita fechar o lightbox no 1º toque de um
  // duplo-toque e quebrar o zoom no mobile).
  const lastTouchEnd = useRef(0);

  const currentSrc = images[index] || "";

  const resetZoom = useCallback(() => {
    setIsTransitioning(true);
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    setTimeout(() => setIsTransitioning(false), 300);
  }, []);

  const clampTranslate = useCallback((tx, ty, s) => {
    if (s <= 1) return { x: 0, y: 0 };
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return { x: tx, y: ty };
    const rect = container.getBoundingClientRect();
    const imgW = img.naturalWidth || rect.width;
    const imgH = img.naturalHeight || rect.height;
    const displayW = Math.min(imgW, rect.width);
    const displayH = Math.min(imgH, rect.height);
    const maxX = Math.max(0, (displayW * s - rect.width) / 2);
    const maxY = Math.max(0, (displayH * s - rect.height) / 2);
    return {
      x: Math.max(-maxX, Math.min(maxX, tx)),
      y: Math.max(-maxY, Math.min(maxY, ty)),
    };
  }, []);

  const applyZoom = useCallback((newScale, originX, originY) => {
    const clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
    if (clamped <= 1) {
      resetZoom();
      return;
    }
    setScale(clamped);
    setTranslate((prev) => clampTranslate(prev.x, prev.y, clamped));
  }, [resetZoom, clampTranslate]);

  // Navigate between images
  const goTo = useCallback((dir) => {
    resetZoom();
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  }, [images.length, resetZoom]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goTo(-1);
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "+" || e.key === "=") applyZoom(scale + 0.5);
      if (e.key === "-") applyZoom(scale - 0.5);
      if (e.key === "0") resetZoom();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goTo, applyZoom, scale, resetZoom]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Mouse wheel zoom
  const onWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -WHEEL_STEP : WHEEL_STEP;
    applyZoom(scale + delta * scale);
  }, [scale, applyZoom]);

  const wheelHandler = useRef(onWheel);
  wheelHandler.current = onWheel;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e) => wheelHandler.current(e);
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  // Touch handlers
  const getDistance = (t1, t2) => {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const onTouchStart = useCallback((e) => {
    if (e.touches.length === 2) {
      // Pinch start
      isPanning.current = false;
      pinchStartDist.current = getDistance(e.touches[0], e.touches[1]);
      pinchStartScale.current = scale;
    } else if (e.touches.length === 1) {
      // Double-tap detection
      const now = Date.now();
      if (now - lastTap.current < 300) {
        e.preventDefault();
        if (scale > 1) {
          resetZoom();
        } else {
          setIsTransitioning(true);
          setScale(DOUBLE_TAP_ZOOM);
          setTimeout(() => setIsTransitioning(false), 300);
        }
        lastTap.current = 0;
        return;
      }
      lastTap.current = now;

      // Pan start (only when zoomed)
      if (scale > 1) {
        isPanning.current = true;
        panStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        translateStart.current = { ...translate };
      }
    }
  }, [scale, translate, resetZoom]);

  const onTouchMove = useCallback((e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = getDistance(e.touches[0], e.touches[1]);
      const newScale = pinchStartScale.current * (dist / pinchStartDist.current);
      const clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
      setScale(clamped);
      if (clamped <= 1) setTranslate({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && isPanning.current && scale > 1) {
      e.preventDefault();
      const dx = e.touches[0].clientX - panStart.current.x;
      const dy = e.touches[0].clientY - panStart.current.y;
      const newT = clampTranslate(
        translateStart.current.x + dx,
        translateStart.current.y + dy,
        scale
      );
      setTranslate(newT);
    }
  }, [scale, clampTranslate]);

  const onTouchEnd = useCallback(() => {
    isPanning.current = false;
    lastTouchEnd.current = Date.now();
    if (scale < 1) resetZoom();
  }, [scale, resetZoom]);

  // "Latest ref" — mantém sempre a versão mais recente dos handlers de toque,
  // para que os listeners nativos (abaixo) sejam anexados UMA única vez e nunca
  // precisem ser removidos/readicionados no meio de um gesto de pinça.
  const touchHandlers = useRef({});
  touchHandlers.current = { onTouchStart, onTouchMove, onTouchEnd };

  // Listeners de toque nativos com { passive: false } — necessário para que
  // preventDefault() funcione de fato no iOS/Android (os handlers sintéticos
  // do React são passivos por padrão e não bloqueiam o zoom do navegador).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ts = (e) => touchHandlers.current.onTouchStart(e);
    const tm = (e) => touchHandlers.current.onTouchMove(e);
    const te = (e) => touchHandlers.current.onTouchEnd(e);
    el.addEventListener("touchstart", ts, { passive: false });
    el.addEventListener("touchmove", tm, { passive: false });
    el.addEventListener("touchend", te, { passive: false });
    el.addEventListener("touchcancel", te, { passive: false });
    return () => {
      el.removeEventListener("touchstart", ts);
      el.removeEventListener("touchmove", tm);
      el.removeEventListener("touchend", te);
      el.removeEventListener("touchcancel", te);
    };
  }, []);

  // Mouse drag for desktop pan
  const onMouseDown = useCallback((e) => {
    if (scale <= 1) return;
    e.preventDefault();
    isPanning.current = true;
    panStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translate };
  }, [scale, translate]);

  const onMouseMove = useCallback((e) => {
    if (!isPanning.current || scale <= 1) return;
    const dx = e.clientX - panStart.current.x;
    const dy = e.clientY - panStart.current.y;
    const newT = clampTranslate(
      translateStart.current.x + dx,
      translateStart.current.y + dy,
      scale
    );
    setTranslate(newT);
  }, [scale, clampTranslate]);

  const onMouseUp = useCallback(() => {
    isPanning.current = false;
  }, []);

  // Double-click zoom (desktop)
  const onDoubleClick = useCallback(() => {
    if (scale > 1) {
      resetZoom();
    } else {
      setIsTransitioning(true);
      setScale(DOUBLE_TAP_ZOOM);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [scale, resetZoom]);

  const showNav = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 z-10">
        <span className="text-white/60 text-sm">
          {images.length > 1 ? `${index + 1} / ${images.length}` : ""}
        </span>
        <div className="flex items-center gap-3">
          {scale > 1 && (
            <button
              type="button"
              onClick={resetZoom}
              className="text-white/70 hover:text-white text-xs px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40 transition"
            >
              {Math.round(scale * 100)}%
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-white/80 transition p-2"
            aria-label="Fechar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Image area */}
      <div
        ref={containerRef}
        className="flex-1 flex items-center justify-center overflow-hidden select-none"
        style={{ cursor: scale > 1 ? "grab" : "default", touchAction: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onDoubleClick={onDoubleClick}
        onClick={(e) => {
          // Ignora o clique sintético que segue um toque (mobile): lá o fechar
          // é feito pelo botão X, e o toque é usado para zoom/duplo-toque.
          if (Date.now() - lastTouchEnd.current < 600) return;
          // Fecha ao clicar no fundo (desktop), quando não está com zoom.
          if (scale <= 1 && e.target === containerRef.current) onClose();
        }}
      >
        <img
          ref={imgRef}
          src={currentSrc}
          alt="Visualização ampliada"
          draggable={false}
          className="max-w-full max-h-full object-contain pointer-events-none"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            transition: isTransitioning ? "transform 0.3s ease-out" : "none",
            willChange: "transform",
          }}
        />
      </div>

      {/* Navigation arrows */}
      {showNav && (
        <>
          <button
            type="button"
            onClick={() => goTo(-1)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/15 transition text-white z-10"
            aria-label="Anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/15 transition text-white z-10"
            aria-label="Próximo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Bottom hint */}
      <div className="text-center px-4 py-2 text-white/50 text-xs sm:text-sm">
        {scale <= 1
          ? "Duplo toque ou pinça para ampliar · Scroll do mouse no desktop"
          : "Arraste para mover \u00B7 Duplo toque para voltar"}
      </div>
    </div>
  );
}

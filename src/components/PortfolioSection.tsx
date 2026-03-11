"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const portfolioItems = [
  {
    title: "Identidade Visual - Studio Bella",
    category: "Branding",
    colors: ["#22C55E", "#0A0A0A", "#1a1a1a"],
  },
  {
    title: "Cartões de Visita - Oliveira & Associados",
    category: "Cartão de Visita",
    colors: ["#0A0A0A", "#22C55E", "#2a2a2a"],
  },
  {
    title: "Panfleto Promocional - FitMax",
    category: "Panfleto",
    colors: ["#22C55E", "#141414", "#16A34A"],
  },
  {
    title: "Catálogo Corporativo - TechPlus",
    category: "Encadernação",
    colors: ["#1a1a1a", "#22C55E", "#0A0A0A"],
  },
  {
    title: "Receituário - Clínica Sorriso",
    category: "Receituário",
    colors: ["#22C55E", "#0A0A0A", "#4ADE80"],
  },
  {
    title: "Material Completo - AS Projetos",
    category: "Branding",
    colors: ["#0A0A0A", "#16A34A", "#22C55E"],
  },
  {
    title: "Banner Evento - Festival Cultural",
    category: "Impressão",
    colors: ["#22C55E", "#141414", "#0A0A0A"],
  },
  {
    title: "Folder Institucional - Construtora Apex",
    category: "Panfleto",
    colors: ["#1a1a1a", "#22C55E", "#2a2a2a"],
  },
];

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(4);
      else if (window.innerWidth >= 768) setItemsPerView(3);
      else if (window.innerWidth >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, portfolioItems.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-semibold mb-4 border border-[var(--color-brand)]/20">
            PORTFÓLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Nossos <span className="text-[var(--color-brand)]">trabalhos</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div
          className="relative animate-on-scroll"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel track */}
          <div className="overflow-hidden rounded-2xl py-4">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
                gap: "1.5rem",
              }}
            >
              {portfolioItems.map((item, i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 1.5) / itemsPerView}rem)` }}
                >
                  <div className="portfolio-item group relative border border-[var(--color-border)]">
                    {/* Placeholder art with abstract design */}
                    <div className="portfolio-placeholder aspect-[3/4] relative overflow-hidden bg-[var(--color-surface)]">
                      {/* Abstract background shapes */}
                      <div className="absolute inset-0">
                        <div
                          className="absolute top-0 left-0 w-full h-1/2"
                          style={{ backgroundColor: item.colors[0] }}
                        />
                        <div
                          className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-tl-[4rem]"
                          style={{ backgroundColor: item.colors[1] }}
                        />
                        <div
                          className="absolute top-1/3 left-1/4 w-1/2 h-1/3 rounded-2xl rotate-12"
                          style={{ backgroundColor: item.colors[2], opacity: 0.7 }}
                        />
                        {/* AG logo watermark */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <span className="text-white font-bold text-lg drop-shadow-lg">AG</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#0A0A0A]/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center p-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                        <h3 className="text-white font-bold text-center text-sm leading-snug mb-1">
                          {item.title}
                        </h3>
                        <span className="text-[var(--color-brand)] text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Bottom info bar */}
                    <div className="p-4 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
                      <p className="font-semibold text-sm truncate">{item.title}</p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/50 transition-all duration-200 shadow-lg z-10"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/50 transition-all duration-200 shadow-lg z-10"
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[var(--color-brand)]"
                    : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-brand)]/50"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

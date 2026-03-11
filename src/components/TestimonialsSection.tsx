"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Carla Mendes",
    role: "Proprietária, Studio Bella",
    text: "A Auster Graphic superou todas as expectativas! Os cartões de visita ficaram incríveis, com um acabamento impecável. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Ricardo Oliveira",
    role: "CEO, Oliveira & Associados",
    text: "Profissionalismo e qualidade definem a Auster Graphic. Os materiais gráficos que produziram para nossa empresa elevaram completamente nossa imagem no mercado.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Dentista, Clínica Sorriso",
    text: "Precisei de receituários e cartões com urgência e a equipe entregou antes do prazo, com qualidade excepcional. Atendimento nota 10!",
    rating: 5,
  },
  {
    name: "Lucas Batista",
    role: "Diretor, Academia FitMax",
    text: "Os panfletos ficaram fantásticos! Design moderno e impressão de alta qualidade. Já fizemos vários pedidos e sempre saímos satisfeitos.",
    rating: 5,
  },
  {
    name: "Amanda Silva",
    role: "Arquiteta, AS Projetos",
    text: "Encadernação wire-o perfeita para meus portfólios de projetos. O acabamento é profissional e a entrega foi super rápida.",
    rating: 5,
  },
  {
    name: "Paulo Henrique",
    role: "Gerente, Loja TechPlus",
    text: "Já testei diversas gráficas e nenhuma chegou perto da qualidade e do atendimento da Auster Graphic. Virei cliente fiel!",
    rating: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "var(--color-brand)" : "none"}
      stroke="var(--color-brand)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-semibold mb-4 border border-[var(--color-brand)]/20">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            O que nossos <span className="text-[var(--color-brand)]">clientes</span> dizem
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista.
          </p>
        </div>

        <div
          className="relative animate-on-scroll"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
                gap: "1.5rem",
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 px-1"
                  style={{ width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 1.5) / itemsPerView}rem)` }}
                >
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:border-[var(--color-brand)]/40 transition-all duration-300 group">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <StarIcon key={si} filled={si < t.rating} />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1 mb-6">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-brand)]/15 flex items-center justify-center text-[var(--color-brand)] font-bold text-sm group-hover:bg-[var(--color-brand)] group-hover:text-[#0A0A0A] transition-all duration-300">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-[var(--color-text-secondary)]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
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

          {/* Dots */}
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

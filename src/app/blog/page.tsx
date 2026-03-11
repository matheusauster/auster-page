"use client";

import { useScrollAnimation } from "@/components/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const allPosts = [
  {
    title: "5 dicas para criar um cartão de visita que impressiona",
    summary: "Descubra como escolher as melhores cores, tipografia e acabamento para seu cartão de visita profissional.",
    category: "Design",
    date: "10 Mar 2026",
  },
  {
    title: "A importância do design gráfico para pequenas empresas",
    summary: "Entenda como uma identidade visual bem construída pode impulsionar o crescimento do seu negócio.",
    category: "Negócios",
    date: "05 Mar 2026",
  },
  {
    title: "Diferenças entre encadernação espiral e wire-o",
    summary: "Conheça as vantagens de cada tipo de encadernação e saiba qual é a melhor opção para o seu projeto.",
    category: "Materiais",
    date: "28 Fev 2026",
  },
  {
    title: "Tendências de design gráfico para 2026",
    summary: "As principais tendências visuais que vão dominar o mercado gráfico neste ano.",
    category: "Tendências",
    date: "20 Fev 2026",
  },
  {
    title: "Como preparar arquivos para impressão",
    summary: "Guia completo sobre resolução, sangria, cores CMYK e formatos de arquivo ideais para impressão.",
    category: "Tutoriais",
    date: "15 Fev 2026",
  },
  {
    title: "Papel couché vs offset: qual escolher?",
    summary: "Entenda as diferenças entre os tipos de papel mais utilizados e escolha o melhor para cada projeto.",
    category: "Materiais",
    date: "10 Fev 2026",
  },
];

export default function BlogPage() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-semibold mb-4 border border-[var(--color-brand)]/20">
              BLOG
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Todos os <span className="text-[var(--color-brand)]">artigos</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
              Dicas, tendências e inspiração do mundo do design gráfico e comunicação visual.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {allPosts.map((post, i) => (
              <article
                key={i}
                className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 hover:shadow-xl hover:shadow-[var(--color-brand)]/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-[var(--color-brand)]/10 to-[var(--color-brand)]/5 flex items-center justify-center relative overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                  </svg>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-[var(--color-brand)] text-white text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[var(--color-text-secondary)] mb-2">{post.date}</p>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-[var(--color-brand)] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--color-border)] text-[var(--color-text)] font-semibold text-sm hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              Voltar ao início
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

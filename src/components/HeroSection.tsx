export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-brand)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--color-brand)]/15 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - text content */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
              <span className="text-xs font-medium text-[var(--color-brand)]">Auster Graphic</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Design gráfico profissional que{" "}
              <span className="text-[var(--color-brand)]">transforma ideias</span>{" "}
              em impacto visual
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-10 max-w-lg leading-relaxed">
              Soluções gráficas modernas para empresas que querem se destacar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pedidos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[var(--color-brand)] text-[#0A0A0A] font-semibold text-sm hover:bg-[var(--color-brand-dark)] transition-all duration-200 shadow-lg shadow-[var(--color-brand)]/25 hover:-translate-y-0.5"
              >
                Fazer Pedido
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#pedidos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-[var(--color-border)] text-[var(--color-text)] font-semibold text-sm hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          {/* Right column - visual mockups */}
          <div className="animate-on-scroll relative hidden lg:block">
            <div className="relative">
              {/* Main card mockup */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Business card mockup */}
                  <div className="bg-gradient-to-br from-[var(--color-brand)]/10 to-[var(--color-brand)]/5 rounded-xl p-6 border border-[var(--color-brand)]/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--color-brand)] flex items-center justify-center">
                        <span className="text-white font-bold">AG</span>
                      </div>
                      <div>
                        <div className="h-3 w-32 bg-[var(--color-text)]/20 rounded" />
                        <div className="h-2 w-24 bg-[var(--color-text)]/10 rounded mt-2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-[var(--color-text)]/10 rounded" />
                      <div className="h-2 w-3/4 bg-[var(--color-text)]/10 rounded" />
                    </div>
                  </div>

                  {/* Flyer mockup */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border)]">
                      <div className="w-full aspect-[3/4] bg-gradient-to-b from-[var(--color-brand)]/20 to-[var(--color-brand)]/5 rounded-lg mb-3 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <div className="h-2 w-full bg-[var(--color-text)]/10 rounded" />
                      <div className="h-2 w-2/3 bg-[var(--color-text)]/10 rounded mt-1.5" />
                    </div>
                    <div className="bg-[var(--color-bg-secondary)] rounded-xl p-4 border border-[var(--color-border)]">
                      <div className="w-full aspect-[3/4] bg-gradient-to-b from-[var(--color-brand)]/20 to-[var(--color-brand)]/5 rounded-lg mb-3 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                      <div className="h-2 w-full bg-[var(--color-text)]/10 rounded" />
                      <div className="h-2 w-2/3 bg-[var(--color-text)]/10 rounded mt-1.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[var(--color-brand)] text-[#0A0A0A] px-4 py-2 rounded-xl text-xs font-bold shadow-lg animate-bounce">
                + de 500 pedidos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

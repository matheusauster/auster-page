const WHATSAPP_BASE = "https://wa.me/44920011560?text=";

const services = [
  {
    title: "Cartão de Visita",
    description: "Cartões profissionais com acabamento premium para causar uma primeira impressão impactante.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><line x1="6" y1="8" x2="10" y2="8" /><line x1="6" y1="12" x2="18" y2="12" /><line x1="6" y1="16" x2="14" y2="16" />
      </svg>
    ),
    message: "Olá! Gostaria de fazer um pedido de Cartão de Visita na Auster Graphic.",
  },
  {
    title: "Panfletos",
    description: "Panfletos criativos e atrativos para divulgar seus produtos e serviços com eficiência.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    message: "Olá! Gostaria de fazer um pedido de Panfletos na Auster Graphic.",
  },
  {
    title: "Receituários",
    description: "Receituários personalizados para clínicas, consultórios e profissionais de saúde.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
    message: "Olá! Gostaria de fazer um pedido de Receituários na Auster Graphic.",
  },
  {
    title: "Encadernação Espiral",
    description: "Encadernação espiral para trabalhos acadêmicos, manuais e documentos corporativos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    message: "Olá! Gostaria de fazer um pedido de Encadernação Espiral na Auster Graphic.",
  },
  {
    title: "Encadernação Wire-o",
    description: "Acabamento sofisticado wire-o ideal para agendas, catálogos e apresentações executivas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    message: "Olá! Gostaria de fazer um pedido de Encadernação Wire-o na Auster Graphic.",
  },
  {
    title: "Impressões em Geral",
    description: "Impressões de alta qualidade para qualquer necessidade: documentos, fotos e artes gráficas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
    message: "Olá! Gostaria de fazer um pedido de Impressões na Auster Graphic.",
  },
];

export default function OrdersSection() {
  return (
    <section id="pedidos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-semibold mb-4 border border-[var(--color-brand)]/20">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Faça seu <span className="text-[var(--color-brand)]">pedido</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Escolha o serviço desejado e faça seu pedido diretamente pelo WhatsApp. Rápido, prático e sem complicação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-brand)]/50 hover:shadow-lg hover:shadow-[var(--color-brand)]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] mb-5 group-hover:bg-[var(--color-brand)] group-hover:text-[#0A0A0A] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-brand)] text-[#0A0A0A] text-sm font-semibold hover:bg-[var(--color-brand-dark)] transition-all duration-200 shadow-md shadow-[var(--color-brand)]/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

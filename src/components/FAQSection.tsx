"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Qual o prazo de produção?",
    answer:
      "O prazo depende do tipo de material e da quantidade solicitada. Cartões de visita, por exemplo, ficam prontos em até 3 dias úteis. Materiais mais complexos podem levar de 5 a 7 dias úteis. Entre em contato para um prazo personalizado.",
  },
  {
    question: "Vocês fazem entregas?",
    answer:
      "Sim! Realizamos entregas para a região. Consulte a disponibilidade e o valor do frete pelo nosso WhatsApp. Para pedidos acima de determinado valor, a entrega pode ser gratuita.",
  },
  {
    question: "Como faço um pedido?",
    answer:
      'É muito simples! Basta escolher o serviço desejado na seção "Pedidos" e clicar em "Pedir no WhatsApp". Você será direcionado diretamente para nosso atendimento, onde poderá enviar seus arquivos e detalhes do pedido.',
  },
  {
    question: "Qual formato enviar os arquivos?",
    answer:
      "Recomendamos enviar os arquivos em PDF, AI, PSD ou CDR com resolução mínima de 300 DPI. Se precisar de ajuda com a arte, nossa equipe pode auxiliar na criação e ajustes do seu material.",
  },
  {
    question: "Vocês criam a arte do material?",
    answer:
      "Sim! Oferecemos serviço de criação e design gráfico. Caso você não tenha a arte pronta, nossa equipe pode desenvolver um layout profissional e personalizado para o seu projeto.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="duvidas" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-semibold mb-4 border border-[var(--color-brand)]/20">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Dúvidas <span className="text-[var(--color-brand)]">frequentes</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg">
            Encontre respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </div>

        <div className="space-y-3 animate-on-scroll">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[var(--color-border)] rounded-xl overflow-hidden transition-all duration-200 hover:border-[var(--color-brand)]/30"
            >
              <button
                id={`faq-question-${i}`}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[var(--color-brand)] text-white rotate-180"
                      : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

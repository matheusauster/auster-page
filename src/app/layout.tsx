import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://austergraphic.com";
const SITE_NAME = "Auster Graphic";
const SITE_DESCRIPTION =
  "Auster Graphic - Gráfica profissional especializada em cartões de visita, panfletos, receituários, encadernações espiral e wire-o, e impressões em alta qualidade. Atendimento rápido via WhatsApp. Soluções gráficas modernas para empresas que querem se destacar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Auster Graphic | Gráfica Profissional - Cartões, Panfletos e Impressões",
    template: "%s | Auster Graphic",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "gráfica profissional",
    "design gráfico",
    "cartão de visita personalizado",
    "panfletos promocionais",
    "impressão digital",
    "impressão offset",
    "receituário médico personalizado",
    "encadernação espiral",
    "encadernação wire-o",
    "material gráfico",
    "identidade visual",
    "comunicação visual",
    "gráfica online",
    "gráfica rápida",
    "impressão de qualidade",
    "Auster Graphic",
    "Matheus Auster",
  ],
  authors: [{ name: "Matheus Auster" }],
  creator: "Matheus Auster",
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Auster Graphic | Gráfica Profissional - Cartões, Panfletos e Impressões",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Auster Graphic - Gráfica Profissional",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auster Graphic | Gráfica Profissional",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
    creator: "@austergraphic",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
 google: "SxzhT_Eiw0-6pfQEanYkiyk5oGS5nwoo9IiZjpH9saQ",
  },
  category: "business",
  other: {
    "google-site-verification": "SxzhT_Eiw0-6pfQEanYkiyk5oGS5nwoo9IiZjpH9saQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: "+55SEUNUMERO",
    email: "contato@austergraphic.com",
    image: `${SITE_URL}/og-image.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Gráficos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Cartão de Visita", description: "Cartões profissionais com acabamento premium" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Panfletos", description: "Panfletos criativos e atrativos para divulgação" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Receituários", description: "Receituários personalizados para profissionais de saúde" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Encadernação Espiral", description: "Encadernação espiral para trabalhos acadêmicos e manuais" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Encadernação Wire-o", description: "Acabamento sofisticado wire-o para catálogos e agendas" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Impressões em Geral", description: "Impressões de alta qualidade para todas as necessidades" },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual o prazo de produção?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O prazo depende do tipo de material e da quantidade solicitada. Cartões de visita ficam prontos em até 3 dias úteis. Materiais mais complexos podem levar de 5 a 7 dias úteis.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês fazem entregas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Realizamos entregas para a região. Consulte a disponibilidade e o valor do frete pelo nosso WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Como faço um pedido?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Escolha o serviço desejado na seção Pedidos e clique em Pedir no WhatsApp. Você será direcionado para nosso atendimento.",
        },
      },
      {
        "@type": "Question",
        name: "Qual formato enviar os arquivos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recomendamos enviar os arquivos em PDF, AI, PSD ou CDR com resolução mínima de 300 DPI.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês criam a arte do material?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Oferecemos serviço de criação e design gráfico. Nossa equipe pode desenvolver um layout profissional e personalizado para o seu projeto.",
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22C55E" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

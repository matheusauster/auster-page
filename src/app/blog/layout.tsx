import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://austergraphic.com";

export const metadata: Metadata = {
  title: "Blog - Dicas de Design Gráfico e Comunicação Visual",
  description:
    "Artigos, dicas e tendências sobre design gráfico, impressão, identidade visual e comunicação visual. Aprenda com os especialistas da Auster Graphic.",
  openGraph: {
    title: "Blog | Auster Graphic",
    description:
      "Artigos, dicas e tendências sobre design gráfico, impressão e comunicação visual.",
    type: "website",
    url: `${SITE_URL}/blog`,
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Auster Graphic",
    description: "Artigos, dicas e tendências sobre design gráfico, impressão, identidade visual e comunicação visual.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Auster Graphic",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      {children}
    </>
  );
}

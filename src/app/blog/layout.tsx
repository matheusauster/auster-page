import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Dicas de Design Gráfico e Comunicação Visual",
  description:
    "Artigos, dicas e tendências sobre design gráfico, impressão, identidade visual e comunicação visual. Aprenda com os especialistas da Auster Graphic.",
  openGraph: {
    title: "Blog | Auster Graphic",
    description:
      "Artigos, dicas e tendências sobre design gráfico, impressão e comunicação visual.",
    type: "website",
  },
  alternates: {
    canonical: "https://austergraphic.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

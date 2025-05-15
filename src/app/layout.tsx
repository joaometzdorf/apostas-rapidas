import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title:
    "Dicas de Apostas Diárias em Futebol e Basquete – Apostas Prontas para Você",
  description:
    "Dicas de apostas prontas em futebol e basquete todos os dias. Aposte em simples, múltiplas e criações de aposta com mais confiança e praticidade.",
  keywords: [
    "apostas esportivas",
    "dicas de apostas",
    "futebol",
    "basquete",
    "apostas múltiplas",
    "criação de aposta",
    "apostas prontas",
    "apostas futebol",
    "apostas basquete",
    "apostas hoje",
  ],
  authors: [{ name: "Apostas Rápidas", url: "https://www.seublog.com" }],
  creator: "Apostas Rápidas",
  publisher: "Apostas Rápidas",
  metadataBase: new URL("https://www.seublog.com"),
  openGraph: {
    title: "Dicas de Apostas Diárias em Futebol e Basquete",
    description:
      "Apostas prontas todo dia em futebol e basquete. Simples, múltiplas e criações de aposta. Confira e aposte com confiança.",
    url: "https://www.seublog.com",
    siteName: "Apostas Rápidas",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dicas de Apostas Diárias em Futebol e Basquete",
    description:
      "Apostas prontas e atualizadas todos os dias para futebol e basquete. Simples, múltiplas e criações de aposta.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}

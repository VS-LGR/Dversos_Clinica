import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clínica Dverso | Saúde Integrada em Sorocaba",
  description:
    "Clínica de psicologia, neurodivergência, psicoterapia musical, nutrição e terapia assistida por cão. Sorocaba e região.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col relative pr-20 sm:pr-24`}>
        {/* Faixa vertical azul em toda a extensão da página */}
        <div
          className="fixed top-0 right-0 bottom-0 w-20 sm:w-24 bg-primary z-30 pointer-events-none shadow-[ -8px_0_32px_rgba(26,43,86,0.4) ]"
          aria-hidden
        />
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:[clip:auto]"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

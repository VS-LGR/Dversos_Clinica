import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollBar from "@/components/layout/ScrollBar";
import ContactStrip from "@/components/layout/ContactStrip";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import GoogleTags from "@/components/analytics/GoogleTags";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clinicadverso.com.br"),
  title: "Clínica DVERSO | Saúde Integrada em Sorocaba",
  description:
    "Clínica de psicologia, terapias integradas, avaliação neuropsicológica, nutrição e atendimentos especializados. Sorocaba e região.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clínica DVERSO | Saúde Integrada em Sorocaba",
    description:
      "Psicologia, terapias integradas, avaliação neuropsicológica, nutrição e acolhimento familiar em Sorocaba e região.",
    url: "/",
    siteName: "Clínica DVERSO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica DVERSO | Saúde Integrada em Sorocaba",
    description:
      "Acolhimento familiar e cuidado interdisciplinar com equipe especializada.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col relative pl-0 sm:pl-20 md:pl-24`}>
        <GoogleTags />
        <LocalBusinessJsonLd />
        <ScrollBar />
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:[clip:auto]"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <ContactStrip />
        <Footer />
      </body>
    </html>
  );
}

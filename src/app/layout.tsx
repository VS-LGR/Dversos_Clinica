import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollBar from "@/components/layout/ScrollBar";
import ContactStrip from "@/components/layout/ContactStrip";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import GoogleTags from "@/components/analytics/GoogleTags";
import VlibrasWidget from "@/components/accessibility/VlibrasWidget";
import { DEFAULT_METADATA } from "@/lib/seo/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = DEFAULT_METADATA;

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
        <VlibrasWidget />
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:[clip:auto]"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <ContactStrip />
        <main id="main-content" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

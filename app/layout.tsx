import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Parasoles y Domos San Andrés | Fabricación y Mantenimiento de Carpas de Alta Calidad",
  description:
    "Fabricación, mantenimiento y diseños personalizados de carpas industriales y comerciales en Bucaramanga, Santander. Más de 15 años de experiencia con materiales de alta resistencia y durabilidad garantizada.",
  openGraph: {
    title: "Parasoles y Domos San Andrés | Fabricación y Mantenimiento de Carpas",
    description:
      "Soluciones integrales en carpas industriales y comerciales en Bucaramanga. Fabricación premium, mantenimiento y diseño personalizado.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${dancingScript.variable} bg-background-light`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

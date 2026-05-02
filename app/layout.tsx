import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "./components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://www.pinkpop.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pink Pop — Maquillaje y cosméticos premium en México",
    template: "%s | Pink Pop",
  },
  description:
    "Tienda de cosméticos premium en México. Maquillaje de marcas reconocidas seleccionado por rendimiento, acabado y confianza de compra. Envíos a todo el país.",
  applicationName: "Pink Pop",
  keywords: [
    "maquillaje premium",
    "cosméticos México",
    "tienda de belleza",
    "labiales",
    "rubores",
    "sombras de ojos",
    "base de maquillaje",
    "Charlotte Tilbury México",
    "Dior maquillaje",
    "Pink Pop",
  ],
  authors: [{ name: "Pink Pop" }],
  creator: "Pink Pop",
  publisher: "Pink Pop",
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Pink Pop",
    title: "Pink Pop — Maquillaje y cosméticos premium en México",
    description:
      "Maquillaje de marcas reconocidas seleccionado por rendimiento, acabado y confianza de compra.",
    images: [
      {
        url: "/p-logo.png",
        width: 1200,
        height: 630,
        alt: "Pink Pop — Tienda de belleza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pink Pop — Maquillaje y cosméticos premium",
    description:
      "Maquillaje premium seleccionado por rendimiento, acabado y confianza de compra.",
    images: ["/p-logo.png"],
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
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

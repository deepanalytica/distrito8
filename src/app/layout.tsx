import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Oficina Parlamentaria Digital | Cristian Contreras",
  description: "Tu oficina parlamentaria para resolver problemas del Distrito 8.",
};

import { CookieBanner } from "@/components/layout/CookieBanner";

import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

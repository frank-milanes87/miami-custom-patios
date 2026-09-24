import { LangProvider } from "@/lib/lang";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miami Custom Patios",
  description: "Custom outdoor living solutions in Miami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-full pb-[64px] xl:pb-0">
        <LangProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LangProvider>
      </body>
    </html>
  );
}
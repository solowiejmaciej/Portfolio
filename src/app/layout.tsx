import { Inter } from "next/font/google";
import "./globals.css";
import HeaderControls from "@/components/header-controls";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/language-context";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maciej Sołowiej",
  description: "Strona portfolio Macieja Sołowieja",
  keywords: "słowa kluczowe, oddzielone, przecinkami",
  openGraph: {
    title: "Maciej Sołowiej",
    description: "Strona portfolio Macieja Sołowieja",
    type: "website",
    locale: "pl_PL",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" enableSystem>
            <HeaderControls />
            <main>{children}</main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

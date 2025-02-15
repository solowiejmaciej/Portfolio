import { Inter } from "next/font/google";
import "./globals.css";
import HeaderControls from "@/components/header-controls";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maciej Sołowiej",
  description: "Strona portfolio Macieja Sołowieja",
  viewport: "width=device-width, initial-scale=1",
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

export default function RootLayout({ children }) {
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

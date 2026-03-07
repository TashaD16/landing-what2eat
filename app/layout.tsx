import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/lang-context";
import { ThemeProvider } from "@/lib/theme-context";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "What2eat — Find Recipes for Ingredients You Have",
    template: "%s | What2eat",
  },
  description:
    "What2eat matches recipes to ingredients you already have at home. Reduce food waste, save money, and eat delicious meals every night.",
  keywords: ["recipe finder", "ingredient matching", "meal planning", "reduce food waste"],
  openGraph: {
    title: "What2eat — Find Recipes for Ingredients You Have",
    description:
      "What2eat matches recipes to ingredients you already have at home.",
    type: "website",
    url: "https://what2eat.com",
    siteName: "What2eat",
  },
  twitter: {
    card: "summary_large_image",
    title: "What2eat — Find Recipes for Ingredients You Have",
    description:
      "What2eat matches recipes to ingredients you already have at home.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(_){}` }} />
      </head>
      <body className={`${inter.variable} ${nunito.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

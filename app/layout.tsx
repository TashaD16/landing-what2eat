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
    default: "what2eat — Find Recipes for Ingredients You Have",
    template: "%s | what2eat",
  },
  description:
    "what2eat matches recipes to ingredients you already have at home. Reduce food waste, save money, and eat delicious meals every night.",
  keywords: ["recipe finder", "ingredient matching", "meal planning", "reduce food waste"],
  openGraph: {
    title: "what2eat — Find Recipes for Ingredients You Have",
    description:
      "what2eat matches recipes to ingredients you already have at home.",
    type: "website",
    url: "https://what2eat.com",
    siteName: "what2eat",
    images: [
      {
        url: "https://what2eat.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "what2eat — Find Recipes for Ingredients You Have",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "what2eat — Find Recipes for Ingredients You Have",
    description:
      "what2eat matches recipes to ingredients you already have at home.",
    images: ["https://what2eat.com/og-image.jpg"],
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

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sanctuary | iMind Psychological Services — Dumaguete",
  description:
    "Licensed psychologists in Dumaguete providing professional counseling, psychotherapy, and psychological assessments since 2015. Book your session today.",
  keywords:
    "psychology, counseling, psychotherapy, mental health, Dumaguete, Negros Oriental, iMind, therapy",
  openGraph: {
    title: "Sanctuary | iMind Psychological Services",
    description:
      "Find your path to peace and emotional relief with iMind Psychological Services in Dumaguete.",
    type: "website",
    locale: "en_PH",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} bg-background`}>
        {children}
      </body>
    </html>
  );
}

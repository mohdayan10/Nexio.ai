import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexio.ai"),
  title: "Nexio — Self-Learning AI Agents for Enterprise Operations",
  description:
    "Nexio turns your SOPs into self-learning AI agents that run your operations end to end. Trusted by Fortune 500 companies and scale-ups processing 10m+ tasks.",
  keywords: [
    "AI agents",
    "AI automation agency",
    "autonomous agents",
    "business automation",
    "Nexio",
  ],
  openGraph: {
    title: "Nexio — The AI agents agency",
    description:
      "Tailored AI agents that automate your hardest workflows, end to end.",
    url: "/",
    siteName: "Nexio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexio — The AI agents agency",
    description:
      "Tailored AI agents that automate your hardest workflows, end to end.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

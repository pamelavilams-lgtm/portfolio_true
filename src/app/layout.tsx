import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";

import { siteContent } from "@/content/site-content";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Grigorii Portfolio",
  title: {
    default: "Grigorii | AI-Enabled Support Systems Operator",
    template: "%s | Grigorii",
  },
  description: siteContent.description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteContent.meta.name }],
  creator: siteContent.meta.name,
  publisher: siteContent.meta.name,
  keywords: [
    "technical support",
    "support operations",
    "workflow automation",
    "escalation management",
    "incident handling",
    "ai automation",
    "customer success",
    "product-facing operations",
    "support systems",
    "customer feedback",
    "case studies",
  ],
  openGraph: {
    title: "Grigorii | AI-Enabled Support Systems Operator",
    description: siteContent.description,
    url: absoluteUrl("/"),
    siteName: siteContent.meta.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grigorii | AI-Enabled Support Systems Operator",
    description: siteContent.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

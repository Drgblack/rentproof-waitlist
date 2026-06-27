import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/toaster-provider";

const siteUrl = "https://www.realtyclose.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "RentProof | Section 8 Evidence and PRS Database Readiness for England Landlords",
  description:
    "RentProof helps England self-managing landlords organise certificates, possession evidence, and arrears records so Section 8 claims are more defensible and PRS Database registration is straightforward. England-only. Built for portfolios of 5–50 properties.",
  keywords: [
    "Section 8 evidence England",
    "PRS Database registration landlord",
    "landlord compliance tracker England",
    "Section 8 possession notice evidence",
    "Ground 8 rent arrears evidence",
    "PRS Database readiness pack",
    "self-managing landlord compliance England",
    "Renters Rights Act 2025 landlord tool",
    "landlord certificate tracker England",
    "evidence readiness snapshot landlord",
    "possession case evidence organiser",
    "EICR gas safety certificate tracker",
    "EPC compliance landlord England",
    "PRS Database late 2026 rollout",
    "Section 8 Form 3A evidence checklist",
  ],
  alternates: {
    canonical: "https://www.realtyclose.com",
  },
  openGraph: {
    title: "RentProof | Section 8 Evidence and PRS Database Readiness",
    description:
      "Organise certificates, possession evidence, and arrears records before a Section 8 crisis or PRS Database rollout reaches your area. England-only.",
    url: "https://www.realtyclose.com",
    type: "website",
    siteName: "RentProof",
    locale: "en_GB",
    images: [
      {
        url: "https://www.realtyclose.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "RentProof for England self-managing landlords",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentProof | Section 8 Evidence and PRS Database Readiness",
    description:
      "Evidence organisation and deadline tracking for England self-managing landlords. PRS Database rollout begins late 2026.",
    images: ["https://www.realtyclose.com/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}

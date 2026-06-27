import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/toaster-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rentproof.example";

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
  title: "RentProof | Section 8 Evidence and PRS Database Readiness",
  description:
    "RentProof helps self-managing landlords in England organise certificates, possession evidence, and arrears records so Section 8 claims are more defensible and PRS Database registration is easier to prepare for.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RentProof | Section 8 Evidence and PRS Database Readiness",
    description:
      "Organise certificates, possession evidence, and arrears records before a crisis or before PRS Database rollout reaches your area.",
    type: "website",
    siteName: "RentProof",
    locale: "en_GB",
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/app-shell";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hayden Carnegie — Senior Product Designer CV",
  description:
    "Senior Product Designer with 10+ years across fintech, healthtech, and regulated financial products. UX infrastructure underpinning £2.5B+ in transactions. PSD2, KYC/AML, Open Banking specialist.",
  openGraph: {
    title: "Hayden Carnegie — Senior Product Designer CV",
    description:
      "Senior Product Designer with 10+ years across fintech, healthtech, and regulated financial products. PSD2, Open Banking, KYC/AML, regulatory UX.",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Hayden Carnegie",
      jobTitle: "Senior Product Designer",
      email: "hayden.a.carnegie@gmail.com",
      telephone: "+44 7903 700 886",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Eastbourne",
        addressRegion: "East Sussex",
        addressCountry: "GB",
      },
      sameAs: ["https://linkedin.com/in/haydencarnegie"],
      worksFor: { "@type": "Organization", name: "Leviathan UX" },
    },
    {
      "@type": "WebPage",
      name: "Hayden Carnegie — Senior Product Designer CV",
      author: { "@type": "Person", name: "Hayden Carnegie" },
      about: { "@type": "Person", name: "Hayden Carnegie" },
      dateModified: "2026-03-02",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

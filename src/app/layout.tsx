import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteShell } from "@/components/layout/site-shell";
import { site } from "@/data/site";
import { getMetadataBase, siteUrl } from "@/lib/site-url";

import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const title = `${site.name} | ${site.title}`;
const description =
  "Portfolio of Lakshith S Lokesh, showcasing projects in data science, machine learning, data analytics, and full-stack data applications.";
const metadataBase = getMetadataBase();

export const metadata: Metadata = {
  ...(metadataBase
    ? {
        metadataBase,
        alternates: {
          canonical: "/",
        },
      }
    : {}),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: "Lakshith S Lokesh Portfolio",
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title,
    description,
    siteName: "Lakshith S Lokesh Portfolio",
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

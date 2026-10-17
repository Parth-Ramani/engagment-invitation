/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Alex_Brush, Outfit } from "next/font/google";
import "./globals.css";
import { EVENT_DETAILS } from "@/lib/event";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex-brush",
  weight: ["400"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF5EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const getBaseUrl = (): URL => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    const url = process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
    return new URL(url);
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
};

export const metadata: Metadata = {
  metadataBase: getBaseUrl(),
  title: `${EVENT_DETAILS.couple.combined} — Engagement Ceremony Invitation`,
  description: `${EVENT_DETAILS.blessings.invitationQuote} ${EVENT_DETAILS.event.day}, ${EVENT_DETAILS.event.dateFormatted} at ${EVENT_DETAILS.event.time}. ${EVENT_DETAILS.venue.name}, Junagadh, Gujarat.`,
  keywords: [
    "Parth and Ankita",
    "Engagement Invitation",
    "Engagement Ceremony",
    "Madhuvan Farm Junagadh",
    "Ramani Family",
    "Gujarati Wedding Invitation",
    "Indian Engagement Ceremony",
  ],
  authors: [{ name: "Ramani Family" }],
  openGraph: {
    title: `${EVENT_DETAILS.couple.combined} — Engagement Ceremony Invitation`,
    description: `Celebrate with us on ${EVENT_DETAILS.event.day}, ${EVENT_DETAILS.event.dateFormatted} at ${EVENT_DETAILS.venue.name}, Junagadh.`,
    url: "/",
    siteName: `${EVENT_DETAILS.couple.combined} Engagement`,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${EVENT_DETAILS.couple.combined} Engagement Ceremony Invitation`,
      },
      {
        url: "/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: `${EVENT_DETAILS.couple.combined} Engagement Ceremony Invitation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_DETAILS.couple.combined} — Engagement Ceremony`,
    description: `Thursday, ${EVENT_DETAILS.event.dateFormatted} at 10:30 AM at ${EVENT_DETAILS.venue.name}, Junagadh.`,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="gu"
      className={`light-theme ${cinzel.variable} ${cormorant.variable} ${alexBrush.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Anek+Gujarati:wght@400;600;700&family=Noto+Serif+Gujarati:wght@600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Gujarati:wght@400;600;700&family=Noto+Serif+Gujarati:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-royal-darkest text-gold-100 font-sans antialiased selection:bg-gold-500 selection:text-royal-darkest overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

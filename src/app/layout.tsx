import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Alex_Brush, Outfit } from "next/font/google";
import "./globals.css";
import { EVENT_DETAILS } from "@/lib/event";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
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
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF5EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
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
    url: "https://parth-ankita-engagement.com",
    siteName: `${EVENT_DETAILS.couple.combined} Engagement`,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_DETAILS.couple.combined} — Engagement Ceremony`,
    description: `Thursday, ${EVENT_DETAILS.event.dateFormatted} at 10:30 AM at ${EVENT_DETAILS.venue.name}, Junagadh.`,
  },
  icons: {
    icon: "/favicon.ico",
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
      <body className="bg-royal-darkest text-gold-100 font-sans antialiased selection:bg-gold-500 selection:text-royal-darkest overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

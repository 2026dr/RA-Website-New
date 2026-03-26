import type { Metadata } from "next";
import { DM_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "ResaleAgent — AI-Powered Marketplace Listings",
  description:
    "Turn product photos into listings in seconds. Upload a photo, let AI generate your listing, and publish instantly to resale marketplaces.",
  openGraph: {
    title: "ResaleAgent — AI-Powered Marketplace Listings",
    description:
      "Turn product photos into listings in seconds. Upload a photo, let AI generate your listing, and publish instantly to resale marketplaces.",
    url: "https://resaleagent.ai",
    siteName: "ResaleAgent",
    images: [
      {
        url: "/visuals/End_the_manual_data_entry_grind_version_1.webp",
        width: 1200,
        height: 630,
        alt: "ResaleAgent — AI-Powered Marketplace Listings",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResaleAgent — AI-Powered Marketplace Listings",
    description:
      "Turn product photos into listings in seconds. Upload a photo, let AI generate your listing, and publish instantly to resale marketplaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${beVietnamPro.variable} font-sans antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}

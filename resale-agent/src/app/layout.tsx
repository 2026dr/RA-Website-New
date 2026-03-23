import type { Metadata } from "next";
import { DM_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}

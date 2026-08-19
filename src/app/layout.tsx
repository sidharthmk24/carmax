import type { Metadata } from "next";
import { Orbitron, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Carmax | Premium Car Detailing Services",
  description: "Experience the ultimate showroom shine. Professional car detailing, interior restoration, and ceramic coating.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <Script src="/smoothScroll/smoothScroll.js" />
      <body className="min-h-full flex flex-col bg-[#1D1D1B] text-white font-sans">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Orbitron, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import WhatsappChatWidget from "@/components/shared/WhatsappChatWidget";

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
  title: "B&C Carmax | Premium Car Detailing & Restoration Services",
  description: "Experience the ultimate showroom shine with B&C Carmax. Professional car detailing, interior restoration, ceramic coating, paint protection film (PPF), and performance upgrades.",
  openGraph: {
    title: "B&C Carmax | Premium Car Detailing & Restoration Services",
    description: "Experience the ultimate showroom shine with B&C Carmax. Professional car detailing, interior restoration, ceramic coating, paint protection film (PPF), and performance upgrades.",
    url: "https://carmaxmlr.com",
    siteName: "B&C Carmax",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "B&C Carmax - Premium Car Detailing & Restoration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B&C Carmax | Premium Car Detailing & Restoration Services",
    description: "Experience the ultimate showroom shine with B&C Carmax. Professional car detailing, interior restoration, ceramic coating, paint protection film (PPF), and performance upgrades.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <Script src="/smoothScroll/smoothScroll.js" />
      <body className="min-h-full flex flex-col bg-[#1D1D1B] text-white font-sans">
        {children}
        <WhatsappChatWidget />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { siteConfig } from "@/data/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#111111",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Bicester, Oxfordshire`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/images/logo.png" }],
    apple: "/images/logo.png",
  },
  keywords: [
    "A&D Roofing & Construction",
    "roofing Bicester",
    "construction Oxfordshire",
    "extensions Bicester",
    "roof repairs Oxford",
    "Adam and Dan roofing",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/rooftiles.jpg", alt: siteConfig.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${jakarta.variable} ${barlow.variable} antialiased`}>
        <Header />
        <main className="pb-[calc(3.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}

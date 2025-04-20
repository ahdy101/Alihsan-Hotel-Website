import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Tangerine } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600'],
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
});

const tangerine = Tangerine({
  weight: ['400', '700'],
  variable: "--font-tangerine",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Alihsan Metro Hotel | Luxury Redefined",
  description: "Experience unparalleled luxury at Alihsan Metro Hotel - where elegance meets modern comfort",
  keywords: ["luxury hotel", "five-star accommodation", "premium suites", "luxury travel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${tangerine.variable} antialiased bg-white text-gray-900`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 font-montserrat">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Montserrat, Noto_Sans, Oswald } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Faidhaa Innovation Hub",
  description: "Bridging Technology, Innovation, and Inclusive Economic Empowerment in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${notoSans.variable} ${oswald.variable} font-sans bg-fih-deep-black text-fih-inclusive-white flex flex-col min-h-screen selection:bg-fih-hub-blue selection:text-white`}>
        <Navbar />
        <main className="flex-grow flex flex-col relative w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingActions from "@/components/FloatingActions";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mujtaba9598-hasan.github.io/Movers1"),
  title: "Best Movers and Packers in Dubai | UAE",
  description: "Looking for reliable movers and packers in Dubai? With over 20 years of UAE experience, we offer premium household shifting, office relocation, and professional handymen services by Abdul Majeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoCondensed.variable} antialiased flex flex-col min-h-screen overflow-x-hidden w-full`}>
        <Preloader />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}

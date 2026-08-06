import type { Metadata } from "next";
import {
  Manrope,
  Cabin,
  Inter,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Aetherix",
  description: "Premium Web Development & Hosting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cabin.variable} ${inter.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
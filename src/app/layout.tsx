import "./globals.css";

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";

const lufga = localFont({
  src: [
    {
      path: "./fonts/LufgaRegular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/LufgaMedium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/LufgaSemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/LufgaBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-lufga",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Lucas Gomes",
  description: "Meu website profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lufga.variable} ${urbanist.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

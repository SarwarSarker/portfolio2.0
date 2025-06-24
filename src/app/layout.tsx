import type { Metadata } from "next";
import { Pacifico, Ovo } from "next/font/google";
import "./globals.css";

export const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

export const ovo = Ovo({
  subsets: ["latin"],
  variable: "--font-ovo",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio | Sarwar Sarker",
  description: "Portfolio | Sarwar Sarker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${ovo.variable}`}>
        {children}
      </body>
    </html>
  );
}

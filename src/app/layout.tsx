import type { Metadata } from "next";
import { Pacifico, Ovo } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

const ovo = Ovo({
  subsets: ["latin"],
  variable: "--font-ovo",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sarwar Sarker | Full Stack Developer | React | Next.js | Node.js",
  description: "Sarwar Sarker - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable web applications and exceptional user experiences.",
  keywords: ["Sarwar Sarker", "Full Stack Developer", "React Developer", "Next.js", "Node.js", "Web Developer", "Frontend Developer", "Backend Developer", "TypeScript", "JavaScript", "Portfolio"],
  authors: [{ name: "Sarwar Sarker" }],
  creator: "Sarwar Sarker",
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

import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Adham Osman — Software Engineer",
  description:
    "Adham Osman — Software Engineer crafting fast, modern web experiences. Projects, links, and ways to get in touch.",
  metadataBase: new URL("https://adham.dev"),
  openGraph: {
    title: "Adham Osman — Software Engineer",
    description:
      "Software Engineer crafting fast, modern web experiences. Explore projects and connect.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#05040c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}

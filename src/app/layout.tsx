import type { Metadata } from "next";

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { playfair, poppins } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "ThriveWithMarina — Yoga Studio",
  description:
    "Discover balance and inner harmony at ThriveWithMarina yoga studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-pudra-100 font-sans text-pudra-500"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { playfair, poppins } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Thrive with Marina | Breathwork & Holistic Coaching — Dubai",
  description:
    "Transformational breathwork and holistic coaching for visionary women in Dubai. Regulate your nervous system and lead from a thriving body. Book a free Clarity Call.",
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

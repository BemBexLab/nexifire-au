import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FooterCTA from "@/components/Footer";
import { siteUrl } from "@/lib/metadata";
import SmoothScroll from "@/components/SmoothScroll";

const mulish = localFont({
  src: "../public/fonts/Mulish,Plus_Jakarta_Sans/Mulish/Mulish-VariableFont_wght.ttf",
  variable: "--font-mulish",
  display: "swap",
});

const jakartaSans = localFont({
  src: "../public/fonts/Mulish,Plus_Jakarta_Sans/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-jakarta",
  display: "swap",
});

const nunito = localFont({
  src: "../public/fonts/Nunito/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  display: "swap",
  preload: false,
});

// All routes rendered through this layout must be generated at build time.
// A production build will fail if a page accidentally introduces request-time
// data, preventing an unnoticed fallback to server-side rendering.
export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "NexiFire: Create, Build, Grow",
  description:
    "NexiFire is a global growth ecosystem connecting specialized expertise across publishing, technology, content, marketing, and digital strategy.",
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
      className={`${mulish.variable} ${jakartaSans.variable} ${nunito.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <div className="relative z-[100]">
          <NavBar />
        </div>
        <SmoothScroll>
          {children}
          <FooterCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}

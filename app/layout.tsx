import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanguard Securitas & Manpower Services | Premier Integrated Facility & Security Solutions",
  description: "Next-Generation Manned Guarding, Mechanized Housekeeping & Enterprise Support Staffing Solutions engineered for zero-compromise operational continuity in India. 24/7 Command Oversight & 100% Statutory Compliance.",
  keywords: "Vanguard Securitas, Security Guards, Housekeeping Services, Support Staff, Facility Management, PSARA Security Agency, Mechanized Cleaning, Corporate Staffing",
  icons: {
    icon: "/vanguard-logo.png",
    shortcut: "/vanguard-logo.png",
    apple: "/vanguard-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className="bg-slate-50 text-slate-900 min-h-full flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-900"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

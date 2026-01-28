import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = localFont({
  src: "./fonts/inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#005BAB",
};

export const metadata: Metadata = {
  title: "Campus Guide | KITS - Navigate Your Campus with Ease",
  description:
    "The official campus guide for KKR & KSR Institute of Technology and Sciences. Find classrooms, faculty offices, labs, facilities, and navigate the entire campus effortlessly.",
  keywords: [
    "KITS",
    "KKR",
    "KSR",
    "Guntur",
    "campus guide",
    "campus map",
    "college navigation",
    "faculty directory",
    "classroom finder",
  ],
  authors: [{ name: "KITS Guntur" }],
  creator: "KITS Guntur",
  publisher: "KKR & KSR Institute of Technology and Sciences",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://campusguide.kitsguntur.ac.in",
    siteName: "KITS Campus Guide",
    title: "Campus Guide | KITS - Navigate Your Campus with Ease",
    description:
      "Find classrooms, faculty offices, labs, and facilities. Your complete digital guide to KITS campus.",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KITS Campus Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Guide | KITS",
    description:
      "Navigate KITS campus with ease. Find classrooms, faculty, and facilities instantly.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

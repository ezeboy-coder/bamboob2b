import "@/styles/globals.css";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { Inter as FontSans } from "next/font/google";
import { type Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};
export const metadata: Metadata = {
  title: {
    default: "BamBooB2B",
    template: "%s | BamBooB2B"
  },
  description: "Modern B2B platform for enterprise solutions",
  applicationName: "BamBooB2B",
  keywords: ["b2b", "enterprise", "solutions", "saas", "business platform"],
  authors: [{
    name: "BamBooB2B Team"
  }],
  creator: "BamBooB2B Team",
  publisher: "BamBooB2B Team",
  icons: {
    icon: [{
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    }, {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    }, {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon"
    }],
    apple: [{
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BamBooB2B"
  },
  formatDetection: {
    telephone: false
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className={`${GeistSans.variable} ${fontSans.variable}`} suppressHydrationWarning data-unique-id="c4aced46-987c-4400-a70b-c8d51a7a860c" data-loc="70:4-70:102" data-file-name="app/layout.tsx">
      <body className="min-h-screen bg-background font-sans antialiased" data-unique-id="484a97b5-b759-4cde-bf47-287d5f14ed6c" data-loc="71:6-71:73" data-file-name="app/layout.tsx">
        <div className="relative flex min-h-screen flex-col" data-unique-id="3d9007ce-f347-4d4c-b972-8efb01539152" data-loc="72:8-72:61" data-file-name="app/layout.tsx">
          <Navbar />
          <main className="flex-1" data-unique-id="9db6c019-3b8a-4dc3-902b-51216d149d42" data-loc="74:10-74:35" data-file-name="app/layout.tsx">{children}</main>
          <Footer />
        </div>
      </body>
    </html>;
}
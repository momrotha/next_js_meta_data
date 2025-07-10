import type { Metadata } from "next";
import "./globals.css";
import localfont from 'next/font/local' 
// import ButtonComponent from "@/components/ButtonComponent";
// import { NavbarComponent } from "@/components/(landing)/nav/NavbarComponent";
import { FooterComponent } from "@/components/(landing)/nav/FooterComponent";
import React from "react";

import { NavbarComponent } from "@/components/(landing)/nav/NavbarComponent";


export const metadata: Metadata = {
  title: {
    default: "Car Selling | Home Page",
    template: "%s | Car Selling",
  },
  description:
    "A modern marketplace to buy and sell luxury cars in Cambodia.",
  keywords: [
    "car",
    "selling",
    "luxury",
    "marketplace",
    "vehicles",
    "Cambodia",
  ],
  applicationName: "Next Fullstack Gen1",
  generator: "Next.js 15",
  authors: [
    { name: "Mom Rotha", url: "https://github.com/momrotha/" },
  ],
  creator: "Next Fullstack Team",
  publisher: "Cambo Cloth Co., Ltd.",
  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "https://next-js-meta-data.vercel.app/",
    languages: {
      "en-US": "/",
      "km-KH": "/km",
    },
  },
  viewport: { width: "device-width", initialScale: 1 },
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Next Fullstack Gen1",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { email: false, address: false, telephone: false },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Home page of Car Selling Platform",
    description:
      "Experience a trusted platform for buying and selling luxury vehicles in Cambodia.",
    url: "https://next-fullstack-gen1.vercel.app",
    siteName: "Next Fullstack Gen1",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://i.pinimg.com/736x/26/0b/bc/260bbc98f8ba433aeeb00425f1afd15d.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury car in showroom",
      },
    ],
  },
};



// kantumruy_font 
const kantumruy_font = localfont({
  src: '../../public/fonts/KantumruyPro-SemiBold.ttf',
  variable: '--font-kantumruy',
  display: 'swap',
  preload: true,
  fallback: ['sans']
})

// lexend_font
const lexend_font = localfont({
  src: '../../public/fonts/Lexend-Regular.ttf',
  variable: '--font-lexend',
  display: 'swap'
})


export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kantumruy_font.variable} ${lexend_font.variable}`}>
      <body
      >
        <NavbarComponent/>
        
        {children}
        {modal}
        {/* <h1 lang="km">សួស្តី</h1> */}
        <FooterComponent/>
      </body>
    </html>
  );
}

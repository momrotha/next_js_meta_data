
import React from 'react'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: {
    default: "Car Selling | About Page",
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
    title: "About page of Car Selling Platform",
    description:
      "Experience a trusted platform for buying and selling luxury vehicles in Cambodia.",
    url: "https://next-fullstack-gen1.vercel.app",
    siteName: "Next Fullstack Gen1",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://i.pinimg.com/1200x/22/4f/65/224f65718a341f08ef3a3c04551cb78b.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury car in showroom",
      },
    ],
  },
};
export default function page() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>About Page</h1>
      <p>This is about page</p>
    </div>
  )
}

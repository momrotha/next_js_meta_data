
import DisplayProductComponent from '@/components/products/DisplayProductComponent'
import FetchCar from '@/lib/api'
import { CarData } from '@/lib/car-type'
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
    canonical: "https://next-fullstack-gen1.vercel.app",
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
        url: "https://i.pinimg.com/736x/dc/a9/55/dca9550be7d2b948777470b6f7673b57.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury car in showroom",
      },
    ],
  },
};
const ProductPage = async () => {
  const  data:CarData[] = await FetchCar(0,5)
  console.log(data)
  return (
    <div>
      {/* <SWRComponent/> */}
      <DisplayProductComponent tagline={'Latest Updates'} heading={'New Comming'} description={'Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.'} buttonText={'View all cars'} buttonUrl={''} posts={data}/>
    </div>
  )
}

export default ProductPage

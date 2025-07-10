
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Selling | About Page",
  description: "Explore the Toyota Alphard 2024 with premium features and comfort. Now available in Phnom Penh, Cambodia.",
  keywords: ["Toyota", "Alphard", "luxury car", "2024", "car sale", "Phnom Penh", "Cambodia"],
  applicationName: "Next Fullstack Gen1",
  authors: [{ name: "Mom Rotha" }],
  creator: "Next Fullstack Team",
  publisher: "Cambo Car Market",

  openGraph: {
    title: "Car Selling Platform",
    description:
      "Experience a trusted platform for buying and selling luxury vehicles in Cambodia.",
    url: "https://next-fullstack-gen1.vercel.app/about",
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

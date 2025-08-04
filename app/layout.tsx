import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://hackathon-tracker.vercel.app"),
  title: "HackTracker - Futuristic Hackathon Tracker",
  description: "Discover, track, and participate in the most innovative hackathons worldwide. Your central hub for all hackathon events.",
  keywords: ["hackathon", "tracker", "events", "calendar", "developer", "tech", "innovation"],
  openGraph: {
    title: "HackTracker - Futuristic Hackathon Tracker",
    description: "Discover, track, and participate in the most innovative hackathons worldwide.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "HackTracker Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackTracker - Futuristic Hackathon Tracker",
    description: "Discover, track, and participate in the most innovative hackathons worldwide.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

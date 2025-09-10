import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "VidCrafter AI - Create Viral AI Videos in Minutes",
  description:
    "Transform any topic into engaging meme-style videos with AI voice cloning, viral templates, and automated script generation. No editing skills required.",
  generator: "v0.app",
  keywords: "AI video generator, viral videos, voice cloning, meme videos, content creation",
  authors: [{ name: "VidCrafter AI" }],
  openGraph: {
    title: "VidCrafter AI - Create Viral AI Videos in Minutes",
    description:
      "Transform any topic into engaging meme-style videos with AI voice cloning, viral templates, and automated script generation.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

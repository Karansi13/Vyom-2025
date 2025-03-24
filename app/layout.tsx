import type React from "react"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SoundProvider } from "@/components/sound-provider"
import './globals.css'
import SmoothScrollProvider from "@/components/SmoothScrollProvider"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vyom 2025 - The Upside Down Awaits | Annual Fest",
  description:
  "Enter the world of Vyom 2025, an annual fest inspired by Stranger Things! Experience mind-bending events, thrilling competitions, and a journey to the Upside Down. Join us now!",
keywords: [
  "Vyom 2025",
  "annual fest",
  "Stranger Things theme",
  "college fest",
  "events",
  "competitions",
  "Upside Down",
  "sci-fi festival",
],
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts Embedding */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Special+Elite&family=Creepster&family=Nosifer&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Creepster&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Creepster&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SoundProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
            <SmoothScrollProvider>
              <div className="flex-1"> {children}</div>
            </SmoothScrollProvider>
              <Footer />
            </div>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}




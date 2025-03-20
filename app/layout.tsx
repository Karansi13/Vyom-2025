import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SoundProvider } from "@/components/sound-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VYOM 2025 | College Annual Festival",
  description:
    "Join us for the most adventurous college fest of the year with a Jumanji theme. Explore events, merchandise, and more!",
  keywords: "college fest, jumanji, events, cultural fest, technical events, sports events"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SoundProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
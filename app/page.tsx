import { Countdown } from "@/components/countdown"
import { FestHero } from "@/components/fest-hero"
import { EventsPreview } from "@/components/events-preview"
import { SponsorsPreview } from "@/components/sponsors-preview"
import { MerchPreview } from "@/components/merch-preview"
import { BrochurePreview } from "@/components/brochure-preview"
import { AboutVyom } from "@/components/about-vyom"
import { AboutRungta } from "@/components/about-rungta"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 to-black">
      <FestHero />

      <section className="container mx-auto py-16 px-4">
        <div className="bg-gradient-to-r from-amber-900/40 to-green-900/40 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-amber-700/50 shadow-xl transform hover:scale-[1.02] transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-300 mb-8 font-jumanji text-center">
            ADVENTURE AWAITS
          </h2>
          <Countdown targetDate="2025-04-07T00:00:00" />
          <div className="flex justify-center mt-10">
            <Link href="/events">
              <Button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all hover:scale-105 hover:shadow-amber-600/20 hover:shadow-xl">
                EXPLORE EVENTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AboutVyom />
      <EventsPreview />
      <AboutRungta />
      <BrochurePreview />
      {/* <MerchPreview /> */}
      <SponsorsPreview />
      <FaqSection />
    </main>
  )
}


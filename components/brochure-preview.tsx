"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function BrochurePreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !imageRef.current || !contentRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    })

    tl.fromTo(imageRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }).fromTo(
      contentRef.current.querySelectorAll("h2, p, .button-container"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 },
      "-=0.4",
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative h-[500px] w-full">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="VYOM Brochure"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-4 rounded-lg shadow-lg transform rotate-6">
              <span className="font-jumanji text-xl">FEST GUIDE</span>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 font-jumanji">DOWNLOAD THE BROCHURE</h2>
            <p className="text-gray-300">
              Get all the details about VYOM 2025 in our comprehensive brochure. Find information about events,
              schedules, venues, and more to plan your adventure.
            </p>
            <p className="text-gray-300">The brochure includes:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Complete event schedule</li>
              <li>Venue maps and locations</li>
              <li>Prize details and registration information</li>
              <li>Sponsor highlights and special attractions</li>
              <li>Important contacts and emergency information</li>
            </ul>
            <div className="button-container pt-4">
              <Link href="/brochure">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


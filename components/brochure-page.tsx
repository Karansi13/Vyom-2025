"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, FileText, Calendar, MapPin, Users } from "lucide-react"
import gsap from "gsap"
import Link from "next/link"

export function BrochurePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pageRef.current || !heroRef.current || !contentRef.current) return

    const tl = gsap.timeline()

    // Animate hero
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    // Animate content
    tl.fromTo(
      contentRef.current.querySelectorAll(".animate-item"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, delay: 0.5 },
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-green-950 to-black">
      <div
        ref={heroRef}
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-400 font-jumanji mb-4">OFFICIAL BROCHURE</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Everything you need to know about VYOM 2025
          </p>
        </div>
      </div>

      <div ref={contentRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-item">
            <div className="relative h-[600px] w-full">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="VYOM Brochure Cover"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-8 animate-item">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 font-jumanji">VYOM 2025</h2>
            <p className="text-gray-200 text-lg">
              Our comprehensive brochure contains all the information you need to plan your VYOM experience. Download it
              to get access to:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Calendar className="h-6 w-6 mr-3 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Complete Event Schedule</h3>
                  <p className="text-gray-300">Day-by-day breakdown of all events, workshops, and performances</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Venue Maps & Locations</h3>
                  <p className="text-gray-300">Detailed maps of all event venues with navigation guidance</p>
                </div>
              </li>
              <li className="flex items-start">
                <FileText className="h-6 w-6 mr-3 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Event Rules & Guidelines</h3>
                  <p className="text-gray-300">Participation requirements, judging criteria, and prizes</p>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 mr-3 text-amber-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Registration Information</h3>
                  <p className="text-gray-300">How to register, deadlines, and team formation guidelines</p>
                </div>
              </li>
            </ul>

            <a href="/Brochure.pdf" download="Brochure.pdf" className="no-underline">
              <Button className="bg-amber-600 hover:bg-amber-500 text-white rounded-full px-8 py-6 text-lg font-bold mt-6 flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure (PDF)
              </Button>
            </a>
          </div>
        </div>

        <div className="bg-black/60 border border-amber-700/30 rounded-xl p-8 animate-item">
          <h2 className="text-3xl font-bold text-amber-400 font-jumanji mb-6 text-center">PREVIEW CONTENTS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-green-950/50 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={`Brochure page ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">Page {index + 1}</h3>
                  <p className="text-gray-300 text-sm">
                    {index === 0 && "Cover Page"}
                    {index === 1 && "Event Schedule"}
                    {index === 2 && "Technical Events"}
                    {index === 3 && "Cultural Events"}
                    {index === 4 && "Sports Events"}
                    {index === 5 && "Registration Details"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


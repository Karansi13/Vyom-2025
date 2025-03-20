"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ExternalLink } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface SponsorCategory {
  title: string
  description: string
  sponsors: Sponsor[]
}

interface Sponsor {
  name: string
  logo: string
  description: string
  website?: string
}

export function SponsorsPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!pageRef.current || !heroRef.current || !categoriesRef.current) return

    const tl = gsap.timeline()

    // Animate hero
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    // Animate categories
    const categories = categoriesRef.current.querySelectorAll(".sponsor-category")
    categories.forEach((category, index) => {
      gsap.fromTo(
        category,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: category,
            start: "top 80%",
          },
        },
      )

      // Animate sponsors within each category
      const sponsors = category.querySelectorAll(".sponsor-item")
      gsap.fromTo(
        sponsors,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: category,
            start: "top 80%",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const sponsorCategories: SponsorCategory[] = [
    {
      title: "Title Sponsors",
      description: "Our main partners who make VYOM'25 possible",
      sponsors: [
        {
          name: "TechGiant Inc.",
          logo: "/placeholder-logo.svg",
          description: "Leading technology company specializing in innovative solutions",
          website: "https://example.com",
        },
        {
          name: "Global Innovations",
          logo: "/placeholder-logo.svg",
          description: "Pioneering research and development in multiple tech domains",
          website: "https://example.com",
        },
      ],
    },
    {
      title: "Gold Sponsors",
      description: "Major contributors to our festival's success",
      sponsors: [
        {
          name: "Future Systems",
          logo: "/placeholder-logo.svg",
          description: "Next-generation computing and AI solutions",
          website: "https://example.com",
        },
        {
          name: "Digital Dynamics",
          logo: "/placeholder-logo.svg",
          description: "Digital transformation and software development",
          website: "https://example.com",
        },
        {
          name: "Tech Ventures",
          logo: "/placeholder-logo.svg",
          description: "Venture capital firm focusing on emerging technologies",
          website: "https://example.com",
        },
      ],
    },
    {
      title: "Silver Sponsors",
      description: "Valuable partners supporting our events and activities",
      sponsors: [
        {
          name: "CodeCraft",
          logo: "/placeholder-logo.svg",
          description: "Software development and coding education",
          website: "https://example.com",
        },
        {
          name: "Innovate Labs",
          logo: "/placeholder-logo.svg",
          description: "Research and innovation in technology",
          website: "https://example.com",
        },
        {
          name: "DataSphere",
          logo: "/placeholder-logo.svg",
          description: "Big data analytics and visualization",
          website: "https://example.com",
        },
        {
          name: "CloudPeak",
          logo: "/placeholder-logo.svg",
          description: "Cloud infrastructure and services",
          website: "https://example.com",
        },
      ],
    },
  ]

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
          <h1 className="text-5xl md:text-7xl font-bold text-amber-400 font-jumanji mb-4">OUR SPONSORS</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            VYOM'25 is made possible by the generous support of our sponsors
          </p>
        </div>
      </div>

      <div ref={categoriesRef} className="container mx-auto px-4 py-16">
        {sponsorCategories.map((category, index) => (
          <div key={index} className="sponsor-category mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-400 font-jumanji mb-4">{category.title}</h2>
              <p className="text-gray-200 max-w-2xl mx-auto">{category.description}</p>
            </div>

            <div
              className={`grid grid-cols-1 ${category.title === "Title Sponsors" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"} gap-8`}
            >
              {category.sponsors.map((sponsor, sponsorIndex) => (
                <Card
                  key={sponsorIndex}
                  className="sponsor-item bg-black/60 border-amber-700/30 hover:border-amber-500 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 overflow-hidden"
                >
                  <div className="relative h-40 bg-white/5 flex items-center justify-center p-6">
                    <Image
                      src={sponsor.logo || "/placeholder-logo.svg"}
                      alt={sponsor.name}
                      width={160}
                      height={80}
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">{sponsor.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{sponsor.description}</p>

                    {sponsor.website && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-black/60 border border-amber-700/30 rounded-xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-amber-400 font-jumanji mb-4">BECOME A SPONSOR</h2>
          <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
            Interested in sponsoring VYOM 2025? We offer various partnership opportunities that can help
            your brand connect with tech enthusiasts, students, and professionals.
          </p>
          <Button className="bg-amber-600 hover:bg-amber-500 text-white rounded-full px-8 py-4 text-lg font-bold">
            <Mail className="mr-2 h-5 w-5" />
            Contact for Sponsorship
          </Button>
        </div>
      </div>
    </div>
  )
}


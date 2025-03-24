"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function MerchPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return

    // Animate title
    gsap.fromTo(
      titleRef.current.querySelectorAll("h2, p"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    )

    // Animate merchandise cards
    gsap.fromTo(
      cardsRef.current.querySelectorAll(".merch-card"),
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const merchItems = [
    {
      name: "Jumanji T-Shirt",
      image: "/placeholder.svg?height=300&width=300",
      price: "$24.99",
    },
    {
      name: "Adventure Backpack",
      image: "/placeholder.svg?height=300&width=300",
      price: "$39.99",
    },
    {
      name: "Festival Hoodie",
      image: "/placeholder.svg?height=300&width=300",
      price: "$49.99",
    },
    {
      name: "Collector's Mug",
      image: "/placeholder.svg?height=300&width=300",
      price: "$14.99",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-green-950">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-400 font-stranger mb-4">OFFICIAL MERCHANDISE</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take home a piece of the adventure with our exclusive VYOM merchandise. Limited edition items
            available only during the festival.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchItems.map((item, index) => (
            <Card
              key={index}
              className="merch-card bg-green-900/50 border-red-700/30 hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
            >
              <div className="relative h-64 bg-green-800/50">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain p-4" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-300 mb-2">{item.name}</h3>
                <p className="text-white font-bold">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/merch">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <ShoppingBag className="mr-2 h-4 w-4" />
              View All Merchandise
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


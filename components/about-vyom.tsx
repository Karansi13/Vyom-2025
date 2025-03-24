"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

export function AboutVyom() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !textRef.current || !imageRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    })

    tl.fromTo(
      textRef.current.querySelectorAll("h2, p"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
    )

    tl.fromTo(imageRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.5")

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <h2 className="text-4xl tracking-widest md:text-5xl font-bold text-red-400 font-horror stranger-flicker">What is Vyom?</h2>
            <p className="text-gray-200 text-lg leading-relaxed font-vintage">
            VYOM'25 is the annual fest organized by Rungta Educational Foundation. It is an exhilarating adventure designed to ignite creativity and passion among students. The fest welcomes students from across Rungta Institutions to partake in a grand celebration of technology, sports, and cultural activities.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed font-vintage">
              The three-day event encompasses activities such as Hackathons, Cultural programs, Sports events and
              various other competitions to enrich the overall learning experience. VYOM offers its diverse attendees
              the option to choose these events based on their own individual interests and learning styles.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed font-vintage">
              VYOM is one of its kind as it promises to leave a lasting impact on the individual and open new pathways
              for students to propel their careers. Come lets solve, create and thrive together!
            </p>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl shadow-red-600/20 transform rotate-2">
              <Image src="/4.png?height=400&width=600" alt="VYOM Tech Fest" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 rounded-lg shadow-lg transform -rotate-6">
              <span className="font-stranger text-xl">VYOM 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


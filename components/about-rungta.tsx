"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

export function AboutRungta() {
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

    tl.fromTo(imageRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 })

    tl.fromTo(
      textRef.current.querySelectorAll("h2, p"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
      "-=0.5",
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl shadow-red-600/20 transform -rotate-2">
              <Image
                src="/5.jpeg?height=400&width=600"
                alt="Rungta Educational Foundation"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg transform rotate-6">
              <span className="font-stranger text-xl">EXCELLENCE</span>
            </div>
          </div>

          <div ref={textRef} className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-bold text-red-400 font-horror stranger-flicker">About Rungta</h2>
            <p className="text-gray-200 text-lg leading-relaxed font-vintage">
              Santosh Rungta Group of Institutions-Bhilai, is an Epitome of Success, A temple of knowledge that
              inculcates excellence in its students, through a meticulously designed process, wherein its ensured that
              all students graduate with futuristic skills, stay ahead of times and are way ahead in terms of their
              technical and professional competency.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed font-vintage">
              With state-of-the-art facilities and a commitment to academic excellence, Rungta Educational Foundation
              has established itself as a premier institution for higher education in the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


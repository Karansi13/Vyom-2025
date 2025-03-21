"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FestHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const rungtaRef = useRef<HTMLHeadingElement>(null)
  const presentsRef = useRef<HTMLParagraphElement>(null)
  const vyomRef = useRef<HTMLHeadingElement>(null)
  const jumanjiRef = useRef<HTMLHeadingElement>(null)
  const dateRef = useRef<HTMLParagraphElement>(null)
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsVideoLoaded(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)

    video.load()

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  // Animations
  useEffect(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline({ defaults: { ease: "power3.out", opacity: 0 } })

    // Animate lines one by one with staggered delays
    tl.fromTo(rungtaRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.8 })
      .fromTo(presentsRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
      .fromTo(vyomRef.current, { y: 50 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4")
      .fromTo(jumanjiRef.current, { y: 50 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(dateRef.current, { y: 30 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
      .fromTo(buttonContainerRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden select-none"
    >
      <div className="absolute inset-0">
        {!isVideoLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            }}
          />
        )}

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover opacity-[0.6] ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          preload="auto"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 ref={rungtaRef} className="text-white text-xl md:text-4xl font-bold tracking-wider mb-4 opacity-0">
          RUNGTA EDUCATIONAL FOUNDATION
        </h1>
        <p ref={presentsRef} className="text-gray-300 text-sm md:text-base italic opacity-0">
          PRESENTS
        </p>
        <h1
          ref={vyomRef}
          className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-white font-jumanji mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] opacity-0"
        >
          VYOM
        </h1>
        <h2 ref={jumanjiRef} className="text-3xl md:text-5xl text-amber-400 font-bold mb-8 tracking-widest opacity-0">
          THE JUMANJI EXPERIENCE
        </h2>
        <p ref={dateRef} className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto opacity-0">
          Enter a world of adventure at our annual tech fest.
          <br />
          <span className="text-amber-300 font-semibold">April 7-9, 2025</span>
        </p>
        <div ref={buttonContainerRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <Link href="/events">
            <Button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all hover:scale-105">
              REGISTER NOW
            </Button>
          </Link>
          <Link href="/events">
            <Button
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400/10 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all hover:scale-105"
            >
              EXPLORE EVENTS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
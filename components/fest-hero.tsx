// "use client"

// import { useEffect, useRef, useState } from "react"
// import gsap from "gsap"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export function FestHero() {
//   const heroRef = useRef<HTMLDivElement>(null)
//   const rungtaRef = useRef<HTMLHeadingElement>(null)
//   const presentsRef = useRef<HTMLParagraphElement>(null)
//   const vyomRef = useRef<HTMLHeadingElement>(null)
//   const jumanjiRef = useRef<HTMLHeadingElement>(null)
//   const dateRef = useRef<HTMLParagraphElement>(null)
//   const buttonContainerRef = useRef<HTMLDivElement>(null)
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false)

//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     const handleLoadedData = () => {
//       setIsVideoLoaded(true)
//     }

//     video.addEventListener('loadeddata', handleLoadedData)

//     video.load()

//     return () => {
//       video.removeEventListener('loadeddata', handleLoadedData)
//     }
//   }, [])

//   // Animations
//   useEffect(() => {
//     if (!heroRef.current) return

//     const tl = gsap.timeline({ defaults: { ease: "power3.out", opacity: 0 } })

//     // Animate lines one by one with staggered delays
//     tl.fromTo(rungtaRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.8 })
//       .fromTo(presentsRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
//       .fromTo(vyomRef.current, { y: 50 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4")
//       .fromTo(jumanjiRef.current, { y: 50 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
//       .fromTo(dateRef.current, { y: 30 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
//       .fromTo(buttonContainerRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")

//     return () => {
//       tl.kill()
//     }
//   }, [])

//   return (
//     <div
//       ref={heroRef}
//       className="relative h-screen flex items-center justify-center overflow-hidden select-none -top-[5.5rem]"
//     >
//       <div className="absolute inset-0">
//         {!isVideoLoaded && (
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: "url('/bg.jpg')",
//             }}
//           />
//         )}

//         {/* <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className={`absolute inset-0 h-full w-full -top-[1.5rem] object-cover opacity-[0.6] ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
//           preload="auto"
//         >
//           <source src="/videoplayback.mp4" type="video/mp4" />
//         </video> */}
//       </div>


//       {/* Content */}
//       <div className="relative top-6 z-10 container mx-auto px-4 text-center">
//         <h1 ref={rungtaRef} className="text-white text-xl md:text-4xl font-bold tracking-wider mb-4 opacity-0">
//           RUNGTA EDUCATIONAL FOUNDATION
//         </h1>
//         <p ref={presentsRef} className="text-gray-300 text-sm md:text-base italic opacity-0">
//           PRESENTS
//         </p>
//         <h1
//           ref={vyomRef}
//           className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-white font-stranger mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] opacity-0"
//         >
//           VYOM
//         </h1>
//         <h2 ref={jumanjiRef} className="text-3xl md:text-5xl text-red-400 font-bold mb-8 tracking-widest opacity-0">
//           THE JUMANJI EXPERIENCE
//         </h2>
//         <p ref={dateRef} className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto opacity-0">
//           Enter a world of adventure at our annual tech fest .
//           <br />
//           <span className="text-red-300 font-semibold">April 7-9, 2025</span>
//         </p>
//         <div ref={buttonContainerRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
//           <Link href="/events">
//             <Button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all hover:scale-105">
//               REGISTER NOW
//             </Button>
//           </Link>
//           <Link href="/events">
//             <Button
//               variant="outline"
//               className="border -red-400 text-red-400 hover:bg-red-400/10 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all hover:scale-105"
//             >
//               EXPLORE EVENTS
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }


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
  const themeRef = useRef<HTMLHeadingElement>(null)
  const dateRef = useRef<HTMLParagraphElement>(null)
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  const [flickerText, setFlickerText] = useState(false)

  // Blood drip effect elements
  const bloodContainerRef = useRef<HTMLDivElement>(null)

  // Flickering text effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setFlickerText((prev) => !prev)
    }, 3000)

    return () => clearInterval(flickerInterval)
  }, [])

  // Animations
  useEffect(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline({ defaults: { ease: "power3.out", opacity: 0 } })

    // Animate lines one by one with staggered delays
    tl.fromTo(rungtaRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.8 })
      .fromTo(presentsRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
      .fromTo(vyomRef.current, { y: 50 }, { y: 0, opacity: 1, duration: 1 }, "-=0.4")
      .fromTo(themeRef.current, { y: 50 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(dateRef.current, { y: 30 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
      .fromTo(buttonContainerRef.current, { y: 20 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")

    // Create blood drips after the VYOM text appears
    if (bloodContainerRef.current) {
      setTimeout(() => {
        const drips = Array.from({ length: 15 }).map((_, i) => {
          const drip = document.createElement("div")
          drip.className = "absolute bg-red-700 rounded-b-full animate-drip"
          drip.style.left = `${10 + i * 6}%`
          drip.style.width = `${Math.random() * 2 + 1}px`
          drip.style.setProperty("--drip-height", `${Math.random() * 100 + 50}px`)
          drip.style.animationDelay = `${Math.random() * 1}s`
          drip.style.filter = "drop-shadow(0 0 5px rgba(220, 38, 38, 0.8))"
          return drip
        })

        drips.forEach((drip) => {
          bloodContainerRef.current?.appendChild(drip)
        })
      }, 2000)
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden select-none -top-[5.5rem]"
    >
      <div className="absolute inset-0">
        {/* Dark background with eerie fog effect */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('/bg.jpg')",
            // backgroundColor: "#000",
            // backgroundBlendMode: "multiply",
          }}
        >
          {/* Animated fog overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div> */}

          {/* Flickering light effect */}
          <div className="absolute inset-0 bg-blue-700/10 animate-pulse "></div>

          {/* Red pulsing glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-700/30 via-transparent to-transparent animate-pulse"></div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/bg.jpg')] bg-cover">
           
          </div>
        </div>
      </div>

      {/* Upside down particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full opacity-40">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-600 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative top-6 z-10 container mx-auto px-4 text-center">
        <h1
          ref={rungtaRef}
          className={`text-gray-200 text-xl md:text-4xl font-vintage tracking-wider mb-4  ${flickerText ? "animate-flicker" : ""}`}
        >
          RUNGTA EDUCATIONAL FOUNDATION
        </h1>
        <p ref={presentsRef} className="text-red-500 text-sm md:text-base font-vintage italic ">
          PRESENTS
        </p>

        {/* VYOM text with blood drip effect */}
        <div className="relative">
          <h1
            ref={vyomRef}
            className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-red-600 font-stranger mb-2 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)] opacity-0 tracking-wider"
          >
            VYOM
          </h1>

          {/* Blood drips container */}
          {/* <div ref={bloodContainerRef} className="absolute top-full left-0 w-full h-40 pointer-events-none"></div> */}
        </div>

        <h2 ref={themeRef} className="text-4xl md:text-6xl text-blue-400 font-horror  mb-8 tracking-[-0.2] opacity-0 upside-down">
          THE UPSIDE DOWN
        </h2>

        <p ref={dateRef} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto opacity-0 font-vintage">
          Enter a world where reality turns upside down at our annual fest.
          <br />
          <span className="text-red-400 font-semibold">April 7-9, 2025</span>
        </p>

        <div ref={buttonContainerRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 font-nav ">
          <Link href="/events">
            <Button className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-none text-lg shadow-[0_0_10px_rgba(220,38,38,0.5)] transition-all hover:scale-105 border border-red-500 tracking-widest">
              ENTER THE GATE
            </Button>
          </Link>
          <Link href="/events">
            <Button
              variant="outline"
              className="border border-blue-500 text-blue-400 hover:bg-blue-900/20 font-bold py-3 px-8 rounded-none text-lg shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all hover:scale-105 tracking-widest"
            >
              EXPLORE HAWKINS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


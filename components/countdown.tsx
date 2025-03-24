"use client"

import { useState, useEffect } from "react"
import gsap from "gsap"

interface CountdownProps {
  targetDate: string
}

export function Countdown({ targetDate }: CountdownProps) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date(targetDate)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    // Animate countdown items
    gsap.fromTo(
      ".countdown-item",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
    )

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
      <CountdownItem value={days} label="DAYS" />
      <CountdownItem value={hours} label="HOURS" />
      <CountdownItem value={minutes} label="MINUTES" />
      <CountdownItem value={seconds} label="SECONDS" />
    </div>
  )
}

interface CountdownItemProps {
  value: number
  label: string
}

function CountdownItem({ value, label }: CountdownItemProps) {
  return (
    <div className="countdown-item bg-black/60 border-2 border-red-600 rounded-lg p-6 text-center transform hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-red-600/30">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-400 font-stranger">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm md:text-base text-red-200 font-bold mt-2">{label}</div>
    </div>
  )
}



// "use client"

// import { useState, useEffect } from "react"
// import gsap from "gsap"

// interface CountdownProps {
//   targetDate: string
// }

// export function Countdown({ targetDate }: CountdownProps) {
//   const [days, setDays] = useState(0)
//   const [hours, setHours] = useState(0)
//   const [minutes, setMinutes] = useState(0)
//   const [seconds, setSeconds] = useState(0)

//   useEffect(() => {
//     const target = new Date(targetDate)

//     const interval = setInterval(() => {
//       const now = new Date()
//       const difference = target.getTime() - now.getTime()

//       const d = Math.floor(difference / (1000 * 60 * 60 * 24))
//       setDays(d)

//       const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       setHours(h)

//       const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
//       setMinutes(m)

//       const s = Math.floor((difference % (1000 * 60)) / 1000)
//       setSeconds(s)
//     }, 1000)

//     // Animate countdown items
//     gsap.fromTo(
//       ".countdown-item",
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "back.out(1.7)",
//       },
//     )

//     return () => clearInterval(interval)
//   }, [targetDate])

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
//       <CountdownItem value={days} label="DAYS" />
//       <CountdownItem value={hours} label="HOURS" />
//       <CountdownItem value={minutes} label="MINUTES" />
//       <CountdownItem value={seconds} label="SECONDS" />
//     </div>
//   )
// }

// interface CountdownItemProps {
//   value: number
//   label: string
// }

// function CountdownItem({ value, label }: CountdownItemProps) {
//   return (
//     <div className="countdown-item bg-black/80 border-2 border-red-800 rounded-lg p-6 text-center transform hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-red-900/50">
//       <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 font-mono" style={{textShadow: "0 0 10px rgba(220, 38, 38, 0.8)"}}>
//         {value.toString().padStart(2, "0")}
//       </div>
//       <div className="text-sm md:text-base text-gray-300 font-bold mt-2 uppercase tracking-widest">{label}</div>
//     </div>
//   )
// }
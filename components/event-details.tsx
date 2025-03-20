"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Award, DollarSign, Mail, Phone } from "lucide-react"
import type { Event } from "@/lib/events-data"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface EventDetailsProps {
  event: Event
}

export function EventDetails({ event }: EventDetailsProps) {
  const [isRegistering, setIsRegistering] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!headerRef.current || !contentRef.current) return

    // Animate header
    gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.8 })

    // Animate content
    gsap.fromTo(
      contentRef.current.querySelectorAll(".animate-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.3,
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const handleRegister = () => {
    setIsRegistering(true)
    // In a real app, this would redirect to a registration form or process
    setTimeout(() => {
      setIsRegistering(false)
      // Show success message or redirect
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div ref={headerRef} className="mb-8">
        <Link href="/events" className="text-amber-400 hover:underline mb-4 inline-block">
          ← Back to Events
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-amber-400 font-jumanji mb-4">{event.title}</h1>
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">{event.category}</span>
          <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm">{event.registrationFee}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          </div>

          <div ref={contentRef} className="space-y-8">
            <Card className="bg-green-900/50 border-amber-700/30 animate-item">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-amber-400 mb-4">Event Description</h2>
                <p className="text-gray-300">{event.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-green-900/50 border-amber-700/30 animate-item">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-amber-400 mb-4">Prizes</h2>
                <ul className="space-y-2">
                  {event.prizes.map((prize, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-amber-400 mt-0.5" />
                      <span className="text-gray-300">{prize}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-900/50 border-amber-700/30 animate-item">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-amber-400 mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="font-semibold">Contact Person:</span> {event.contactPerson.name}
                  </p>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-amber-400" />
                    <a href={`mailto:${event.contactPerson.email}`} className="text-amber-400 hover:underline">
                      {event.contactPerson.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-amber-400" />
                    <a href={`tel:${event.contactPerson.phone}`} className="text-amber-400 hover:underline">
                      {event.contactPerson.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card className="bg-green-900/50 border-amber-700/30 sticky top-24 animate-item">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-amber-400 mb-4">Event Details</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Date</p>
                    <p className="text-gray-300">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Time</p>
                    <p className="text-gray-300">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Venue</p>
                    <p className="text-gray-300">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Team Size</p>
                    <p className="text-gray-300">{event.teamSize}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 mr-3 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Registration Fee</p>
                    <p className="text-gray-300">{event.registrationFee}</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={handleRegister}
                disabled={isRegistering}
              >
                {isRegistering ? "Processing..." : "Register Now"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


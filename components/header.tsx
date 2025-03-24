"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/events", label: "Events" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/brochure", label: "Brochure" },
    { href: "https://rungta.campusmall.in/", label: "Merchandise" },
  ]

  return (
    <header
      className={`sticky z-50 transition-all duration-300 font-nav tracking-[.20rem] ml-4 mr-4 mt-2 bg-blur ${isScrolled ? "bg-blur m-4 bg-transparent rounded-lg top-3 transition-all" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-16">
              <Image
                src="/logo.png"
                alt="VYOM Logo"
                width={80}
                height={50}
                className="object-contain absolute inset-0 top-[-10px]"
              />
            </div>
            {/* <span className="font-stranger text-2xl text-red-400">VYOM</span> */}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-semibold transition-colors hover:text-red-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:text-red-500 after:transition-all hover:after:w-full ${pathname === link.href ? "text-red-500 after:w-full" : "text-gray-100"}`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/events">
              <Button className="bg-red-600 hover:bg-red-500 text-white rounded-full px-6">Register Now</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md top-24 rounded-lg absolute w-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-red-400 ${pathname === link.href ? "text-red-400" : "text-gray-100"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-800">
              <Button className="w-full bg-red-500 hover:bg-red-500 text-white rounded-full">Register Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-red-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-400 font-stranger">VYOM'25</h3>
            <p className="text-gray-300">
            Experience the thrill, embrace the challenge – Vyom '25 awaits you! 🚀
            </p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-gray-400 hover:text-red-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-red-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link> */}
              <a href="https://www.instagram.com/rungta.vyom/" className="text-gray-400 hover:text-red-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              {/* <Link href="#" className="text-gray-400 hover:text-red-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link> */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-400 hover:text-red-400">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/brochure" className="text-gray-400 hover:text-red-400">
                  Brochure
                </Link>
              </li>
              <li>
                <a href="https://rungta.campusmall.in/" className="text-gray-400 hover:text-red-400">
                  Merchandise
                </a>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-400 hover:text-red-400">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-red-400">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Event Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events?category=technical" className="text-gray-400 hover:text-red-400">
                  Technical Events
                </Link>
              </li>
              <li>
                <Link href="/events?category=cultural" className="text-gray-400 hover:text-red-400">
                  Cultural Events
                </Link>
              </li>
              <li>
                <Link href="/events?category=sports" className="text-gray-400 hover:text-red-400">
                  Sports Events
                </Link>
              </li>
              <li>
                <Link href="/events?category=workshops" className="text-gray-400 hover:text-red-400">
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-gray-400">info@vyom25.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-gray-400">+1 (123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-red-900 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} VYOM'25. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


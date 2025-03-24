"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Plus, Minus } from "lucide-react"
import gsap from "gsap"

interface MerchItem {
  id: string
  name: string
  image: string
  price: string
  description: string
  sizes?: string[]
  colors?: string[]
}

export function MerchPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pageRef.current || !heroRef.current || !itemsRef.current) return

    const tl = gsap.timeline()

    // Animate hero
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })

    // Animate items
    gsap.fromTo(
      ".merch-item",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 70%",
        },
      },
    )

    return () => {
      tl.kill()
    }
  }, [])

  const merchItems: MerchItem[] = [
    {
      id: "tshirt",
      name: "VYOM Jumanji T-Shirt",
      image: "/placeholder.svg?height=400&width=400",
      price: "$24.99",
      description: "Official VYOM'25 t-shirt featuring the festival logo and jungle-inspired design.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Green", "Brown"],
    },
    {
      id: "hoodie",
      name: "Adventure Hoodie",
      image: "/placeholder.svg?height=400&width=400",
      price: "$49.99",
      description: "Stay warm with this premium hoodie featuring embroidered VYOM Jumanji logo.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Green"],
    },
    {
      id: "cap",
      name: "Explorer Cap",
      image: "/placeholder.svg?height=400&width=400",
      price: "$19.99",
      description: "Adjustable cap with embroidered VYOM logo, perfect for your festival adventure.",
      colors: ["Black", "Green", "Beige"],
    },
    {
      id: "bag",
      name: "Adventure Backpack",
      image: "/placeholder.svg?height=400&width=400",
      price: "$39.99",
      description: "Durable backpack with multiple compartments, perfect for carrying your essentials during the fest.",
      colors: ["Black", "Green"],
    },
    {
      id: "bottle",
      name: "VYOM Water Bottle",
      image: "/placeholder.svg?height=400&width=400",
      price: "$14.99",
      description: "Eco-friendly reusable water bottle with the VYOM Jumanji logo.",
      colors: ["Silver", "Black", "Green"],
    },
    {
      id: "mug",
      name: "Collector's Mug",
      image: "/placeholder.svg?height=400&width=400",
      price: "$12.99",
      description: "Limited edition ceramic mug featuring the VYOM Jumanji design.",
      colors: ["Black", "White"],
    },
    {
      id: "notebook",
      name: "Adventure Journal",
      image: "/placeholder.svg?height=400&width=400",
      price: "$9.99",
      description: "Hardcover notebook with jungle-themed design, perfect for taking notes during workshops.",
      colors: ["Brown", "Green"],
    },
    {
      id: "poster",
      name: "VYOM Jumanji Poster",
      image: "/placeholder.svg?height=400&width=400",
      price: "$7.99",
      description: "High-quality printed poster featuring the official VYOM Jumanji artwork.",
      sizes: ["A3", "A2"],
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
          <h1 className="text-5xl md:text-7xl font-bold text-red-400 font-stranger mb-4">OFFICIAL MERCHANDISE</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Take home a piece of the adventure with our exclusive VYOM Jumanji collection
          </p>
        </div>
      </div>

      <div ref={itemsRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchItems.map((item) => (
            <MerchItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-16 bg-black/60 border border-red-700/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-red-400 font-stranger mb-4">PRE-ORDER NOW</h2>
          <p className="text-gray-200 mb-6">
            Pre-order your merchandise now and pick it up at the festival. Limited quantities available!
          </p>
          <Button className="bg-red-600 hover:bg-red-500 text-white rounded-full px-8 py-4 text-lg font-bold">
            <ShoppingBag className="mr-2 h-5 w-5" />
            View Shopping Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

function MerchItemCard({ item }: { item: MerchItem }) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <Card className="merch-item bg-black/60 border-red-700/30 hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20 overflow-hidden group">
      <div className="relative h-64 bg-black/50 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-red-300 mb-2">{item.name}</h3>
        <p className="text-white font-bold mb-2">{item.price}</p>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>

        {item.sizes && (
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-1">Available Sizes:</p>
            <div className="flex flex-wrap gap-2">
              {item.sizes.map((size) => (
                <span key={size} className="bg-green-900/50 text-white text-xs px-2 py-1 rounded">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {item.colors && (
          <div className="mb-4">
            <p className="text-sm text-gray-400 mb-1">Available Colors:</p>
            <div className="flex flex-wrap gap-2">
              {item.colors.map((color) => (
                <span key={color} className="bg-green-900/50 text-white text-xs px-2 py-1 rounded">
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-gray-700 rounded-md">
            <button onClick={decreaseQuantity} className="px-2 py-1 text-gray-400 hover:text-white">
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-3 py-1 text-white">{quantity}</span>
            <button onClick={increaseQuantity} className="px-2 py-1 text-gray-400 hover:text-white">
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <Button className="bg-red-600 hover:bg-red-500 text-white">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  )
}


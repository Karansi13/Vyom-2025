"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SponsorCategory {
  title: string;
  description: string;
  sponsors: Sponsor[];
}

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  website?: string;
}

// Main SponsorsPage Component
export function SponsorsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!pageRef.current || !heroRef.current || !categoriesRef.current) return;

    const tl = gsap.timeline();

    // Hero fade-in animation
    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Category slide-in animation
    const categories =
      categoriesRef.current.querySelectorAll(".sponsor-category");
    gsap.fromTo(
      categories,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: categoriesRef.current, start: "top 80%" },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const sponsorCategories: SponsorCategory[] = [
    {
      title: "Title Sponsors",
      description: "Our main partners who make VYOM'25 possible",
      sponsors: [
        {
          name: "Coming Soon",
          logo: "/7.png",
          description:
            "Leading company",
          website: "https://example.com",
        },
       
      ],
    },
    {
      title: "Gold Sponsors",
      description: "Major contributors to our festival's success",
      sponsors: [
        {
          name: "Coming Soon",
          logo: "/7.png",
          description:
            "Leading company",
          website: "https://example.com",
        },
       
      ],
    },
    {
      title: "Silver Sponsors",
      description: "Valuable partners supporting our events and activities",
      sponsors: [
        {
          name: "Coming Soon",
          logo: "/7.png",
          description:
            "Leading company",
          website: "https://example.com",
        },
      
      ],
    },
  ];

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-black"
    >
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/7.png?height=800&width=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-400 font-stranger stranger-flicker mb-4">
            OUR SPONSORS
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto font-vintage">
            VYOM'25 is made possible by the generous support of our sponsors
          </p>
        </div>
      </div>
      <div ref={categoriesRef} className="container mx-auto px-4 py-16">
        {sponsorCategories.map((category, index) => (
          <div key={index} className="sponsor-category mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-red-400 font-stranger mb-4">
                {category.title}
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Sponsor Cards with 3D Tilt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.sponsors.map((sponsor, sponsorIndex) => (
                <motion.div
                  key={sponsorIndex}
                  className="sponsor-item"
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: -10,
                    rotateY: 10,
                    boxShadow: "0px 0px 20px rgba(255, 200, 50, 0.8)",
                  }}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                  transition={{ duration: 0.4 }}
                >
                <Card className="bg-black/60 border-red-700/30 hover:border-red-500 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20 overflow-hidden">
  <div className="relative h-52 bg-white/5 flex items-center justify-center p-6">
    <Image
      src={sponsor.logo || "/placeholder-logo.svg"}
      alt={sponsor.name}
      width={160}
      height={80}
      className="h-full w-auto object-contain"
    />
  </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-red-300 mb-2">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {sponsor.description}
                      </p>
                      {sponsor.website && (
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                        >
                          Visit Website{" "}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-black/60 border border-red-700/30 rounded-xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-red-400 font-stranger mb-4">
            BECOME A SPONSOR
          </h2>
          <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
            Interested in sponsoring VYOM 2025? We offer various partnership
            opportunities that can help your brand connect with tech
            enthusiasts, students, and professionals.
          </p>
          <Button className="bg-red-600 hover:bg-red-500 text-white rounded-full px-8 py-4 text-lg font-bold">
            <Mail className="mr-2 h-5 w-5" />
            Contact for Sponsorship
          </Button>
        </div>
      </div>
    </div>
  );
}

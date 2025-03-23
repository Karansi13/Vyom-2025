"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, MapPin, Users } from "lucide-react";
import gsap from "gsap";

// 🔥 Dynamic import to fix Next.js hydration for Framer Motion
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export function BrochurePreview() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // ✅ GSAP Hero Section Animation
  useEffect(() => {
    if (!pageRef.current || !heroRef.current || !contentRef.current) return;

    const tl = gsap.timeline();

    // Hero section fade-in
    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Content section staggered fade-in
    tl.fromTo(
      contentRef.current.querySelectorAll(".animate-item"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, delay: 0.5 }
    );

    return () => tl.kill();
  }, []);

  // ✅ Framer Motion Hover Animations
  const hoverEffect = {
    scale: 1.1,
    rotateY: 10,
    rotateX: -5,
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const flipEffect = {
    rotateY: 15,
    scale: 1.05,
    transition: { duration: 0.4, ease: "easeOut" },
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-b from-green-950 to-black"
    >
      {/* ✅ Hero Section */}
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
          <h1 className="text-5xl md:text-7xl font-bold text-amber-400 font-jumanji mb-4">
            OFFICIAL BROCHURE
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Everything you need to know about VYOM 2025
          </p>
        </div>
      </div>

      {/* ✅ Brochure Content */}
      <div ref={contentRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Brochure Image with Zoom & Tilt */}
          <MotionDiv className="animate-item" whileHover={hoverEffect}>
            <div className="relative h-[600px] w-full">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="VYOM Brochure Cover"
                fill
                className="object-contain"
              />
            </div>
          </MotionDiv>

          {/* Info Section with Pulse Hover */}
          <MotionDiv
            className="space-y-8 animate-item"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 font-jumanji">
              VYOM 2025
            </h2>
            <p className="text-gray-200 text-lg">
              Our comprehensive brochure contains all the information you need
              to plan your VYOM experience. Download it to get access to:
            </p>

            <Button className="bg-amber-600 hover:bg-amber-500 text-white rounded-full px-8 py-6 text-lg font-bold mt-6">
              <Download className="mr-2 h-5 w-5" />
              Download Brochure (PDF)
            </Button>
          </MotionDiv>
        </div>

        {/* ✅ Preview Pages with Flip Animation */}
        {/* <div className="bg-black/60 border border-amber-700/30 rounded-xl p-8 animate-item">
          <h2 className="text-3xl font-bold text-amber-400 font-jumanji mb-6 text-center">
            PREVIEW CONTENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <MotionDiv
                key={index}
                className="bg-green-950/50 rounded-lg overflow-hidden"
                whileHover={flipEffect}
              >
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={`Brochure page ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">
                    Page {index + 1}
                  </h3>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

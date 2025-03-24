"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, MapPin, Users } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

export function BrochurePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!pageRef.current || !heroRef.current || !contentRef.current) return;

  //   const tl = gsap.timeline();

  //   // 🎯 Hero Section Animation — Fade in with scale-up and slight rotation
  //   tl.fromTo(
  //     heroRef.current,
  //     { opacity: 0, scale: 0.8, rotate: -5 },
  //     { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power2.out" }
  //   );

  //   // 🔥 Content Section Animation — Staggered slide-in
  //   tl.fromTo(
  //     contentRef.current.querySelectorAll(".animate-item"),
  //     { y: 50, opacity: 0 },
  //     { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power2.out" }
  //   );

  //   // 🌟 Parallax effect on hero background
  //   gsap.to(heroRef.current, {
  //     backgroundPosition: "center 20%",
  //     scrollTrigger: {
  //       trigger: heroRef.current,
  //       start: "top top",
  //       scrub: true,
  //     },
  //   });

  //   return () => tl.kill();
  // }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-black"
    >
      {/* ✅ Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[50vh] flex items-center justify-center bg-[url('/6.png?height=800&width=1600')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-400 font-stranger stranger-flicker mb-4">
             OFFICIAL BROCHURE 
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto tracking-wid font-vintage">
            Everything you need to know about VYOM 2025 — all in one place.
          </p>
        </div>
      </div>

      {/* ✅ Content Section */}
      <div ref={contentRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 🎯 Brochure Cover */}
          <div className="animate-item hover:scale-110 hover:rotate-2 transition-transform duration-300 ease-in-out">
            <div className="relative h-[600px] w-full shadow-lg rounded-xl overflow-hidden">
              <Image
                src="/6.png?height=800&width=600"
                alt="VYOM Brochure Cover"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ✅ Brochure Details */}
          <div className="space-y-8 animate-item">
            <h2 className="text-3xl md:text-4xl font-bold text-red-400 font-stranger tracking-wide">
              ✨ VYOM 2025 ✨
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Our brochure contains all the details you need to plan your VYOM
              experience. Here’s what you’ll find:
            </p>

            {/* 🎯 Features List */}
            <ul className="space-y-4">
              {[
                {
                  icon: Calendar,
                  title: "Complete Event Schedule",
                  desc: "Day-by-day breakdown of events, workshops, and performances",
                },
                {
                  icon: MapPin,
                  title: "Venue Maps & Locations",
                  desc: "Detailed maps of all event venues with navigation guidance",
                },
                {
                  icon: FileText,
                  title: "Event Rules & Guidelines",
                  desc: "Participation requirements, judging criteria, and prizes",
                },
                {
                  icon: Users,
                  title: "Registration Information",
                  desc: "How to register, deadlines, and team formation guidelines",
                },
              ].map(({ icon: Icon, title, desc }, index) => (
                <li
                  key={index}
                  className="flex items-start hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="h-6 w-6 mr-3 text-red-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="text-gray-300">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* 🔥 Download Brochure Button */}
            <a
              href="/Brochure"
              download="Brochure.pdf"
              className="no-underline"
            >
              <Button className="bg-red-600 hover:bg-red-500 text-white rounded-full px-8 py-6 text-lg font-bold mt-6 flex items-center shadow-lg hover:scale-105 transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure (PDF)
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

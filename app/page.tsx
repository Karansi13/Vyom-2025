"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";

import { Countdown } from "@/components/countdown";
import { FestHero } from "@/components/fest-hero";
import { EventsPreview } from "@/components/events-preview";
import { SponsorsPreview } from "@/components/sponsors-preview";
import { BrochurePreview } from "@/components/brochure-preview";
import { AboutVyom } from "@/components/about-vyom";
import { AboutRungta } from "@/components/about-rungta";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/faq-section";

import Link from "next/link";
import Loader from "@/components/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const scrollRef = useRef<HTMLDivElement>(null);
  // const locoScroll = useRef<LocomotiveScroll | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (optional) or check actual loading logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change time if needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);


  
  return (
<>
    {
      loading  ? <Loader /> :
      <>
      
    <div  data-scroll-container className="min-h-screen ">
      <FestHero />


      {/* Responsive Hero Section */}
      {/* <div className="container px-4 py-16 bg-none">
          <h2 className="text-3xl md:text-5xl font-bold text-red-300 mb-6 md:mb-8 font-horror text-center">
            ADVENTURE AWAITS
          </h2>
          <Countdown targetDate="2025-04-07T00:00:00" />
          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg shadow-lg transition-all hover:scale-105 hover:shadow-red-600/20 hover:shadow-xl">
                EXPLORE EVENTS
              </Button>
            </Link>
          </div>
      </div> */}
      <div className="container px-4 py-16 ">
        <div className="bg-gradient-to-r from-red-950/40 to-black/60 backdrop-blur-sm rounded-xl p-6 md:p-12 border border-red-700/50 shadow-xl transform hover:scale-[1.02] transition-all duration-500 vine-border">
          <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-6 md:mb-8 font-stranger text-center animate-flicker">
            THE UPSIDE DOWN AWAITS
          </h2>
          <Countdown targetDate="2025-04-07T00:00:00" />
          <div className="flex justify-center mt-8 z-50">
            <Link href="/events">
              <Button className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-none text-lg shadow-lg transition-all hover:scale-105 hover:shadow-red-600/50 hover:shadow-xl neon-button font-nav tracking-widest">
                ENTER THE VOID
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Sections */}
      <div className="md:space-y-24 px-4 md:px-0 ">

        <AboutVyom />
        <EventsPreview />
        <AboutRungta />
        {/* <BrochurePreview /> */}
        <SponsorsPreview />
        <FaqSection />
      </div>
    </div>
    </>
  }
  </>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScroll = useRef<LocomotiveScroll | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!scrollRef.current || isLoaded) return;

    const initSmoothScroll = () => {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08, // Adjust for smoother effect
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      locoScroll.current.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.current?.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.current?.scroll.instance.scroll.y || 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: scrollRef.current?.scrollHeight || window.innerHeight,
          };
        },
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.current?.update());
      ScrollTrigger.refresh();
    };

    const loadContent = () => {
      document.documentElement.scrollTop = 0; // Reset scroll position
      locoScroll.current?.update();
      ScrollTrigger.refresh();
    };

    // ✅ Load images, fonts, and then initialize scroll
    const checkLoaded = () => {
      if (document.readyState === "complete") {
        initSmoothScroll();
        loadContent();
        setIsLoaded(true);
      } else {
        window.onload = () => {
          initSmoothScroll();
          loadContent();
          setIsLoaded(true);
        };
      }
    };

    checkLoaded();
    window.addEventListener("resize", loadContent);

    return () => {
      window.removeEventListener("resize", loadContent);
      locoScroll.current?.destroy();
    };
  }, [isLoaded]);

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen bg-gradient-to-b from-green-950 to-black">
      <FestHero />

      {/* Responsive Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-amber-900/40 to-green-900/40 backdrop-blur-sm rounded-xl p-6 md:p-12 border border-amber-700/50 shadow-xl transform hover:scale-[1.02] transition-all duration-500">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-300 mb-6 md:mb-8 font-jumanji text-center">
            ADVENTURE AWAITS
          </h2>
          <Countdown targetDate="2025-04-07T00:00:00" />
          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg shadow-lg transition-all hover:scale-105 hover:shadow-amber-600/20 hover:shadow-xl">
                EXPLORE EVENTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="space-y-16 md:space-y-24 px-4 md:px-0">
        <AboutVyom />
        <EventsPreview />
        <AboutRungta />
        <BrochurePreview />
        <SponsorsPreview />
        <FaqSection />
      </div>
    </div>
  );
}

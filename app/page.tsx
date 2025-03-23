"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
  ssr: false,
});

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

  // ✅ Initialize Smooth Scroll with Locomotive
  useEffect(() => {
    if (!scrollRef.current || isLoaded) return;

    const initSmoothScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locoScroll.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.08,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        });

        locoScroll.current.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.current?.scrollTo(value, {
                  duration: 0,
                  disableLerp: true,
                })
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

        ScrollTrigger.addEventListener("refresh", () =>
          locoScroll.current?.update()
        );
        ScrollTrigger.refresh();
        setIsLoaded(true);
      } catch (err) {
        console.error("Failed to load Locomotive Scroll:", err);
      }
    };

    initSmoothScroll();

    const resetScroll = () => {
      document.documentElement.scrollTop = 0;
      locoScroll.current?.update();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", resetScroll);

    return () => {
      window.removeEventListener("resize", resetScroll);
      locoScroll.current?.destroy();
    };
  }, [isLoaded]);

  // ✅ GSAP Hero & Content Animations
  useEffect(() => {
    if (isLoaded && scrollRef.current) {
      gsap.from(".hero-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".hero-content", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(".button-animate", {
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        delay: 1,
        ease: "bounce.out",
      });

      gsap.utils.toArray(".section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            scroller: scrollRef.current,
          },
        });
      });
    }
  }, [isLoaded]);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="min-h-screen bg-gradient-to-b from-green-950 to-black"
    >
      <FestHero />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 hero-content">
        <div className="bg-gradient-to-r from-amber-900/40 to-green-900/40 backdrop-blur-sm rounded-xl p-6 md:p-12 border border-amber-700/50 shadow-xl transform hover:scale-[1.02] transition-all duration-500">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-300 mb-6 md:mb-8 font-jumanji text-center hero-title">
            ADVENTURE AWAITS
          </h2>
          <Countdown targetDate="2025-04-07T00:00:00" />
          <div className="flex justify-center mt-8">
            <Link href="/events">
              <Button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg shadow-lg transition-all hover:scale-105 hover:shadow-amber-600/20 hover:shadow-xl button-animate">
                EXPLORE EVENTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <div className="space-y-16 md:space-y-24 px-4 md:px-0">
        <div className="section">
          <AboutVyom />
        </div>
        <div className="section">
          <EventsPreview />
        </div>
        <div className="section">
          <AboutRungta />
        </div>
        <div className="section">
          <BrochurePreview />
        </div>
        <div className="section">
          <SponsorsPreview />
        </div>
        <div className="section">
          <FaqSection />
        </div>
      </div>
    </div>
  );
}

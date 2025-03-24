"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SponsorsPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !titleRef.current || !sponsorsRef.current)
      return;

    // Animate title
    gsap.fromTo(
      titleRef.current.querySelectorAll("h2, p"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    // Animate sponsors
    const sponsors = sponsorsRef.current.querySelectorAll(".sponsor-item");
    gsap.fromTo(
      sponsors,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: sponsorsRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-red-400 mb-4 font-horror stranger-flicker">
            OUR SPONSORS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-vintage">
            VYOM'25 is made possible by the generous support of our sponsors who
            help bring this adventure to life.
          </p>
        </div>

        <div
          ref={sponsorsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="sponsor-item bg-green-900/50 border border-red-700/20 rounded-lg p-6 flex items-center justify-center hover:border-red-500 transition-all duration-300"
            >
              <Image
                src="/placeholder-logo.svg"
                alt={`Sponsor ${index + 1}`}
                width={150}
                height={80}
                className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/sponsors">
            <Button className="bg-red-600 hover:bg-red-500 text-white rounded-full px-8 py-6 text-lg font-bold hover:shadow-lg hover:shadow-red-600/30 transition-all font-nav tracking-widest">
              View All Sponsors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

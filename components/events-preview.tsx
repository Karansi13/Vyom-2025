"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function EventsPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return;

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
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate cards
    const cards = cardsRef.current.querySelectorAll(".event-card");
    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const eventCategories = [
    {
      title: "Technical",
      image: "/placeholder.svg?height=300&width=400",
      description: "Coding competitions, hackathons, and tech workshops",
      color: "from-blue-600 to-blue-900",
    },
    {
      title: "Cultural",
      image: "/placeholder.svg?height=300&width=400",
      description: "Music, dance, drama, and art competitions",
      color: "from-purple-600 to-purple-900",
    },
    {
      title: "Sports",
      image: "/placeholder.svg?height=300&width=400",
      description: "Adventure sports, team games, and athletic competitions",
      color: "from-red-600 to-red-900",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-red-400 mb-6 font-horror stranger-flicker">
            STRANGE ENCOUNTERS
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg font-vintage">
          Step into the Upside Down with our mysterious range of events. From mind-bending challenges to supernatural performances and thrilling competitions that will turn your world upside down.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventCategories.map((category, index) => (
            <Link
              href={`/events?category=${category.title.toLowerCase()}`}
              key={index}
              className="event-card group"
            >
              <Card className="overflow-hidden bg-black/60 border-red-700/30 hover:border-red-500 transition-all duration-500 hover:shadow-xl hover:shadow-red-900/20 group-hover:-translate-y-4">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white font-stranger transform transition-transform duration-500 group-hover:scale-110">
                      {category.title.toUpperCase()}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-b from-black to-red-920">
                  <p className="text-gray-200 mb-4 group-hover:text-white transition-colors font-desc
                  ">
                    {category.description}
                  </p>
                  <div className="flex items-center text-red-400 font-medium group-hover:translate-x-2 transition-transform duration-300 font-nav tracking-widest">
                    <span>Explore Events</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/events">
            <Button className="bg-red-600 hover:bg-red-500 text-white rounded-full px-8 py-6 text-lg font-bold hover:shadow-lg hover:shadow-red-600/30 transition-all font-nav tracking-widest">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

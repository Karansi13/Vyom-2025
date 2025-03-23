"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import type { Event } from "@/lib/events-data";
import { useSoundContext } from "./sound-provider";

interface EventsListProps {
  events: Event[];
}

export function EventsList({ events }: EventsListProps) {
  const { playSound } = useSoundContext();
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  const handleMouseEnter = (eventId: string) => {
    setHoveredEvent(eventId);
    playSound("hover");
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  const handleCardClick = () => {
    playSound("click");
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl text-amber-400 mb-4">No events found</h3>
        <p className="text-gray-300">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <motion.div
          key={event.id}
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            rotateY: -10,
            boxShadow: "0px 10px 20px rgba(255, 200, 50, 0.6)",
          }}
          whileTap={{ scale: 0.95 }} // 🌟 Tilt on click
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Link href={`/events/${event.id}`} onClick={handleCardClick}>
            <Card
              className={`h-full overflow-hidden bg-green-900/50 border-amber-700/30 hover:border-amber-500 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 ${
                hoveredEvent === event.id ? "transform -translate-y-2" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(event.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative h-48 cursor-pointer">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 text-sm font-bold">
                  {event.category}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-amber-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-amber-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Users className="h-4 w-4 mr-2 text-amber-400" />
                    <span>{event.teamSize}</span>
                  </div>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

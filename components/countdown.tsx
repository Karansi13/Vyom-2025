"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [days, setDays] = useState(30); // Start from 30 days
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(targetDate);

    // Interval to update the countdown every second
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      // Calculate remaining time
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      // Smooth decrease from 30 days to actual target time
      setDays((prev) => (prev > d ? prev - 1 : d));
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 200);

    // Animate countdown items on load
    gsap.fromTo(
      ".countdown-item",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      }
    );

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
      <CountdownItem value={days} label="DAYS" />
      <CountdownItem value={hours} label="HOURS" />
      <CountdownItem value={minutes} label="MINUTES" />
      <CountdownItem value={seconds} label="SECONDS" />
    </div>
  );
}

interface CountdownItemProps {
  value: number;
  label: string;
}

function CountdownItem({ value, label }: CountdownItemProps) {
  return (
    <div className="countdown-item bg-black/60 border-2 border-amber-600 rounded-lg p-6 text-center transform hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-amber-600/30">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400 font-jumanji">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm md:text-base text-amber-200 font-bold mt-2">
        {label}
      </div>
    </div>
  );
}

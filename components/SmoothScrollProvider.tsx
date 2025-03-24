"use client";

import { useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  useEffect(() => {
    let scrollTween: gsap.core.Tween | null = null;

    if (typeof window !== "undefined") {
      gsap.to("html, body", {
        scrollBehavior: "smooth", // Enables smooth scrolling
        duration: 1,
        ease: "power2.out",
      });

      scrollTween = gsap.to(window, {
        scrollTo: { y: "max", autoKill: false },
        ease: "power1.out",
        paused: true,
      });
    }

    return () => {
      scrollTween?.kill();
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrollProvider;

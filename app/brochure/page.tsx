"use client"
import type { Metadata } from "next"
import { BrochurePage } from "@/components/brochure-page"
import Loader from "@/components/Loader"
import { useState, useEffect } from "react"

// export const metadata: Metadata = {
//   title: "Brochure | VYOM 2025",
//   description:
//     "Download the official brochure for VYOM 2025 with complete event details, schedules, and more.",
// }

export default function Brochure() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 500);
    return () => clearTimeout(timer)
  })

  return loader ? <Loader /> : <BrochurePage />

}


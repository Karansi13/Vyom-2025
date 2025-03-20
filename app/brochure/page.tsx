import type { Metadata } from "next"
import { BrochurePage } from "@/components/brochure-page"

export const metadata: Metadata = {
  title: "Brochure | VYOM 2025",
  description:
    "Download the official brochure for VYOM 2025 with complete event details, schedules, and more.",
}

export default function Brochure() {
  return <BrochurePage />
}


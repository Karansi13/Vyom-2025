import type { Metadata } from "next"
import { SponsorsPage } from "@/components/sponsors-page"

export const metadata: Metadata = {
  title: "Sponsors | VYOM 2025",
  description: "Meet the sponsors who make VYOM 2025 possible. Learn about partnership opportunities.",
}

export default function Sponsors() {
  return <SponsorsPage />
}


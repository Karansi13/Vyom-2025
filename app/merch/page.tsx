import type { Metadata } from "next"
import { MerchPage } from "@/components/merch-page"

export const metadata: Metadata = {
  title: "Merchandise | VYOM 2025",
  description:
    "Shop the official merchandise for VYOM 2025. Limited edition items available only during the festival.",
}

export default function Merchandise() {
  return <MerchPage />
}


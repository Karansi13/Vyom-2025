import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EventDetails } from "@/components/event-details"
import { eventsData } from "@/lib/events-data"

interface EventPageProps {
  params: {
    id: string
  }
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = eventsData.find((event) => event.id === params.id)

  if (!event) {
    return {
      title: "Event Not Found | VYOM 2025",
      description: "The requested event could not be found.",
    }
  }

  return {
    title: `${event.title} | VYOM 2025`,
    description: event.description,
  }
}

// ✅ Fix: Generate static paths for all events
export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id, // Ensure each event has a unique ID
  }))
}

export default function EventPage({ params }: EventPageProps) {
  const event = eventsData.find((event) => event.id === params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <EventDetails event={event} />
    </div>
  )
}

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EventDetails } from "@/components/event-details"
import { eventsData } from "@/lib/events-data"

interface EventPageProps {
  params: {
    id: string
  }
}

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

export default function EventPage({ params }: EventPageProps) {
  const event = eventsData.find((event) => event.id === params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900/90 to-green-950">
      <EventDetails event={event} />
    </div>
  )
}


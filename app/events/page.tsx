import type { Metadata } from "next"
import { EventsFilter } from "@/components/events-filter"
import { EventsList } from "@/components/events-list"
import { eventsData } from "@/lib/events-data"

export const metadata: Metadata = {
  title: "Events | VYOM 2025",
  description:
    "Explore all the exciting events at VYOM 2025. Filter by category and find the perfect events for your adventure.",
}

export default function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const categoryParam = searchParams.category as string | undefined
  const searchParam = searchParams.search as string | undefined

  // Filter events based on search parameters
  const filteredEvents = eventsData.filter((event) => {
    // Filter by category if provided
    if (categoryParam && event.category.toLowerCase() !== categoryParam.toLowerCase()) {
      return false
    }

    // Filter by search term if provided
    if (searchParam) {
      const searchTerm = searchParam.toLowerCase()
      return (
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        event.category.toLowerCase().includes(searchTerm)
      )
    }

    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900/90 to-green-950">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 font-jumanji mb-4">EVENTS & CHALLENGES</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Embark on an adventure through our diverse range of events. From technical challenges to cultural
            performances and thrilling sports competitions.
          </p>
        </div>

        <EventsFilter initialCategory={categoryParam} initialSearch={searchParam} />

        <EventsList events={filteredEvents} />
      </div>
    </div>
  )
}


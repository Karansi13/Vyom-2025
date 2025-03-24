// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useSearchParams } from "next/navigation"; 
// import { EventsFilter } from "@/components/events-filter";
// import { EventsList } from "@/components/events-list";
// import { eventsData } from "@/lib/events-data";
// import Loader from "@/components/Loader"; 

// export default function EventsPage() {
//   const [loading, setLoading] = useState(true); 
//   const searchParams = useSearchParams(); 

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   const categoryParam = useMemo(() => searchParams.get("category") ?? "", [searchParams]);
//   const searchParam = useMemo(() => searchParams.get("search") ?? "", [searchParams]);

//   const filteredEvents = useMemo(() => {
//     return eventsData.filter((event) => {
//       if (categoryParam && event.category.toLowerCase() !== categoryParam.toLowerCase()) {
//         return false;
//       }

//       if (searchParam) {
//         const searchTerm = searchParam.toLowerCase();
//         return (
//           event.title.toLowerCase().includes(searchTerm) ||
//           event.description.toLowerCase().includes(searchTerm) ||
//           event.category.toLowerCase().includes(searchTerm)
//         );
//       }

//       return true;
//     });
//   }, [categoryParam, searchParam]);

//   return (
//     <div className="min-h-screen ">
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="container mx-auto px-4 py-12">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-6xl font-bold text-red-400 font-stranger stranger-flicker mb-4">
//               EVENTS & CHALLENGES
//             </h1>
//             <p className="text-gray-300 max-w-2xl mx-auto font-vintage">
//               Embark on an adventure through our diverse range of events. From technical challenges to cultural
//               performances and thrilling sports competitions.
//             </p>
//           </div>

//           <EventsFilter initialCategory={categoryParam} initialSearch={searchParam} />
//           <EventsList events={filteredEvents} />
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { EventsFilter } from "@/components/events-filter";
import { EventsList } from "@/components/events-list";
import { eventsData } from "@/lib/events-data";
import Loader from "@/components/Loader"; 

function EventsPageContent() {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams(); 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const categoryParam = useMemo(() => searchParams.get("category") ?? "", [searchParams]);
  const searchParam = useMemo(() => searchParams.get("search") ?? "", [searchParams]);

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      if (categoryParam && event.category.toLowerCase() !== categoryParam.toLowerCase()) {
        return false;
      }

      if (searchParam) {
        const searchTerm = searchParam.toLowerCase();
        return (
          event.title.toLowerCase().includes(searchTerm) ||
          event.description.toLowerCase().includes(searchTerm) ||
          event.category.toLowerCase().includes(searchTerm)
        );
      }

      return true;
    });
  }, [categoryParam, searchParam]);

  return (
    <div className="min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-red-400 font-stranger stranger-flicker mb-4">
              EVENTS & CHALLENGES
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-vintage">
              Embark on an adventure through our diverse range of events. From technical challenges to cultural
              performances and thrilling sports competitions.
            </p>
          </div>

          <EventsFilter initialCategory={categoryParam} initialSearch={searchParam} />
          <EventsList events={filteredEvents} />
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <EventsPageContent />
    </Suspense>
  );
}

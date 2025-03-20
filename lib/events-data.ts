export interface Event {
  id: string
  title: string
  category: string
  date: string
  time: string
  venue: string
  description: string
  image: string
  registrationFee: string
  prizes: string[]
  teamSize: string
  contactPerson: {
    name: string
    email: string
    phone: string
  }
}

export const eventsData: Event[] = [
  {
    id: "tech-hackathon",
    title: "Jungle Code Hackathon",
    category: "Technical",
    date: "April 7, 2025",
    time: "9:00 AM - 9:00 PM",
    venue: "Tech Pavilion",
    description:
      "A 12-hour coding challenge where teams compete to build innovative solutions for real-world problems. Navigate through coding challenges like you're navigating through a jungle.",
    image: "/placeholder.svg?height=400&width=600",
    registrationFee: "$20 per team",
    prizes: ["First Prize: $1000", "Second Prize: $500", "Third Prize: $250"],
    teamSize: "2-4 members",
    contactPerson: {
      name: "Alex Johnson",
      email: "alex@jumanjifest.com",
      phone: "+1 (123) 456-7890",
    },
  },
  {
    id: "tech-ctf",
    title: "Treasure Hunt CTF",
    category: "Technical",
    date: "April 8, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Cyber Arena",
    description:
      "A Capture The Flag competition with a Jumanji twist. Hunt for digital treasures while solving complex cybersecurity challenges.",
    image: "/placeholder.svg?height=400&width=600",
    registrationFee: "$15 per team",
    prizes: ["First Prize: $800", "Second Prize: $400", "Third Prize: $200"],
    teamSize: "1-3 members",
    contactPerson: {
      name: "Samantha Lee",
      email: "samantha@jumanjifest.com",
      phone: "+1 (123) 456-7891",
    },
  },
  {
    id: "cultural-dance",
    title: "Tribal Dance Competition",
    category: "Cultural",
    date: "April 8, 2025",
    time: "5:00 PM - 8:00 PM",
    venue: "Main Stage",
    description:
      "Showcase your dance skills in this high-energy competition inspired by tribal and jungle themes. Solo and group performances welcome.",
    image: "/placeholder.svg?height=400&width=600",
    registrationFee: "$10 per participant",
    prizes: ["First Prize: $600", "Second Prize: $300", "Third Prize: $150"],
    teamSize: "1-8 members",
    contactPerson: {
      name: "Michael Chen",
      email: "michael@jumanjifest.com",
      phone: "+1 (123) 456-7892",
    },
  },
  {
    id: "cultural-music",
    title: "Jungle Beat Music Festival",
    category: "Cultural",
    date: "April 9, 2025",
    time: "6:00 PM - 10:00 PM",
    venue: "Amphitheater",
    description:
      "A music competition featuring original compositions and performances inspired by jungle rhythms and natural sounds.",
    image: "/placeholder.svg?height=400&width=600",
    registrationFee: "$15 per participant/band",
    prizes: ["First Prize: $700", "Second Prize: $350", "Third Prize: $175"],
    teamSize: "1-6 members",
    contactPerson: {
      name: "Priya Patel",
      email: "priya@jumanjifest.com",
      phone: "+1 (123) 456-7893",
    },
  },
  {
    id: "sports-obstacle",
    title: "Jumanji Obstacle Course",
    category: "Sports",
    date: "April 7-9, 2025",
    time: "11:00 AM - 4:00 PM",
    venue: "Adventure Field",
    description:
      "Navigate through a challenging obstacle course inspired by the dangers of Jumanji. Test your strength, agility, and teamwork.",
    image: "/placeholder.svg?height=400&width=600",
    registrationFee: "$25 per team",
    prizes: ["First Prize: $1200", "Second Prize: $600", "Third Prize: $300"],
    teamSize: "4 members",
    contactPerson: {
      name: "David Wilson",
      email: "david@jumanjifest.com",
      phone: "+1 (123) 456-7894",
    },
  },
  {
    id: "sports-climbing",
    title: "Rock Climbing Challenge",
    category: "Sports",
    date: "April 8, 2025",
    time: "9:00 AM - 3:00 PM",
    venue: "Climbing Wall",
    description:
      "Scale the heights in this rock climbing competition. Multiple difficulty levels available for beginners to experts.",
    image: "/placeholder.svg?height=400&width=600",
    registrationFee: "$12 per participant",
    prizes: ["First Prize: $500", "Second Prize: $250", "Third Prize: $125"],
    teamSize: "Individual",
    contactPerson: {
      name: "Sarah Johnson",
      email: "sarah@jumanjifest.com",
      phone: "+1 (123) 456-7895",
    },
  },
]


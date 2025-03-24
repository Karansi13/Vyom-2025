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
  rules: string
  teamSize: string
  contactPerson: {
    name: string
    phone: string
    email?: string
  }[]
}


export const eventsData: Event[] = [
  {
    id: "box-cricket",
    title: "BOX CRICKET",
    category: "Sports",
    date: "March 26, 2025",
    time: "9:00 AM - 9:00 PM",
    venue: "In front of Central Library",
    description:
      "🏏 Vyom '25 Box Cricket Competition - Registration Form 🏆\n\n📅 Starting Date: 26th March 2025\n📍 Venue: In front of Central Library\n\nGet ready to hit the ground running at the Vyom '25 Box Cricket Competition! Lace up your shoes, grab your bat, and join us for an action-packed day of thrilling box cricket matches. Show off your skills, strategize with your team, and experience the excitement of this offline sporting event. Don't miss out on the chance to be part of this unforgettable day of competition and camaraderie!\n\n",
    image: "/events/box-cricket.png",
    registrationFee: "$20 per team",
    rules: "Team Composition & Eligibility:\n✅ Each team must consist of 8 players (5 Boys + 3 Girls).\n\n✅ Teams must be formed within the same college (RCET, RCPSR, RIPER & GDRCST). No cross-college teams are allowed.\n✅ No restrictions on branch, semester, or year.\n✅ One player can only play for one team. If a player is found playing for multiple teams, both teams will be disqualified (applies to both men and women).\n✅ Each team can have a maximum of 3 players who have represented the University/College team.\n✅ No substitutes for either boys or girls.\n✅ Proper sportswear is mandatory (Shoes, T-Shirt, Lower).\n\n🏟 Playing Area & Rules:\n✔ Box cricket is played in a confined space, not on a full-sized cricket field.\n✔ The playing area is marked by boundaries to denote runs and limits.\n✔ No hit-wicket rule for girls.\n✔ First over must be bowled by a girl.\n✔ At least one girl must take strike during batting.\n✔ Full-arm bowling is mandatory for boys.\n✔ No restrictions on bowling action for girls.\n✔ The bowler must stand inside the designated box while delivering the ball, with no additional steps allowed.\n✔ Second bouncer in an over will be considered a No Ball.\n✔ If the ball passes over the boundary/fence, the batsman is out (except in case of a No Ball or Free Hit).\n✔ No Ball rules will follow International Cricket standards.\n✔ No extra runs for Byes & Leg Byes.\n✔ No Ball and Wide Ball = 1 extra run.\n✔ Rules can be modified by higher authorities during the match if necessary.\n\n⏳ Overs Format:\n📌 Matches will be played with a limited number of overs per side (typically 4 overs per innings, subject to format and time availability).\n\n👨‍⚖ Umpires & Fair Play Rules:\n✔ Matches will be officiated by one or two umpires, depending on availability.\n✔ The umpire’s decision is final. Arguing with the umpire may lead to team disqualification.\n✔ Good sportsmanship & fair play are expected from all participants.\n\n",
    teamSize: "8 members",
    contactPerson: [
    {
      name: "Vipul",
      phone: "9798274596",
    },
    {
      name: "Praveen",
      phone: "8253075416",
    },
    {
      name: "Aditya raj",
      phone: "9234578690",
    },
  ]
  },
 ]


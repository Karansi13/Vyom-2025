export interface Event {
  id: string
  title: string
  category: string
  date: string
  time: string
  venue: string
  description: string
  image: string
  rules?: string
  registrationLink: string
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
    registrationLink: "https://imgur.com/yRUEloN.png",
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
  {
    id: "carrom",
    title: "Carrom",
    category: "Sports",
    date: "April 7, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "B-BLOCK",
    description: "🎯 Vyom '25 Carrom Tournament - Registration Form 🎯\n\nTest your precision and skills in the Carrom Tournament at Vyom '25! Compete in an exciting battle of strategy and accuracy.",
    image: "https://imgur.com/n0SJuoa.png",
    registrationLink: "https://forms.gle/J3BxvsSZxGGMBuzN8",
    teamSize: "Single Player",
    contactPerson: [
      {
        name: "Shubham Mishra",
        phone: "8102060860",
      },
      {
        name: "Abhishek Sinha",
        phone: "7070886021",
      },
    ]
  },
  {
    id: "chess",
    title: "Chess",
    category: "Sports",
    date: "April 7, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "B-BLOCK",
    description: "♟️ Vyom '25 Chess Championship ♟️\n\nShowcase your intellect and strategic thinking in the ultimate battle of wits at Vyom '25! Compete against the best minds and claim victory.",
    image: "https://imgur.com/5S8qqMH.png",
    registrationLink: "https://forms.gle/Y1s9bh9SZBeVJGk38",
    teamSize: "Single Player",
    contactPerson: [
      {
        name: "Vipul Kumar Sahil",
        phone: "7632013805",
      },
      {
        name: "Azad Agrawal",
        phone: "7750081487",
      },
    ]
  },
  {
    id: "volleyball",
    title: "Volleyball",
    category: "Sports",
    date: "March 26, 2025",
    time: "10:00 AM - 7:00 PM",
    venue: "Main Volleyball Court",
    description: "🏐 Vyom '25 Volleyball Tournament! \n\nA high-energy game awaits you at Vyom '25! Gather your team and take on the challenge.",
    image: "https://imgur.com/kMJYFYh.png",
    registrationLink: "https://forms.gle/mrTtYzf5v3KKknmQ7",
    teamSize: "For both boys and girls",
    contactPerson: [
      {
        name: "Shubham Kumar",
        phone: "8207844340",
      },
      {
        name: "Parth Roopwani",
        phone: "8839000134",
      },
    ]
  },
  {
    id: "football",
    title: "7-a-Side Football",
    category: "Sports",
    date: "March 26, 2025",
    time: "9:00 AM - 8:00 PM",
    venue: "Football Ground",
    description: "⚽ Vyom '25 Football Tournament ⚽\n\nShowcase your footwork and strategy in the 7-a-Side Football Tournament!",
    image: "https://imgur.com/8u3m5UG.png",
    registrationLink: "https://forms.gle/xtRs1Lvqh8njYReL6",
    teamSize: "Only boys (7 members)",
    contactPerson: [
      {
        name: "Ankit Regmi",
        phone: "8982901499",
      },
      {
        name: "Dheeraj Markam",
        phone: "9111410436",
      },
    ]
  },
  {
    id: "basketball",
    title: "Basketball",
    category: "Sports",
    date: "March 26, 2025",
    time: "10:00 AM - 8:00 PM",
    venue: "Basketball Court",
    description: "🏀 Vyom '25 Basketball Championship! \n\nGet ready to dribble, shoot, and score in the Vyom '25 Basketball Tournament.",
    image: "https://imgur.com/ka6yIzW.png",
    registrationLink: "https://forms.gle/qNWMotzPGcTSRTHy9",
    teamSize: "For both boys and girls",
    contactPerson: [
      {
        name: "Jateen Kumaar",
        phone: "8102852664",
      },
      {
        name: "Alok Kumar Yadav",
        phone: "9893334879",
      },
    ]
  },
  {
    id: "athletics",
    title: "Athletics",
    category: "Sports",
    date: "March 26, 2025",
    time: "9:00 AM - 5:00 PM",
    venue: "Athletics Track",
    description: "🏃‍♂️ Vyom '25 Athletics Meet 🏃‍♀️\n\nPush your limits and race towards victory in the Athletics event at Vyom '25!",
    image: "https://imgur.com/7b4ZoL9.png",
    registrationLink: "https://forms.gle/CsrZvDHh8ZKyV5fE8",
    teamSize: "Individual",
    contactPerson: [
      {
        name: "Raj Bharti",
        phone: "8102893301",
      },
      {
        name: "Risabh Kumar Shukla",
        phone: "9685239854",
      },
      {
        name: "Govind Kaushal",
        phone: "9111497214",
      },
    ]
  },
  {
    id: "kabaddi",
    title: "Kabaddi",
    category: "Sports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Kabaddi Court",
    description: "🤼 Vyom '25 Kabaddi Tournament 🤼\n\nShow your strength, agility, and teamwork in the Vyom '25 Kabaddi challenge!",
    image: "https://imgur.com/kiHqHfc.png",
    registrationLink: "https://forms.gle/pxhxVgstmCuNynnw5",
    teamSize: "7 players",
    contactPerson: [
      {
        name: "Karra Kushal",
        phone: "9827209452",
      },
      {
        name: "Kamalkant Sahu",
        phone: "6268439625",
      },

    ]
  },
  {
    id: "kho-kho",
    title: "Kho Kho",
    category: "Sports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Sports Ground",
    description: "Show your strategy and speed in the Vyom '25 Kho Kho championship!",
    image: "https://imgur.com/0NSAO2o.png",
    registrationLink: "https://forms.gle/9iscd5mPvhd2qzyYA",
    teamSize: "Standard team",
    contactPerson: [
      {
        name: "Ayush Pradhan",
        phone: "9006634944",
      },
      {
        name: "Tomesh Sinha",
        phone: "8305971269",
      },
    ]
  },
  {
    id: "table-tennis",
    title: "Table Tennis",
    category: "Sports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Indoor Sports Complex",
    description: "Showcase your precision and reflexes in the Vyom '25 Table Tennis tournament!",
    image: "https://imgur.com/oL1hV7h.png",
    registrationLink: "https://forms.gle/VTHqrnpNfezHiCNj6",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Navneet Dhote",
        phone: "8319790428",
      },
      {
        name: "Raveena Kumari",
        phone: "9934771183",
      },
    ]
  },
  {
    id: "shotput",
    title: "Shotput",
    category: "Sports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Athletics Field",
    description: "Test your strength and technique in the Vyom '25 Shotput competition!",
    image: "https://imgur.com/GnwQJbB.png",
    registrationLink: "https://forms.gle/1LjQhmawAPpmhGqj9",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Govind Kaushal",
        phone: "9111497214",
      },
      {
        name: "Satyam Kumar Mishra",
        phone: "9608644797",
      },
    ]
  },
  {
    id: "throw-ball",
    title: "Throw Ball",
    category: "Sports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Sports Ground",
    description: "Join the exciting Vyom '25 Throw Ball competition and show your team coordination!",
    image: "https://imgur.com/Hk1xP4p.png",
    registrationLink: "https://forms.gle/ZZZBTdCfHcoNFeG49",
    teamSize: "Team event",
    contactPerson: []
  },
  {
    id: "arm-wrestling",
    title: "Arm Wrestling",
    category: "Sports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Indoor Sports Arena",
    description: "Challenge your opponents in a test of strength at the Vyom '25 Arm Wrestling championship!",
    image: "https://imgur.com/JIZCLaP.png",
    registrationLink: "https://forms.gle/LtSUjdBSZ1XPLyD86",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Ansh Nandurkar",
        phone: "9343456627",
      },
      {
        name: "Millind Raina",
        phone: "6005601405",
      },
    ]
  },
  {
    id: "bgmi",
    title: "BGMI",
    category: "esports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "E-sports Arena",
    description: "Compete in Battlegrounds Mobile India at Vyom '25! Bring your own equipment.",
    image: "https://imgur.com/jpfVCw7.png",
    registrationLink: "https://forms.gle/iREYdUjY3LN7ZZsR9",
    teamSize: "Bring your own equipment",
    contactPerson: [
      {
        name: "Arjav Jain",
        phone: "8319337033",
      },
    ]
  },
  {
    id: "valorant",
    title: "Valorant",
    category: "esports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "E-sports Arena",
    description: "Show your tactical shooter skills in Vyom '25 Valorant tournament!",
    image: "https://imgur.com/hHhAZtn.png",
    registrationLink: "https://forms.gle/9HdRkpYC3TmgJzW9A",
    teamSize: "Bring your own equipment",
    contactPerson: [
      {
        name: "Kaushik Kumar Sinha",
        phone: "9135447701",
      },
    ]
  },
  {
    id: "free-fire",
    title: "Free Fire",
    category: "esports",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "E-sports Arena",
    description: "Battle it out in the Vyom '25 Free Fire tournament!",
    image: "https://imgur.com/5j3bkkN.png",
    registrationLink: "https://forms.gle/sew8zMLwpXJ7YRFq8",
    teamSize: "4 members",
    contactPerson: []
  },
  {
    id: "hopscotch",
    title: "Hopscotch",
    category: "Funevents",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Recreation Area",
    description: "Experience the childhood fun with a twist at Vyom '25 Hopscotch challenge! (With Bricks)",
    image: "https://imgur.com/A4FPn6E.png",
    registrationLink: "https://forms.gle/kgru2V7Bxo3fg7W56",
    teamSize: "Single",
    contactPerson: []
  },
  {
    id: "tug-of-war",
    title: "Tug of War",
    category: "Funevents",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Sports Ground",
    description: "Gather your team for an exciting test of strength in the Vyom '25 Tug of War!",
    image: "https://imgur.com/6C6YZ3Y.png",
    registrationLink: "https://forms.gle/AvcqScPbdXfPUDTU9",
    teamSize: "Team event",
    contactPerson: [
      {
        name: "Abhinav Mishra",
        phone: "7999410033",
      },
    ]
  },
  {
    id: "pushup-competition",
    title: "Pushup Competition",
    category: "Funevents",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Fitness Zone",
    description: "Test your endurance in the Vyom '25 Pushup Competition!",
    image: "https://imgur.com/ODd0c6p.png",
    registrationLink: "https://forms.gle/2o5tZSz6h24Pbh8G9",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Somil Pratap Singh",
        phone: "8827193209",
      },
    ]
  },
  {
    id: "bar-hanging",
    title: "Bar Hanging Competition",
    category: "Funevents",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Fitness Zone",
    description: "How long can you hang? Challenge your grip strength at the Vyom '25 Bar Hanging Competition!",
    image: "https://imgur.com/Ioc1vbi.png",
    registrationLink: "https://forms.gle/get8A945s6f71m3t8",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Durgesh Kr. Sahu",
        phone: "7828229488",
      },
    ]
  },
  {
    id: "treasure-hunt",
    title: "Treasure Hunt",
    category: "Funevents",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Campus Grounds",
    description: "Put your problem-solving skills to the test in the exciting Vyom '25 Treasure Hunt!",
    image: "https://imgur.com/r9rW3IC.png",
    registrationLink: "https://forms.gle/D7981HxRWGGoUvAW9",
    teamSize: "4 members",
    contactPerson: [
      {
        name: "Arpit Banerjee",
        phone: "7587456745",
      },
    ]
  },
  {
    id: "sack-race",
    title: "Sack Race",
    category: "Funevents",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Sports Field",
    description: "Hop your way to victory in the classic Vyom '25 Sack Race!",
    image: "https://imgur.com/Qs1TeTk.png",
    registrationLink: "https://forms.gle/rJDMtMkukwspn1tNA",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Ashish Kumar",
        phone: "6207014515",
      },
    ]
  },
  {
    id: "ball-dribbling",
    title: "Ball Dribbling",
    category: "funevents",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Sports Court",
    description: "Show your ball control skills in the Vyom '25 Ball Dribbling challenge!",
    image: "https://imgur.com/oMF19Yy.png",
    registrationLink: "https://forms.gle/V2dWjBXJffqpWLo57",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Sumant Kumar Thakur",
        phone: "8340565168",
      },
    ]
  },
  {
    id: "ai-agent-showcase",
    title: "AI Agent Showcase",
    category: "Technical",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Tech Hub",
    description: "Demonstrate your AI innovation at the Vyom '25 AI Agent Showcase!",
    image: "https://imgur.com/b1qP7j2.png",
    registrationLink: "https://forms.gle/chUhZyNY27uPzLX98",
    teamSize: "4 Members",
    contactPerson: [
      {
        name: "Hardik Pawar",
        phone: "9098044880",
      },
    ]
  },
  {
    id: "one-dollar-venture",
    title: "1$ Venture",
    category: "Technical",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Innovation Center",
    description: "Start with $1 and create a profitable venture at Vyom '25!",
    image: "",
    registrationLink: "https://forms.gle/47bKukWxFtMf7ijC6",
    teamSize: "4 member",
    contactPerson: [
      {
        name: "Khushi Mahato",
        phone: "7858805562",
      },
    ]
  },
  {
    id: "escape-room",
    title: "Escape Room",
    category: "Technical",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Challenge Center",
    description: "Solve puzzles, find clues and escape within time at the Vyom '25 Escape Room challenge!",
    image: "https://imgur.com/16yHH8K.png",
    registrationLink: "https://forms.gle/9fLddAtuqM1xCa34A",
    teamSize: "2 Members",
    contactPerson: [
      {
        name: "Kriti Priya",
        phone: "6204276054",
      },
    ]
  },
  {
    id: "game-development",
    title: "Game Development Jam",
    category: "Technical",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Dev Lab",
    description: "Design and build exciting games at the Vyom '25 Game Development Jam!",
    image: "https://imgur.com/VRnrJ4f.png",
    registrationLink: "https://forms.gle/rZKUv9bSC4jZNu7N6",
    teamSize: "4 Members",
    contactPerson: [
      {
        name: "Sayan Karmakar",
        phone: "7848948443",
      },
    ]
  },
  {
    id: "solo-dance",
    title: "Solo Dance",
    category: "Cultural",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Auditorium",
    description: "Express yourself through dance at the Vyom '25 Solo Dance competition!",
    image: "https://imgur.com/5LQDanU.png",
    registrationLink: "https://forms.gle/Dc9Zcy6F5bBvKqXW7",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Tisha Si",
        phone: "7666799375",
      },
      {
        name: "Shashank",
        phone: "9329854467",
      },
    ]
  },
  {
    id: "solo-singing",
    title: "Solo Singing",
    category: "Cultural",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Auditorium",
    description: "Showcase your vocal talent at the Vyom '25 Solo Singing competition!",
    image: "https://imgur.com/dUefwh3.png",
    registrationLink: "https://forms.gle/Bx2uV4zyhVk7eCyb6",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Sujal Bisen",
        phone: "772496424",
      },
      {
        name: "Tisu Sahu",
        phone: "8640076357",
      },
    ]
  },
  {
    id: "group-dance",
    title: "Group Dance",
    category: "Cultural",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Auditorium",
    description: "Synchronize and shine in the Vyom '25 Group Dance competition!",
    image: "https://imgur.com/MnaVkaz.png",
    registrationLink: "https://forms.gle/hFH1KivmFiEfJWA4A",
    teamSize: "Minimum 3 and maximum 7",
    contactPerson: [
      {
        name: "Tisha Si",
        phone: "7666799375",
      },
      {
        name: "Pawan Rao",
        phone: "6204202567",
      },
    ]
  },
  {
    id: "group-singing",
    title: "Group Singing",
    category: "Cultural",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Auditorium",
    description: "Harmonize together at the Vyom '25 Group Singing competition!",
    image: "https://imgur.com/yr4aHsb.png",
    registrationLink: "https://forms.gle/h9L59R4eQHdmXRCJ7",
    teamSize: "Minimum 2 and maximum 5",
    contactPerson: [
      {
        name: "Rishabh Sharma",
        phone: "8092286605",
      },
      {
        name: "Arpit Mishra",
        phone: "9669689470",
      },
    ]
  },
  {
    id: "dance-face-battle",
    title: "Dance Face Battle",
    category: "Cultural",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Auditorium",
    description: "Go head to head in the exciting Vyom '25 Dance Face Battle!",
    image: "https://imgur.com/zQkPaap.png",
    registrationLink: "https://forms.gle/FLiDNwSfchpKHt859",
    teamSize: "On Spot",
    contactPerson: [
      {
        name: "Meena Kadoti",
        phone: "6263181567",
      },
      {
        name: "Angel Mary Toppo",
        phone: "9343738683",
      },
    ]
  },
  {
    id: "song-face-battle",
    title: "Song Face Battle",
    category: "Cultural",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Auditorium",
    description: "Challenge your opponents in the Vyom '25 Song Face Battle!",
    image: "https://imgur.com/4biz5OP.png",
    registrationLink: "https://forms.gle/Jk4Bj2y8iYvbHofe6",
    teamSize: "On Spot",
    contactPerson: [
      {
        name: "Mohammad Jeeshan",
        phone: "6266018657",
      },
      {
        name: "Palak Singh",
        phone: "8305946855",
      },
    ]
  },
  {
    id: "rangoli",
    title: "Rangoli",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Open Area",
    description: "Create colorful art in the traditional Vyom '25 Rangoli competition!",
    image: "https://imgur.com/DCqvKJh.png",
    registrationLink: "https://forms.gle/wNuS64nd6Rsxgd5k9",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Aashefa Zeenath",
        phone: "9179277609",
      },
      {
        name: "Pracheta Singh",
        phone: "7389641209",
      },
    ]
  },
  {
    id: "master-chef-with-fire",
    title: "Master Chef with Fire",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Culinary Zone",
    description: "Cook up a storm at the Vyom '25 Master Chef competition!",
    image: "https://imgur.com/nzm6xQM.png",
    registrationLink: "https://forms.gle/yiCdcxSDXagvLGrz8",
    teamSize: "4 member (mix)",
    contactPerson: [
      {
        name: "Dhananjay Kumar",
        phone: "7050137438",
      },
      {
        name: "Manjeet Kumar",
        phone: "7004671474",
      },
    ]
  },
  {
    id: "master-chef-without-fire",
    title: "Master Chef without Fire",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Culinary Zone",
    description: "Create delicious no-cook dishes at the Vyom '25 Master Chef without Fire competition!",
    image: "https://imgur.com/Kw6O6jc.png",
    registrationLink: "https://forms.gle/GNTt3565vpLKjER58",
    teamSize: "4 member (mix)",
    contactPerson: [
      {
        name: "Manjeet Kumar",
        phone: "7004671474",
      },
      {
        name: "Tanya Shree",
        phone: "9334716896",
      },
    ]
  },
  {
    id: "mehandi",
    title: "Mehandi",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Art Center",
    description: "Showcase your henna art skills at the Vyom '25 Mehandi competition!",
    image: "https://imgur.com/vdizQYh.png",
    registrationLink: "https://forms.gle/VmDUUeH64vCBf1Hv6",
    teamSize: "Single",
    contactPerson: []
  },
  {
    id: "reel-making",
    title: "Reel Making",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Digital Studio",
    description: "Create engaging short videos for the Vyom '25 Reel Making competition!",
    image: "https://imgur.com/1fSYILe.png",
    registrationLink: "https://forms.gle/WWZTXcisPXgdevkF7",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Pareshwar Kathel",
        phone: "9399375336",
      },
      {
        name: "Aditya Trivedi",
        phone: "6269832686",
      },
    ]
  },
  {
    id: "short-film-making",
    title: "Short Film Making",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Digital Studio",
    description: "Tell a story through film at the Vyom '25 Short Film Making competition!",
    image: "https://imgur.com/62uGpK1.png",
    registrationLink: "https://forms.gle/SPpgQQ7JGSYKSDzQA",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Raj Kumar Gupta",
        phone: "7061974592",
      },
    ]
  },
  {
    id: "photography",
    title: "Photography",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Campus Wide",
    description: "Capture moments at the Vyom '25 Photography competition!",
    image: "https://imgur.com/uF3gmqz.png",
    registrationLink: "https://forms.gle/YyDpADpYVFPj4vLX6",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Anshika Shrivastava",
        phone: "9399017782",
      },
    ]
  },
  {
    id: "bar-hanging-competition",
    title: "Bar Hanging Competition",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Fitness Zone",
    description: "Test your grip strength and endurance at the Vyom '25 Bar Hanging Competition!",
    image: "https://imgur.com/Ioc1vbi.png",
    registrationLink: "https://forms.gle/zbiNAJ8DHa2pN1sg7",
    teamSize: "Single",
    contactPerson: []
  },
  {
    id: "digital-poster-making",
    title: "Online Digital Poster Making",
    category: "Other",
    date: "March 26, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "Virtual",
    description: "Showcase your digital design skills at the Vyom '25 Online Digital Poster Making competition!",
    image: "https://imgur.com/nUzRlGJ.png",
    registrationLink: "https://forms.gle/C2ZEmrjQDBzx1QJw8",
    teamSize: "Single",
    contactPerson: [
      {
        name: "Sagen Murmu",
        phone: "8102148923",
      },
    ]
  }

]


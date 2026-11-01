/* ============================================================================
   EVENT CONFIG — THE SINGLE SOURCE OF TRUTH
   ----------------------------------------------------------------------------
   Change the event name, tagline, dates, venue, organizers or theme HERE and
   every page, the navbar, hero, footer, countdown and document title update.
   Nothing else in the app hard-codes event information.
   ========================================================================== */

export const event = {
  /* ---------------------------------------------------------------- identity */
  name: "CODE KOLKATA",
  shortName: "CODE KOLKATA",
  monogram: "CK",
  edition: "01",
  year: "2026",
  theme: "BUILD FOR KOLKATA",
  tagline: "TWO COMMUNITIES. ONE CITY. SHIP SOMETHING LEGENDARY.",
  intro:
    "CODE KOLKATA is a 24-hour build sprint where two communities collide. Bring an idea, a laptop and unreasonable ambition — leave with a working product, a crew and a story worth posting.",

  /* ------------------------------------------------------- dates & location */
  dates: {
    label: "DATES TBA",
    shortLabel: "DATES TBA",
    // Used by the live countdown. Update this ISO string when dates are final.
    iso: "2026-12-12T10:00:00+05:30",
    isConfirmed: false,
    note: "Provisional window. The final weekend drops with the theme reveal.",
  },
  venue: {
    name: "VENUE TBA",
    city: "Kolkata, India",
    isConfirmed: false,
    note: "A 24-hour indoor venue with power, Wi-Fi and enough coffee to keep 500 builders upright.",
  },

  /* -------------------------------------------------------------- register */
  registration: {
    // Paste a Devfolio / Google Form / Typeform URL to send every CTA there.
    url: null,
    isOpen: false,
    label: "Registration opens soon",
    formNote:
      "Preview build — this form validates locally and is not connected to a backend yet.",
  },

  /* ------------------------------------------- the two organizing parties */
  organizers: [
    {
      name: "Bug Busters Community",
      role: "Host community",
      monogram: "BB",
      href: "https://instagram.com/community.bugbusters",
      blurb:
        "A builder-first community running offline hackathons, workshops and demo nights for students and early-career developers — and co-hosting CODE KOLKATA.",
    },
    {
      name: "Co-organizer TBA",
      role: "Co-organizer",
      monogram: "CO",
      href: null,
      blurb:
        "The second half of the CODE KOLKATA collaboration. Name, crew and links are confirmed with the joint announcement.",
    },
  ],

  /* -------------------------------------------------------------- socials */
  socials: [
    {
      label: "Instagram",
      handle: "@community.bugbusters",
      href: "https://instagram.com/community.bugbusters",
      icon: "instagram",
    },
    { label: "LinkedIn", handle: "Link coming soon", href: null, icon: "linkedin" },
    { label: "GitHub", handle: "Link coming soon", href: null, icon: "github" },
    { label: "X", handle: "Link coming soon", href: null, icon: "x" },
  ],
  contactEmail: null,

  /* ---------------------------------------------------------------- stats */
  stats: [
    { value: 8, suffix: "H", label: "Build sprint", hint: "Non-stop, mentor-supported" },
    { value: 100, suffix: "+", label: "Builders expected", hint: "Students and early-career devs" },
    { value: 24, suffix: "", label: "Mentors on deck", hint: "Product, AI, design, infra" },
    { value: 2, suffix: "", label: "Communities, one room", hint: "Two crews, one leaderboard" },
  ],

  /* ---------------------------------------------------------------- about */
  about: {
    paragraphs: [
      "CODE KOLKATA is not another webinar with a certificate at the end. It is a room full of people who would rather ship a rough version tonight than polish a slide deck for a month.",
      "Two organizer communities are combining their crews, mentors and networks for one shared build weekend in Kolkata. The theme and track list stay under wraps until the reveal — the format does not.",
    ],
    expectations: [
      {
        title: "Real build time",
        desc: "A protected 24-hour sprint with checkpoints, not a day of back-to-back talks.",
        icon: "clock",
      },
      {
        title: "Mentors who have shipped",
        desc: "Office hours with engineers, designers and founders who will read your code and your pitch.",
        icon: "users",
      },
      {
        title: "Two communities",
        desc: "Meet builders from both crews behind CODE KOLKATA, swap war stories and leave with a wider network.",
        icon: "compass",
      },
      {
        title: "Demo in front of everyone",
        desc: "Every team gets a table, a stage slot and honest feedback from the judging panel.",
        icon: "award",
      },
    ],
  },

  /* --------------------------------------------------------------- tracks */
  tracks: [
    {
      title: "AI & Automation",
      desc: "Ship an agent that does one job unreasonably well — and can explain how it did it.",
      icon: "cpu",
      tags: ["LLMs", "RAG", "Agents"],
    },
    {
      title: "Web & Product",
      desc: "Interfaces people actually want to use. Fast, accessible and finished enough to demo.",
      icon: "layers",
      tags: ["React", "APIs", "UX"],
    },
    {
      title: "Hardware & IoT",
      desc: "Make something beep, blink or move. Sensors, microcontrollers and messy desk wiring welcome.",
      icon: "box",
      tags: ["Sensors", "Robotics", "Edge"],
    },
    {
      title: "Design & Story",
      desc: "Brand, motion and narrative for a product that does not exist yet. Make the pitch feel inevitable.",
      icon: "pen",
      tags: ["Brand", "Motion", "Pitch"],
    },
  ],

  /* ------------------------------------------------------------- schedule */
  schedule: {
    isConfirmed: false,
    note: "Tentative run-of-show. Timings shift once the venue and final date are locked.",
    days: [
      {
        id: "day-1",
        label: "Day 01",
        date: "DATE TBA",
        theme: "Arrive, form up, start shipping",
        items: [
          {
            time: "08:30",
            title: "Check-in & coffee",
            desc: "Badge pickup, team matching board, breakfast and the first of many espressos.",
            type: "Logistics",
          },
          {
            time: "10:00",
            title: "Opening keynote",
            desc: "The CODE KOLKATA crew sets the brief, reveals the theme and explains how judging works.",
            type: "Stage",
          },
          {
            time: "11:00",
            title: "Build sprint begins",
            desc: "24 hours on the clock. Pick a track, claim a table, start breaking things.",
            type: "Build",
          },
          {
            time: "14:00",
            title: "Mentor office hours",
            desc: "Book 15-minute slots with product, AI, design and infrastructure mentors.",
            type: "Mentors",
          },
          {
            time: "19:00",
            title: "Midway demos",
            desc: "Two minutes per team, zero slides. Find out what is actually working.",
            type: "Demo",
          },
          {
            time: "22:00",
            title: "Night build & lo-fi room",
            desc: "Heads-down hours with snacks, a quiet room and mentors on rotation until late.",
            type: "Build",
          },
        ],
      },
      {
        id: "day-2",
        label: "Day 02",
        date: "DATE TBA",
        theme: "Finish, pitch, celebrate",
        items: [
          {
            time: "09:00",
            title: "Breakfast & standup",
            desc: "Ten-minute standups, final mentor sweep and a hard look at what is left.",
            type: "Logistics",
          },
          {
            time: "12:00",
            title: "Code freeze",
            desc: "Repos locked, demo links submitted. No new features, only rehearsal.",
            type: "Build",
          },
          {
            time: "13:00",
            title: "Judging expo",
            desc: "Every team gets a table. Judges rotate through with a scorecard and real questions.",
            type: "Demo",
          },
          {
            time: "15:30",
            title: "Finals on stage",
            desc: "Top teams pitch live to the full room and the judging panel.",
            type: "Stage",
          },
          {
            time: "17:00",
            title: "Awards & closing",
            desc: "Prizes, photos, closing notes and the after-party plan.",
            type: "Ceremony",
          },
        ],
      },
    ],
  },

  /* --------------------------------------------------------------- prizes */
  prizes: {
    poolLabel: "PRIZE POOL TBA",
    note: "Cash, credits and swag are being finalised with partners. Categories are locked.",
    tiers: [
      {
        place: "01",
        title: "Champion",
        amount: "TBA",
        desc: "Best overall build across every track, judged on execution, originality and demo.",
        perks: ["Largest cash prize", "Champion trophy", "Partner credits", "Mentor fast-track"],
        tone: "gold",
      },
      {
        place: "02",
        title: "Runner-up",
        amount: "TBA",
        desc: "The second-strongest build of the weekend — close call, real product.",
        perks: ["Cash prize", "Runner-up trophy", "Partner credits", "Swag drop"],
        tone: "primary",
      },
      {
        place: "03",
        title: "Best First Build",
        amount: "TBA",
        desc: "Awarded to a team where nobody has shipped a hackathon project before.",
        perks: ["Cash prize", "Beginner track kit", "Mentor sessions", "Swag drop"],
        tone: "secondary",
      },
    ],
    categories: [
      { title: "Track winners", desc: "One winner per revealed track, picked by track mentors.", icon: "award" },
      { title: "Judge's pick", desc: "A single wildcard for the weirdest idea that actually worked.", icon: "spark" },
      { title: "Community choice", desc: "Voted by everyone in the room during the judging expo.", icon: "users" },
      { title: "Best use of a partner API", desc: "Presented by the partner engineering team.", icon: "code" },
    ],
    perks: [
      "Certificates for every finisher",
      "Limited-edition event swag",
      "Cloud & API credits from partners",
      "Mentor 1:1s for shortlisted teams",
    ],
  },

  /* ------------------------------------------------------------- sponsors */
  sponsorTiers: [
    {
      tier: "Title partner",
      slots: 1,
      headline: "Put your name on the whole weekend",
      benefits: [
        "Naming rights across the event brand",
        "Opening keynote slot on Day 01",
        "Primary logo on hero, stage and certificates",
        "Dedicated prize track + judging seat",
        "Recruiting booth and attendee opt-ins",
      ],
      featured: true,
    },
    {
      tier: "Platinum",
      slots: 2,
      headline: "Own a track from brief to demo",
      benefits: [
        "Logo on the hero and track pages",
        "Sponsored track with your own brief",
        "Workshop or fireside slot",
        "Judging seat and booth space",
      ],
    },
    {
      tier: "Gold",
      slots: 4,
      headline: "Meet builders at the table",
      benefits: [
        "Logo across the site and stage loop",
        "Mentor or workshop slot",
        "Swag in every welcome kit",
        "Post-event talent report",
      ],
    },
    {
      tier: "Community",
      slots: 8,
      headline: "Fuel the room, get the love",
      benefits: [
        "Community partner logo wall",
        "Shout-outs from the stage",
        "Swag or refreshment sponsorship",
        "First access to the highlight reel",
      ],
    },
  ],
  sponsorNote:
    "Partner decks, audience numbers and custom packages are shared on request. Every slot is currently open.",

  /* --------------------------------------------------------------- mentors */
  mentors: {
    isConfirmed: false,
    note: "Mentor roster is being onboarded. Roles are locked; names drop with the theme reveal.",
    cards: [
      { role: "AI & ML Mentor", focus: "Model selection, evals, shipping agents", icon: "cpu", tags: ["LLMs", "Python"] },
      { role: "Product & UX Mentor", focus: "Scope, flows, demo-ready interfaces", icon: "pen", tags: ["Figma", "Story"] },
      { role: "Web Engineering Mentor", focus: "React, APIs, performance under pressure", icon: "code", tags: ["React", "Node"] },
      { role: "Hardware Mentor", focus: "Sensors, firmware and power that lasts 24h", icon: "box", tags: ["Arduino", "Edge"] },
      { role: "Founder in Residence", focus: "Pitch structure, business model, judge questions", icon: "spark", tags: ["Pitch", "GTM"] },
      { role: "Design Systems Mentor", focus: "Tokens, components and accessibility checks", icon: "layers", tags: ["Tokens", "A11y"] },
    ],
  },

  /* ----------------------------------------------------------- team roster */
  team: {
    isConfirmed: false,
    note: "The joint CODE KOLKATA core crew is being assembled. Roles are final; names are announced with the organizers.",
    crew: [
      { role: "Event Lead", area: "Direction", monogram: "EL" },
      { role: "Operations", area: "Venue & logistics", monogram: "OP" },
      { role: "Design", area: "Brand & site", monogram: "DS" },
      { role: "Engineering", area: "Platform & judging", monogram: "EN" },
      { role: "Community", area: "Outreach & partners", monogram: "CM" },
      { role: "Content", area: "Stage & socials", monogram: "CT" },
    ],
  },

  /* -------------------------------------------------------------- partners */
  partnerProgram: [
    { title: "Community partners", slots: "6 slots", desc: "Communities that bring builders, run meetups and amplify the call for entries.", icon: "users" },
    { title: "Campus chapters", slots: "10 slots", desc: "College clubs and student chapters sending teams and hosting watch parties.", icon: "compass" },
    { title: "Media partners", slots: "2 slots", desc: "Newsletters, podcasts and creators covering the build weekend end to end.", icon: "spark" },
    { title: "Tooling partners", slots: "3 slots", desc: "Developer tools offering credits, workshops or a prize track for the room.", icon: "code" },
  ],

  /* --------------------------------------------------------------- marquee */
  marquee: [
    "TITLE PARTNER · SLOT OPEN",
    "PLATINUM · SLOT OPEN",
    "GOLD · SLOT OPEN",
    "COMMUNITY PARTNER · SLOT OPEN",
    "MEDIA PARTNER · SLOT OPEN",
    "SWAG PARTNER · SLOT OPEN",
  ],

  /* ---------------------------------------------------------------- FAQs */
  faqs: [
    {
      q: "Who can take part?",
      a: "CODE KOLKATA is open to students, early-career developers, designers and builders from any college or community. Teams can be 1–4 people; solo builders are welcome and can join a team at check-in.",
    },
    {
      q: "Do I need a finished idea to register?",
      a: "No. You can register with a track preference and no idea at all. The theme and track briefs are revealed at the opening keynote, and there is a team-matching board on Day 01.",
    },
    {
      q: "What does it cost?",
      a: "Application is free. Any deposit, travel support or confirmation fee will be stated clearly on the registration page before you commit — no surprise charges.",
    },
    {
      q: "What should I bring?",
      a: "Laptop, charger, student or government ID, and anything you need to sleep comfortably. Power, Wi-Fi, meals and coffee are provided on site.",
    },
    {
      q: "How are projects judged?",
      a: "Working demo first, then originality, execution and the quality of your story. Judges rotate across every table during the expo and score with a shared rubric.",
    },
    {
      q: "Is the venue accessible?",
      a: "Accessibility requirements are collected during registration. Tell us what you need — step-free access, a quiet room, dietary requirements — and the operations crew will plan for it.",
    },
  ],
};

/* Compatibility alias so pages can `import event from "../config/event"`. */
export default event;

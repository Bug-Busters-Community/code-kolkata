/* ============================================================================
   EVENT CONFIG — THE SINGLE SOURCE OF TRUTH
   ----------------------------------------------------------------------------
   Change the event name, tagline, dates, venue, organizers or theme HERE and
   every page, the navbar, hero, footer, countdown and document title update.
   Nothing else in the app hard-codes event information.
   ========================================================================== */

import AnibotixRobotics from "../assets/pics/anibotixBadge.png";
import n8n from "../assets/pics/n8n.png";
import GenXYZ from "../assets/pics/genxyz.png";
import InterviewBuddy from "../assets/pics/interviewbuddy.png";
import ImagiwaeveStudios from "../assets/pics/imagiwaevestudios.png";

/* Official X profile URL. */
export const X_SOCIAL_URL = "https://x.com/BugBusters";

export const event = {
  /* ---------------------------------------------------------------- identity */
  name: "CODE KOLKATA",
  shortName: "CODE KOLKATA",
  monogram: "CK",
  edition: "01",
  year: "",
  theme: "Discovering Kolkata Through AI & Innovation",
  collaboration: "",
  tagline: "TWO COMMUNITIES. ONE CITY. SHIP SOMETHING LEGENDARY.",
  intro:
    "CODE KOLKATA is a 8-hour tech event. Bring an idea, a laptop and unreasonable ambition, leave with a working product, a crew and a story worth posting.",

  /* ------------------------------------------------------- dates & location */
  dates: {
    label: "28th November",
    shortLabel: "28th November",
    // Used by the live countdown. 28 November , 10:00 AM IST.
    iso: "2026-11-28T10:00:00+05:30",
    isConfirmed: true,
    note: "28 November  · 10:00 AM IST.",
  },
  venue: {
    name: "Jadavpur University, Kolkata",
    city: "Kolkata, India",
    isConfirmed: true,
    note: "A 8-hour indoor venue with power, Wi-Fi and enough energy to keep 100 builders upright.",
  },

  /* -------------------------------------------------------------- register */
  registration: {
    // Paste a Devfolio / Google Form / Typeform URL to send every CTA there.
    url: null,
    isOpen: false,
    label: "Registration live",
    formNote:
      "Preview build — this form validates locally and is not connected to a backend yet.",
  },

  /* ------------------------------------------- the two organizing parties */
  organizers: [
    {
      name: "Bug Busters Community",
      role: "Host community",
      logo: "https://www.bugbusterscommunity.in/Logo.png",
      href: "https://instagram.com/community.bugbusters",
      blurb:
        "A builder-first community running offline hackathons, workshops and demo nights for students and early-career developers — and co-hosting CODE KOLKATA.",
    },
    {
      name: "Anibotix Robotics",
      role: "Co-organizer",
      logo: "https://www.anibotixrobotics.com/logo-pwa.png",
      href: "https://anibotixrobotics.com",
      blurb:
        "The robotics half of the CODE KOLKATA collaboration, bringing hardware builders, makers and roboticists to the room.",
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
    {
      label: "LinkedIn",
      handle: "Bug Busters Community",
      href: "https://www.linkedin.com/company/bug-busters-community/posts/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      handle: "Bug-Busters-Community",
      href: "https://github.com/Bug-Busters-Community",
      icon: "github",
    },
    {
      label: "WhatsApp Community",
      handle: "Join the community",
      href: "https://chat.whatsapp.com/KPtQUSsprdK7i68uD7QB0L",
      icon: "whatsapp",
    },
    {
      label: "X",
      handle: "@BugBusters",
      href: X_SOCIAL_URL,
      icon: "x",
    },
  ],
  contactEmail: null,

  /* ---------------------------------------------------------------- stats */
  stats: [
    { value: 3, suffix: "H", label: "Build sprint", hint: "Non-stop, mentor-supported" },
    { value: 100, suffix: "", label: "Builders expected", hint: "Students and early-career devs" },
    { value: 4, suffix: "", label: "Judges on deck", hint: "Product, AI, design, infra" },
    { value: 2, suffix: "", label: "Mentors on deck", hint: "Two crews, one leaderboard" },
  ],

  /* ---------------------------------------------------------------- about */
  about: {
    paragraphs: [
      "CODE KOLKATA is not another webinar with a certificate at the end. It is a room full of people who would rather ship a rough version tonight than polish a slide deck for a month.",
      "Two organizer communities are combining their crews, mentors and networks for one shared build weekend in Kolkata. The track list stay under wraps until the reveal, the format does not.",
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
        title: "Live Internship",
        desc: "Connect with industry opportunities, gain practical experience, and take your first step towards a professional career.",
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
    note: "Run-of-show for the 24-hour sprint. Timings may shift closer to the event.",
    days: [
      {
        id: "day-1",
        label: "Day 01",
        date: "28th November",
        theme: "Arrive, form up, start shipping",
        items: [
          {
            time: "11:00 AM",
            title: "Welcome",
            desc: "Opening notes and the plan for the day from the CODE KOLKATA crew.",
            type: "10 Minutes",
          },
          {
            time: "11:45 AM",
            title: "Workshop",
            desc: "Hands-on session with mentors to sharpen your build before the sprint.",
            type: "60 Minutes",
          },
          {
            time: "2:00 PM",
            title: "Buildathon",
            desc: "The main event — teams build, test and ship their projects.",
            type: "3 Hours",
          },
          {
            time: "5:10 PM",
            title: "Top 10 Pitch",
            desc: "The top ten teams pitch live to the judges and the room.",
            type: "20 Minutes",
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
        date: "29th November",
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
    "SPONSORSHIP OPPORTUNITIES OPEN",
    "FOOD PARTNER · SLOT OPEN",
    "COMMUNITY PARTNER · SLOT OPEN",
    "SPONSORSHIP OPPORTUNITIES OPEN",
    "BEVERAGE PARTNER · SLOT OPEN",
    "SWAG PARTNER · SLOT OPEN",
  ],

  /* ------------------------------ Sponsors and Community Partners Marquee for landing page */
  sponPartMarquee: [
    {
      logo: AnibotixRobotics,
      name: "Anibotix Robotics",
      title: "Title Sponsor"
    },
    {
      logo: n8n,
      name: "n8n",
      title: "AI & Automation Platform Sponsor"
    },
    {
      logo: GenXYZ,
      name: "Gen.xyz",
      title: "Domain Sponsor"
    },
    {
      logo: AnibotixRobotics,
      name: "Anibotix Robotics",
      title: "Title Sponsor"
    },
    {
      logo: InterviewBuddy,
      name: "Interview Buddy",
      title: "Hiring Sponsor"
    },
    {
      logo: ImagiwaeveStudios,
      name: "Imagiwaeve Studios",
      title: "Fiscal Sponsor"
    },

  ],

  /* ---------------------------------------------------------------- FAQs */
  faqs: [
    {
      q: "Who can take part?",
      a: "CODE KOLKATA is open to students, early-career developers, designers and builders from any college or community. This is a solo event, however for the buildaton, teams will be formed by random selection of 4.",
    },
    {
      q: "Do I need a finished idea to register?",
      a: "No. You can register with a track preference and no idea at all. The theme and track briefs are revealed at the opening keynote.",
    },
    {
      q: "What does it cost?",
      a: "Application is free. Any deposit, travel support or confirmation fee will be stated clearly on the registration page before you commit. No surprise charges.",
    },
    {
      q: "What should I bring?",
      a: "Laptop, charger, student and government ID. Power, Wi-Fi, meals and coffee are provided on site.",
    },
    {
      q: "How are projects judged?",
      a: "Working demo first, then originality, execution and the quality of your story. Judges rotate across every table during the buildathon and score with a shared rubric.",
    },
    {
      q: "Have any other questions?",
      a: "Feel free to reach out to the organizers on social media or via email. We will answer publicly so everyone can benefit.",
    },
  ],
};

/* Compatibility alias so pages can `import event from "../config/event"`. */
export default event;

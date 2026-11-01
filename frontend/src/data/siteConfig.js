/* ==========================================================================
   SITE CONFIGURATION (CENTRAL SOURCE OF TRUTH)
   ========================================================================== */
const siteConfig = {
  eventName: "Code Kolkata",
  organizer: "Bug Busters Community",
  tagline: "Code the Future. Build. Break. Innovate.",
  dateLabel: "November 2026",
  city: "Kolkata, India",
  venue: "To Be Announced",
  theme: "To Be Announced",

  // Limited seats flag (set to true only when explicitly confirmed by team)
  hasLimitedSeatsConfirmed: false,
  limitedSeatsLabel: "Limited Seats",

  // Set to official external link when live (e.g. Devfolio / Google Form)
  registrationUrl: null,

  // Social & Contact Info (Emails hidden unless verified)
  instagramHandle: "@community.bugbusters",
  instagramUrl: "https://instagram.com/community.bugbusters",
  contactEmail: null,

  about: {
    eventDescription:
      "Code Kolkata is Bug Busters' flagship offline technology event designed for builders, breakers, and innovators in Kolkata. It brings together passionate students, developers, designers, and creators for an immersive, hands-on experience.",
    communityDescription:
      "Bug Busters is a tech community that runs offline events, hackathons, and workshops for students and developers. We focus on building real-world projects and fostering innovation.",
    expectations: [
      "Collaborative coding & problem solving",
      "Interactive technical community sessions",
      "Showcasing innovative tech prototypes",
      "Direct engagement with developer peers"
    ]
  },

  themeTracks: {
    isRevealed: false,
    placeholderTitle: "Theme & Tracks Reveal Soon",
    placeholderSub:
      "The official event theme and challenge tracks are currently under wraps. Follow @community.bugbusters on Instagram for the official announcement.",
    tracks: []
  },

  schedule: {
    isConfirmed: false,
    placeholderTitle: "Schedule Coming Soon",
    placeholderSub:
      "The full event agenda, timeline, and registration milestones will be published here once finalized.",
    timeline: []
  },

  highlights: [
    {
      title: "Collaborative Building",
      desc: "Work alongside passionate developers and creators from across the region."
    },
    {
      title: "Interactive Sessions",
      desc: "Gain insights from community leaders and technical mentors."
    },
    {
      title: "Community Networking",
      desc: "Connect with tech enthusiasts, peer developers, and potential collaborators."
    }
  ],

  mentors: {
    isConfirmed: false,
    placeholderTitle: "Mentors & Speakers to Be Announced",
    placeholderSub: "We are onboarding experienced industry mentors and guest speakers. Details will be updated soon."
  },

  prizes: {
    isConfirmed: false,
    placeholderTitle: "Prize Pool & Perks to Be Announced",
    placeholderSub: "Details regarding prize categories, swag, and certificates will be shared upon official confirmation."
  },

  communityPartners: {
    isConfirmed: false,
    placeholderTitle: "Community Partners Coming Soon",
    placeholderSub: "We are partnering with tech communities across India. Partner announcements are coming soon."
  },

  team: {
    isConfirmed: false,
    placeholderTitle: "Organizing Team",
    placeholderSub: "Brought to you with passion by the Bug Busters Community core team."
  },

  faqs: [
    {
      q: "Who can participate in Code Kolkata?",
      a: "Eligibility details will be announced soon. The event aims to bring together college students and early-career developers."
    },
    {
      q: "Is there a registration fee?",
      a: "Registration details and fee structures are To Be Announced."
    },
    {
      q: "Where will the event take place?",
      a: "Code Kolkata will take place in Kolkata. The exact venue location is To Be Announced. Follow @community.bugbusters on Instagram for official updates."
    },
    {
      q: "What is the team size limit?",
      a: "Team size rules and registration limits are To Be Announced."
    },
    {
      q: "What should participants bring?",
      a: "Guidelines on required items (e.g., laptops, college IDs) will be shared prior to the event."
    },
    {
      q: "How do I contact the organizers?",
      a: "You can reach out via Instagram @community.bugbusters or send a message through the Contact section."
    }
  ]
};

export default siteConfig;

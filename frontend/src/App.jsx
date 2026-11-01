import React, { useState } from "react";
/* ==========================================================================
   1. SITE CONFIGURATION (CENTRAL SOURCE OF TRUTH)
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

/* ==========================================================================
   2. INLINE SVG ICONS (NO EXTERNAL LIBRARIES NEEDED)
   ========================================================================== */
const IconCalendar = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconMapPin = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconCheckCircle = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconLock = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const IconClock = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconUsers = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconUserCheck = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconAward = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13l-4-4m4 4l4-4" />
  </svg>
);

const IconGlobe = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.6 9h16.8M3.6 15h16.8" />
  </svg>
);

const IconInstagram = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IconChevronDown = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? "rotate-180 text-[#19d3c5]" : "text-gray-400"}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconMenu = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const IconX = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconSend = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

/* ==========================================================================
   3. MAIN APP COMPONENT
   ========================================================================== */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("");

  // Navbar order required by prompt (Exact 9 items)
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Register", href: "#register" },
    { name: "Schedule", href: "#schedule" },
    { name: "Sponsor", href: "#sponsors" },
    { name: "Mentor", href: "#mentors" },
    { name: "Prize", href: "#prizes" },
    { name: "Community Partner", href: "#partners" },
    { name: "Team", href: "#team" }
  ];

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactStatus("Please complete all required fields.");
      return;
    }
    // Explicit demo message explaining no backend is connected
    setContactStatus("Demo mode: Input validated, but messages cannot be sent until a backend service is connected.");
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#02080a] text-slate-100 font-sans selection:bg-[#19d3c5] selection:text-[#02080a]">
      {/* ==================== NAVBAR ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#02080a]/90 backdrop-blur-md border-b border-[#19d3c5]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#19d3c5] rounded-lg p-1">
            <div className="w-10 h-10 rounded-lg bg-[#19d3c5]/10 border border-[#19d3c5]/40 flex items-center justify-center font-bold text-[#19d3c5] group-hover:scale-105 transition-transform">
              CK
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-wider text-white text-base leading-tight">
                {siteConfig.eventName}
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                By {siteConfig.organizer}
              </span>
            </div>
          </a>

          {/* Desktop Navigation (Exact 9 Items) */}
          <nav className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-wide text-gray-300 hover:text-[#19d3c5] transition-colors focus:outline-none focus:text-[#19d3c5]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <a
              href={siteConfig.registrationUrl || "#register"}
              target={siteConfig.registrationUrl ? "_blank" : "_self"}
              rel={siteConfig.registrationUrl ? "noreferrer" : ""}
              className="px-4 py-2 rounded-full text-[11px] uppercase font-bold tracking-widest bg-transparent border border-[#19d3c5] text-[#19d3c5] hover:bg-[#19d3c5] hover:text-[#02080a] transition-all focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
            >
              {siteConfig.registrationUrl ? "Register Now" : "Register"}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-md text-gray-300 hover:text-[#19d3c5] focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="xl:hidden bg-[#02080a] border-b border-[#19d3c5]/20 px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-gray-200 hover:text-[#19d3c5] px-2 py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href={siteConfig.registrationUrl || "#register"}
                target={siteConfig.registrationUrl ? "_blank" : "_self"}
                rel={siteConfig.registrationUrl ? "noreferrer" : ""}
                onClick={() => setIsMenuOpen(false)}
                className="block text-center w-full py-2.5 rounded-full text-xs uppercase font-bold tracking-widest bg-[#19d3c5] text-[#02080a]"
              >
                {siteConfig.registrationUrl ? "Register Now" : "Register"}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ==================== 1. HOME / HERO SECTION ==================== */}
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#02080a] via-[#02080a]/90 to-[#02080a]">
          <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full bg-[#19d3c5]/10 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#19d3c5]/10 border border-[#19d3c5]/30 text-[#19d3c5]">
                {siteConfig.organizer} Presents
              </span>
              {siteConfig.hasLimitedSeatsConfirmed && (
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2be37a]/10 border border-[#2be37a]/40 text-[#2be37a]">
                  {siteConfig.limitedSeatsLabel}
                </span>
              )}
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase mb-4">
              Code <span className="text-[#19d3c5] border-b-4 border-[#19d3c5]/60">Kolkata</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium tracking-wide text-gray-300 max-w-2xl mx-auto mb-8">
              {siteConfig.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-300 mb-10">
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800">
                <IconCalendar />
                <span>{siteConfig.dateLabel}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800">
                <IconMapPin />
                <span>{siteConfig.city} (Venue: {siteConfig.venue})</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <a
                href={siteConfig.registrationUrl || "#register"}
                target={siteConfig.registrationUrl ? "_blank" : "_self"}
                rel={siteConfig.registrationUrl ? "noreferrer" : ""}
                className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest bg-[#19d3c5] text-[#02080a] hover:bg-[#19d3c5]/90 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
              >
                {siteConfig.registrationUrl ? "Register Now" : "Register"}
              </a>
            </div>
          </div>
        </section>

        {/* ==================== 2. ABOUT US ==================== */}
        <section id="about" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
                About Us
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">
                Empowering Builders & Innovators in Kolkata
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                    About {siteConfig.eventName}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                    {siteConfig.about.eventDescription}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#19d3c5] mb-3">
                    What Participants Can Expect:
                  </h4>
                  {siteConfig.about.expectations.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-[#2be37a]"><IconCheckCircle /></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                    About {siteConfig.organizer}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                    {siteConfig.about.communityDescription}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#19d3c5]/5 border border-[#19d3c5]/20">
                  <span className="text-xs text-gray-400 block mb-1">Official Instagram</span>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-[#19d3c5] hover:underline"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== THEME & TRACKS (DYNAMIC PLACEHOLDER) ==================== */}
        <section id="theme" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
                Theme & Tracks
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">Event Focus Areas</p>
            </div>

            {!siteConfig.themeTracks.isRevealed ? (
              <div className="max-w-2xl mx-auto p-10 rounded-2xl bg-slate-950 border border-dashed border-[#19d3c5]/40 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mx-auto mb-4">
                  <IconLock />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{siteConfig.themeTracks.placeholderTitle}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{siteConfig.themeTracks.placeholderSub}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {siteConfig.themeTracks.tracks.map((track, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                    <h3 className="text-lg font-bold text-white mb-2">{track.title}</h3>
                    <p className="text-sm text-gray-400">{track.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ==================== 3. REGISTER ==================== */}
        <section
          id="register"
          className="py-16 bg-gradient-to-r from-slate-950 via-[#19d3c5]/10 to-slate-950 text-center border-t border-b border-[#19d3c5]/20"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Registration Details</h2>
            {siteConfig.registrationUrl ? (
              <>
                <p className="text-gray-300 text-sm mb-6">
                  Secure your spot for Code Kolkata November 2026.
                </p>
                <a
                  href={siteConfig.registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-8 py-4 rounded-full text-xs uppercase font-bold tracking-widest bg-[#19d3c5] text-[#02080a] hover:bg-[#19d3c5]/90 transition-colors"
                >
                  Register Now
                </a>
              </>
            ) : (
              <div className="max-w-xl mx-auto p-6 rounded-xl bg-slate-950 border border-slate-800">
                <p className="text-gray-300 text-sm font-medium">
                  Registration details coming soon.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Follow <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="text-[#19d3c5] underline">{siteConfig.instagramHandle}</a> on Instagram for live registration launch announcements.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ==================== 4. SCHEDULE ==================== */}
        <section id="schedule" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
                Schedule & Timeline
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">Event Agenda</p>
            </div>

            {!siteConfig.schedule.isConfirmed ? (
              <div className="max-w-2xl mx-auto p-10 rounded-2xl bg-slate-950 border border-dashed border-[#19d3c5]/40 text-center">
                <div className="w-16 h-16 rounded-full bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mx-auto mb-4">
                  <IconClock />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{siteConfig.schedule.placeholderTitle}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{siteConfig.schedule.placeholderSub}</p>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-6">
                {siteConfig.schedule.timeline.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-bold text-[#19d3c5]">{item.time}</span>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ==================== HIGHLIGHTS ==================== */}
        <section className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
                Highlights
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">What You Can Expect</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.highlights.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mb-4">
                    <IconUsers />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 5. SPONSOR ==================== */}
        <section id="sponsors" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
                Sponsors & Partners
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">Backed By Community Leaders</p>
            </div>

            <div className="p-10 rounded-2xl bg-slate-950 border border-slate-800 text-center max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm mb-6">
                Interested in supporting Code Kolkata and reaching top technical talent in Kolkata? Reach out on Instagram {siteConfig.instagramHandle}.
              </p>
              {siteConfig.contactEmail ? (
                <a
                  href={`mailto:${siteConfig.contactEmail}?subject=Sponsorship%20Inquiry%20-%20Code%20Kolkata`}
                  className="inline-block px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-[#19d3c5] text-[#19d3c5] hover:bg-[#19d3c5] hover:text-[#02080a] transition-colors"
                >
                  Become a Sponsor
                </a>
              ) : (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-[#19d3c5] text-[#19d3c5] hover:bg-[#19d3c5] hover:text-[#02080a] transition-colors"
                >
                  Contact for Sponsorship
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ==================== 6. MENTOR ==================== */}
        <section id="mentors" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
              Mentors & Speakers
            </h2>
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-950 border border-dashed border-[#19d3c5]/40 mt-6">
              <div className="w-12 h-12 rounded-full bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mx-auto mb-3">
                <IconUserCheck />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{siteConfig.mentors.placeholderTitle}</h3>
              <p className="text-sm text-gray-400">{siteConfig.mentors.placeholderSub}</p>
            </div>
          </div>
        </section>

        {/* ==================== 7. PRIZE ==================== */}
        <section id="prizes" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
              Prizes & Perks
            </h2>
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-950 border border-dashed border-[#19d3c5]/40 mt-6">
              <div className="w-12 h-12 rounded-full bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mx-auto mb-3">
                <IconAward />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{siteConfig.prizes.placeholderTitle}</h3>
              <p className="text-sm text-gray-400">{siteConfig.prizes.placeholderSub}</p>
            </div>
          </div>
        </section>

        {/* ==================== 8. COMMUNITY PARTNER ==================== */}
        <section id="partners" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
              Community Partners
            </h2>
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-950 border border-dashed border-[#19d3c5]/40 mt-6">
              <div className="w-12 h-12 rounded-full bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mx-auto mb-3">
                <IconGlobe />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {siteConfig.communityPartners.placeholderTitle}
              </h3>
              <p className="text-sm text-gray-400">{siteConfig.communityPartners.placeholderSub}</p>
            </div>
          </div>
        </section>

        {/* ==================== VENUE & LOCATION ==================== */}
        <section id="venue" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
                Venue & Location
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">City: {siteConfig.city}</p>
            </div>

            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <div className="w-14 h-14 rounded-full bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mx-auto mb-4">
                <IconMapPin />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Venue: <span className="text-[#19d3c5]">{siteConfig.venue}</span>
              </h3>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                The offline venue in Kolkata will be officially unveiled soon. Stay tuned on social channels for location announcements.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 10. FAQ ==================== */}
        <section id="faq" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">Got Questions?</p>
            </div>

            <div className="space-y-4">
              {siteConfig.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div key={idx} className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-6 py-4 flex justify-between items-center text-white font-medium hover:text-[#19d3c5] focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
                    >
                      <span className="text-base">{faq.q}</span>
                      <IconChevronDown isOpen={isOpen} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 text-sm text-gray-400 border-t border-slate-900 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================== CONTACT US ==================== */}
        <section id="contact" className="py-20 bg-[#02080a] border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
                Contact Us
              </h2>
              <p className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Official Channels</h3>
                  <p className="text-sm text-gray-400 mb-6">
                    Have questions regarding participation, partnerships, or event updates? Reach out via our official community handle.
                  </p>

                  <div className="space-y-4">
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 hover:border-[#19d3c5] border border-transparent transition-colors text-gray-300"
                    >
                      <IconInstagram />
                      <span>{siteConfig.instagramHandle}</span>
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#19d3c5]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#19d3c5]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#19d3c5]"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#19d3c5] text-[#02080a] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#19d3c5]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
                >
                  <IconSend /> Send Message
                </button>
                {contactStatus && <p className="text-xs text-[#19d3c5] mt-2 text-center">{contactStatus}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== 9. TEAM & 11. FOOTER ==================== */}
      <section id="team" className="py-16 bg-[#02080a] border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
            Organizing Team
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            {siteConfig.team.placeholderSub}
          </p>
        </div>
      </section>

      <footer className="bg-[#02080a] border-t border-[#19d3c5]/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold text-white block">{siteConfig.eventName}</span>
            <span className="text-xs text-gray-400">Presented by {siteConfig.organizer}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#19d3c5] flex items-center gap-1.5 transition-colors"
            >
              <IconInstagram /> {siteConfig.instagramHandle}
            </a>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {siteConfig.eventName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
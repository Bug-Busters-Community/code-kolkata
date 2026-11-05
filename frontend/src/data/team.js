/* ============================================================================
   TEAM ROSTER — replace the placeholder details below with the real crew.
   ----------------------------------------------------------------------------
   Every card reads from this file. Avatars are generated from each name's
   first and last initials, so no image is stored. Set a social URL to null to
   keep that icon visible but disabled until the real profile is available.
   ========================================================================== */

export const coreTeam = [
  {
    id: "core-01",
    name: "Core Member 01",
    designation: "Event Lead",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "core-02",
    name: "Core Member 02",
    designation: "Operations & Logistics Lead",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "core-03",
    name: "Core Member 03",
    designation: "Design & Brand Lead",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "core-04",
    name: "Core Member 04",
    designation: "Engineering Lead",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "core-05",
    name: "Core Member 05",
    designation: "Community & Partnerships Lead",
    socials: { linkedin: null, github: null, instagram: null },
  },
];

export const eventCrew = [
  {
    id: "crew-01",
    name: "Crew Member 01",
    designation: "Frontend Engineer",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "crew-02",
    name: "Crew Member 02",
    designation: "Social Media Manager",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "crew-03",
    name: "Crew Member 03",
    designation: "Photography & Content Lead",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "crew-04",
    name: "Crew Member 04",
    designation: "Registration Desk Lead",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "crew-05",
    name: "Crew Member 05",
    designation: "Volunteer Coordinator",
    socials: { linkedin: null, github: null, instagram: null },
  },
];

export const teamSections = [
  {
    id: "core-team",
    eyebrow: "The leadership",
    title: "Core Team",
    description:
      "The people steering CODE KOLKATA — setting the direction, protecting the timeline and making sure every crew has what it needs to ship.",
    accent: "primary",
    members: coreTeam,
  },
  {
    id: "event-crew",
    eyebrow: "Behind the scenes",
    title: "Event Crew",
    description:
      "The crew running the build weekend from the ground up — check-in, stage, content and everything in between — so builders can stay heads-down.",
    accent: "secondary",
    members: eventCrew,
  },
];

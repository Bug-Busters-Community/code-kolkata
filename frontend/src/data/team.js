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
    name: "Aayush Laddha",
    designation: "Founder",
    socials: {
      linkedin: "https://www.linkedin.com/in/imagiwaeve?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/eags-aayush",
      instagram: "https://www.instagram.com/eags.aayush?obrf=MWVyNjBiOHBubm42MA==",
    },
  },
  {
    id: "core-02",
    name: "Amit Kumar Prasad",
    designation: "Co-Founder",
    socials: {
      linkedin: "https://www.linkedin.com/in/amitkumarprasad1846?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/AmitKumarPrasad1846",
      instagram: "https://www.instagram.com/amiku.1846?xtok=ODdzMHZrcmU1YTVu", 
    },
  },
  {
    id: "core-03",
    name: "Prachi Kaneriya",
    designation: "Event Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/prachi-kaneriya-058067379?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/prachikaneriya23",
    },
    hiddenSocials: ["instagram"],
  },
  {
    id: "core-04",
    name: "Devansh Bharadwaj",
    designation: "Event Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/devansh-bhardwaj-636870382?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/devanshbhardwaj99",
      instagram: "https://www.instagram.com/itz_devansh_15t?exln=d3VhamI5YzF5bWJ1",
    },
  },
  {
    id: "core-05",
    name: "Kushal Giri",
    designation: "Community Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/kushal-giri-5685a9393?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/kushalgiri1",
      instagram: "https://www.instagram.com/kushal.giri_1?cplk=ZGR1MjA0MjE0cWNo",
    },
  },
  {
    id: "core-06",
    name: "Krish Chakraborty",
    designation: "Web Developer",
    socials: {
      linkedin: "https://www.linkedin.com/in/krishanjit-chakraborty-258a5237a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/codexxxx07",
      instagram: "https://www.instagram.com/_k_r_i_s_h_x_?exln=d254M25mZzFmazRv",
    },
  },
  {
    id: "core-07",
    name: "Rehan Shashi",
    designation: "Community Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/rehan-shashi?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/rehan1020",
    },
    hiddenSocials: ["instagram"],
  },
  {
    id: "core-08",
    name: "Punya",
    designation: "Social Media Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/punya-shree-423432385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/punyashree1609-dev",
    },
    hiddenSocials: ["instagram"],
  },
];

export const eventCrew = [
  {
    id: "crew-01",
    name: "Crew Member 01",
    designation: "Demo",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "crew-02",
    name: "Crew Member 02",
    designation: "Demo",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "crew-03",
    name: "Crew Member 03",
    designation: "Demo",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "crew-04",
    name: "Crew Member 04",
    designation: "Demo",
    socials: { linkedin: null, github: null, instagram: null },
  },
  {
    id: "crew-05",
    name: "Crew Member 05",
    designation: "Demo",
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

/* ============================================================================
   SPONSORS & OPEN PACKAGES
   ----------------------------------------------------------------------------
   Confirmed sponsors render as official showcase cards on the Sponsors page.
   The open packages are availability labels only — they are not sponsors.
   Logos are imported so Vite fingerprints them in the production build.
   ========================================================================== */

import anibotixLogo from "../assets/pics/anibotix.png";
import n8nLogo from "../assets/pics/n8n.png";
import GenXyzLogo from "../assets/pics/genxyz.png";
import InterciewBuddyLogo from "../assets/pics/interviewbuddy.png";
import ImagiwaeveStudios from "../assets/pics/imagiwaevestudios.png";

const sponsors = [
  {
    id: "anibotix-robotics",
    name: "Anibotix Robotics",
    category: "Title Sponsor",
    description: "Empowering the next generation of roboticists.",
    logo: anibotixLogo,
    logoAlt: "Anibotix Robotics logo",
    brandColor: "#007bff",
    logoScale: 1
  },
  {
    id: "n8n",
    name: "n8n",
    category: "AI & Automation Platform Sponsor",
    description: "Powering the AI & Automation.",
    logo: n8nLogo,
    logoAlt: "N8N logo",
    brandColor: "#ea4b71",
    logoScale: 1.55
  },
  {
    id: "zen-xyz",
    name: "Gen XYZ",
    category: "Domain Sponsor",
    description: "Domain names for every top builder.",
    logo: GenXyzLogo,
    logoAlt: "Gen XYZ logo",
    brandColor: "#7b3f9e",
    logoScale: 1.12
  },
  {
    id: "interview-buddy",
    name: "Interview Buddy",
    category: "Hiring Sponsor",
    description: "Helping builders ace their interviews.",
    logo: InterciewBuddyLogo,
    logoAlt: "Interview Buddy logo",
    brandColor: "#7F00FF",
    logoScale: 0.5
  },
  {
    id: "imagiwaeve-studios",
    name: "Imagiwaeve Studios",
    category: "Fiscal Sponsor",
    description: "Management of all the funds.",
    logo: ImagiwaeveStudios,
    logoAlt: "Imagiwaeve Studios logo",
    brandColor: "#1e1e1e",
    logoScale: 0.8
  }
];

export default sponsors;

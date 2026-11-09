/* ============================================================================
   SPONSORS & OPEN PACKAGES
   ----------------------------------------------------------------------------
   Confirmed sponsors render as official showcase cards on the Sponsors page.
   The open packages are availability labels only — they are not sponsors.
   Logos are imported so Vite fingerprints them in the production build.
   ========================================================================== */

import n8nLogo from "../assets/pics/n8n.png";
import zenXyzLogo from "../assets/pics/.xyz.jpg";
import event from "../config/event";

const sponsors = [
  {
    id: "n8n",
    name: "N8N",
    category: "AI & Automation Platform Sponsor",
    description: "Powering the AI & Automation track.",
    logo: n8nLogo,
    logoAlt: "N8N logo",
    brandColor: "#ea4b71",
    // The source PNG is a square canvas with a wide wordmark and generous
    // white margins. Scaling the contained image trims only that whitespace;
    // the mark itself is never stretched or cropped.
    logoScale: 1.55,
  },
  {
    id: "zen-xyz",
    name: "ZEN.XYZ",
    category: "Domain Sponsor",
    description: "Domain names for every builder.",
    logo: zenXyzLogo,
    logoAlt: "ZEN.XYZ logo",
    brandColor: "#7b3f9e",
    logoScale: 1.12,
  },
];

/* Media is not part of the original four-tier config, but the Sponsors page
   needs to keep the fifth availability label. It remains an open package. */
const mediaPackage = {
  label: "MEDIA",
  slots: 2,
  headline: "Put the story in front of the room",
  benefits: [
    "Logo on the media wall and recap",
    "Podcast or interview slot",
    "Press access to the build floor",
    "First look at the highlight reel",
  ],
};

export const sponsorPackages = [
  ...event.sponsorTiers.map((tier) => ({
    label: tier.tier.replace(/\s*partner$/i, "").toUpperCase(),
    slots: tier.slots,
    headline: tier.headline,
    benefits: tier.benefits,
  })),
  mediaPackage,
];

export default sponsors;

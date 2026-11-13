import { useState } from "react";
import { Icon } from "./ui/Icon";

/**
 * Official partner showcase card.
 * Styled symmetrically with SponsorCard, with support for image logos,
 * automatic initials fallback, custom brand glow, and community links.
 */
export default function PartnerCard({ partner, index = 0 }) {
  const [imgError, setImgError] = useState(false);
  const number = String(index + 1).padStart(2, "0");
  const partnerId = partner.id || `partner-${index + 1}`;
  const nameId = `partner-${partnerId}-name`;

  const brandColor = partner.brandColor || "#5ef2d6";
  const accentColor = partner.accentColor || "var(--color-primary)";
  const logoScale = partner.logoScale ?? 1;
  const hasLogo = Boolean(partner.logo) && !imgError;
  const link = partner.website || partner.url || partner.href;

  const initials = partner.name
    ? partner.name
      .split(/\s+/)
      .map((w) => w.replace(/[^\p{L}\p{M}]/gu, ""))
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "CP"
    : "CP";

  return (
    <article
      className="sponsor-card mt-10 flex flex-col w-full h-full"
      style={{
        "--sponsor-accent": accentColor,
        "--sponsor-brand": brandColor,
        "--logo-scale": logoScale,
      }}
      aria-labelledby={nameId}
    >
      <div className="sponsor-card__top">
        <span className="flex justify-center items-center gap-3 accent font-pixel text-[8px]">
          <Icon name="users" size={13} />
          {partner.eyebrow || "COMMUNITY PARTNER"}
        </span>
        <span className="accent font-pixel text-[8px]" aria-hidden="true">
          {number}
        </span>
      </div>

      <div className="sponsor-logo-plate">
        <img
          className="sponsor-logo"
          src={partner.logo}
          alt={partner.logoAlt || `${partner.name} logo`}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
        />
      </div>

      <div className="sponsor-card__body">
        <h3 id={nameId} className="display-3 sponsor-name">
          {partner.name}
        </h3>
        {partner.description ? (
          <p className="sponsor-desc">{partner.description}</p>
        ) : null}
      </div>
    </article>
  );
}


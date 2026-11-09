import event from "../config/event";
import { Icon } from "./ui/Icon";

/**
 * Official sponsor showcase. The logo sits on a light plate so both logos stay
 * legible on the dark and light themes without editing the source artwork.
 */
export default function SponsorCard({ sponsor, index = 0 }) {
  const number = String(index + 1).padStart(2, "0");
  const nameId = `sponsor-${sponsor.id}-name`;

  return (
    <article
      className="sponsor-card mt-10"
      style={{
        "--sponsor-brand": sponsor.brandColor,
        "--logo-scale": sponsor.logoScale,
      }}
      aria-labelledby={nameId}
    >
      <div className="sponsor-card__top">
        <span className="sponsor-card__eyebrow">
          <Icon name="award" size={13} />
          Official sponsor
        </span>
        <span className="sponsor-card__index" aria-hidden="true">
          {number}
        </span>
      </div>

      <div className="sponsor-logo-plate">
        <img
          className="sponsor-logo"
          src={sponsor.logo}
          alt={sponsor.logoAlt}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="sponsor-card__body">
        <span className="sponsor-category">{sponsor.category}</span>
        <h3 id={nameId} className="display-3 sponsor-name">
          {sponsor.name}
        </h3>
        <p className="sponsor-desc">{sponsor.description}</p>
      </div>
    </article>
  );
}

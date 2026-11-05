import InitialsAvatar from "./ui/InitialsAvatar";
import Reveal from "./ui/Reveal";
import { SocialIcon } from "./ui/Icon";

const SOCIALS = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "github", label: "GitHub" },
  { key: "instagram", label: "Instagram" },
];

export default function TeamCard({ member, index = 0, accent = "primary" }) {
  return (
    <Reveal as="li" delay={index * 90} className="team-card-slot">
      <article className={`team-card${accent === "secondary" ? " team-card--secondary" : ""}`}>
        <span className="team-card-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>

        <InitialsAvatar name={member.name} accent={accent} />

        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-role">{member.designation}</p>

        <ul className="team-card-socials" aria-label={`${member.name} social profiles`}>
          {SOCIALS.map(({ key, label }) => {
            const url = member.socials?.[key];

            return (
              <li key={key}>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`team-social social-link social-link--${key}`}
                    aria-label={`${member.name} on ${label} — opens in a new tab`}
                    title={`${label} — opens in a new tab`}
                  >
                    <SocialIcon name={key} size={18} />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="team-social team-social--disabled"
                    aria-label={`${label} link coming soon`}
                    title={`${label} — link coming soon`}
                  >
                    <SocialIcon name={key} size={18} />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </article>
    </Reveal>
  );
}

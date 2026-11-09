import { useState } from "react";
import event from "../config/event";
import { Icon, SocialIcon } from "./ui/Icon";

const SOCIAL_LINKS = [
  { key: "linkedin", label: "LinkedIn", icon: "linkedin", social: true },
  { key: "instagram", label: "Instagram", icon: "instagram", social: true },
  { key: "other", label: "Website", icon: "globe", social: false },
];

function getInitials(person) {
  if (person.initials) return person.initials;

  const words = String(person.name ?? "")
    .split(/\s+/)
    .map((word) => word.replace(/[^\p{L}\p{M}]/gu, ""))
    .filter(Boolean);

  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();

  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
}

export default function MentorCard({ person, index = 0 }) {
  const [failedPhoto, setFailedPhoto] = useState(null);
  const hasPhoto = Boolean(person.photo) && failedPhoto !== person.photo;
  const isJudge = String(person.role).toLowerCase() === "judge";
  const roleKey = isJudge ? "judge" : "mentor";
  const roleIcon = isJudge ? "award" : "users";
  const links = SOCIAL_LINKS.filter(({ key }) => Boolean(person[key]));
  const initials = getInitials(person);
  const panelNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`mentor-card mentor-card--${roleKey}`}
      aria-label={`${person.role}: ${person.name}, ${person.designation} at ${person.currentCompany}`}
    >
      <div className="mentor-portrait">
        <div className="mentor-portrait__media">
          <div className="mentor-monogram" aria-hidden="true">
            <span className="mentor-monogram__ring" />
            <span className="mentor-monogram__ring mentor-monogram__ring--inner" />
            <span className="mentor-monogram__initials">{initials}</span>
          </div>

          {hasPhoto ? (
            <img
              className="mentor-portrait__photo"
              src={person.photo}
              alt={`${person.name}, ${person.designation} at ${person.currentCompany}`}
              loading="lazy"
              decoding="async"
              onError={() => setFailedPhoto(person.photo)}
            />
          ) : null}
        </div>

        <span className="mentor-portrait__grid" aria-hidden="true" />
        <span className="mentor-portrait__shade" aria-hidden="true" />
        <span className="mentor-portrait__corner mentor-portrait__corner--tl" aria-hidden="true" />
        <span className="mentor-portrait__corner mentor-portrait__corner--tr" aria-hidden="true" />
        <span className="mentor-portrait__corner mentor-portrait__corner--bl" aria-hidden="true" />
        <span className="mentor-portrait__corner mentor-portrait__corner--br" aria-hidden="true" />

        <span className="mentor-role">
          <Icon name={roleIcon} size={13} />
          {person.role}
        </span>

        <span className="mentor-index" aria-hidden="true">
          {panelNumber}
        </span>

        <span className="mentor-portrait__meta" aria-hidden="true">
          <span>{event.name}</span>
          <span>Panel / {event.year}</span>
        </span>
      </div>

      <div className="mentor-card__body">
        <p className="mentor-card__designation">
          <span>{person.designation}</span>
          <span className="mentor-card__sep" aria-hidden="true">
            /
          </span>
          <span className="mentor-card__company">{person.currentCompany}</span>
        </p>

        <h3 className="mentor-card__name">{person.name}</h3>

        <div className="mentor-card__footer">
          <span className="mentor-card__footer-label">Connect</span>

          {links.length ? (
            <ul className="mentor-socials" aria-label={`${person.name} links`}>
              {links.map(({ key, label, icon, social }) => (
                <li key={key}>
                  <a
                    href={person[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mentor-social social-link${
                      social ? ` social-link--${key}` : " mentor-social--other"
                    }`}
                    aria-label={`${person.name} on ${label} — opens in a new tab`}
                    title={`${label} — opens in a new tab`}
                  >
                    {social ? <SocialIcon name={icon} size={18} /> : <Icon name={icon} size={18} />}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <span className="mentor-card__footer-note">Links coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

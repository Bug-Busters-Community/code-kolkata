import { Link } from "react-router-dom";
import event from "../config/event";
import { Icon, SocialIcon } from "./ui/Icon";

const exploreLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Register", to: "/register" },
  { name: "Schedule", to: "/schedule" },
];

const moreLinks = [
  { name: "Sponsors", to: "/sponsors" },
  { name: "Mentors", to: "/mentors" },
  { name: "Prizes", to: "/prizes" },
  { name: "Community Partners", to: "/partners" },
  { name: "Team", to: "/team" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-2/70">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="shell relative py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-primary/60 bg-primary/10 font-pixel text-[0.6rem] text-primary">
                {event.monogram}
              </span>
              <span className="font-display text-lg uppercase tracking-wide text-text">{event.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{event.intro}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {event.organizers.map((organizer) => (
                <div
                  key={organizer.name}
                  className="flex items-start gap-3 border border-line bg-ink/50 px-3 py-3"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center border border-line bg-panel font-pixel text-[0.5rem] text-primary">
                    {organizer.monogram}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium leading-tight text-text">
                      {organizer.name}
                    </span>
                    <span className="mt-1 block font-pixel text-[0.43rem] uppercase tracking-[0.1em] text-muted">
                      {organizer.role}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <nav aria-label="Explore">
            <p className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-primary">Explore</p>
            <ul className="mt-4 space-y-1">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex min-h-11 items-center text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Community">
            <p className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-primary">Community</p>
            <ul className="mt-4 space-y-1">
              {moreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex min-h-11 items-center text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-primary">Follow</p>
            <ul className="mt-4 space-y-2">
              {event.socials.map((social) => (
                <li key={social.label}>
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-11 items-center gap-2.5 text-sm text-muted transition-colors hover:text-primary"
                    >
                      <SocialIcon name={social.icon} size={16} />
                      <span>{social.handle}</span>
                    </a>
                  ) : (
                    <span
                      className="flex min-h-11 items-center gap-2.5 text-sm text-muted/50"
                      title={`${social.label} — link coming soon`}
                    >
                      <SocialIcon name={social.icon} size={16} />
                      <span>{social.label} · soon</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 border border-line bg-ink/50 p-3">
              <p className="font-pixel text-[0.43rem] uppercase tracking-[0.1em] text-muted">Dates</p>
              <p className="mt-1 font-display text-base uppercase text-text">{event.dates.label}</p>
              <p className="mt-1 text-xs text-muted">{event.venue.city}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line-soft pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {event.name}. All rights reserved. Presented by{" "}
            {event.organizers[0].name} × {event.organizers[1].name}.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex min-h-11 items-center gap-2 font-pixel text-[0.5rem] uppercase tracking-[0.1em] text-muted transition-colors hover:text-primary"
          >
            Back to top
            <Icon name="arrowUpRight" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

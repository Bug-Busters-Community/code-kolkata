import { Link } from "react-router-dom";
import event from "../config/event";
import { scrollToTop } from "../lib/smoothScroll";
import BrandLogo from "./ui/BrandLogo";
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
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-1 md:gap-12 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-21 w-21 items-center justify-center overflow-hidden p-0.5">
                <BrandLogo alt="" aria-hidden="true" />
              </span>
              <span className="font-display text-lg uppercase tracking-wide text-text">{event.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{event.intro}</p>
          </div>

          <nav aria-label="Explore" className="text-center md:text-left">
            <p className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-primary">Explore</p>
            <ul className="mt-4 space-y-1">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex min-h-11 items-center justify-center text-sm text-muted transition-colors hover:text-primary md:justify-start"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Community" className="text-center md:text-left">
            <p className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-primary">Community</p>
            <ul className="mt-4 space-y-1">
              {moreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex min-h-11 items-center justify-center text-sm text-muted transition-colors hover:text-primary md:justify-start"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 text-center md:col-span-1 md:text-left">
            <p className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-primary">Follow</p>
            <ul className="mt-4 space-y-2">
              {event.socials.map((social) => (
                <li key={social.label}>
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} — opens in a new tab`}
                      title={`${social.label} — opens in a new tab`}
                      className="flex min-h-11 items-center justify-center gap-2.5 text-sm text-muted transition-colors hover:text-primary md:justify-start"
                    >
                      <SocialIcon name={social.icon} size={16} />
                      <span>{social.handle}</span>
                    </a>
                  ) : (
                    <span
                      className="footer-soon flex min-h-11 items-center justify-center gap-2.5 text-sm text-muted/50 md:justify-start"
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
            {event.collaboration}.
          </p>
          <button
            type="button"
            onClick={() => scrollToTop()}
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

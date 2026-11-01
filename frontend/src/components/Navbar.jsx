import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import event from "../config/event";
import { navLinks } from "../data/navigation";
import SoundToggle from "./SoundToggle";
import { Icon, SocialIcon } from "./ui/Icon";

export default function Navbar() {
  const [menuPath, setMenuPath] = useState(null);
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 24,
  );
  const { pathname } = useLocation();
  const open = menuPath === pathname;
  const menuToggleRef = useRef(null);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 80);

    const onKeyDown = (event_) => {
      if (event_.key === "Escape") {
        setMenuPath(null);
        menuToggleRef.current?.focus();
        return;
      }

      if (event_.key !== "Tab" || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event_.shiftKey && document.activeElement === first) {
        event_.preventDefault();
        last.focus();
      } else if (!event_.shiftKey && document.activeElement === last) {
        event_.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  const closeMenu = () => {
    setMenuPath(null);
    menuToggleRef.current?.focus();
  };

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 ${scrolled && !open ? "is-solid" : ""} ${
        open ? "is-menu-open" : ""
      }`}
    >
      <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-4">
        <Link to="/" className="flex min-h-11 min-w-0 items-center gap-2.5">
          <span className="flex h-10 w-10 flex-none items-center justify-center border border-primary/60 bg-primary/10 font-pixel text-[0.55rem] text-primary shadow-[0_0_24px_-8px_var(--color-primary)]">
            {event.monogram}
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-display text-[clamp(0.95rem,2.1vw,1.1rem)] uppercase tracking-wide text-text">
              {event.name}
            </span>
            <span className="mt-1 hidden truncate font-pixel text-[0.42rem] uppercase tracking-[0.1em] text-muted sm:block">
              {event.organizers[0].name} <span className="text-primary">×</span>{" "}
              {event.organizers[1].name}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-3 xl:flex 2xl:gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <SoundToggle />
          <span className="xl:hidden">
            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => setMenuPath(open ? null : pathname)}
              className="btn-icon"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </span>
        </div>
      </div>

      {open ? (
        <div className="menu-overlay fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default bg-ink/80 backdrop-blur-md"
            aria-label="Close menu"
            onClick={closeMenu}
            tabIndex={-1}
          />

          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="menu-panel absolute inset-y-0 right-0 flex w-full max-w-[32rem] flex-col overflow-y-auto border-l border-line bg-ink-2/95 backdrop-blur-2xl"
          >
            <div className="flex h-[var(--nav-h)] flex-none items-center justify-between gap-4 border-b border-line px-5">
              <span className="font-pixel text-[0.5rem] uppercase tracking-[0.16em] text-primary">
                {event.monogram} / Menu
              </span>
              <button
                type="button"
                onClick={closeMenu}
                className="btn-icon"
                aria-label="Close menu"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <nav aria-label="Mobile primary" className="flex-1 px-5 py-4">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <li key={link.to} className="menu-link" style={{ "--i": index }}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setMenuPath(null)}
                      ref={index === 0 ? firstLinkRef : undefined}
                      className={({ isActive }) =>
                        `group flex min-h-14 items-center justify-between gap-4 border-b border-line-soft py-2 transition-colors ${
                          isActive ? "text-primary" : "text-text hover:text-primary"
                        }`
                      }
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-pixel text-[0.5rem] text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[clamp(1.35rem,6vw,1.85rem)] uppercase leading-none">
                          {link.name}
                        </span>
                      </span>
                      <Icon name="arrowUpRight" size={18} className="text-muted group-hover:text-primary" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex-none border-t border-line px-5 py-5">
              <SoundToggle withLabel className="w-full" />
              <ul className="mt-4 flex items-center gap-3">
                {event.socials.map((social) =>
                  social.href ? (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="btn-icon"
                      >
                        <SocialIcon name={social.icon} />
                      </a>
                    </li>
                  ) : (
                    <li key={social.label}>
                      <span
                        className="btn-icon cursor-not-allowed opacity-40"
                        title={`${social.label} — link coming soon`}
                        aria-label={`${social.label} — link coming soon`}
                      >
                        <SocialIcon name={social.icon} />
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

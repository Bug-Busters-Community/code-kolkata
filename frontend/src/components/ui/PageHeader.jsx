import { Link } from "react-router-dom";
import { Icon } from "./Icon";

export default function PageHeader({
  index = "01",
  eyebrow,
  title,
  breadcrumb,
  description,
  chips = [],
  children,
}) {
  return (
    <header className="relative isolate overflow-hidden border-b border-line pb-14 pt-[calc(var(--nav-h)+2.75rem)] md:pb-20">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src="/media/hero-poster.jpg"
          alt=""
          className="h-full w-full scale-110 object-cover opacity-45 blur-[10px]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/88 to-ink" />
        <div className="absolute inset-0 grid-lines grid-fade opacity-70" />
        <div className="absolute inset-0 scanlines opacity-40" />
      </div>

      <div className="shell">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-muted">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-primary">
            {breadcrumb}
          </span>
        </nav>

        <div className="mt-7 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1 className="page-title mt-4 max-w-4xl text-text">{title}</h1>
            {description ? <p className="lede mt-5 max-w-2xl">{description}</p> : null}

            {chips.length ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li key={chip.label} className="chip">
                    {chip.icon ? <Icon name={chip.icon} size={13} /> : null}
                    {chip.label}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <span
            aria-hidden="true"
            className="hidden select-none font-display text-[clamp(4rem,10vw,9rem)] leading-none text-primary/10 md:block"
          >
            {index}
          </span>
        </div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </header>
  );
}

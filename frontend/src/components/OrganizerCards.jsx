import event from "../config/event";
import Card from "./ui/Card";
import { Icon } from "./ui/Icon";

export default function OrganizerCards({ className = "" }) {
  return (
    <ul className={`grid gap-4 md:grid-cols-2 ${className}`}>
      {event.organizers.map((organizer, index) => (
        <li key={organizer.name}>
          <Card className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center border border-primary/40 bg-primary/10 font-pixel text-[0.6rem] text-primary">
                {organizer.monogram}
              </span>
              <span className="chip">Organizer 0{index + 1}</span>
            </div>

            <h3 className="display-3 mt-5 text-text">{organizer.name}</h3>
            <p className="mt-1 font-pixel text-[0.45rem] uppercase tracking-[0.12em] text-primary">
              {organizer.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{organizer.blurb}</p>

            <div className="mt-auto border-t border-line-soft pt-4">
              {organizer.href ? (
                <a
                  href={organizer.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-text transition-colors hover:text-primary"
                >
                  Visit {organizer.name}
                  <Icon name="arrowUpRight" size={15} />
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center gap-2 text-sm text-muted/70">
                  <Icon name="clock" size={15} />
                  Link coming with the joint announcement
                </span>
              )}
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

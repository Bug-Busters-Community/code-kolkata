import { Icon } from "./ui/Icon";
import Reveal from "./ui/Reveal";

const TONES = {
  muted: "schedule-row--muted",
  primary: "schedule-row--primary",
  secondary: "schedule-row--secondary",
  gold: "schedule-row--gold",
};

/**
 * One timetable card. Timings live in the left rail on wide screens and move
 * inside the card on small screens, so they are always visible without
 * duplicating the information in the accessibility tree at the same breakpoint.
 */
export function ScheduleCard({ item, index, maxDuration }) {
  const meterWidth = `${Math.max(6, Math.round((item.durationMinutes / maxDuration) * 100))}%`;

  return (
    <article className="schedule-card">
      <div className="schedule-card-head">
        <span className="schedule-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="schedule-icon" aria-hidden="true">
          <Icon name={item.icon} size={18} />
        </span>

        <div className="schedule-heading">
          <h3 className="schedule-title">{item.title}</h3>
          {item.featured ? <span className="schedule-tag">Main event</span> : null}
        </div>

        <span className="schedule-duration">
          <Icon name="clock" size={12} />
          {item.duration}
        </span>
      </div>

      <div className="schedule-card-times">
        <span className="schedule-card-time">
          <span className="schedule-time-label">Start</span>
          <time>{item.start}</time>
        </span>
        <span className="schedule-time-arrow" aria-hidden="true">
          →
        </span>
        <span className="schedule-card-time">
          <span className="schedule-time-label">End</span>
          <time>{item.end}</time>
        </span>
      </div>

      <div className="schedule-meter" aria-hidden="true">
        <span style={{ width: meterWidth }} />
      </div>
    </article>
  );
}

export default function ScheduleTimeline({ items }) {
  const maxDuration = Math.max(...items.map((item) => item.durationMinutes));

  return (
    <ol className="schedule-timeline" aria-label="Full event timetable">
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item.id}
          delay={Math.min(index, 5) * 60}
          className={[
            "schedule-row",
            TONES[item.tone] ?? TONES.primary,
            item.featured ? "schedule-row--featured" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="schedule-time">
            <time className="schedule-time-start">{item.start}</time>
            <span className="schedule-time-end">
              <span aria-hidden="true">→ </span>
              {item.end}
            </span>
          </div>

          <div className="schedule-rail" aria-hidden="true">
            <span className="schedule-dot" />
          </div>

          <ScheduleCard item={item} index={index} maxDuration={maxDuration} />
        </Reveal>
      ))}
    </ol>
  );
}

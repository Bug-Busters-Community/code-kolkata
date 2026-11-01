import { useRef, useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import event from "../config/event";

const TYPE_TONE = {
  Build: "chip-primary",
  Stage: "chip-primary",
  Demo: "chip-primary",
  Ceremony: "chip-primary",
  Logistics: "chip",
  Mentors: "chip",
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(event.schedule.days[0].id);
  const tabRefs = useRef([]);

  const day = event.schedule.days.find((item) => item.id === activeDay) ?? event.schedule.days[0];

  const onTabKeyDown = (keyEvent, index) => {
    if (keyEvent.key !== "ArrowRight" && keyEvent.key !== "ArrowLeft") return;
    keyEvent.preventDefault();
    const direction = keyEvent.key === "ArrowRight" ? 1 : -1;
    const next = (index + direction + event.schedule.days.length) % event.schedule.days.length;
    setActiveDay(event.schedule.days[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <PageHeader
        index="04"
        breadcrumb="Schedule"
        eyebrow="Run of show"
        title={
          <>
            24 hours,
            <br />
            <span className="accent">mapped.</span>
          </>
        }
        description={event.schedule.note}
        chips={[
          { label: event.dates.label, icon: "calendar" },
          { label: event.venue.city, icon: "mapPin" },
          { label: "Subject to change", icon: "clock" },
        ]}
      />

      <section className="section" aria-labelledby="schedule-title">
        <div className="shell">
          <div className="flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="schedule-title" className="display-2">
                The plan
              </h2>
              <p className="mt-2 text-sm text-muted">
                {event.schedule.isConfirmed ? "Final timings" : "Tentative timings"} · all times local to the venue
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Event days"
              className="flex flex-wrap gap-2"
            >
              {event.schedule.days.map((item, index) => (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={item.id === day.id}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={item.id === day.id ? 0 : -1}
                  onClick={() => setActiveDay(item.id)}
                  onKeyDown={(keyEvent) => onTabKeyDown(keyEvent, index)}
                  className="tab"
                >
                  {item.label}
                  <span className="hidden text-[0.45rem] opacity-70 sm:inline">· {item.date}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            role="tabpanel"
            id={`panel-${day.id}`}
            aria-labelledby={`tab-${day.id}`}
            className="mt-8 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"
          >
            <Card padded={false} interactive={false} className="p-6 lg:sticky lg:top-24">
              <p className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                {day.label}
              </p>
              <p className="mt-2 display-3 text-text">{day.theme}</p>

              <dl className="mt-6 divide-y divide-line-soft border-t border-line">
                <div className="flex items-center justify-between gap-3 py-3">
                  <dt className="text-sm text-muted">Date</dt>
                  <dd className="text-sm text-text">{day.date}</dd>
                </div>
                <div className="flex items-center justify-between gap-3 py-3">
                  <dt className="text-sm text-muted">Session blocks</dt>
                  <dd className="text-sm text-text">{day.items.length}</dd>
                </div>
                <div className="flex items-center justify-between gap-3 py-3">
                  <dt className="text-sm text-muted">Venue</dt>
                  <dd className="text-right text-sm text-text">{event.venue.name}</dd>
                </div>
              </dl>

              <p className="mt-5 border border-dashed border-primary/30 bg-primary/5 p-3 text-xs leading-relaxed text-muted">
                Registration confirmation includes the final venue address and a personal check-in window.
              </p>

              <div className="mt-5">
                <Button to="/register" variant="secondary" className="w-full">
                  Register interest
                </Button>
              </div>
            </Card>

            <div>
              <ol className="timeline ml-2 space-y-4 pl-8">
                {day.items.map((item, index) => (
                  <li key={`${item.time}-${item.title}`} className="timeline-point relative">
                    <Reveal delay={Math.min(index * 60, 240)}>
                      <Card className="grid gap-3 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start">
                        <span className="font-pixel text-[0.6rem] leading-loose text-primary">
                          {item.time}
                        </span>
                        <span>
                          <span className="block text-base font-medium text-text">{item.title}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-muted">{item.desc}</span>
                        </span>
                        <span className={`chip justify-self-start ${TYPE_TONE[item.type] ?? "chip"}`}>
                          {item.type}
                        </span>
                      </Card>
                    </Reveal>
                  </li>
                ))}
              </ol>

              <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted">
                <Icon name="clock" size={14} className="mt-0.5 flex-none" />
                Timings are provisional until the date and venue are confirmed. Meals, breaks and the quiet room
                stay on the plan regardless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

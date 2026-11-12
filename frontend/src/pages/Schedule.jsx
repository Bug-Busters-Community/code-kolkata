import ScheduleTimeline from "../components/ScheduleTimeline";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";
import schedule from "../data/schedule";

const firstItem = schedule[0] ?? {};
const lastItem = schedule[schedule.length - 1] ?? {};
const buildathon = schedule.find((item) => item.featured) ?? {};

const overview = [
  { label: "First event", value: firstItem.start, icon: "login", tone: "primary" },
  { label: "Scheduled entries", value: String(schedule.length), icon: "layers", tone: "primary" },
  { label: "Buildathon", value: buildathon.duration, icon: "cpu", tone: "gold" },
  { label: "Last event ends", value: lastItem.end, icon: "camera", tone: "primary" },
];

export default function Schedule() {
  return (
    <>
      <PageHeader
        index="04"
        breadcrumb="Schedule"
        eyebrow="Run of show"
        title={
          <>
            The day,
            <br />
            <span className="accent">block by block.</span>
          </>
        }
        description={`The CODE KOLKATA timetable is locked. ${schedule.length} blocks, from entry at ${firstItem.start} through the Buildathon to the closing photographs at ${lastItem.end}.`}
        chips={[
          { label: `${event.dates.label}, ${event.year}`, icon: "calendar" },
          { label: `${firstItem.start} – ${lastItem.end}`, icon: "clock" },
          { label: `${schedule.length} scheduled entries`, icon: "layers" },
        ]}
      />

      <section className="section-tight" aria-label="Schedule at a glance">
        <div className="shell">
          <Reveal>
            <ul className="schedule-summary">
              {overview.map((stat) => (
                <li key={stat.label}>
                  <div className={`schedule-stat schedule-stat--${stat.tone}`}>
                    <span className="schedule-stat-icon" aria-hidden="true">
                      <Icon name={stat.icon} size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="schedule-stat-label">{stat.label}</span>
                      <span className="schedule-stat-value">{stat.value}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section schedule-section" aria-labelledby="timetable-title">
        <div className="shell">
          <div className="schedule-intro">
            <SectionHeading
              id="timetable-title"
              eyebrow="Timetable"
              title="Every block, in order."
              description={`From entry and welcome to the Buildathon, results and top 10 pitches — all ${schedule.length} entries are listed in sequence with their exact start and end times.`}
            />
            <p className="chip chip-primary schedule-chip">
              <Icon name="cpu" size={13} />
              Main event · Buildathon · {buildathon.start} – {buildathon.end}
            </p>
          </div>

          <ScheduleTimeline items={schedule} />

          <p className="schedule-note">
            <Icon name="clock" size={14} />
            <span>Bar length reflects each block’s duration against the 180-minute Buildathon.</span>
          </p>
        </div>
      </section>
    </>
  );
}

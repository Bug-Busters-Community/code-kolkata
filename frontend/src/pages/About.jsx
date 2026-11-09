import FaqSection from "../components/FaqSection";
import OrganizerCards from "../components/OrganizerCards";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";

const glance = [
  { label: "Format", value: "8-hour tech event" },
  { label: "Team size", value: "Solo builders" },
  { label: "Cost", value: "Free to apply" },
  { label: "Dates", value: event.dates.label },
  { label: "Venue", value: event.venue.name },
];

export default function About() {
  return (
    <>
      <PageHeader
        index="02"
        breadcrumb="About"
        eyebrow="The weekend"
        title={
          <>
            Not an event.
            <br />
            A <span className="accent">work weekend.</span>
          </>
        }
        description={event.intro}
        chips={[
          { label: event.dates.label, icon: "calendar" },
          { label: event.venue.name, icon: "mapPin" },
          { label: event.theme, icon: "lock" },
        ]}
      />

      <section className="section" aria-labelledby="story-title">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <SectionHeading
              id="story-title"
              eyebrow="The story"
              title={
                <>
                  Two crews,
                  <br />
                  one <span className="accent">leaderboard.</span>
                </>
              }
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {event.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/register" variant="primary">
                Register interest <Icon name="arrowRight" size={15} />
              </Button>
              <Button to="/schedule" variant="ghost">
                See the run of show
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card padded={false} interactive={false} className="p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
                <span className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                  At a glance
                </span>
              </div>

              <dl className="divide-y divide-line-soft mt-5">
                {glance.map((row) => (
                  <div key={row.label} className="py-3 first:pt-0 last:pb-0">
                    <dt className="font-pixel text-[0.45rem] uppercase leading-relaxed tracking-[0.1em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-text">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 border border-dashed border-primary/35 bg-primary/5 p-4">
                <p className="font-pixel text-[0.45rem] uppercase tracking-[0.1em] text-primary">
                  Theme reveal
                </p>
                <p className="mt-2 font-display text-xl uppercase text-text">{event.theme}</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="organizers-title">
        <div className="shell">
          <SectionHeading
            id="organizers-title"
            eyebrow="Organizers"
            title="Two Organizers. One room."
            description="Both crews share the stage, the run of show and the judging panel."
          />
          <Reveal className="mt-10">
            <OrganizerCards />
          </Reveal>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="expectations-title">
        <div className="shell">
          <SectionHeading
            id="expectations-title"
            align="center"
            eyebrow="What to expect"
            title="Built for people who ship."
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {event.about.expectations.map((item, index) => (
              <li key={item.title} className="h-full">
                <Reveal delay={index * 70} className="h-full">
                  <Card className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="icon-box">
                        <Icon name={item.icon} size={21} />
                      </span>
                      <span
                        aria-hidden="true"
                        className="deco-index font-pixel text-[0.5rem] tracking-[0.1em] text-primary/35"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="display-3 mt-5 text-text">{item.title}</h3>
                    {item.desc ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                    ) : null}
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="tracks-about">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="tracks-about"
              eyebrow="Focus areas"
              title={
                <>
                  Many tracks.
                  <br />
                  One <span className="accent">demo table.</span>
                </>
              }
              description="Pick a lane at kickoff, or mix two. Judges score the working build first, the slide deck never."
            />
          </div>

          <Reveal className="mt-10">
            <div className="corner-ticks relative overflow-hidden border-2 border-primary/35 bg-gradient-to-br from-primary/10 via-ink-2 to-secondary/10 px-6 py-12 text-center sm:px-10 md:px-14 md:py-16">
              <div className="absolute inset-0 grid-lines grid-fade opacity-60" aria-hidden="true" />

              <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                <span className="icon-box h-14 w-14">
                  <Icon name="lock" size={26} />
                </span>
                <h3 className="display-2 mt-6 text-text">ON THE SPOT</h3>
                <p className="lede mt-4 text-base italic">Tracks will be revealed at the event.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="venue-title">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            id="venue-title"
            eyebrow="Venue & city"
            title={
              <>
                {event.venue.name.split(",")[0]},
                <br />
                <span className="accent">{event.venue.name.split(",").slice(1).join(",").trim()}.</span>
              </>
            }
            description={event.venue.note}
          />

          <Reveal delay={100}>
            <Card padded={false} interactive={false} className="relative overflow-hidden">
              <div className="relative aspect-[16/9] w-full border-b border-line bg-ink-2">
                <div className="absolute inset-0 grid-lines opacity-80" aria-hidden="true" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <span className="icon-box h-14 w-14">
                    <Icon name="mapPin" size={26} />
                  </span>
                  <p className="font-pixel text-[0.55rem] uppercase tracking-[0.14em] text-primary">
                    {event.venue.name}
                  </p>
                  <p className="text-sm text-muted">{event.venue.city}</p>
                </div>
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-2">
                <div>
                  <p className="font-pixel text-[0.45rem] uppercase tracking-[0.1em] text-muted">
                    Address
                  </p>
                  <p className="mt-1 text-sm text-text">Shared with ticket confirmation</p>
                </div>
                <div>
                  <p className="font-pixel text-[0.45rem] uppercase tracking-[0.1em] text-muted">
                    Access
                  </p>
                  <p className="mt-1 text-sm text-text">Step-free routes · quiet room on site</p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}

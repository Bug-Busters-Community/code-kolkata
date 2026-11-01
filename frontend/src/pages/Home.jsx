import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import PrizeCard from "../components/PrizeCard";
import TrackGrid from "../components/TrackGrid";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import CountUp from "../components/ui/CountUp";
import { Icon } from "../components/ui/Icon";
import Marquee from "../components/ui/Marquee";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";

const manifest = [
  { label: "Event", value: event.name },
  { label: "Theme", value: event.theme },
  { label: "Dates", value: event.dates.label },
  { label: "Host", value: event.organizers[0].name },
  { label: "Co-host", value: event.organizers[1].name },
  { label: "Venue", value: event.venue.name },
];

export default function Home() {
  const previewItems = event.schedule.days[0].items.slice(0, 4);

  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------- stats */}
      <section id="stats" aria-label="Event at a glance" className="scroll-mt-24 border-y border-line bg-ink-2/60">
        <div className="shell">
          <ul className="grid grid-cols-2 gap-px bg-line-soft lg:grid-cols-4">
            {event.stats.map((stat) => (
              <li key={stat.label} className="bg-ink px-4 py-8 sm:px-6 md:py-10">
                <p className="font-display text-[clamp(2.1rem,4.6vw,3.4rem)] leading-none text-primary">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 font-pixel text-[0.5rem] uppercase leading-relaxed tracking-[0.1em] text-text">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{stat.hint}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------- about teaser */}
      <section className="section" aria-labelledby="about-teaser">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <SectionHeading
              id="about-teaser"
              eyebrow="The collaboration"
              title={
                <>
                  Two crews.
                  <br />
                  One <span className="accent">launchpad.</span>
                </>
              }
              description={event.about.paragraphs[0]}
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {event.about.expectations.map((item) => (
                <li key={item.title} className="flex gap-3 border border-line-soft bg-ink-2/50 p-3.5">
                  <span className="mt-0.5 text-primary">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-text">{item.title}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/about" variant="ghost">
                About the event <Icon name="arrowRight" size={15} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="corner-ticks relative border border-line bg-ink-2/80 p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-line-soft pb-3">
                <span className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 border border-secondary/60 bg-secondary/20" />
                  <span className="h-2.5 w-2.5 border border-gold/60 bg-gold/20" />
                  <span className="h-2.5 w-2.5 border border-primary/60 bg-primary/20" />
                </span>
                <span className="font-pixel text-[0.45rem] uppercase tracking-[0.12em] text-muted">
                  event.manifest
                </span>
              </div>

              <dl className="mt-4">
                {manifest.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[4.5rem_1fr] gap-3 border-b border-line-soft py-2.5 last:border-0 sm:grid-cols-[5.5rem_1fr]"
                  >
                    <dt className="font-pixel text-[0.45rem] uppercase leading-relaxed tracking-[0.1em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-text">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 font-pixel text-[0.45rem] uppercase tracking-[0.12em] text-primary">
                &gt; status: assembling_
                <span className="cursor-block ml-1 inline-block h-3 w-[0.5ch] align-middle" aria-hidden="true" />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------- tracks / highlights */}
      <section className="section section-rule" aria-labelledby="tracks-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="tracks-title"
              eyebrow="Tracks & highlights"
              title={
                <>
                  Pick your <span className="accent">lane.</span>
                </>
              }
              description="Four ways in, one leaderboard. Every track gets mentors, a judging rubric and a winner on stage."
            />
            <p className="chip chip-primary md:mb-2">Theme reveal · {event.theme}</p>
          </div>

          <Reveal className="mt-10">
            <TrackGrid />
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------- schedule preview */}
      <section className="section section-rule" aria-labelledby="schedule-preview">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              id="schedule-preview"
              eyebrow="Run of show"
              title={
                <>
                  24 hours,
                  <br />
                  zero filler.
                </>
              }
              description={event.schedule.note}
            />
            <div className="mt-7">
              <Button to="/schedule" variant="ghost">
                Full schedule <Icon name="arrowRight" size={15} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Card padded={false} interactive={false} className="overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
                <span className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                  {event.schedule.days[0].label} · {event.schedule.days[0].date}
                </span>
                <span className="chip chip-danger">Tentative</span>
              </div>

              <ol>
                {previewItems.map((item) => (
                  <li
                    key={`${item.time}-${item.title}`}
                    className="grid grid-cols-[3.5rem_1fr] items-start gap-3 border-b border-line-soft px-5 py-4 last:border-0 sm:grid-cols-[4rem_1fr_auto]"
                  >
                    <span className="font-pixel text-[0.5rem] leading-loose text-primary">{item.time}</span>
                    <span>
                      <span className="block text-sm font-medium text-text">{item.title}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted">{item.desc}</span>
                    </span>
                    <span className="chip col-start-2 justify-self-start sm:col-start-3">{item.type}</span>
                  </li>
                ))}
              </ol>

              <div className="border-t border-line px-5 py-4">
                <Link
                  to="/schedule"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                >
                  Day 02 continues with code freeze, judging expo and finals
                  <Icon name="arrowRight" size={15} />
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------- prizes teaser */}
      <section className="section section-rule" aria-labelledby="prizes-teaser">
        <div className="shell">
          <SectionHeading
            id="prizes-teaser"
            align="center"
            eyebrow="Prizes & perks"
            title={
              <>
                Bragging rights,
                <br />
                with <span className="accent-secondary">receipts.</span>
              </>
            }
            description={event.prizes.note}
          />

          <Reveal className="mt-10">
            <ul className="grid gap-4 md:grid-cols-3">
              {event.prizes.tiers.map((tier) => (
                <li key={tier.title}>
                  <PrizeCard tier={tier} />
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-8 flex justify-center">
            <Button to="/prizes" variant="ghost">
              All prizes & categories <Icon name="arrowRight" size={15} />
            </Button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- sponsor marquee */}
      <section className="section-tight section-rule overflow-hidden" aria-labelledby="sponsor-marquee">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="sponsor-marquee"
              eyebrow="Sponsors & partners"
              title="Your logo belongs on this wall."
              description={event.sponsorNote}
            />
            <Button to="/sponsors" variant="secondary" size="sm" className="md:mb-1">
              Partner with us
            </Button>
          </div>
        </div>

        <div className="mt-9">
          <Marquee items={event.marquee} />
        </div>
      </section>

      {/* -------------------------------------------------- final CTA */}
      <section className="section section-rule" aria-labelledby="final-cta">
        <div className="shell">
          <Reveal>
            <div className="corner-ticks relative overflow-hidden border-2 border-primary/35 bg-gradient-to-br from-primary/10 via-ink-2 to-secondary/10 px-6 py-12 text-center sm:px-10 md:px-14 md:py-16">
              <div className="absolute inset-0 grid-lines grid-fade opacity-60" aria-hidden="true" />

              <div className="relative mx-auto flex max-w-3xl flex-col items-center">
                <p className="font-pixel text-[0.5rem] uppercase tracking-[0.18em] text-gold">
                  {event.dates.label} · {event.venue.city}
                </p>
                <h2 id="final-cta" className="display-2 mt-4 text-text">
                  Build something unreasonable.
                </h2>
                <p className="lede mt-5 max-w-xl text-base">{event.intro}</p>

                <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
                  <Button to="/register" variant="primary">
                    Register now <Icon name="arrowRight" size={15} />
                  </Button>
                  <Button to="/sponsors" variant="secondary">
                    Sponsor the weekend
                  </Button>
                </div>

                <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
                  <li className="chip">
                    <Icon name="clock" size={13} />
                    24-hour sprint
                  </li>
                  <li className="chip">
                    <Icon name="users" size={13} />
                    Teams of 1–4
                  </li>
                  <li className="chip">
                    <Icon name="lock" size={13} />
                    Theme reveal soon
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

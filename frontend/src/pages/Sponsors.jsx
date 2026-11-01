import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";

const audience = [
  {
    title: `${event.stats[1].value}${event.stats[1].suffix} builders in the room`,
    desc: "Students, early-career engineers and designers from colleges and communities across the region.",
    icon: "users",
  },
  {
    title: `${event.stats[0].value}${event.stats[0].suffix} of attention`,
    desc: "A full build sprint on site — not a flyer in a hallway. Your track brief lives inside their workflow.",
    icon: "clock",
  },
  {
    title: "Content you can reuse",
    desc: "Stage photos, a highlight reel and a post-event report with project links and opt-in talent notes.",
    icon: "spark",
  },
];

export default function Sponsors() {
  const partnerHref = event.socials.find((social) => social.href)?.href;
  const featured = event.sponsorTiers[0];
  const tiers = event.sponsorTiers.slice(1);

  return (
    <>
      <PageHeader
        index="05"
        breadcrumb="Sponsor"
        eyebrow="Sponsorship"
        title={
          <>
            Back the room
            <br />
            that <span className="accent">builds.</span>
          </>
        }
        description={event.sponsorNote}
        chips={[
          { label: "Every slot open", icon: "spark" },
          { label: event.dates.label, icon: "calendar" },
          { label: "Custom packages", icon: "layers" },
        ]}
      />

      <section className="section" aria-labelledby="audience-title">
        <div className="shell">
          <SectionHeading
            id="audience-title"
            eyebrow="The audience"
            title="Who is actually in the room."
            description="No vanity metrics. These are the people writing code, forming teams and picking tools they will keep using after the weekend."
          />

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {audience.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 80} className="h-full">
                  <Card className="h-full">
                    <span className="icon-box">
                      <Icon name={item.icon} size={21} />
                    </span>
                    <h3 className="display-3 mt-5 text-text">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="tiers-title">
        <div className="shell">
          <SectionHeading
            id="tiers-title"
            eyebrow="Packages"
            title="Pick a level. Shape the brief."
            description="Each tier is a starting point, not a fixed box. Tell us what you need to get out of the weekend."
          />

          <Reveal className="mt-10">
            <Card
              interactive={false}
              className="card-gold relative overflow-hidden p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-10"
            >
              <div className="absolute right-0 top-0 h-32 w-32 bg-gold/10 blur-3xl" aria-hidden="true" />

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-pixel text-[0.5rem] uppercase tracking-[0.14em] text-gold">
                    {featured.tier}
                  </span>
                  <span className="chip">{featured.slots} slot</span>
                </div>
                <h3 className="display-2 mt-4 text-text">{featured.headline}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  The highest-visibility partnership on the event. Your team is on stage, in the brief and on
                  every deliverable.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {partnerHref ? (
                    <Button href={partnerHref} variant="primary" size="sm">
                      Request the deck
                    </Button>
                  ) : (
                    <Button to="/team" variant="primary" size="sm">
                      Talk to the team
                    </Button>
                  )}
                  <Button to="/prizes" variant="ghost" size="sm">
                    See the prizes
                  </Button>
                </div>
              </div>

              <ul className="relative mt-8 space-y-3 border-t border-gold/20 pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {featured.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-text">
                    <span className="mt-0.5 text-gold">
                      <Icon name="check" size={15} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {tiers.map((tier, index) => (
              <li key={tier.tier}>
                <Reveal delay={index * 70} className="h-full">
                  <Card className="flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                        {tier.tier}
                      </span>
                      <span className="chip">
                        {tier.slots} {tier.slots === 1 ? "slot" : "slots"}
                      </span>
                    </div>

                    <h3 className="display-3 mt-4 text-text">{tier.headline}</h3>

                    <ul className="mt-5 space-y-2.5 border-t border-line-soft pt-4">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                          <span className="mt-0.5 text-primary">
                            <Icon name="check" size={14} />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5">
                      {partnerHref ? (
                        <a
                          href={partnerHref}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center gap-2 text-sm text-text transition-colors hover:text-primary"
                        >
                          Enquire about {tier.tier}
                          <Icon name="arrowUpRight" size={15} />
                        </a>
                      ) : (
                        <span className="text-sm text-muted">Enquiries open soon</span>
                      )}
                    </div>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="logo-wall-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="logo-wall-title"
              eyebrow="Logo wall"
              title="Nobody here yet. Be first."
              description="Sponsor marks appear here as they are confirmed, and travel to the hero, stage loop and certificates."
            />
            <span className="chip chip-primary md:mb-2">6 of 6 slots open</span>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <div className="corner-ticks flex aspect-[4/3] flex-col items-center justify-center gap-2 border border-dashed border-line bg-ink-2/60 p-3 text-center transition-colors hover:border-primary/60">
                  <span className="font-pixel text-[0.45rem] uppercase tracking-[0.1em] text-primary/70">
                    Slot {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-muted">
                    Logo
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.12em] text-muted/60">Open</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-rule">
        <div className="shell">
          <div className="corner-ticks relative overflow-hidden border-2 border-primary/35 bg-gradient-to-br from-primary/10 via-ink-2 to-secondary/10 p-8 text-center sm:p-12">
            <div className="absolute inset-0 grid-lines grid-fade opacity-50" aria-hidden="true" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <p className="eyebrow">Let us build the package</p>
              <h2 className="display-2 mt-4">Bring a brief. We will bring the room.</h2>
              <p className="lede mt-4 text-base">
                Send your goals, budget range and the audience you care about. We reply with a custom package and
                the current sponsor deck.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {partnerHref ? (
                  <Button href={partnerHref} variant="primary">
                    Start a conversation <Icon name="arrowUpRight" size={15} />
                  </Button>
                ) : (
                  <Button to="/team" variant="primary">
                    Start a conversation <Icon name="arrowUpRight" size={15} />
                  </Button>
                )}
                <Button to="/partners" variant="secondary">
                  Community partnerships
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

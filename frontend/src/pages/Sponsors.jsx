import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import Marquee from "../components/ui/Marquee";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import SponsorCard from "../components/SponsorCard";
import event from "../config/event";
import sponsors, { sponsorPackages } from "../data/sponsors";
import "../styles/sponsors.css";

/* Kept in sync with the community-partner page. These are partner benefits,
   not sponsor claims, and the copy is intentionally unchanged. */
const partnerBenefits = [
  {
    title: "A shout-out that sticks",
    desc: "Logo on the site, the stage loop and the welcome kit — plus a stage mention during opening and closing.",
    icon: "spark",
  },
  {
    title: "Your community in the room",
    desc: "Bring a crew, host a table, or send a challenge brief for teams to build against.",
    icon: "users",
  },
  {
    title: "Shared content, zero work",
    desc: "We handle photos, the highlight reel and the recap. You get assets you can post the same week.",
    icon: "layers",
  },
];

export default function Sponsors() {
  return (
    <>
      <PageHeader
        index="05"
        breadcrumb="Sponsor"
        eyebrow="Official sponsors"
        title={
          <>
            The people
            <br />
            <span className="accent">backing</span> the build.
          </>
        }
        description="N8N and ZEN.XYZ are officially on board for CODE KOLKATA 2026 — powering the AI & Automation track and putting a domain in every builder's hands."
        chips={[
          { label: "2 confirmed sponsors", icon: "award" },
          { label: "5 packages open", icon: "layers" },
          { label: event.dates.label, icon: "calendar" },
        ]}
      />

      {/* ------------------------------------------------ confirmed sponsors */}
      <section className="section" aria-labelledby="confirmed-sponsors-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="confirmed-sponsors-title"
              eyebrow="Confirmed sponsors"
              title={
                <>
                  Two partners. <span className="accent">One room.</span>
                </>
              }
              description="The official partners already powering CODE KOLKATA 2026. Both are confirmed, both are on the build floor with us."
            />
            <span className="chip chip-primary md:mb-2">
              <Icon name="check" size={13} />
              2 confirmed
            </span>
          </div>

          <ul className="sponsor-grid mt-10">
            {sponsors.map((sponsor, index) => (
              <Reveal
                as="li"
                key={sponsor.id}
                className="sponsor-card-slot"
                delay={index * 110}
              >
                <SponsorCard sponsor={sponsor} index={index} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------- open packages */}
      <section
        className="section section-rule"
        id="sponsor-packages"
        aria-labelledby="sponsor-packages-title"
      >
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="sponsor-packages-title"
              eyebrow="Open packages"
              title={
                <>
                  The wall still has <span className="accent">room.</span>
                </>
              }
              description="These official packages are available for CODE KOLKATA 2026. Every slot below is open — no package is confirmed until the announcement."
            />
            <span className="chip md:mb-2">
              <Icon name="spark" size={13} />
              5 packages open
            </span>
          </div>

          <ul className="sponsor-packages mt-10">
            {sponsorPackages.map((pkg, index) => (
              <Reveal
                as="li"
                key={pkg.label}
                className="sponsor-package-slot"
                delay={index * 70}
              >
                <Card interactive={false} className="sponsor-package">
                  <div className="sponsor-package__top">
                    <span className="sponsor-package__index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="sponsor-slot">
                      <span className="sponsor-slot__dot" aria-hidden="true" />
                      Slot open
                    </span>
                  </div>

                  <h3 className="sponsor-package__title">{pkg.label}</h3>
                  <p className="sponsor-package__headline">{pkg.headline}</p>

                  <ul className="sponsor-package__benefits">
                    {pkg.benefits.map((benefit) => (
                      <li key={benefit} className="sponsor-package__benefit">
                        <Icon name="check" size={13} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="sponsor-package__footer">
                    <span>
                      {pkg.slots} {pkg.slots === 1 ? "slot" : "slots"}
                    </span>
                    <span>Available</span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button to="/register" variant="primary">
              Request the sponsor deck <Icon name="arrowRight" size={15} />
            </Button>
            <p className="text-sm text-muted">
              Custom packages and track sponsorships are available on request.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ community partners */}
      <section className="section section-rule" aria-labelledby="community-partners-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="community-partners-title"
              eyebrow="The program"
              title="Four kinds of partnership."
              description="Every partnership is swap-based: you bring reach or teams, we bring visibility, content and a room full of builders."
            />
            <span className="chip md:mb-2">Applications open</span>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {event.partnerProgram.map((partner, index) => (
              <li key={partner.title}>
                <Reveal delay={index * 70} className="h-full">
                  <Card className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="icon-box">
                        <Icon name={partner.icon} size={21} />
                      </span>
                      <span className="chip chip-primary">{partner.slots}</span>
                    </div>
                    <h3 className="display-3 mt-5 text-text">{partner.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{partner.desc}</p>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/partners" variant="ghost">
              Explore the community partner program <Icon name="arrowRight" size={15} />
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- partner wall */}
      <section
        className="section-tight section-rule overflow-hidden"
        aria-labelledby="partner-wall-title"
      >
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="partner-wall-title"
              eyebrow="Partner wall"
              title="The wall is being built."
              description="Confirmed communities appear here as the joint announcement rolls out."
            />
            <span className="chip md:mb-2">Applications open</span>
          </div>
        </div>

        <div className="mt-9">
          <Marquee items={event.marquee} label="Partner slots" />
        </div>
      </section>

      {/* --------------------------------------------------------- why partner */}
      <section className="section section-rule" aria-labelledby="why-partner-title">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            id="why-partner-title"
            eyebrow="Why partner"
            title={
              <>
                Low lift.
                <br />
                Real <span className="accent">reach.</span>
              </>
            }
            description="You do not need to run a booth for two days. Pick the level of involvement that fits your community, and we handle the rest."
          />

          <ul className="space-y-3">
            {partnerBenefits.map((item) => (
              <li key={item.title}>
                <div className="flex items-start gap-4 border border-line bg-ink-2/60 p-4">
                  <span className="icon-box">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <span>
                    <span className="block font-display text-lg uppercase leading-tight text-text">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {item.desc}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="section section-rule">
        <div className="shell">
          <div className="corner-ticks relative overflow-hidden border-2 border-primary/35 bg-gradient-to-br from-secondary/10 via-ink-2 to-primary/10 p-8 text-center sm:p-12">
            <div className="absolute inset-0 grid-lines grid-fade opacity-50" aria-hidden="true" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <p className="eyebrow">Roll with us</p>
              <h2 className="display-2 mt-4">Add your community to the wall.</h2>
              <p className="lede mt-4 text-base">
                Send your community name, size and the kind of collaboration you have in mind. We reply with a
                partner kit and the current slot list.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button to="/register" variant="primary">
                  Apply as a community partner <Icon name="arrowRight" size={15} />
                </Button>
                <Button href="#sponsor-packages" variant="secondary">
                  Sponsor packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Button from "../components/ui/Button";
import { Icon } from "../components/ui/Icon";
import Marquee from "../components/ui/Marquee";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import SponsorCard from "../components/SponsorCard";
import event from "../config/event";
import sponsors from "../data/sponsors";
import "../styles/sponsors.css";

/* Kept in sync with the community-partner page. These are partner benefits,
   not sponsor claims, and the copy is intentionally unchanged. */
const partnerBenefits = [
  {
    title: "A shout-out that sticks",
    desc: "Logo on the site, the stage loop, plus a stage mention during opening and closing.",
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
        description="Anibotix Robotics, n8n, Gen.XYZ, Interview Buddy and Imagiwaeve Studios are officially on board for CODE KOLKATA , powering the AI & Automation track and putting a domain in top builder's hands."
        chips={[
          { label: "6 confirmed sponsors", icon: "award" },
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
                  Six partners. <span className="accent">One room.</span>
                </>
              }
              description="The official partners already powering CODE KOLKATA . Both are confirmed, both are on the build floor with us."
            />
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
          <div className="corner-ticks relative overflow-hidden border-2 border-primary/35 bg-linear-to-br from-secondary/10 via-ink-2 to-primary/10 p-8 text-center sm:p-12">
            <div className="absolute inset-0 grid-lines grid-fade opacity-50" aria-hidden="true" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <p className="eyebrow">Roll with us</p>
              <h2 className="display-2 mt-4">Add your company to the wall.</h2>
              <p className="lede mt-4 text-base">
                Join us as a sponsor and get your company in front of a growing community of developers and builders.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="mailto:community.bugbusters@gmail.com"
                  variant="primary"
                >
                  Apply as a sponsor <Icon name="arrowRight" size={15} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

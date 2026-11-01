import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import Marquee from "../components/ui/Marquee";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";

const benefits = [
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

export default function Partners() {
  const partnerHref = event.socials.find((social) => social.href)?.href;

  return (
    <>
      <PageHeader
        index="08"
        breadcrumb="Community Partner"
        eyebrow="Community partners"
        title={
          <>
            Bring your
            <br />
            <span className="accent">people.</span>
          </>
        }
        description="Community partners are the reason the room is full and the energy lasts past midnight. If you run a community, campus chapter, newsletter or podcast, there is a slot with your name on it."
        chips={[
          { label: "6 community slots", icon: "users" },
          { label: "10 campus chapters", icon: "compass" },
          { label: "2 media slots", icon: "spark" },
        ]}
      />

      <section className="section" aria-labelledby="program-title">
        <div className="shell">
          <SectionHeading
            id="program-title"
            eyebrow="The program"
            title="Four kinds of partnership."
            description="Every partnership is swap-based: you bring reach or teams, we bring visibility, content and a room full of builders."
          />

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
        </div>
      </section>

      <section className="section-tight section-rule overflow-hidden" aria-labelledby="partner-wall-title">
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

      <section className="section section-rule" aria-labelledby="partner-benefits-title">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            id="partner-benefits-title"
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
            {benefits.map((item) => (
              <li key={item.title}>
                <div className="flex items-start gap-4 border border-line bg-ink-2/60 p-4">
                  <span className="icon-box">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <span>
                    <span className="block font-display text-lg uppercase leading-tight text-text">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{item.desc}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
                {partnerHref ? (
                  <Button href={partnerHref} variant="primary">
                    Apply as a partner <Icon name="arrowUpRight" size={15} />
                  </Button>
                ) : (
                  <Button to="/team" variant="primary">
                    Talk to the team
                  </Button>
                )}
                <Button to="/sponsors" variant="secondary">
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

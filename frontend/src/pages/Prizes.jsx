import PrizeCard from "../components/PrizeCard";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";

export default function Prizes() {
  return (
    <>
      <PageHeader
        index="07"
        breadcrumb="Prize"
        eyebrow="Prizes & perks"
        title={
          <>
            Ship it.
            <br />
            <span className="accent-secondary">Get paid.</span>
          </>
        }
        description={event.prizes.note}
        chips={[
          { label: event.prizes.poolLabel, icon: "award" },
          { label: "Track winners ×4", icon: "layers" },
          { label: "Certificates for all", icon: "check" },
        ]}
      />

      <section className="section" aria-labelledby="pool-title">
        <div className="shell">
          <Reveal>
            <div className="corner-ticks relative overflow-hidden border-2 border-gold/30 bg-gradient-to-br from-gold/10 via-ink-2 to-ink p-6 sm:p-10">
              <div className="absolute inset-0 grid-lines grid-fade opacity-50" aria-hidden="true" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <p className="eyebrow">The pool</p>
                  <h2 id="pool-title" className="display-1 mt-4 text-gold">
                    {event.prizes.poolLabel}
                  </h2>
                  <p className="lede mt-4 max-w-xl text-base">
                    Cash, credits and hardware are being finalised with partners. Categories, judging criteria and
                    perks are already locked — the numbers land with the sponsor announcements.
                  </p>
                </div>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {event.prizes.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2.5 border border-line bg-ink/50 p-3 text-sm leading-relaxed text-text"
                    >
                      <span className="mt-0.5 text-gold">
                        <Icon name="check" size={15} />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="placements-title">
        <div className="shell">
          <SectionHeading
            id="placements-title"
            eyebrow="Podium"
            title="Three placements. Zero participation trophies."
            description="Every placement is judged across all tracks on the same rubric: working demo, originality, execution and story."
          />

          <Reveal className="mt-10">
            <ul className="grid gap-4 md:grid-cols-3">
              {event.prizes.tiers.map((tier) => (
                <li key={tier.title}>
                  <PrizeCard tier={tier} featured={tier.tone === "gold"} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="categories-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="categories-title"
              eyebrow="Extra hardware"
              title="More ways to leave with something."
              description="Category awards sit on top of the podium and do not require a top-three finish."
            />
            <span className="chip md:mb-2">Judged on site</span>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {event.prizes.categories.map((category, index) => (
              <li key={category.title}>
                <Reveal delay={index * 70} className="h-full">
                  <Card className="flex h-full items-start gap-4">
                    <span className="icon-box">
                      <Icon name={category.icon} size={21} />
                    </span>
                    <span>
                      <h3 className="display-3 text-text">{category.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{category.desc}</p>
                    </span>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-rule">
        <div className="shell">
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="eyebrow">Enter the arena</p>
            <h2 className="display-2">The best prize is a demo that works.</h2>
            <p className="lede max-w-xl text-base">
              Registration is free. Bring a team or join one at check-in. The theme drops at the opening keynote.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button to="/register" variant="primary">
                Register now <Icon name="arrowRight" size={15} />
              </Button>
              <Button to="/schedule" variant="ghost">
                Check the schedule
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

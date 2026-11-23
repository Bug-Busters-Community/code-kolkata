import { Link } from "react-router-dom";
import PrizeCard from "../components/PrizeCard";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";

const TONE_CLASSES = {
  gold: {
    badge: "border-gold/40 text-gold bg-gold/10",
    text: "text-gold",
    card: "card-gold",
    icon: "text-gold",
  },
  primary: {
    badge: "border-primary/40 text-primary bg-primary/10",
    text: "text-primary",
    card: "",
    icon: "text-primary",
  },
  secondary: {
    badge: "border-secondary/40 text-secondary bg-secondary/10",
    text: "text-secondary",
    card: "card-secondary",
    icon: "text-secondary",
  },
};

export default function Prizes() {
  return (
    <>
      <PageHeader
        index="07"
        breadcrumb="Prize"
        eyebrow="Prizes & partner perks"
        title={
          <>
            Ship it.
            <br />
            <span className="accent-secondary">Get rewarded.</span>
          </>
        }
        description={event.prizes.note}
        chips={[
          { label: event.prizes.poolLabel, icon: "award" },
          { label: "Cash + Paid Internships", icon: "spark" },
          { label: "Swag & Perks for all", icon: "check" },
        ]}
      />

      {/* ----------------------------------------------------------- the pool */}
      <section className="section" aria-labelledby="pool-title">
        <div className="shell">
          <Reveal>
            <div className="corner-ticks relative overflow-hidden border-2 border-gold/30 bg-gradient-to-br from-gold/10 via-ink-2 to-ink p-6 sm:p-10">
              <div className="absolute inset-0 grid-lines grid-fade opacity-50" aria-hidden="true" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="eyebrow">The pool</p>
                  </div>
                  <h2 id="pool-title" className="display-1 mt-4 text-gold">
                    {event.prizes.poolLabel}
                  </h2>
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
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- podium */}
      <section className="section section-rule" aria-labelledby="placements-title">
        <div className="shell">
          <SectionHeading
            id="placements-title"
            eyebrow="Podium"
            title="Three placements. Zero participation fluff."
            description="Every placement is judged across all tracks on technical rigor, working prototype, UX design, originality, and live demo pitch."
          />

          <Reveal className="mt-10">
            <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
              {event.prizes.tiers.map((tier) => (
                <li key={tier.title}>
                  <PrizeCard tier={tier} featured={tier.tone === "gold"} />
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="text-muted mt-4">Swags include: Sticker, Badge, T-Shirt, Pen, Notebook, Poster, Bag</p>
          <p className="text-muted mt-4">For getting an idea which brand's swag we are talking about, check out <Link to="/sponsors" className="underline font-bold">here</Link></p>
        </div>
      </section>

      {/* ----------------------------------------------------- for every builder */}
      <section className="section section-rule" aria-labelledby="all-swag-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="all-swag-title"
              eyebrow="For every participant"
              title="Nobody leaves empty-handed."
              description="Every verified hacker and builder receives official event swag, developer platform credits, course discounts, and hot meals."
            />
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.prizes.allSwag.map((swag, index) => (
              <Reveal key={swag.title} delay={index * 40} className="h-full">
                <Card className="flex h-full items-start gap-4">
                  <span className="icon-box shrink-0 text-primary">
                    <Icon name={swag.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="display-3 text-text text-base">{swag.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{swag.desc}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ categories */}
      <section className="section section-rule" aria-labelledby="categories-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="categories-title"
              eyebrow="Special Honors"
              title="Extra ways to win."
              description="Recognitions awarded for minigame high-scores, crew contributions, and community growth."
            />
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {event.prizes.categories.map((category, index) => (
              <li key={category.title}>
                <Reveal delay={index * 70} className="h-full">
                  <Card className="flex h-full items-start gap-4">
                    <span className="icon-box shrink-0 text-secondary">
                      <Icon name={category.icon} size={21} />
                    </span>
                    <span>
                      <h3 className="display-3 text-text">{category.title}</h3>
                    </span>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------- cta */}
      <section className="section section-rule">
        <div className="shell">
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="eyebrow">Enter the arena</p>
            <h2 className="display-2">The best prize is a demo that works.</h2>
            <p className="lede max-w-xl text-base">
              Registration is free. Bring your laptop, assemble your crew, and take home cash, internships, domains, and swag.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                href="https://luma.com/2r9858zm"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
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

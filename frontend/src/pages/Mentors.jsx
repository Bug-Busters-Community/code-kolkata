import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";

export default function Mentors() {
  return (
    <>
      <PageHeader
        index="06"
        breadcrumb="Mentor"
        eyebrow="Mentors & speakers"
        title={
          <>
            People who
            <br />
            have <span className="accent">shipped.</span>
          </>
        }
        description={event.mentors.note}
        chips={[
          { label: "Roster onboarding", icon: "users" },
          { label: `${event.mentors.cards.length} mentor seats`, icon: "compass" },
          { label: "1:1 office hours", icon: "clock" },
        ]}
      />

      <section className="section" aria-labelledby="mentor-grid-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="mentor-grid-title"
              eyebrow="The bench"
              title="Mentor seats, by discipline."
              description="Roles are locked. Names and companies are announced with the theme reveal — every seat is a working practitioner, not a logo."
            />
            <span className="chip chip-primary md:mb-2">Names TBA</span>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.mentors.cards.map((mentor, index) => (
              <li key={mentor.role}>
                <Reveal delay={Math.min(index * 60, 240)} className="h-full">
                  <Card className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="avatar-pixel h-16 w-16">
                        <Icon name={mentor.icon} size={26} />
                      </span>
                      <span className="chip">Seat {String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <h3 className="display-3 mt-5 text-text">{mentor.role}</h3>
                    <p className="mt-2 font-pixel text-[0.5rem] uppercase leading-relaxed tracking-[0.1em] text-muted">
                      Name announced soon
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{mentor.focus}</p>

                    <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-line-soft pt-4">
                      {mentor.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="mentor-apply-title">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <SectionHeading
              id="mentor-apply-title"
              eyebrow="Join the bench"
              title={
                <>
                  Got scars from
                  <br />
                  shipping? <span className="accent">Bring them.</span>
                </>
              }
              description="Two-hour shifts, zero slide decks. Help teams scope, debug and rehearse. We cover meals, swag and a thank-you that is not a generic certificate."
            />

            <Card className="p-6 sm:p-7">
              <p className="font-pixel text-[0.5rem] uppercase tracking-[0.12em] text-primary">
                What we ask
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Two mentor shifts across the build window",
                  "One 15-minute 1:1 slot per team that books you",
                  "Honest feedback on the judging rubric",
                  "Comfortable giving product, not just code, advice",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-0.5 text-primary">
                      <Icon name="check" size={15} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {event.socials.find((social) => social.href) ? (
                  <Button href={event.socials.find((social) => social.href).href} variant="secondary">
                    Apply to mentor <Icon name="arrowUpRight" size={15} />
                  </Button>
                ) : (
                  <Button to="/team" variant="secondary">
                    Talk to the team
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

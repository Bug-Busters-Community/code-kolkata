import ContactSection from "../components/ContactSection";
import OrganizerCards from "../components/OrganizerCards";
import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import event from "../config/event";

export default function Team() {
  return (
    <>
      <PageHeader
        index="09"
        breadcrumb="Team"
        eyebrow="The crew"
        title={
          <>
            The humans
            <br />
            behind the <span className="accent">HUD.</span>
          </>
        }
        description={event.team.note}
        chips={[
          { label: "2 organizer communities", icon: "users" },
          { label: `${event.team.crew.length} crew seats`, icon: "compass" },
          { label: "Names rolling out", icon: "clock" },
        ]}
      />

      <section className="section" aria-labelledby="organizers-team-title">
        <div className="shell">
          <SectionHeading
            id="organizers-team-title"
            eyebrow="Presented by"
            title="Two organizers, equal billing."
            description="Both communities share direction, budget and the stage. No silent partner, no logo-only collaboration."
          />
          <Reveal className="mt-10">
            <OrganizerCards />
          </Reveal>
        </div>
      </section>

      <section className="section section-rule" aria-labelledby="crew-title">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="crew-title"
              eyebrow="Core crew"
              title="Who is on the floor."
              description="Operations, design, engineering and community — the roles are filled first, names follow with the announcement."
            />
            <span className="chip chip-primary md:mb-2">Names TBA</span>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.team.crew.map((member, index) => (
              <li key={member.role}>
                <Reveal delay={Math.min(index * 60, 240)} className="h-full">
                  <Card className="flex h-full items-center gap-4">
                    <span className="avatar-pixel h-16 w-16 flex-none font-pixel text-sm">
                      {member.monogram}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-xl uppercase leading-tight text-text">
                        {member.role}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{member.area}</span>
                      <span className="mt-2 inline-flex min-h-7 items-center gap-1.5 font-pixel text-[0.42rem] uppercase tracking-[0.1em] text-primary/70">
                        <Icon name="user" size={12} />
                        Announcing soon
                      </span>
                    </span>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

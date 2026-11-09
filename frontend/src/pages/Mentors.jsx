import MentorCard from "../components/MentorCard";
import Button from "../components/ui/Button";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import mentors from "../data/mentor";

export default function Mentors() {
  return (
    <>
      <PageHeader
        index="06"
        breadcrumb="Mentor"
        eyebrow="Judge & mentor"
        title={
          <>
            Meet the <span className="accent">panel.</span>
          </>
        }
        description="One judge. One mentor. Two practitioners who have shipped real systems are here to pressure-test your build, sharpen the story and push the work further."
        chips={[
          { label: "1 Judge", icon: "award" },
          { label: "1 Mentor", icon: "users" },
          { label: "On the floor", icon: "compass" },
        ]}
      />

      <section className="section mentor-section" aria-labelledby="panel-title">
        <div className="absolute inset-0 -z-10 grid-lines grid-fade opacity-30" aria-hidden="true" />

        <div className="shell">
          <div className="mentor-panel-head">
            <Reveal>
              <SectionHeading
                id="panel-title"
                eyebrow="The panel"
                title={
                  <>
                    Two seats. <span className="accent">Two perspectives.</span>
                  </>
                }
              />
            </Reveal>

            <Reveal delay={110}>
              <aside className="mentor-note">
                <p className="mentor-note__label">How to read the panel</p>
                <p className="mentor-note__text">
                  The <span className="mentor-note__judge">judge</span> sets the bar at the final pitch.
                  The <span className="mentor-note__mentor">mentor</span> helps you clear it while you build.
                </p>
              </aside>
            </Reveal>
          </div>

          <ul className="mentor-grid">
            {mentors.map((person, index) => (
              <Reveal
                as="li"
                key={person.name}
                className="mentor-card-slot"
                delay={index * 120}
              >
                <MentorCard person={person} index={index} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="mentor-cta-title">
        <div className="shell">
          <Reveal>
            <div className="mentor-cta corner-ticks relative overflow-hidden border border-line px-6 py-10 sm:px-10 md:px-14">
              <div className="absolute inset-0 grid-lines grid-fade opacity-40" aria-hidden="true" />

              <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
                <div>
                  <p className="eyebrow">Build in public</p>
                  <h2 id="mentor-cta-title" className="display-2 mt-4 max-w-2xl text-text">
                    Show them what you <span className="accent">ship.</span>
                  </h2>
                  <p className="lede mt-4 max-w-xl text-base">
                    Register your team, take the brief at kickoff and bring a working demo to the table.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button to="/register" variant="primary">
                    Register now <Icon name="arrowRight" size={15} />
                  </Button>
                  <Button to="/schedule" variant="ghost">
                    See the run of show
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

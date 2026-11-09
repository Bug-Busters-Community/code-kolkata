import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import TeamCard from "../components/TeamCard";
import { teamSections } from "../data/team";

export default function Team() {
  return (
    <>
      <PageHeader
        index="09"
        breadcrumb="Team"
        eyebrow="Meet the crew"
        title={
          <>
            The people
            <br />
            behind <span className="accent">the pixels.</span>
          </>
        }
        description="Two crews keep CODE KOLKATA moving - one sets the direction, the other runs the room. Together they turn a 8-hour tech event into a day worth remembering."
        chips={[
          { label: "Core Team · 08", icon: "users" },
          { label: "Event Crew · 07", icon: "layers" }
        ]}
      />

      {teamSections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={sectionIndex === 0 ? "section" : "section section-rule"}
          aria-labelledby={`${section.id}-title`}
        >
          <div className="shell">
            <SectionHeading
              id={`${section.id}-title`}
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              align="center"
              className="mx-auto max-w-3xl"
            />

            <ul className="team-grid mt-12">
              {section.members.map((member, index) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  index={index}
                  accent={section.accent}
                />
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}

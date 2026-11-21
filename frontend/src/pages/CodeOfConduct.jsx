import Card from "../components/ui/Card";
import { Icon } from "../components/ui/Icon";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

const sections = [
  {
    number: "01",
    title: "Purpose & Scope",
    icon: "compass",
    content: (
      <p className="text-base leading-relaxed text-muted">
        This Code of Conduct applies to all registered participants, attendees, guests, speakers,
        mentors, judges, sponsors, and crew attending{" "}
        <strong className="text-text font-semibold">CODE KOLKATA</strong> at K.P. Basu Memorial Hall,
        Jadavpur University, as well as across all official Bug Busters digital channels (website,
        registration portals, WhatsApp, and Discord). By registering for or entering the Event, you
        agree to comply with these guidelines and all reasonable instructions issued by the Bug Busters
        organizing team and venue management.
      </p>
    ),
  },
  {
    number: "02",
    title: "Respectful Behavior & Zero-Tolerance Harassment Policy",
    icon: "users",
    content: (
      <div className="space-y-4 text-base leading-relaxed text-muted">
        <p>
          Treat all fellow participants, speakers, mentors, volunteers, organizers, venue staff, and
          guests with courtesy, humility, and respect regardless of gender, age, college, coding
          experience, background, or identity.
        </p>
        <div className="border-l-2 border-primary/60 bg-primary/5 p-4 text-text">
          <p className="font-semibold text-primary uppercase text-xs tracking-wider font-pixel mb-1">
            Zero Tolerance Policy
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Harassment, bullying, discrimination, intimidation, abusive language, threats, unwanted
            physical contact, or disruptive conduct will not be tolerated in person or online.
          </p>
        </div>
        <p>
          Respect personal boundaries, differences of opinion, and the time and contributions of others.
          Do not interrupt sessions, workshops, or final project pitches.
        </p>
      </div>
    ),
  },
  {
    number: "03",
    title: "Buildathon Fair-Play, Digital Etiquette & Intellectual Property",
    icon: "code",
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="border border-line bg-ink/40 p-4">
          <p className="font-pixel text-xs text-primary uppercase tracking-wider mb-1">
            Original Sprint Work
          </p>
          <p className="text-sm leading-relaxed text-muted">
            All project code, designs, and prototypes submitted for the buildathon must be built during
            the official sprint window. Public open-source libraries, frameworks, and official sponsor
            APIs/SDKs are permitted and encouraged.
          </p>
        </div>
        <div className="border border-line bg-ink/40 p-4">
          <p className="font-pixel text-xs text-primary uppercase tracking-wider mb-1">
            Respect Intellectual Property
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Do not copy, plagiarize, misuse, or publicly disclose another participant’s project, code,
            presentation, or ideas without explicit permission and attribution.
          </p>
        </div>
        <div className="border border-line bg-ink/40 p-4">
          <p className="font-pixel text-xs text-primary uppercase tracking-wider mb-1">
            Responsible Digital & Network Use
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Use event communication channels, shared documents, Wi-Fi, and online platforms professionally.
            Do not share spam, hate speech, offensive content, malicious links, or confidential details,
            and do not record or publish another person's private conversation, screen, or contact details
            without consent.
          </p>
        </div>
        <div className="border border-line bg-ink/40 p-4">
          <p className="font-pixel text-xs text-primary uppercase tracking-wider mb-1">
            Participant IP Ownership
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Teams retain full ownership and intellectual property rights over the original projects they
            create during CODE KOLKATA.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Venue, Cleanliness & Safety Guidelines (Jadavpur University)",
    icon: "mapPin",
    content: (
      <ul className="space-y-3 text-base leading-relaxed text-muted">
        <li className="flex items-start gap-3">
          <span className="mt-1 text-primary">
            <Icon name="check" size={16} />
          </span>
          <div>
            <strong className="text-text font-semibold">Authorized Areas Only:</strong> Remain within
            K.P. Basu Memorial Hall and designated event routes; do not roam unauthorized campus/building
            areas and always inform the registration desk before exiting.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 text-primary">
            <Icon name="check" size={16} />
          </span>
          <div>
            <strong className="text-text font-semibold">Cleanliness & Property Care:</strong> Keep
            workspaces clean, use designated bins, handle venue equipment and power strips safely without
            overloading outlets, and consume food/beverages only in designated areas.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1 text-red-400">
            <Icon name="close" size={16} />
          </span>
          <div>
            <strong className="text-text font-semibold">Prohibited Items:</strong> Alcohol, illegal
            substances, smoking, weapons, or hazardous items are strictly prohibited on Jadavpur
            University premises.
          </div>
        </li>
      </ul>
    ),
  },
  {
    number: "05",
    title: "Enforcement & Consequences",
    icon: "lock",
    content: (
      <p className="text-base leading-relaxed text-muted">
        If a participant violates this Code of Conduct, venue rules, or organizer instructions, the Bug
        Busters organizing team may issue a formal warning, restrict access to activities, disqualify
        the team from prizes/certificates, or require the individual to leave the venue immediately (and
        notify campus security where necessary).
      </p>
    ),
  },
  {
    number: "06",
    title: "Reporting an Incident",
    icon: "mail",
    content: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed text-muted">
          If you experience or witness harassment, a safety hazard, or any breach of this Code of
          Conduct, please report it immediately at the{" "}
          <strong className="text-text font-semibold">Registration & Ops Desk</strong> or contact our
          organizing leads directly:
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="tel:+918420996300"
            className="flex items-center gap-3 border border-line bg-ink/50 p-3.5 transition-colors hover:border-primary/50 hover:bg-ink-2"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-primary/10 text-primary">
              <Icon name="phone" size={18} />
            </div>
            <div>
              <p className="font-semibold text-text text-sm">Aayush Laddha</p>
              <p className="text-xs text-muted">Founder, Bug Busters</p>
              <p className="text-xs font-mono text-primary mt-0.5">+91 84209 96300</p>
            </div>
          </a>

          <a
            href="tel:+918602334842"
            className="flex items-center gap-3 border border-line bg-ink/50 p-3.5 transition-colors hover:border-primary/50 hover:bg-ink-2"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-primary/10 text-primary">
              <Icon name="phone" size={18} />
            </div>
            <div>
              <p className="font-semibold text-text text-sm">Amit Kumar Prasad</p>
              <p className="text-xs text-muted">Co-Founder, Bug Busters</p>
              <p className="text-xs font-mono text-primary mt-0.5">+91 86023 34842</p>
            </div>
          </a>
        </div>

        <div className="pt-2">
          <a
            href="mailto:community.bugbusters@gmail.com"
            className="inline-flex items-center gap-2 border border-line bg-ink/50 px-4 py-2.5 text-sm text-text transition-colors hover:border-primary/50 hover:bg-ink-2"
          >
            <Icon name="mail" size={16} className="text-primary" />
            <span>Email:</span>
            <span className="font-mono text-primary">community.bugbusters@gmail.com</span>
          </a>
        </div>
      </div>
    ),
  },
];

export default function CodeOfConduct() {
  return (
    <>
      <PageHeader
        index="08"
        breadcrumb="Code of Conduct"
        eyebrow="Bug Busters · Code Kolkata"
        title={
          <>
            Code of <span className="accent">Conduct.</span>
          </>
        }
        description="“Build. Break. Innovate.” — Guidelines for all registered participants, attendees, guests, speakers, mentors, judges, sponsors, and crew at CODE KOLKATA."
        chips={[
          { label: "K.P. Basu Memorial Hall, JU", icon: "mapPin" },
          { label: "“Build. Break. Innovate.”", icon: "code" },
          { label: "Zero Tolerance Policy", icon: "lock" },
        ]}
      />

      <section className="section" aria-label="Code of Conduct details">
        <div className="shell max-w-4xl space-y-8">
          <Reveal>
            <div className="corner-ticks relative overflow-hidden border border-line bg-gradient-to-br from-primary/5 via-ink-2 to-ink p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-4">
                <div>
                  <span className="font-pixel text-[0.55rem] uppercase tracking-[0.14em] text-primary">
                    BUG BUSTERS: CODE KOLKATA
                  </span>
                  <h2 className="display-2 mt-1 text-text">Code of Conduct</h2>
                </div>
                <div className="flex items-center gap-2 text-xs font-pixel uppercase tracking-wider text-muted">
                  <span>Venue: K.P. Basu Memorial Hall, JU, Kolkata</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted italic">
                “Build. Break. Innovate.” — By registering for or entering the Event, you agree to
                comply with these guidelines and all reasonable instructions issued by the Bug Busters
                organizing team and venue management.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {sections.map((sec, index) => (
              <Reveal key={sec.number} delay={index * 60}>
                <Card padded={false} interactive={false} className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-line bg-primary/10 font-mono text-sm font-bold text-primary">
                      {sec.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 pb-3">
                        <Icon name={sec.icon} size={18} className="text-primary" />
                        <h3 className="text-lg font-bold uppercase tracking-wider text-text sm:text-xl">
                          {sec.title}
                        </h3>
                      </div>
                      <div className="mt-2 pt-2 border-t border-line-soft">
                        {sec.content}
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

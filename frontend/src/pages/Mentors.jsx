import PageShell from "../components/PageShell";
import PlaceholderPanel from "../components/PlaceholderPanel";
import SectionHeading from "../components/SectionHeading";
import { IconUserCheck } from "../components/Icons";
import siteConfig from "../data/siteConfig";

export default function Mentors() {
  return (
    <PageShell>
      {/* ==================== MENTOR ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Mentors & Speakers" className="" />

          <PlaceholderPanel
            compact
            icon={<IconUserCheck />}
            title={siteConfig.mentors.placeholderTitle}
            description={siteConfig.mentors.placeholderSub}
          />
        </div>
      </section>
    </PageShell>
  );
}

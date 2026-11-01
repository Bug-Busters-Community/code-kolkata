import PageShell from "../components/PageShell";
import PlaceholderPanel from "../components/PlaceholderPanel";
import SectionHeading from "../components/SectionHeading";
import { IconAward } from "../components/Icons";
import siteConfig from "../data/siteConfig";

export default function Prizes() {
  return (
    <PageShell>
      {/* ==================== PRIZE ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Prizes & Perks" className="" />

          <PlaceholderPanel
            compact
            icon={<IconAward />}
            title={siteConfig.prizes.placeholderTitle}
            description={siteConfig.prizes.placeholderSub}
          />
        </div>
      </section>
    </PageShell>
  );
}

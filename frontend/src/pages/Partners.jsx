import PageShell from "../components/PageShell";
import PlaceholderPanel from "../components/PlaceholderPanel";
import SectionHeading from "../components/SectionHeading";
import { IconGlobe } from "../components/Icons";
import siteConfig from "../data/siteConfig";

export default function Partners() {
  return (
    <PageShell>
      {/* ==================== COMMUNITY PARTNER ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Community Partners" className="" />

          <PlaceholderPanel
            compact
            icon={<IconGlobe />}
            title={siteConfig.communityPartners.placeholderTitle}
            description={siteConfig.communityPartners.placeholderSub}
          />
        </div>
      </section>
    </PageShell>
  );
}

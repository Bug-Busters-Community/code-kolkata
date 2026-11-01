import PageShell from "../components/PageShell";
import PlaceholderPanel from "../components/PlaceholderPanel";
import SectionHeading from "../components/SectionHeading";
import { IconClock } from "../components/Icons";
import siteConfig from "../data/siteConfig";

export default function Schedule() {
  return (
    <PageShell>
      {/* ==================== SCHEDULE ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Schedule & Timeline" title="Event Agenda" />

          {!siteConfig.schedule.isConfirmed ? (
            <PlaceholderPanel
              icon={<IconClock />}
              title={siteConfig.schedule.placeholderTitle}
              description={siteConfig.schedule.placeholderSub}
            />
          ) : (
            <div className="max-w-3xl mx-auto space-y-6">
              {siteConfig.schedule.timeline.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-bold text-[#19d3c5]">{item.time}</span>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

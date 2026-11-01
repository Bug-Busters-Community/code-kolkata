import PageShell from "../components/PageShell";
import PlaceholderPanel from "../components/PlaceholderPanel";
import SectionHeading from "../components/SectionHeading";
import { IconCheckCircle, IconLock, IconMapPin } from "../components/Icons";
import siteConfig from "../data/siteConfig";

export default function About() {
  return (
    <PageShell>
      {/* ==================== ABOUT US ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="Empowering Builders & Innovators in Kolkata"
            className="text-center mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                  About {siteConfig.eventName}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                  {siteConfig.about.eventDescription}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#19d3c5] mb-3">
                  What Participants Can Expect:
                </h4>
                {siteConfig.about.expectations.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-[#2be37a]"><IconCheckCircle /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">
                  About {siteConfig.organizer}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                  {siteConfig.about.communityDescription}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#19d3c5]/5 border border-[#19d3c5]/20">
                <span className="text-xs text-gray-400 block mb-1">Official Instagram</span>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-bold text-[#19d3c5] hover:underline"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== THEME & TRACKS (DYNAMIC PLACEHOLDER) ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Theme & Tracks" title="Event Focus Areas" />

          {!siteConfig.themeTracks.isRevealed ? (
            <PlaceholderPanel
              icon={<IconLock />}
              title={siteConfig.themeTracks.placeholderTitle}
              description={siteConfig.themeTracks.placeholderSub}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.themeTracks.tracks.map((track, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <h3 className="text-lg font-bold text-white mb-2">{track.title}</h3>
                  <p className="text-sm text-gray-400">{track.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==================== VENUE & LOCATION ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Venue & Location" title={`City: ${siteConfig.city}`} />

          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div className="w-14 h-14 rounded-full bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mx-auto mb-4">
              <IconMapPin />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Venue: <span className="text-[#19d3c5]">{siteConfig.venue}</span>
            </h3>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              The offline venue in Kolkata will be officially unveiled soon. Stay tuned on social channels for location announcements.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

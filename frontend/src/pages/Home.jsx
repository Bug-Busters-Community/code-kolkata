import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";
import { IconCalendar, IconMapPin, IconUsers } from "../components/Icons";
import siteConfig from "../data/siteConfig";

const registerButtonClass =
  "px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest bg-[#19d3c5] text-[#02080a] hover:bg-[#19d3c5]/90 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#19d3c5]";

export default function Home() {
  return (
    <>
      {/* ==================== HOME / HERO SECTION ==================== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#02080a] via-[#02080a]/90 to-[#02080a]">
        <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[#19d3c5]/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#19d3c5]/10 border border-[#19d3c5]/30 text-[#19d3c5]">
              {siteConfig.organizer} Presents
            </span>
            {siteConfig.hasLimitedSeatsConfirmed && (
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2be37a]/10 border border-[#2be37a]/40 text-[#2be37a]">
                {siteConfig.limitedSeatsLabel}
              </span>
            )}
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase mb-4">
            Code <span className="text-[#19d3c5] border-b-4 border-[#19d3c5]/60">Kolkata</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium tracking-wide text-gray-300 max-w-2xl mx-auto mb-8">
            {siteConfig.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-300 mb-10">
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800">
              <IconCalendar />
              <span>{siteConfig.dateLabel}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-lg border border-slate-800">
              <IconMapPin />
              <span>{siteConfig.city} (Venue: {siteConfig.venue})</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            {siteConfig.registrationUrl ? (
              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className={registerButtonClass}
              >
                Register Now
              </a>
            ) : (
              <Link to="/register" className={registerButtonClass}>
                Register
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ==================== HIGHLIGHTS ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
              Highlights
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-white">What You Can Expect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.highlights.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-[#19d3c5]/10 text-[#19d3c5] flex items-center justify-center mb-4">
                  <IconUsers />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <ContactSection />
    </>
  );
}

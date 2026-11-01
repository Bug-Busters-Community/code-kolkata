import PageShell from "../components/PageShell";
import SectionHeading from "../components/SectionHeading";
import siteConfig from "../data/siteConfig";

export default function Sponsors() {
  return (
    <PageShell>
      {/* ==================== SPONSOR ==================== */}
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Sponsors & Partners" title="Backed By Community Leaders" />

          <div className="p-10 rounded-2xl bg-slate-950 border border-slate-800 text-center max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm mb-6">
              Interested in supporting Code Kolkata and reaching top technical talent in Kolkata? Reach out on Instagram {siteConfig.instagramHandle}.
            </p>
            {siteConfig.contactEmail ? (
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=Sponsorship%20Inquiry%20-%20Code%20Kolkata`}
                className="inline-block px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-[#19d3c5] text-[#19d3c5] hover:bg-[#19d3c5] hover:text-[#02080a] transition-colors"
              >
                Become a Sponsor
              </a>
            ) : (
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-[#19d3c5] text-[#19d3c5] hover:bg-[#19d3c5] hover:text-[#02080a] transition-colors"
              >
                Contact for Sponsorship
              </a>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import PageShell from "../components/PageShell";
import siteConfig from "../data/siteConfig";

export default function Register() {
  return (
    <PageShell>
      {/* ==================== REGISTER ==================== */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-[#19d3c5]/10 to-slate-950 text-center border-t border-b border-[#19d3c5]/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Registration Details</h2>
          {siteConfig.registrationUrl ? (
            <>
              <p className="text-gray-300 text-sm mb-6">
                Secure your spot for Code Kolkata November 2026.
              </p>
              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-4 rounded-full text-xs uppercase font-bold tracking-widest bg-[#19d3c5] text-[#02080a] hover:bg-[#19d3c5]/90 transition-colors"
              >
                Register Now
              </a>
            </>
          ) : (
            <div className="max-w-xl mx-auto p-6 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-gray-300 text-sm font-medium">
                Registration details coming soon.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Follow <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="text-[#19d3c5] underline">{siteConfig.instagramHandle}</a> on Instagram for live registration launch announcements.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

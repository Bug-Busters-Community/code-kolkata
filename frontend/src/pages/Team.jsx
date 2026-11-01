import PageShell from "../components/PageShell";
import siteConfig from "../data/siteConfig";

export default function Team() {
  return (
    <PageShell>
      {/* ==================== TEAM ==================== */}
      <section className="py-16 bg-[#02080a] border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
            Organizing Team
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            {siteConfig.team.placeholderSub}
          </p>
        </div>
      </section>
    </PageShell>
  );
}

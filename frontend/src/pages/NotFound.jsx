import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="py-20 bg-[#02080a] border-t border-slate-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase font-extrabold tracking-widest text-[#19d3c5] mb-2">
            404 &mdash; Page Not Found
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            This Page Doesn&apos;t Exist
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            The page you are looking for may have moved or never existed. Head back to the Code Kolkata home page.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 rounded-full text-xs uppercase font-bold tracking-widest bg-[#19d3c5] text-[#02080a] hover:bg-[#19d3c5]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

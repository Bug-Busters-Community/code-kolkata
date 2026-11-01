import siteConfig from "../data/siteConfig";
import { IconInstagram } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#02080a] border-t border-[#19d3c5]/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-bold text-white block">{siteConfig.eventName}</span>
          <span className="text-xs text-gray-400">Presented by {siteConfig.organizer}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#19d3c5] flex items-center gap-1.5 transition-colors"
          >
            <IconInstagram /> {siteConfig.instagramHandle}
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} {siteConfig.eventName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

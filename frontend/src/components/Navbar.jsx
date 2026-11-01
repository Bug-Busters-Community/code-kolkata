import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import siteConfig from "../data/siteConfig";
import { navLinks } from "../data/navigation";
import { IconMenu, IconX } from "./Icons";

const desktopLinkClass = ({ isActive }) =>
  `text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:text-[#19d3c5] ${
    isActive ? "text-[#19d3c5]" : "text-gray-300 hover:text-[#19d3c5]"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `text-sm font-medium px-2 py-1 transition-colors ${
    isActive ? "text-[#19d3c5]" : "text-gray-200 hover:text-[#19d3c5]"
  }`;

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuPath, setMenuPath] = useState(null);
  const isMenuOpen = menuPath === pathname;
  const closeMenu = () => setMenuPath(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#02080a]/90 backdrop-blur-md border-b border-[#19d3c5]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#19d3c5] rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-lg bg-[#19d3c5]/10 border border-[#19d3c5]/40 flex items-center justify-center font-bold text-[#19d3c5] group-hover:scale-105 transition-transform">
            CK
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold tracking-wider text-white text-base leading-tight">
              {siteConfig.eventName}
            </span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase">
              By {siteConfig.organizer}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Exact 9 Items) */}
        <nav className="hidden xl:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={desktopLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          {siteConfig.registrationUrl ? (
            <a
              href={siteConfig.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full text-[11px] uppercase font-bold tracking-widest bg-transparent border border-[#19d3c5] text-[#19d3c5] hover:bg-[#19d3c5] hover:text-[#02080a] transition-all focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
            >
              Register Now
            </a>
          ) : (
            <Link
              to="/register"
              className="px-4 py-2 rounded-full text-[11px] uppercase font-bold tracking-widest bg-transparent border border-[#19d3c5] text-[#19d3c5] hover:bg-[#19d3c5] hover:text-[#02080a] transition-all focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
            >
              Register
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuPath(isMenuOpen ? null : pathname)}
          className="xl:hidden p-2 rounded-md text-gray-300 hover:text-[#19d3c5] focus:outline-none focus:ring-2 focus:ring-[#19d3c5]"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden bg-[#02080a] border-b border-[#19d3c5]/20 px-4 pt-3 pb-6 space-y-3"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-2">
            {siteConfig.registrationUrl ? (
              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="block text-center w-full py-2.5 rounded-full text-xs uppercase font-bold tracking-widest bg-[#19d3c5] text-[#02080a]"
              >
                Register Now
              </a>
            ) : (
              <Link
                to="/register"
                onClick={closeMenu}
                className="block text-center w-full py-2.5 rounded-full text-xs uppercase font-bold tracking-widest bg-[#19d3c5] text-[#02080a]"
              >
                Register
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

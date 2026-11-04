import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import event from "../config/event";
import BackgroundVideo from "./BackgroundVideo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SoundNotice from "./SoundNotice";
import { SoundProvider } from "./SoundProvider";
import WelcomeModal from "./WelcomeModal";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${event.name} — ${event.dates.label}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", event.intro);
  }, []);

  return (
    <SoundProvider>
      <BackgroundVideo />
      <div id="top" className="relative z-10 flex min-h-screen flex-col text-text">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main" key={pathname} className="page-enter flex-1">
          <Outlet />
        </main>
        <Footer />
        <div className="fx-overlay grain" aria-hidden="true" />
        <div
          className="pointer-events-none fixed inset-0 z-[1] scanlines opacity-50"
          aria-hidden="true"
        />
        <SoundNotice />
        <WelcomeModal />
      </div>
    </SoundProvider>
  );
}

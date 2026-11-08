import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { setLenis } from "./lib/smoothScroll";
import About from "./pages/About";
import Home from "./pages/Home";
import Mentors from "./pages/Mentors";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import Prizes from "./pages/Prizes";
import PartnerRegister from "./pages/PartnerRegister";
import Schedule from "./pages/Schedule";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";

export default function App() {
  useEffect(() => {
    let frame = 0;
    let instance = null;
    let cancelled = false;

    // Initialize Lenis smooth scroll. Keeping the module dynamic preserves the
    // separate vendor chunk and avoids blocking the first paint.
    import("lenis")
      .then(({ default: Lenis }) => {
        if (cancelled) return;

        instance = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1.2,
          touchMultiplier: 1.2,
          infinite: false,
        });

        setLenis(instance);

        const raf = (time) => {
          instance.raf(time);
          frame = requestAnimationFrame(raf);
        };

        frame = requestAnimationFrame(raf);
      })
      .catch((error) => {
        console.error("Failed to initialize Lenis:", error);
      });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      instance?.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="partner-registration" element={<PartnerRegister />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="mentors" element={<Mentors />} />
            <Route path="prizes" element={<Prizes />} />
            <Route path="partners" element={<Partners />} />
            <Route path="team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

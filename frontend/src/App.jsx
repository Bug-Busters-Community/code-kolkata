import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import About from "./pages/About";
import Home from "./pages/Home";
import Mentors from "./pages/Mentors";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import Prizes from "./pages/Prizes";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    import("lenis").then((lenisModule) => {
      const Lenis = lenisModule.default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 1.2,
        infinite: false,
      });

      // Lenis RAIN loop - must be called every frame
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Make Lenis available globally
      window.lenis = lenis;

      // Sync Lenis with window scroll
      lenis.on("scroll", () => {
        window.scrollTo(0, lenis.scroll);
      });

      // Listen to native scroll and sync to Lenis
      window.addEventListener("scroll", () => {
        lenis.scroll = window.pageYOffset;
      }, { passive: true });

    }).catch((err) => {
      console.error("Failed to initialize Lenis:", err);
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<Register />} />
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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
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
  return (
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
  );
}

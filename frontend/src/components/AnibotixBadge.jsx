import anibotixBadge from "../assets/pics/anibotixBadge.png";

export default function AnibotixBadge({ isMenuOpen = false }) {
  return (
    <a
      id="anibotix-badge"
      href="https://anibotixrobotics.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`anibotix-floating-badge ${isMenuOpen ? "is-hidden" : ""}`}
      aria-label="Anibotix Robotics (opens in a new tab)"
      title="Anibotix Robotics"
    >
      <img
        src={anibotixBadge}
        alt="Anibotix Robotics Badge"
        className="anibotix-badge-img"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}


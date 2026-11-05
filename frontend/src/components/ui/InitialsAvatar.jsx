function getInitials(name) {
  const words = String(name ?? "")
    .split(/\s+/)
    .map((word) => word.replace(/[^\p{L}\p{M}]/gu, ""))
    .filter(Boolean);

  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();

  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
}

export default function InitialsAvatar({ name, accent = "primary", className = "" }) {
  const classes = [
    "team-avatar",
    accent === "secondary" ? "team-avatar--secondary" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <span className="team-avatar-inner">{getInitials(name)}</span>
    </div>
  );
}

import { Link } from "react-router-dom";

/**
 * Chunky bordered action. Renders a router Link, an external anchor or a
 * button depending on the props it receives.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const classes = ["btn", `btn-${variant}`, size === "sm" ? "btn-sm" : "", className]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

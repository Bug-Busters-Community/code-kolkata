import { Icon } from "./ui/Icon";
import { useTheme } from "./themeContext";

export default function ThemeToggle({ withLabel = false, className = "" }) {
  const { theme, isDark, toggle } = useTheme();
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  const iconName = isDark ? "sun" : "moon";

  const icon = (
    <span className="theme-toggle-icon" key={theme}>
      <Icon name={iconName} size={17} />
    </span>
  );

  if (withLabel) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={label}
        title={label}
        className={`flex min-h-11 items-center justify-between gap-3 border border-line bg-ink/50 px-3 py-2 text-left transition-colors hover:border-primary ${className}`}
      >
        <span className="flex items-center gap-2">
          <span className="text-primary">{icon}</span>
          <span className="font-pixel text-[0.5rem] uppercase tracking-[0.1em] text-muted">
            {isDark ? "Dark" : "Light"} mode
          </span>
        </span>
        <span
          className={`h-2 w-2 border ${isDark ? "border-line bg-transparent" : "border-primary bg-primary"}`}
          aria-hidden="true"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`btn-icon ${className}`}
    >
      {icon}
    </button>
  );
}

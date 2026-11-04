import { Icon } from "./ui/Icon";
import { useSound } from "./soundContext";

export default function SoundToggle({ withLabel = false, className = "" }) {
  const { isPlaying, pendingResume, toggle } = useSound();
  const label = isPlaying
    ? "Mute soundtrack"
    : pendingResume
      ? "Resume soundtrack"
      : "Play soundtrack";

  if (withLabel) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-pressed={isPlaying}
        className={`flex min-h-11 items-center justify-between gap-3 border border-line bg-ink/50 px-3 py-2 text-left transition-colors hover:border-primary ${className}`}
      >
        <span className="flex items-center gap-2">
          <span className={isPlaying ? "text-primary" : "text-muted"}>
            {isPlaying ? (
              <span className="eq" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            ) : (
              <Icon name="volumeOff" size={16} />
            )}
          </span>
          <span className="font-pixel text-[0.5rem] uppercase tracking-[0.1em] text-muted">
            {label}
          </span>
        </span>
        <span
          className={`h-2 w-2 border ${isPlaying ? "border-primary bg-primary" : "border-line bg-transparent"}`}
          aria-hidden="true"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isPlaying}
      aria-label={label}
      title={label}
      className={`btn-icon ${isPlaying ? "border-primary text-primary" : ""} ${className}`}
    >
      {isPlaying ? (
        <span className="eq" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      ) : (
        <Icon name="volumeOff" size={17} />
      )}
    </button>
  );
}

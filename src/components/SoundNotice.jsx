import { useEffect } from "react";
import { useSound } from "./soundContext";
import { Icon } from "./ui/Icon";

export default function SoundNotice() {
  const { playbackError, clearPlaybackError } = useSound();

  useEffect(() => {
    if (!playbackError) return undefined;
    const timer = window.setTimeout(clearPlaybackError, 8000);
    return () => window.clearTimeout(timer);
  }, [playbackError, clearPlaybackError]);

  if (!playbackError) return null;

  return (
    <div className="sound-notice" role="status" aria-live="polite">
      <span className="sound-notice-icon" aria-hidden="true">
        <Icon name="volumeOff" size={16} />
      </span>
      <p>{playbackError}</p>
      <button
        type="button"
        onClick={clearPlaybackError}
        aria-label="Dismiss music notice"
        className="sound-notice-close"
      >
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}

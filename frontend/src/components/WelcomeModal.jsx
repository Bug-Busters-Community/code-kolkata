import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import event from "../config/event";
import { useSound } from "./soundContext";
import { Icon } from "./ui/Icon";

const SESSION_KEY = "ck-welcome-choice";
const EXIT_MS = 360;

function hasChosenThisSession() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) !== null;
  } catch {
    return false;
  }
}

function rememberChoice(choice) {
  try {
    window.sessionStorage.setItem(SESSION_KEY, choice);
  } catch {
    /* private mode can block storage — the modal still closes */
  }
}

export default function WelcomeModal() {
  const { play, stop } = useSound();
  const [mounted, setMounted] = useState(() => !hasChosenThisSession());
  const [closing, setClosing] = useState(false);
  const [starting, setStarting] = useState(false);
  const panelRef = useRef(null);
  const yesRef = useRef(null);
  const closeTimer = useRef(null);
  const closingRef = useRef(false);

  const dismiss = useCallback((choice) => {
    if (closingRef.current) return;
    closingRef.current = true;
    rememberChoice(choice);
    setClosing(true);
    closeTimer.current = window.setTimeout(() => setMounted(false), EXIT_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const handleYes = useCallback(async () => {
    if (starting || closing) return;
    setStarting(true);
    await play();
    setStarting(false);
    dismiss("yes");
  }, [starting, closing, play, dismiss]);

  const handleNo = useCallback(() => {
    if (starting || closing) return;
    stop();
    dismiss("no");
  }, [starting, closing, stop, dismiss]);

  const onKeyDown = useCallback(
    (event_) => {
      if (event_.key === "Escape") {
        event_.preventDefault();
        handleNo();
        return;
      }

      if (event_.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event_.shiftKey && document.activeElement === first) {
        event_.preventDefault();
        last.focus();
      } else if (!event_.shiftKey && document.activeElement === last) {
        event_.preventDefault();
        first.focus();
      }
    },
    [handleNo],
  );

  useEffect(() => {
    if (!mounted) return undefined;

    const root = document.getElementById("root");
    const previousOverflow = document.body.style.overflow;
    const previousInert = root?.inert ?? false;

    document.body.style.overflow = "hidden";
    if (root) root.inert = true;

    const focusTimer = window.setTimeout(() => yesRef.current?.focus(), 140);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      if (root) root.inert = previousInert;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [mounted, onKeyDown]);

  if (!mounted) return null;

  return createPortal(
    <div className={`welcome-overlay ${closing ? "is-closing" : ""}`}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        aria-describedby="welcome-desc"
        aria-busy={starting}
        className="welcome-panel panel-glass corner-ticks"
      >
        <span className="welcome-sheen" aria-hidden="true" />

        <div className="welcome-head welcome-rise" style={{ "--welcome-delay": "40ms" }}>
          <span className="welcome-mark" aria-hidden="true">
            {event.monogram}
          </span>
          <div className="min-w-0">
            <p className="eyebrow">{event.name}</p>
            <p className="pixel-label mt-1.5 text-muted">Welcome sequence · 01</p>
          </div>
          <span className="welcome-wave" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
        </div>

        <h2
          id="welcome-title"
          className="welcome-title welcome-rise"
          style={{ "--welcome-delay": "100ms" }}
        >
          Welcome to {event.name}! <span aria-hidden="true">🚀</span>
        </h2>

        <div
          id="welcome-desc"
          className="welcome-rise mt-4 flex flex-col gap-2"
          style={{ "--welcome-delay": "160ms" }}
        >
          <p className="welcome-lead">Ready to explore the experience?</p>
          <p className="welcome-body">
            Would you like to enjoy the journey with some background music?
          </p>
        </div>

        <div
          className="welcome-actions welcome-rise"
          style={{ "--welcome-delay": "220ms" }}
        >
          <button
            ref={yesRef}
            type="button"
            onClick={handleYes}
            disabled={starting || closing}
            aria-label="Yes, play background music"
            className="btn btn-primary w-full sm:w-auto"
          >
            {starting ? (
              <>
                <span>Starting music</span>
                <span className="welcome-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </>
            ) : (
              <>
                <span>Yes, Play Music</span>
                <span aria-hidden="true" className="text-base leading-none">
                  🎵
                </span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleNo}
            disabled={starting || closing}
            aria-label="No, continue without music"
            className="btn btn-ghost w-full sm:w-auto"
          >
            <span>No, Continue Without Music</span>
            <span aria-hidden="true" className="text-base leading-none">
              🔇
            </span>
          </button>
        </div>

        <p
          className="welcome-hint welcome-rise"
          style={{ "--welcome-delay": "280ms" }}
        >
          <Icon name="volume" size={14} />
          You can turn the soundtrack on or off anytime from the sound button in the navbar.
        </p>
      </div>
    </div>,
    document.body,
  );
}

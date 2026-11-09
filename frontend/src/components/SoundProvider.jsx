import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import musicSrc from "../assets/SuperMario.mp3";
import { SoundContext } from "./soundContext";

const MUSIC_COOKIE_KEY = "ck-music";

function getCookie(name) {
  if (typeof document === "undefined" || !document.cookie) return null;
  const parts = document.cookie.split(";");
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (part.startsWith(name + "=")) {
      return decodeURIComponent(part.substring(name.length + 1));
    }
  }
  return null;
}

function setCookie(name, value, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function setUserMusicChoice(enabled) {
  const val = enabled ? "on" : "off";
  setCookie(MUSIC_COOKIE_KEY, val);
  try {
    window.localStorage.setItem(MUSIC_COOKIE_KEY, val);
  } catch {
    /* ignore storage errors */
  }
}

function readUserMusicChoice() {
  const cookieVal = getCookie(MUSIC_COOKIE_KEY);
  if (cookieVal === "on") return true;
  if (cookieVal === "off") return false;

  // First visit: no cookie exists yet. Music is ON by default, store choice in cookie.
  setUserMusicChoice(true);
  return true;
}

function describePlaybackError(error) {
  if (error?.name === "NotAllowedError") {
    return "Your browser blocked audio playback. Tap the sound button in the navbar to start the music.";
  }
  if (error?.name === "NotSupportedError") {
    return "This browser can't play the soundtrack format. Try another browser to hear it.";
  }
  return "Background music couldn't start. Tap the sound button in the navbar to try again.";
}

export function SoundProvider({ children }) {
  const audioRef = useRef(null);
  const attemptedPlayRef = useRef(false);
  const userWantsSoundRef = useRef(readUserMusicChoice());
  const interactionCleanupRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState(null);

  const cleanupListeners = useCallback(() => {
    if (interactionCleanupRef.current) {
      interactionCleanupRef.current();
      interactionCleanupRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return Promise.resolve(false);

    cleanupListeners();
    userWantsSoundRef.current = true;
    setUserMusicChoice(true);

    attemptedPlayRef.current = true;
    setPlaybackError(null);

    let request;
    try {
      request = audio.play();
    } catch (error) {
      setIsPlaying(false);
      setPlaybackError(describePlaybackError(error));
      return Promise.resolve(false);
    }

    return Promise.resolve(request).then(
      () => {
        setIsPlaying(true);
        return true;
      },
      (error) => {
        setIsPlaying(false);
        setPlaybackError(describePlaybackError(error));
        return false;
      },
    );
  }, [cleanupListeners]);

  const stop = useCallback(() => {
    cleanupListeners();
    userWantsSoundRef.current = false;
    setUserMusicChoice(false);

    const audio = audioRef.current;
    if (audio) {
      audio.pause();
    }
    setIsPlaying(false);
    setPlaybackError(null);
  }, [cleanupListeners]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (isPlaying || (audio && !audio.paused)) {
      stop();
    } else {
      void play();
    }
  }, [isPlaying, play, stop]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const initialPreference = readUserMusicChoice();
    userWantsSoundRef.current = initialPreference;
    audio.volume = 0.32;

    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      if (!attemptedPlayRef.current) return;
      setIsPlaying(false);
      setPlaybackError(
        "The soundtrack couldn't load. Check your connection and try again from the navbar sound button.",
      );
    };

    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);

    if (initialPreference) {
      attemptedPlayRef.current = true;
      audio.autoplay = true;

      const tryPlay = () => {
        if (!userWantsSoundRef.current || !audio) return;
        try {
          const promise = audio.play();
          if (promise !== undefined) {
            promise
              .then(() => {
                setIsPlaying(true);
                cleanupListeners();
              })
              .catch(() => {
                // If blocked by browser, wait for any gesture/motion
              });
          }
        } catch {
          // ignore
        }
      };

      // 1. Try immediate autoplay
      tryPlay();

      // 2. Try when audio data is ready
      audio.addEventListener("canplay", tryPlay);
      audio.addEventListener("loadeddata", tryPlay);

      // 3. Fallback: on any user gesture or movement
      const onMotionOrGesture = (event) => {
        if (!userWantsSoundRef.current) {
          cleanupListeners();
          return;
        }

        if (event?.target?.closest?.("[data-sound-toggle]")) {
          cleanupListeners();
          return;
        }

        tryPlay();
      };

      const remove = () => {
        audio.removeEventListener("canplay", tryPlay);
        audio.removeEventListener("loadeddata", tryPlay);
        window.removeEventListener("pointermove", onMotionOrGesture, true);
        window.removeEventListener("scroll", onMotionOrGesture, true);
        window.removeEventListener("wheel", onMotionOrGesture, true);
        window.removeEventListener("click", onMotionOrGesture, true);
        window.removeEventListener("pointerup", onMotionOrGesture, true);
        window.removeEventListener("touchend", onMotionOrGesture, true);
        window.removeEventListener("keydown", onMotionOrGesture, true);
      };

      interactionCleanupRef.current = remove;

      window.addEventListener("pointermove", onMotionOrGesture, { capture: true, passive: true });
      window.addEventListener("scroll", onMotionOrGesture, { capture: true, passive: true });
      window.addEventListener("wheel", onMotionOrGesture, { capture: true, passive: true });
      window.addEventListener("click", onMotionOrGesture, true);
      window.addEventListener("pointerup", onMotionOrGesture, true);
      window.addEventListener("touchend", onMotionOrGesture, true);
      window.addEventListener("keydown", onMotionOrGesture, true);
    } else {
      audio.autoplay = false;
      audio.pause();
    }

    return () => {
      cleanupListeners();
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
    };
  }, [cleanupListeners]);

  const clearPlaybackError = useCallback(() => setPlaybackError(null), []);

  const value = useMemo(
    () => ({
      isPlaying,
      pendingResume: userWantsSoundRef.current && !isPlaying,
      toggle,
      play,
      stop,
      playbackError,
      clearPlaybackError,
    }),
    [isPlaying, toggle, play, stop, playbackError, clearPlaybackError],
  );

  return (
    <SoundContext.Provider value={value}>
      <audio
        ref={audioRef}
        src={musicSrc}
        autoPlay={userWantsSoundRef.current}
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{ display: "none" }}
      />
      {children}
    </SoundContext.Provider>
  );
}

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import musicSrc from "../assets/SubwaySurfers.mp3";
import { SoundContext } from "./soundContext";

const STORAGE_KEY = "ck-soundtrack";

export function SoundProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pendingResume, setPendingResume] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "on";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audio.src = musicSrc;
    audio.loop = true;
    audio.volume = 0.32;
    audioRef.current = audio;

    // Never autoplay. A saved "on" preference only surfaces a resume affordance.

    return () => {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setPendingResume(false);
      try {
        window.localStorage.setItem(STORAGE_KEY, "off");
      } catch {
        /* storage can be unavailable — playback still works */
      }
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setPendingResume(false);
      try {
        window.localStorage.setItem(STORAGE_KEY, "on");
      } catch {
        /* ignore */
      }
    } catch {
      // A blocked play leaves the site silent; the button stays actionable.
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const value = useMemo(
    () => ({ isPlaying, pendingResume, toggle }),
    [isPlaying, pendingResume, toggle],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

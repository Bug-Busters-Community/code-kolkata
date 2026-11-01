import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import musicSrc from "../assets/SubwaySurfers.mp3";
import { SoundContext } from "./soundContext";

const STORAGE_KEY = "ck-soundtrack";

function readSavedPreference() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "on";
  } catch {
    return false;
  }
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [pendingResume, setPendingResume] = useState(readSavedPreference);
  const [playbackError, setPlaybackError] = useState(null);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = musicSrc;
    audio.loop = true;
    audio.volume = 0.32;
    audioRef.current = audio;

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

    // Never autoplay. A saved "on" preference only surfaces a resume affordance.
    return () => {
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, []);

  const persist = useCallback((value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage can be unavailable — playback still works */
    }
  }, []);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    attemptedPlayRef.current = true;
    setPlaybackError(null);

    try {
      await audio.play();
      setIsPlaying(true);
      setPendingResume(false);
      persist("on");
      return true;
    } catch (error) {
      setIsPlaying(false);
      setPlaybackError(describePlaybackError(error));
      return false;
    }
  }, [persist]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !audio.paused) audio.pause();
    setIsPlaying(false);
    setPendingResume(false);
    setPlaybackError(null);
    persist("off");
  }, [persist]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      stop();
      return;
    }
    void play();
  }, [isPlaying, play, stop]);

  const clearPlaybackError = useCallback(() => setPlaybackError(null), []);

  const value = useMemo(
    () => ({
      isPlaying,
      pendingResume,
      toggle,
      play,
      stop,
      playbackError,
      clearPlaybackError,
    }),
    [isPlaying, pendingResume, toggle, play, stop, playbackError, clearPlaybackError],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

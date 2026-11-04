import { createContext, useContext } from "react";

export const SoundContext = createContext(null);

const FALLBACK = {
  isPlaying: false,
  pendingResume: false,
  toggle: () => {},
  play: async () => false,
  stop: () => {},
  playbackError: null,
  clearPlaybackError: () => {},
};

export function useSound() {
  return useContext(SoundContext) ?? FALLBACK;
}

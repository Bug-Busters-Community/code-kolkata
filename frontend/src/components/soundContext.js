import { createContext, useContext } from "react";

export const SoundContext = createContext(null);

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    return { isPlaying: false, pendingResume: false, toggle: () => {} };
  }
  return context;
}

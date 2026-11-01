import { createContext, useContext } from "react";

export const THEME_STORAGE_KEY = "ck-theme";

export const ThemeContext = createContext(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { theme: "dark", isDark: true, toggle: () => {}, setTheme: () => {} };
  }
  return context;
}

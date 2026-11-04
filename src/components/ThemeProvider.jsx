import { useCallback, useEffect, useMemo, useState } from "react";
import { THEME_STORAGE_KEY, ThemeContext } from "./themeContext";

const THEME_COLORS = {
  dark: "#05050c",
  light: "#f5f6fa",
};

function readInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeProvider({ children }) {
  // The inline boot script in index.html has already resolved the saved theme,
  // so this initial read never causes a flash on first paint.
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.style.backgroundColor = THEME_COLORS[theme];

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[theme]);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* storage can be unavailable — the theme still applies for this visit */
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ theme, isDark: theme === "dark", toggle, setTheme }),
    [theme, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;

"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type AccentColor = "green" | "orange";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
  accentColor: AccentColor;
  toggleAccent: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
  accentColor: "green",
  toggleAccent: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [accentColor, setAccentColor] = useState<AccentColor>("green");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }

    const storedAccent = localStorage.getItem("accentColor") as AccentColor | null;
    if (storedAccent === "orange") {
      setAccentColor("orange");
      document.documentElement.classList.add("orange");
    } else {
      setAccentColor("green");
      document.documentElement.classList.remove("orange");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  const toggleAccent = () => {
    setAccentColor((prev) => {
      const next = prev === "green" ? "orange" : "green";
      localStorage.setItem("accentColor", next);
      if (next === "orange") {
        document.documentElement.classList.add("orange");
      } else {
        document.documentElement.classList.remove("orange");
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, toggleAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

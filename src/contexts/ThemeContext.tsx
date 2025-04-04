"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "dark" | "light";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme") as ThemeType | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark theme for CopyCoder
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    // Update HTML class when theme changes
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    // Save preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

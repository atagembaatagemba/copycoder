"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-8 h-8 hover:bg-gray-800"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-300"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2" />
          <path d="M12 21v2" />
          <path d="M4.22 4.22l1.42 1.42" />
          <path d="M18.36 18.36l1.42 1.42" />
          <path d="M1 12h2" />
          <path d="M21 12h2" />
          <path d="M4.22 19.78l1.42-1.42" />
          <path d="M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-800"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </Button>
  );
}

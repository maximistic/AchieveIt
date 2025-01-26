"use client";
import * as React from "react";
import { useTheme } from "../context/ThemeProvider"; 

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
        className="p-2 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text)] border border-[var(--color-accent)]"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};

export default ThemeToggleButton;
"use client";
import * as React from "react";
import { useTheme } from "../context/ThemeProvider";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { GrSystem } from "react-icons/gr";
import useClickOutside from "@/app/hooks/useClickOutside";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const themes = [
    { value: "light", icon: <FaRegSun className="text-yellow-500" size={22}/>, className: "hover:bg-yellow-100" },
    { value: "dark", icon: <FaRegMoon className="text-gray-700 dark:text-gray-100" size={22}/>, className: "hover:bg-gray-100 dark:hover:bg-gray-800" },
    { value: "system", icon: <GrSystem className="text-blue-500" size={22}/>, className: "hover:bg-blue-100" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md bg-[var(--color-bg-secondary)] text-[var(--color-text)] border border-[var(--color-accent)] flex items-center gap-2"
      >
        {themes.find((t) => t.value === theme)?.icon}
      </button>
      
      {isOpen && (
        <div className="absolute top-10 right-0 bg-[var(--color-bg-secondary)] border border-[var(--color-accent)] rounded-md shadow-lg">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value as "light" | "dark" | "system");
                setIsOpen(false);
              }}
              className={`w-full p-2 text-left hover:bg-[var(--color-accent)] flex items-center gap-2 ${t.className}`}
            >
              {t.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggleButton;

/*
Features Explanation:
 - As a user, Wanted to make sure the dropdown (or the pop up) closes whenever clicked outside of it. dropdownRef will track the dropdown container. 
 - wanted to keep leave the icons simple and not overcomplicate em, yet give some colors to make it pop a lil.

*/
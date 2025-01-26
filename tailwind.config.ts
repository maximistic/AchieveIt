import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        bgSecondary: "var(--color-bg-secondary)",
        accent: "var(--color-accent)",
        accentSecondary: "var(--color-accent-secondary)",
        text: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
} satisfies Config;

"use client";
import * as React from "react";

interface ThemeContextType {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">("system");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      setTheme("system");
      document.documentElement.setAttribute("data-theme", systemTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      document.documentElement.setAttribute("data-theme", systemTheme);
      localStorage.removeItem("theme");
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/*
Context Provider Logic:
- Cannot use react hooks such as useEffect or useState in root layout because we must use "use client" in order to use hooks, which forces the application to be client-side
rendered, which implies negative impact on performance and SEO. 
- also, "use client" prevented me from using the metadata object in root layout, which i wanted for SEO purposes and defining the name tag for the app (jsut for my sake).

- To fix these issues, I've made the rootlayout a server-side rendered component, and created a context provider for the theme, which is used in the theme toggle component 
and wrapped the children in the root layout with the theme provider.
*/

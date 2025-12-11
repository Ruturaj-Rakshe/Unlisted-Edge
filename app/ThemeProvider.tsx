"use client";
import { createContext, useContext, useState, useEffect } from "react";
import ThemeSelector from "./components/ThemeSelector";

const ThemeContext = createContext({
  theme: "default",
  setTheme: (t: string) => {}
});

export const ThemeProvider = ({ children } : { children: React.ReactNode}) => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeSelector setTheme={setTheme}/>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

"use client";
import { useState } from "react";
import Chatbot from "./components/ChatBot";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("");

  return (
    <div className={theme}>
      {children}
      <Chatbot setTheme={setTheme} />
    </div>
  );
}
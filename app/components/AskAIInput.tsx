"use client";
import { useState } from "react";
import "./AskAIInput.css"; // ← we will create this file

export default function AskAIInput() {
  const [value, setValue] = useState("");

  return (
    <div className="ask-ai-wrapper">
      <div className="ai-input-container">
        <input
          type="text"
          className="ai-input text-center text-xl"
          placeholder="Search for topics, articles, guides..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* AI icon */}
        <div className="icon-container">
          <svg
            className="ai-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a7 7 0 00-7 7v3H4v9h16v-9h-1V9a7 7 0 00-7-7zm0 2a5 5 0 015 5v3H7V9a5 5 0 015-5zm-3 11h6v2H9v-2z" />
          </svg>
        </div>

        {/* Underline animation */}
        <div className="underline-effect"></div>

        {/* Background fade */}
        <div className="bg-fade"></div>

        {/* Ripple circle */}
        <div className="ripple-circle"></div>

        {/* Floating dots */}
        <div className="floating-dots">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
}

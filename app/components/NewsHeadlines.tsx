"use client";
import React, { useEffect, useRef } from "react";

export default function NewsHeadlines() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current!.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    containerRef.current!.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
      "displayMode": "adaptive",
      "feedMode": "market",
      "colorTheme": "dark",
      "isTransparent": false,
      "locale": "in",
      "market": "stock",
      "width": "100%",
      "height": "100%"
    }`;

    containerRef.current!.appendChild(script);
  }, []);

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-gray-700 shadow-md"
      style={{
        height: "400px", // fixed height to show ~5-6 headlines
      }}
    >
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      />
      <style>
        {`
          /* Hide scrollbar for Chrome & WebKit */
          .tradingview-widget-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

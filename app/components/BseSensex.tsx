"use client";
import React, { useEffect, useRef } from "react";

export default function MiniSensexWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear previous content (important when component re-renders)
    containerRef.current!.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    containerRef.current!.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "symbol": "INDEX:SENSEX",
      "chartOnly": false,
      "dateRange": "12M",
      "noTimeScale": false,
      "colorTheme": "dark",
      "isTransparent": false,
      "locale": "en",
      "width": "100%",
      "autosize": true,
      "height": "100%"
    }`;

    containerRef.current!.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container border rounded-2xl"
      ref={containerRef}
      style={{
        width: "100%",
        height: "150px",
        overflow: "hidden",
      }}
    ></div>
  );
}



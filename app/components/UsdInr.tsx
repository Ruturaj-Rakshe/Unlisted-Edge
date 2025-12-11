"use client";
import React, { useEffect, useRef, memo } from "react";

function UsdInrWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current!.innerHTML = ""; // clear old widget

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
      "symbol": "FX_IDC:USDINR",
      "colorTheme": "dark",
      "isTransparent": false,
      "locale": "en",
      "width": "300",
      "height": "100"
    }`; // <-- Widget size in px

    container.current?.appendChild(script);
  }, []);

  return (
    <div
      className="mt-7 rounded-2xl border overflow-hidden relative"
      style={{
        width: "450px", // <-- Outer container width in px
        height: "120px", // <-- Outer container height in px
      }}
    >
      <div
        ref={container}
        className="tradingview-widget-container absolute inset-0"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="tradingview-widget-container__widget absolute inset-0"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default memo(UsdInrWidget);

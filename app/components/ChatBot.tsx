"use client";
import { useEffect, useRef, useState } from "react";

export default function Chatbot({
  setTheme,
}: {
  setTheme: (theme: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { from: "bot" | "user"; text: string }[]
  >([]);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState(0);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const hasGreeted = useRef(false);

  // Greeting when opened
  useEffect(() => {
    if (open && messages.length === 0) {
       hasGreeted.current = true;
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Hello! I'm MarketMate. Let's begin by selecting your age group.",
        },
      ]);
    }
  }, );

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);

    if (step === 0) {
      setAge(userMsg);
      setStep(1);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Great! Now, please select your gender." },
        ]);
      }, 400);
    } else if (step === 1) {
      setGender(userMsg);
      setStep(2);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: `Awesome! You selected age group: ${age} and gender: ${userMsg}.`,
          },
        ]);
      }, 400);

      const themeValue = `theme-${age}-${userMsg}`.toLowerCase().replace(/\s+/g, "");

      setTheme(themeValue);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: `Theme set to ${themeValue}. Enjoy!` },
        ]);
      }, 400);
    }

    setInput("");
  };

  // Auto-scroll
  useEffect(() => {
    const el = messagesRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black text-white shadow-lg shadow-black/40 flex items-center justify-center text-xl hover:scale-105 transition z-50"
        >
          💬
        </button>
      )}

      {/* Chatbot UI */}
      {open && (
        <div className="fixed bottom-6 right-6 w-[330px] h-[460px] bg-white rounded-xl shadow-xl border border-black/10 z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-black/10 flex justify-between items-center">
            <h2 className="font-semibold text-lg">Talk to MarketMate</h2>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="flex-1 p-3 overflow-y-auto flex flex-col space-y-3 scroll-smooth hide-scrollbar"
          >
            {/* Static First Bubble With Select Inputs */}
            <div className="self-start max-w-[80%]">
              <div className="bg-gray-100 text-gray-900 px-3 py-2 rounded-xl shadow-sm text-sm">
                Welcome! Let's begin by choosing your theme.

                <div className="mt-2">
                  <label className="text-xs">Select your age group:</label>
                  <select
                    className="w-full mt-1 border p-1 rounded"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  >
                    <option value="">Choose...</option>
                    <option>18-25</option>
                    <option>26-35</option>
                    <option>40+</option>
                  </select>

                  <select
                    className="w-full mt-1 border p-1 rounded"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                      if (age && e.target.value) {
                        const themeValue = `theme-${age}-${e.target.value}`.toLowerCase().replace(/\s+/g, "");
                        setTheme(themeValue);
                      }
                    }}
                  >
                    <option value="">Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>

                </div>
              </div>
            </div>

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] ${msg.from === "user" ? "self-end" : "self-start"
                  }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl shadow text-sm ${msg.from === "user"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-black/10 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-black/40 outline-none"
            />

            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

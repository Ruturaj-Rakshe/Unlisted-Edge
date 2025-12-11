"use client";
import React from "react";
import Image from "next/image"

const upcomingIpos = [
  {
    img: "/tatatech.jpeg",
    name: "Tata Technologies",
    open: "Nov 21",
    close: "Nov 24",
    price: "₹475 – ₹500",
    status: "Upcoming",
    daysLeft: 5,
  },
  {
    img: "/firstcry.jpeg",
    name: "FirstCry",
    open: "Dec 5",
    close: "Dec 7",
    price: "₹450 – ₹480",
    status: "Upcoming",
    daysLeft: 18,
  },
  {
    img: "/swiggy.jpeg",
    name: "Swiggy",
    open: "TBA",
    close: "TBA",
    price: "TBA",
    status: "Expected",
    daysLeft: null,
  },
];

export default function UpcomingIpoPipeline() {
  return (
    <div className="w-full max-w-full bg-[#0c0c0c] p-5 rounded-2xl border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <h2 className="text-2xl font-bold text-white mb-4 calsans-regular">Upcoming IPO Pipeline</h2>

      <div className="space-y-4">
        {upcomingIpos.map((ipo, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 bg-black/40 p-4 rounded-xl hover:bg-black/60 transition-all duration-200 hover:scale-[1.01] group"
          >

            {/* IPO details */}
            <div className="flex-1 ml-3">
                <div className="flex flex-row gap-2 items-center">
                    <Image src={ipo.img} alt={ipo.name} width={50} height={50} className="rounded-full mb-2" />
              <h3 className="text-xl font-semibold text-white calsans-regular">{ipo.name}</h3>
                </div>
              <p className="text-gray-400 text-sm">
                {ipo.open} — {ipo.close}
              </p>
              <p className="text-gray-300 text-sm">Price Band: {ipo.price}</p>
            </div>

            {/* Days left */
            ipo.daysLeft && (
              <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-600/40">
                {ipo.daysLeft} days left
              </span>
            )}

            {/* Status */}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                ipo.status === "Upcoming"
                  ? "bg-blue-600/20 text-blue-400 border border-blue-600/40"
                  : "bg-yellow-600/20 text-yellow-400 border border-yellow-600/40"
              }`}
            >
              {ipo.status}
            </span>

            {/* Quick CTA */}
            <button className="text-xs bg-blue-600/10 border border-blue-600/40 text-blue-300 px-3 py-1 rounded-md ml-2 hover:bg-blue-600/20 transition">
              Notify
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from 'next/image';

const marketSentiment = [
    { type: "Bullish", value: 62, color: "text-green-400" },
    { type: "Bearish", value: 28, color: "text-red-400" },
    { type: "Neutral", value: 10, color: "text-gray-400" },
];

const miniIPOs = [
    { name: "Tata Technologies", date: "Nov 21–Nov 24", price: "₹475–₹500" },
    { name: "FirstCry", date: "Dec 5–Dec 7", price: "₹450–₹480" },
    { name: "Swiggy", date: "TBA", price: "TBA" },
];

const trendingCompanies = [
    { name: "Zerodha", valuation: "₹800 Cr", logo: "/zerodha.jpeg" },
    { name: "Byjus", valuation: "₹5000 Cr", logo: "/byju.jpeg" },
    { name: "Razorpay", valuation: "₹3500 Cr", logo: "/razorpay.jpeg" },
    { name: "Unacademy", valuation: "₹2500 Cr", logo: "/unacademy.jpeg" },
    { name: "Uber", valuation: "₹800 Cr", logo: "/uber.jpeg" },
    { name: "Stripe", valuation: "₹5000 Cr", logo: "/stripe.jpeg" }
];

export default function Extras() {
    return (
        <div className="flex flex-col gap-6 p-4">
 
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-4 shadow-md">
                <h2 className="text-white font-bold text-lg mb-2 calsans-regular">Market Sentiment</h2>
                <div className="flex justify-around">
                    {marketSentiment.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <p className={`text-2xl calsans-regular font-bold ${item.color}`}>{item.value}%</p>
                            <p className="text-gray-400 text-sm calsans-regular">{item.type}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-2xl p-4 shadow-md">
                <h2 className="text-white font-bold text-lg mb-2 calsans-regular">Upcoming IPOs</h2>
                <div className="space-y-3">
                    {miniIPOs.map((ipo, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center bg-black/30 rounded-xl p-2 hover:bg-black/50 transition"
                        >
                            <div className="flex flex-col calsans-regular">
                                <p className="text-white font-semibold">{ipo.name}</p>
                                <p className="text-gray-400 text-sm">{ipo.date}</p>
                            </div>
                            <span className="text-gray-300 text-sm calsans-regular">{ipo.price}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#111] border border-gray-800 rounded-2xl p-4 shadow-md">
  <h2 className="text-white font-bold text-lg mb-2 calsans-regular">Trending Companies</h2>

  <div className="relative w-full overflow-hidden">
    {/* Track that scrolls */}
    <div
      className="flex gap-4 py-2 whitespace-nowrap animate-scroll"
      style={{ animationDuration: "20s" }}
    >
      {/* Duplicate list → seamless infinite scroll */}
      {[...trendingCompanies, ...trendingCompanies].map((company, idx) => (
        <div
          key={idx}
          className="bg-black/40 w-[130px] shrink-0 flex flex-col items-center justify-center p-3 rounded-xl hover:bg-black/60 transition"
        >
          <Image
            src={company.logo}
            alt={company.name}
            width={50}
            height={50}
            className="h-10 w-10 rounded-full mb-2"
          />
          <p className="text-white font-medium text-sm text-center calsans-regular">{company.name}</p>
          <p className="text-gray-400 text-xs text-center calsans-regular">{company.valuation}</p>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
    );
}

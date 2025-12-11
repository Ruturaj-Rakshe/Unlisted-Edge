"use client";
import Image from "next/image";
import FancyButton from "../components/FancyButton";
import { useRouter } from "next/navigation";
import TradingViewMidget from "../components/TradingViewMidget";
import MiniSensexWidget from "../components/BseSensex";
import UsdInr from "../components/UsdInr";
import UpcomingIpoPipeline from "../components/UpcomingIpoPipeline";
import NewsHeadlines from "../components/NewsHeadlines";
import Extras from "../components/Extras";
import EventsWidget from "../components/EventsWidget";
import SeeLink from "../components/SeeLink";

export default function Marketplace() {

  const router = useRouter();


  const marketPlaceArray = [
    <MiniSensexWidget />,
    <UsdInr />,
    "GOOGL",
    "AMZN",
    "MSFT",
  ];

  const MostActiveStocks = [
    { id: 1, name: "RELIANCE", Price: 1462.80, change: +1.82, picture: "/Reliance.png" },
    { id: 2, name: "TCS", Price: 3724.30, change: -0.52, picture: "/icon.jpeg" },
    { id: 3, name: "INFY", Price: 1541.15, change: +2.12, picture: "/Infy.jpeg" },
    { id: 4, name: "HDFC BANK", Price: 1532.70, change: -1.09, picture: "/HDFC.png" },
  ];

  return (
    <>
      {/* 🔹 Ticker Section */}
      {/* 🔹 Ticker Section */}
      <section className="w-full py-6">
        <div className="bg-[linear-gradient(to_bottom,#f9f9f9,#d9d9d9)] shadow-[0_4px_10px_rgba(0,0,0,0.15),0_-2px_6px_rgba(255,255,255,0.7)] 
 mt-20 border border-gray-300 rounded-2xl p-4 mx-4">
          <div className="flex flex-row items-center justify-around gap-4">

            {/* Left side: Mini widgets */}
            <div className="flex space-x-4">
              <MiniSensexWidget />
              <UsdInr />
            </div>

            {/* Right side: Ticker labels */}
            <div className="flex space-x-2">
              {["AAPL", "GOOGL", "AMZN", "MSFT"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl bg-white/80 px-4 py-2 font-semibold text-gray-800 hover:bg-white/100 transition"
                >
                  {label}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* 🔹 Full screen 65% / 35% grid section */}
      <section className="flex w-full min-h-screen mt-5 gap-2 mb-16">
        <div className="w-[65%] bg-[linear-gradient(to_bottom,#f9f9f9,#d9d9d9)]  shadow-[0_4px_10px_rgba(0,0,0,0.15),0_-2px_6px_rgba(255,255,255,0.7)]
 rounded-2xl border">
          <h1 className="font-bold text-3xl text-black m-10 calsans-regular">
            Most Active Stocks
          </h1>

          <div className="flex gap-4 px-10 mt-6">
            {MostActiveStocks.map((item, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-800 rounded-2xl p-5 w-56 h-56 flex flex-col justify-between hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
              >
                {/* IMAGE ON TOP */}
                <div className="flex justify-center mt-1">
                  <Image
                    src={item.picture}
                    alt={item.name}
                    height={50}
                    width={50}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                </div>

                {/* TEXT BLOCK BELOW IMAGE */}
                <div className="flex flex-col items-center gap-1 mt-2">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-gray-400 text-sm">₹ {item.Price.toFixed(2)}</p>
                  <p
                    className={`font-medium ${item.change >= 0 ? "text-green-400" : "text-red-400"
                      }`}
                  >
                    {item.change >= 0 ? "▲ +" : "▼ "}
                    {item.change.toFixed(2)}%
                  </p>
                </div>

                {/* CTA BUTTON */}
                <button className="bg-gray-900 text-sm text-white border border-gray-700 rounded-xl py-1.5 w-full hover:bg-gray-800 transition calsans-regular">
                  VIEW STOCK
                </button>
              </div>
            ))}
          </div>

          {/* <FancyButton label="See more" onClick={() => router.push('/exploreMoreStocks')} className="m-10" /> */}
          <SeeLink label="See more" onClick={() => router.push('/exploreMoreStocks')} className="m-10" />

          <h1 className="font-bold text-3xl m-10 calsans-regular">
            Top Market Movers
          </h1>

          <div className="min-h-screen m-10">
            <TradingViewMidget />
          </div>

          <div className="w-full flex flex-col gap-4 px-10 mb-12 overflow-hidden">
            <h1>
              <span className="font-bold text-3xl calsans-regular"> Upcoming IPO Pipeline </span>
            </h1>
            <UpcomingIpoPipeline />
          </div>

          <div className="">
            <Extras />
          </div>


        </div>

        <div className="w-[35%] p-4 bg-[linear-gradient(to_bottom,#f9f9f9,#d9d9d9)] shadow-xl shadow-gray-300/40
 border rounded-2xl">
          <div className="flex flex-col gap-5">
            <NewsHeadlines />

            <EventsWidget />
          </div>

        </div>
      </section>
    </>
  );
}

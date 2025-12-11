"use client";
import Image from "next/image";
const unlistedEvents = [
  { company: "Tata Technologies", date: "Nov 21", type: "IPO Approval", imageUrl: '/tatatech.jpeg' },
  { company: "FirstCry", date: "Dec 5", type: "Funding Round", imageUrl: '/firstcry.jpeg' },
  { company: "Swiggy", date: "TBA", type: "Expected IPO", imageUrl: '/swiggy.jpeg' },
  { company: "Ola", date: "Nov 30", type: "Funding Round", imageUrl: '/ola.jpeg' },
  { company: "Zerodha", date: "Dec 10", type: "IPO Approval", imageUrl: '/zerodha.jpeg' },
  { company: "Byju's", date: "TBA", type: "Expected Funding", imageUrl: '/byju.jpeg' },
];

export default function EventsWidget() {
  return (
    <div
      className="bg-[#111] border border-gray-800 rounded-2xl shadow-md p-4 w-full overflow-y-auto hide-scrollbar"
      style={{ height: "400px" }}
    >
      <h2 className="text-white font-bold text-xl mb-4 calsans-regular">
        Unlisted Company Events
      </h2>

      <div className="flex flex-col gap-3">
        {unlistedEvents.map((event, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-black/40 p-3 rounded-lg hover:bg-black/60 transition"
          >
            <div className="flex flex-col calsans-regular">
                <div className="flex flex-row gap-1 items-center">
                    <Image src={event.imageUrl} alt={event.company} width={40} height={40} className="rounded-full inline-block mr-2 mb-2" />
                    <p className="text-white font-semibold">{event.company}</p>
                </div>
              <p className="text-gray-400 text-sm">{event.date}</p>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-sm font-medium ${
                event.type.includes("IPO")
                  ? "bg-blue-600/20 text-blue-400 border border-blue-600/40"
                  : "bg-yellow-600/20 text-yellow-400 border border-yellow-600/40"
              }`}
            >
              {event.type}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}

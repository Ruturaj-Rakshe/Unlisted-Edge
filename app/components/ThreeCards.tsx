"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo({className=""}: {className?: string}) {
  return (
    <div className="h-[30rem] flex items-center justify-center w-full">
      <CardStack className="" items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Early Investor Insight",
    designation: "Future Trader",
    content: (
      <p>
        Unlisted Edge aims to <Highlight>unlock investment opportunities</Highlight> in pre-IPO companies, making it easier for early-stage investors to discover, track, and participate in emerging ventures.
      </p>
    ),
  },
  {
    id: 1,
    name: "Startup Growth Tracker",
    designation: "Fintech Enthusiast",
    content: (
      <p>
        Our platform is designed to help you <Highlight>monitor ESOPs and pre-IPO shares</Highlight> with transparency and confidence, so that your investment decisions are backed by accurate data and insights.
      </p>
    ),
  },
  {
    id: 2,
    name: "Market Opportunities",
    designation: "Strategic Investor",
    content: (
      <p>
        Unlisted Edge will empower users to <Highlight>buy, sell, and trade shares</Highlight> in promising private companies, bridging the gap between retail investors and pre-IPO markets.
      </p>
    ),
  },
];


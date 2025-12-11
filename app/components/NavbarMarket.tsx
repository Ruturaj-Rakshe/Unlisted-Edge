"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";


export function NavbarDemoMarket({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY])

  return (
    <div
      className={cn(
        `fixed top-5 left-1/2 -translate-x-1/2 max-w-3xl z-50
        calsans-regular
         transition-transform duration-300
         ${isVisible ? "translate-y-0 duration-2000" : "-translate-y-400 duration-2000"}
         bg-[linear-gradient(145deg,#fafafa,#dcdcdc,#bfbfbf)] border-4 border-black rounded-full shadow-xl`,
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Discover">
          <div className="flex flex-col space-y-4 text-sm">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Website 1"
                href="Website Link"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Website 2"
                href="Website Link"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Website 3"
                href="Website Link"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Website 4"
                href="Website Link"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Holdings">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/holdings/overview">Portfolio Overview</HoveredLink>
            <HoveredLink href="/holdings/pnl">P&L & Returns</HoveredLink>
            <HoveredLink href="/holdings/dividends">Dividends & Payouts</HoveredLink>
            <HoveredLink href="/holdings/valuation">Valuation & Fair Price</HoveredLink>
            <HoveredLink href="/holdings/transactions">Transaction History</HoveredLink>

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Positions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/positions/open">Open Positions</HoveredLink>
            <HoveredLink href="/positions/closed">Closed Positions</HoveredLink>
            <HoveredLink href="/positions/pending">Pending Orders</HoveredLink>
            <HoveredLink href="/positions/allocations">Allocation Breakdown</HoveredLink>
            <HoveredLink href="/positions/tax">Tax P&L Summary</HoveredLink>

          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Orders">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/orders/buy">Buy Orders</HoveredLink>
            <HoveredLink href="/orders/sell">Sell Orders</HoveredLink>
            <HoveredLink href="/orders/order-book">Order Book</HoveredLink>
            <HoveredLink href="/orders/funds">Fund Transfer</HoveredLink>
            <HoveredLink href="/orders/settlements">Settlements</HoveredLink>

          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Watchlist">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/watchlist/stocks">Saved Stocks</HoveredLink>
            <HoveredLink href="/watchlist/ipos">IPO Watchlist</HoveredLink>
            <HoveredLink href="/watchlist/sectors">Sectors & Themes</HoveredLink>
            <HoveredLink href="/watchlist/alerts">Price & News Alerts</HoveredLink>
            <HoveredLink href="/watchlist/shared">Shared Watchlists</HoveredLink>

          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Deals">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/deals/live">Live Deals</HoveredLink>
            <HoveredLink href="/deals/buy-requests">Buy Requests</HoveredLink>
            <HoveredLink href="/deals/sell-requests">Sell Requests</HoveredLink>
            <HoveredLink href="/deals/recent-trades">Recently Traded</HoveredLink>
            <HoveredLink href="/deals/negotiation">Negotiation Desk</HoveredLink>

          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Research">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/research/market-news">Market News</HoveredLink>
            <HoveredLink href="/research/financials">Financials & Balance Sheets</HoveredLink>
            <HoveredLink href="/research/valuations">Valuation & Fair Pricing Models</HoveredLink>
            <HoveredLink href="/research/events">Corporate Actions & Events</HoveredLink>
            <HoveredLink href="/research/reports">Analyst & Industry Reports</HoveredLink>

          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

import { UserButton } from "@clerk/nextjs";
import { NavbarDemoMarket } from "../components/NavbarMarket";

export default function RootMarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <div className="relative w-full h-20">
        {/* Centered Navbar */}
        <div className="absolute left-1/2 top-5 -translate-x-1/2 z-50">
          <NavbarDemoMarket />
        </div>

        {/* Top-right UserButton */}
        <div className="absolute right-5 top-5 z-50">
          <UserButton appearance={{
            elements: {
                            
            },
          }} />
        </div>
      </div>

      {children}
    </>
  );
}

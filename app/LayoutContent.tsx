"use client";

import { usePathname } from "next/navigation";
import { NavbarDemo } from "./components/Navbar";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();


  const noNavbar = ["/contactno"];

  const hideNavbar = pathname.startsWith(noNavbar.find((path) => pathname.startsWith(path)) || "");

  return (
    <>
        {!hideNavbar && <NavbarDemo />}
        {children}
        

    </>
  );
}
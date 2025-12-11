"use client";

import { usePathname } from "next/navigation";
import { NavbarDemo } from "./components/Navbar";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noNavbarPages = ["/contactno", "/kyc"];

  //Find out what this does
  const hideNavbar = noNavbarPages.some((path) => pathname.startsWith(path));

  return (
    <>
      {!hideNavbar && <NavbarDemo />}
      {children}
    </>
  );
}

"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
 NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Button from "./Button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import FancyButton from "./FancyButton";
import { useRouter } from "next/navigation";


export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Marketplace",
      link: "/marketplace",
    },
    {
      name: "Learn",
      link: "/learn",
    },
    {
      name: "Orders",
      link: "/orders",
    },
    {
      name: "Contact",
      link: "/contact",
    },

  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

return (
  <div className="relative w-full h-[13vh] bg-green-200">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <Button label="Login" onClick={()=>{}} className="rounded-xl w-28 h-10 hover:bg-[hsl(213,67%,24%)] z-50"/>
              </SignInButton>

              <SignUpButton>
                <Button label="Sign Up" onClick={()=>{}} className="rounded-xl w-28 h-10 hover:bg-[hsl(213,67%,24%)] z-50"/>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <FancyButton label="KYC Verification" onClick={()=>router.push('/kyc')}/>
              <UserButton />
            </SignedIn>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 py-1 px-2 block"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
            <SignedOut>
              <SignInButton>
                <Button label="Login" onClick={()=>{}} className="rounded-xl w-28 h-10 hover:bg-[hsl(213,67%,24%)]"/>
              </SignInButton>
              <SignUpButton>
                <Button label="Sign Up" onClick={()=>{}} className="rounded-xl w-28 h-10 hover:bg-[hsl(213,67%,24%)]"/>
               </SignUpButton>         
            </SignedOut>
            <SignedIn>
              <FancyButton label="KYC Verification" className="w-[40vw]" onClick={()=> router.push("/kyc")}/>
              <UserButton />
            </SignedIn>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}


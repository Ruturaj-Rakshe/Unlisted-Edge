"use client";
import Button from "@/app/components/Button";
import FancyButton from "@/app/components/FancyButton";
import KycForm from "@/app/components/KycForm"
import PanCardForm from "@/app/components/PancardForm";
import PassportForm from "@/app/components/PassportForm";
import { SmoothScrollerProvider } from "@/app/ScrollContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function KYCPage() {
    const router = useRouter();
    const [docType, setDocType] = React.useState<"aadhaar" | "pan" | "passport">("aadhaar");

  return (
    <SmoothScrollerProvider>
    <section className="min-h-screen w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 m-8">
        <div className="flex flex-col gap-4">
            <h1 className="text-5xl zalando-sans">
                KYC Verification
            </h1>

            <p className="zalando-sans-italic text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-slate-500 max-w-lg">
                Complete your KYC to unlock full access to our platform's features and services.
            </p>

            <p className="zalando-sans-italic font-bold text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl text-black max-w-lg">
                Verification takes 24-48 hours. We'll notify you once approved.
            </p>
            
            <div className="w-full justify-center flex gap-3 ml-4 -translate-x-10">
                <Button label={<span className="text-xs font-bold">Aadhaar</span>} onClick={() => setDocType("aadhaar")} className="rounded-xl w-28 h-28 hover:bg-[hsl(213,67%,24%)]" icon={<Image src="/digital.png" alt="" width={90} height={80} className="ml-2.5"/>} />
                <Button label={<span className="text-xs font-bold">PAN Card</span>} onClick={() => setDocType("pan")} className="rounded-xl w-28 h-28 hover:bg-[hsl(213,67%,24%)]" icon={<Image src="/card.png" alt="" width={90} height={80} className="ml-2.5"/>}/>
                <Button label={<span className="text-xs font-bold">Passport</span>} onClick={() => setDocType("passport")} className="rounded-xl w-28 h-28 hover:bg-[hsl(213,67%,24%)]" icon={<Image src="/passport.png" alt="" width={90} height={80} className="ml-2.5"/>}/>
            </div> 
            
            <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold zalando-sans-italic pt-8">
              DISCLAIMER: Proceeds only when all 3 documents are uploaded
            </p>
            <div className="w-full flex justify-center pt-8">
                <FancyButton label="Proceed" className="w-[20vw] sm:w-[20vw]" onClick={()=>router.push('/selfiePage')}/>
            </div>
            
        </div>

        <div className="pt-4 sm:pt-3">
            {docType === "aadhaar" && <KycForm />}
            {docType === "pan" && <PanCardForm />}
            {docType === "passport" && <PassportForm />}

        </div>
      </div>

      
    </section>
    </SmoothScrollerProvider>
  );
}

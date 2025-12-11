"use client";
import DocumentPreview from "@/app/components/DocumentPreview";
import FancyButton from "@/app/components/FancyButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SmoothScrollerProvider } from "@/app/ScrollContext";

export default function ReviewSubmitPage() {
    const router = useRouter();
const [data, setData] = useState<{
  aadhaarFront: string | null;
  aadhaarBack: string | null;
  panFront: string | null;
  panBack: string | null;
  passportLeft: string | null;
  passportRight: string | null;
}>({
  aadhaarFront: null,
  aadhaarBack: null,
  panFront: null,
  panBack: null,
  passportLeft: null,
  passportRight: null,
});


  useEffect(() => {
    setData({
      aadhaarFront: localStorage.getItem("aadhaarFront"),
      aadhaarBack: localStorage.getItem("aadhaarBack"),
      panFront: localStorage.getItem("panFront"),
      panBack: localStorage.getItem("panBack"),
      passportLeft: localStorage.getItem("passportLeft"),
      passportRight: localStorage.getItem("passportRight"),
    });
  }, []);

  return (
    <SmoothScrollerProvider>
    <section className="min-h-screen w-full bg-white flex flex-col items-center pt-8 gap-10 mb-4">
      <h1 className="text-5xl font-bold zalando-sans">Review & Submit</h1>
      <p className="text-xl zalando-sans-italic text-slate-500 max-w-2xl text-center">
        Thank you for completing the KYC verification process. Please review your submitted documents and selfie before final submission. Ensure all details are accurate to avoid delays in verification.
      </p>

      {/* Aadhaar */}
      <h1 className="text-3xl font-bold zalando-sans text-slate-500">AADHAAR CARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[900px]">
        <DocumentPreview label="Front" imageUrl={data.aadhaarFront} />
        <DocumentPreview label="Back" imageUrl={data.aadhaarBack} />
      </div>

      {/* PAN */}
      <h1 className="text-3xl font-bold zalando-sans text-slate-500 mt-6">PAN-CARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[900px]">
        <DocumentPreview label="Front" imageUrl={data.panFront} />
        <DocumentPreview label="Back" imageUrl={data.panBack} />
      </div>

      {/* Passport */}
      <h1 className="text-3xl font-bold zalando-sans text-slate-500 mt-6">PASSPORT</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-[900px]">
        <DocumentPreview label="Left" imageUrl={data.passportLeft} />
        <DocumentPreview label="Right" imageUrl={data.passportRight} />
      </div>
    
    <div className="flex gap-3">
        <FancyButton label="Back" className="mb-3 w-[200px]" onClick={() => router.push('/selfiePage')} />
        <FancyButton label="Proceed" className="mb-3 w-[200px]" onClick={() => router.push('/reviewSubmit')} />
    </div>
      
    </section>
     </SmoothScrollerProvider>
  );
}

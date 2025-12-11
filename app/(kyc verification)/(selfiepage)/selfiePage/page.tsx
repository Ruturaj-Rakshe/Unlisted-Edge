"use client";
import FancyButton from "@/app/components/FancyButton";
import { ProfileAvatarUploader } from "@/app/components/ImageUploader";
import { SmoothScrollerProvider } from "@/app/ScrollContext";
import { useRouter } from "next/navigation";

export default function SelfiePage() {
  const router = useRouter();

  return (
    <SmoothScrollerProvider>
    <section className="min-h-screen w-full bg-white flex flex-col items-center pt-8 gap-10">
      <h1 className="text-5xl font-bold zalando-sans">Upload a Selfie</h1>
      <p className="text-xl zalando-sans-italic text-slate-500">
        Please upload a clear selfie for identity verification.
      </p>

      {/* LEFT — avatar | RIGHT — instructions */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 w-full max-w-[1100px]">
        {/* LEFT */}
        <div className="flex justify-center">
          <ProfileAvatarUploader />
        </div>

        {/* RIGHT */}
        <div className="max-w-[450px]">
          <p className="text-lg zalando-sans-italic font-semibold text-gray-900">
            Quick tips for a good selfie:
          </p>

          <ul className="list-disc list-inside text-base font-normal zalando-sans-italic text-slate-600 mt-3 space-y-2">
            <li>Ensure good lighting and a plain background.</li>
            <li>Face the camera directly with a neutral expression.</li>
            <li>Avoid accessories like hats or sunglasses.</li>
            <li>Make sure your face is fully visible in the frame.</li>
          </ul>

          <p className="mt-5 text-lg text-slate-500 zalando-sans-italic font-bold">
            Click on the profile image to upload your selfie.
          </p>

        </div>
      </div>

      <p className="text-black text-xl zalando-sans-italic">
        Verification takes 24-48 hours. We'll notify you once approved.
      </p>

      <div className="flex gap-3">
              <FancyButton label="Back" className="mb-3 w-[200px]" onClick={() => router.push('/kyc')} />
              <FancyButton label="Proceed" className="mb-3 w-[200px]" onClick={() => router.push('/reviewSubmit')} />
      </div>
    </section>
    </SmoothScrollerProvider>

  );
}

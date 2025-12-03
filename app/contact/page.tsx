import ContactCard from "../components/ContactCard";
import ContactUSFormDemo from "../components/ContactForm";
import { SmoothScrollerProvider } from "../ScrollContext";

export default function Contact() {
  return (
    <SmoothScrollerProvider>

    <section className="min-h-screen bg-white flex items-center">
      <div className="w-full px-4 sm:px-6 md:px-10">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[0.5fr_1.5fr] gap-6">

          {/* LEFT — Heading and Cards */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-4xl sm:text-5xl font-bold zalando-sans pt-6 sm:pt-10 text-nowrap">
              Contact Us
            </h1>

            <div className="font-semibold zalando-sans-italic flex flex-col text-slate-500 text-base sm:text-xl gap-4 mt-6 sm:mt-10">
              <p>
                Email, call or complete the form to learn how 
                Unlisted can help you get going.
              </p>
              <span>emailid@example.com</span>
              <span>+1 234 567 8901</span>
              <span>Or you could chat with our AI assistant right here!</span>
            </div>

            {/* Cards */}
            <div className="flex flex-col pb-3 sm:flex-row gap-6 sm:gap-3 mt-6 sm:mt-10 items-center sm:justify-center">
              <ContactCard
                plan="MarketMate AI Chat"
                note="For instant answers, chat with our AI Assistant"
                features={[]}
                className="-ml-3"
              />
              <ContactCard
                plan="Feedback and Suggestions"
                note="We value your feedback and are working to improve Unlisted-Edge"
                features={[]}
                className="-ml-2"
              />

            </div>
            <ContactCard
                plan="Media Queries"
                note="For media-related questions or press inquiries, please contact us at media@ue"
                features={[]}
                className="-ml-2"
              />

          </div>

          {/* RIGHT — FORM */}
          <div className="flex items-center justify-center mt-6 pb-3 md:mt-0">
            <div className="w-full">
              <ContactUSFormDemo />
            </div>
          </div>

        </div>
      </div>
    </section>
</SmoothScrollerProvider>
  );
}

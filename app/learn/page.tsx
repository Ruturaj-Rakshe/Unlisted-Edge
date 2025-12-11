"use client";
import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import AskAIInput from '../components/AskAIInput'
import ContactCard from '../components/ContactCard'
import FancyButton from '../components/FancyButton'
import Courses from '../components/Courses'
import { SmoothScrollerProvider } from '../ScrollContext'
import LayoutContent from '../LayoutContent';

export default function Learn() {
  return (
    <>
      <SmoothScrollerProvider>
        <LayoutContent>

        <div className='w-full overflow-x-hidden'>
        <section className="bg-blue-100 w-full py-20 px-4">
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto text-center">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold zalando-sans text-black">
              Unlisted Edge Learning Hub
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl font-semibold zalando-sans-italic leading-relaxed max-w-3xl">
              Empower yourself with knowledge. Access comprehensive educational resources, expert insights,
              and practical guides to navigate the unlisted shares market with confidence.
            </p>

            <div className="mt-10 w-full max-w-xl">
              <AskAIInput />
            </div>
          </div>
        </section>

        {/* LEARNING CATEGORIES */}
        <section className="bg-white flex flex-col items-center py-16 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold zalando-sans text-black text-center">
            Learning Categories
          </h1>

          <p className="pt-4 text-base sm:text-lg md:text-xl font-semibold zalando-sans-italic text-center">
            Choose your learning path and start building your expertise
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 w-full max-w-7xl">
            <ContactCard className="rectangular-card max-w-[250px] md:max-w-[260px] lg:max-w-[270px]" plan="Getting Started" note="Basics of unlisted share trading" features={[]} icon={<IconBrandGithub />}/>
            <ContactCard className="rectangular-card max-w-[250px] md:max-w-[260px] lg:max-w-[270px]" plan="Market Analysis" note="Understand trends & valuations" features={[]} icon={<IconBrandFacebook />}/>
            <ContactCard className="rectangular-card max-w-[250px] md:max-w-[260px] lg:max-w-[270px]" plan="Risk Management" note="Protect your portfolio smartly" features={[]} icon={<IconBrandLinkedin />}/>
            <ContactCard className="rectangular-card max-w-[250px] md:max-w-[260px] lg:max-w-[270px]" plan="Investing Tips" note="Advanced trading strategies" features={[]} icon={<IconBrandLinkedin />}/>
          </div>
        </section>

        {/* FEATURED RESOURCES */}
        <section className="bg-white flex flex-col items-center py-16 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold zalando-sans text-black text-center">
            Featured Resources
          </h1>

          <div className="flex flex-wrap justify-center gap-6 pt-5 w-full max-w-7xl mx-auto">
  <Courses
    title="Introduction to Unlisted Shares"
    subtitle="Beginner"
    summary="Comprehensive guide to understanding unlisted shares and how they differ from listed securities."
    className="w-[230px] md:w-[260px] lg:w-[290px] xl:w-[330px]"
  />

  <Courses
    title="How to Evaluate Unlisted Companies"
    subtitle="Intermediate"
    summary="Learn the key metrics and factors to consider when evaluating unlisted company investments."
    className="w-[230px] md:w-[260px] lg:w-[290px] xl:w-[330px]"
  />

  <Courses
    title="Complete Trading Guider"
    subtitle="Advanced"
    summary="Master the art of trading unlisted shares with our comprehensive step-by-step guide."
    className="w-[230px] md:w-[260px] lg:w-[290px] xl:w-[330px]"
  />
</div>

        </section>

        {/* CTA SECTION */}
        <section className="w-full py-16 px-4">
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-center">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold zalando-sans text-black">
              Ready to Elevate Your Trading Game?
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl font-semibold zalando-sans-italic max-w-3xl leading-relaxed">
              Join thousands of investors who are mastering unlisted share trading with Unlisted Edge Learn.
            </p>

            <div className="mt-10">
              <FancyButton label="Explore More Resources" onClick={() => {}} />
            </div>
          </div>
        </section>
        </div>
        </LayoutContent>
      </SmoothScrollerProvider>
    </>
  );
}

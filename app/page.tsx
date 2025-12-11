"use client";

import Button from "./components/Button";
import Card from "./components/Card";
import FancyButton from "./components/FancyButton";
import Image from "next/image";
import GlassCard from "./components/GlassCard";
import { CardStackDemo } from "./components/ThreeCards";
import HoverButton from "./components/HoverButton";
import { SmoothScrollerProvider } from "./ScrollContext";
import { useRouter } from "next/navigation";
import LayoutContent from "./LayoutContent";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <SmoothScrollerProvider>
        <LayoutContent>
          <section className="bg-background text-foreground min-h-screen w-full flex items-center justify-center px-4 md:px-10 ">
            <div className="flex flex-col items-center text-center w-full max-w-7xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold calsans-regular leading-tight text-foreground">
                Unlock the Future of <br />Unlisted Shares
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl calsans-regular font-light leading-relaxed">
                India&apos;s most transparent, AI-powered marketplace for trading <br /> unlisted shares. Trust the Trade. Find Your Edge.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <FancyButton label="Get Started" />
                <Button
                  label="Learn More"
                  className="rounded-full cursor-pointer text-foreground outline-2 outline-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => router.push('/learn')}
                />
              </div>
            </div>
          </section>


          {/* Why choose unlisted edge */}
          <section className="min-h-screen bg-card text-card-foreground flex flex-col items-center justify-center px-4 sm:px-6 md:px-10">
            {/* First grid */}
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
              <h2 className="text-5xl flex items-center justify-center font-bold text-center zalando-sans my-20 text-primary">
                Why Choose Unlisted Edge?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center w-full">
                <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="flex flex-col h-full p-4">
                    <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                    <h3 className="text-2xl pt-7 font-semibold mb-4">AI-Driven Insights</h3>
                    <p>
                      Get intelligent valuations, fair price predictions and expert insights powered by
                      advanced AI technology to make informed investment decisions.
                    </p>
                  </div>
                </Card>

                <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="flex flex-col h-full p-4">
                    <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                    <h3 className="text-2xl pt-7 font-semibold mb-4">Best and Most Cost-Effective Pricing</h3>
                    <p>
                      Experience the most competitive pricing in the market. We&apos;ve eliminated excessive fees, offering a clear,
                      simple structure so you can invest with confidence and clarity.
                    </p>
                  </div>
                </Card>

                <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="flex flex-col h-full p-4">
                    <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                    <h3 className="text-2xl pt-7 font-semibold mb-4">Enhanced Security</h3>
                    <p>
                      Your investments are protected with state-of-the-art security protocols,
                      end-to-end encryption and robust data privacy measures, ensuring complete peace of mind.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Second grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center w-full">
                <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="flex flex-col h-full p-4">
                    <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                    <h3 className="text-2xl pt-7 font-semibold mb-4">Educating Investors</h3>
                    <p>
                      Access comprehensive resources, market insights and expert guidance to navigate the unlisted shares market
                      with confidence and knowledge.
                    </p>
                  </div>
                </Card>

                <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="flex flex-col h-full p-4">
                    <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                    <h3 className="text-2xl pt-7 font-semibold mb-4">Transparent Marketplace</h3>
                    <p>
                      Experience complete transparency with real-time pricing, detailed information and clear transaction processes.
                      No hidden fees, no surprises.
                    </p>
                  </div>
                </Card>

                <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="flex flex-col h-full p-4">
                    <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                    <h3 className="text-2xl pt-7 font-semibold mb-4">Trusted Platform</h3>
                    <p>
                      Join a community of informed investors on India's most reliable platform for unlisted share trading,
                      backed by cutting-edge technology and regulatory compliance.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>


          {/* How it Workssssssss */}
          <section className="min-h-screen bg-background text-foreground flex flex-col items-center px-4 sm:px-6 md:px-10">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
              <h2 className="mt-30 font-bold zalando-sans text-5xl my-20 text-primary">
                How It Works?
              </h2>
              <p className="text-center -mt-10 zalando-sans-italic text-xl">
                Start trading unlisted shares in four simple steps. It's that easy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 w-full place-items-center">
                <GlassCard blobColor="#2c9caf" className="mt-8 max-w-xs">
                  <Image
                    src="/icon.ico"
                    alt=""
                    width={70}
                    height={40}
                    className="w-[60px] rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Sign Up & Complete KYC</h3>
                  <p className="">
                    Create your account in minutes and complete our secure, bank-grade KYC verification process.
                  </p>
                </GlassCard>

                <GlassCard blobColor="#2c9caf" className="mt-8 max-w-xs">
                  <Image
                    src="/icon.ico"
                    alt=""
                    width={70}
                    height={40}
                    className="w-[60px] -translate-x-19 mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Browse & Analyze</h3>
                  <p className="">
                    Explore unlisted shares with AI-powered insights, fair price predictions and transparent market data.
                  </p>
                </GlassCard>

                <GlassCard blobColor="#2c9caf" className="mt-8 max-w-xs">
                  <Image
                    src="/icon.ico"
                    alt=""
                    width={70}
                    height={40}
                    className="w-[60px] -translate-x-19 mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Trade with Confidence</h3>
                  <p className="">
                    Place your orders in our transparent marketplace. See all bids and ask in real-time
                  </p>
                </GlassCard>

                <GlassCard blobColor="#2c9caf" className="mt-8 max-w-xs">
                  <Image
                    src="/icon.ico"
                    alt=""
                    width={70}
                    height={40}
                    className="w-[60px] -translate-x-19 mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-4">Secure Settlement</h3>
                  <p className="">
                    All transactions are recorded with enhanced security for complete transparency.
                  </p>
                </GlassCard>
              </div>
            </div>
          </section>

          <section className="bg-white min-h-screen w-full flex flex-col items-start gap-10 p-10">



            <div className="bg-linear-to-br from-[#04381f] to-[#043754] border border-white/10 rounded-full flex items-center justify-center gap-4 px-6 py-3">
              <h2 className="text-white zalando-sans-expanded whitespace-nowrap">
                Investor Protection
              </h2>
            </div>

            <h1 className="pt-2 text-5xl zalando-sans">Unlisted Edge Learn</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">

              <div className="flex flex-col">

                <p className="zalando-sans-italic text-xl">
                  Our commitment to educating investors empowers you with knowledge.
                  Learn at your own pace, make informed decisions, and protect your investments.
                </p>

                <div className="mt-8 flex flex-col gap-8 w-full max-w-2xl">

                  {/* item 1 */}
                  <div className="flex items-start gap-8">
                    <Image src="/icon.ico" alt="" width={60} height={40} className="rounded-xl border-2" />
                    <div>
                      <h3 className="font-bold text-lg">Comprehensive Guides</h3>
                      <p className="text-sm text-gray-600">
                        Learn the fundamentals of unlisted shares, valuation methods, and investment strategies.
                      </p>
                    </div>
                  </div>

                  {/* item 2 */}
                  <div className="flex items-start gap-8">
                    <Image src="/icon.ico" alt="" width={60} height={40} className="rounded-xl border-2" />
                    <div>
                      <h3 className="font-bold text-lg">Video Tutorials</h3>
                      <p className="text-sm text-gray-600">
                        Watch expert-led video courses covering everything from basics to advanced trading techniques.
                      </p>
                    </div>
                  </div>

                  {/* item 3 */}
                  <div className="flex items-start gap-8">
                    <Image src="/icon.ico" alt="" width={60} height={40} className="rounded-xl border-2" />
                    <div>
                      <h3 className="font-bold text-lg">Market Reports</h3>
                      <p className="text-sm text-gray-600">
                        Access detailed market analysis, company reports, and industry insights.
                      </p>
                    </div>
                  </div>

                  {/* item 4 */}
                  <div className="flex items-start gap-8">
                    <Image src="/icon.ico" alt="" width={60} height={40} className="rounded-xl border-2" />
                    <div>
                      <h3 className="font-bold text-lg">Certification</h3>
                      <p className="text-sm text-gray-600">
                        Earn certificates as you complete courses and demonstrate your knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>



              <div className="flex justify-center w-full">
                <div className="pt-20">
                  <CardStackDemo />
                </div>

              </div>

            </div>

          </section>

          <section className="min-h-[80vh] bg-white flex flex-col justify-center px-4 sm:px-6 md:px-10">
            <div>
              <h2 className="text-black font-bold text-center zalando-sans text-4xl sm:text-5xl md:text-5xl lg:text-5xl">
                Where intelligent investing meets <br /> uncompromising transparency
              </h2>

              <p className="text-center mt-6 sm:mt-8 text-base sm:text-lg md:text-xl zalando-sans-italic leading-relaxed">
                Experience the future of unlisted share trading with AI-powered insights, enhanced <br /> security, and the most cost-effective pricing in the market
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
              <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                <Image src="/icon.ico" alt="" width={60} height={40} className="rounded-xl border-2" />
                <p className="font-semibold pt-2 sm:pt-0 zalando-sans-expanded">Enhanced Security</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                <Image src="/icon.ico" alt="" width={60} height={40} className="rounded-xl border-2" />
                <p className="font-semibold pt-2 sm:pt-0 zalando-sans-expanded">AI-Driven Insights</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                <Image src="/icon.ico" alt="" width={60} height={40} className="rounded-xl border-2" />
                <p className="font-semibold pt-2 sm:pt-0 zalando-sans-expanded">Tested Community</p>
              </div>
            </div>

            <div className="flex items-center justify-center mt-10 mb-2">
              <HoverButton label="Start Trading" secondLabel="Today!" className="pt-3" />
            </div>


          </section>

        </LayoutContent>
      </SmoothScrollerProvider>
    </>


  );
}

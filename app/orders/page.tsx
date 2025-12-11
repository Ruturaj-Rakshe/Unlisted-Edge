import Card from '../components/Card'
import Image from 'next/image'
import ContactCard from '../components/ContactCard'
import { SmoothScrollerProvider } from '../ScrollContext'
import LayoutContent from '../LayoutContent'

export default function Orders(){
  return (
<>  
    <SmoothScrollerProvider>
    <LayoutContent>
    <section className='bg-blue-100 w-full py-20'> 
      <div className='flex flex-col items-center justify-center max-w-7xl mx-auto px-4'>
        <h1 className='lg:text-5xl sm:text-3xl text-center font-semibold zalando-sans text-black'>
           Your Intelligent Order Command Center
        </h1>

        <p className='text-xl sm:text-lg font-semibold zalando-sans-italic text-center mt-12 max-w-3xl leading-relaxed'>
           Our platform is more than just a marketplace. 
           It's a complete, professional-grade dashboard <br/> to manage, track, and analyze your unlisted share orders.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center mt-12 w-full px-2'>
            
            <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="flex flex-col h-full p-4">
                  <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                  <h3 className="text-2xl pt-7 font-semibold mb-4">At a Glance Portfolio</h3>
                  <p>
                    Your dashboard gives you a 360-degree view of your investments. Track your total holdings, current value, and overall profit/loss in real-time.
                  </p>
                </div>
            </Card>

            <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="flex flex-col h-full p-4">
                  <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                  <h3 className="text-2xl pt-7 font-semibold mb-4">Advanced Performance Analysis</h3>
                  <p>
                    Our integrated Power BI charts help you visualize your portfolio's performance, asset allocation, and growth over time.
                  </p>
                </div>
            </Card>

            <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="flex flex-col h-full p-4">
                  <Image src="/icon.ico" alt="" width={70} height={40} className="w-[60px] h-auto rounded-xl" />
                  <h3 className="text-2xl pt-7 font-semibold mb-4">Meet MarketMate</h3>
                  <p>
                    Your personal AI analyst is built right into your dashboard. Ask it to analyze your portfolio's risk, get insights on your holdings, or ask complex market questions
                  </p>
                </div>
            </Card>
            
        </div>

      </div>
    </section>

<section className="bg-white mt-10 py-12">
  <div className="flex flex-col items-center justify-start max-w-7xl mx-auto px-4">
    
    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold zalando-sans text-black">
      Transparently manage every trade
    </h1>

    {/* Cards */}
    <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center justify-center w-full px-2">
      <ContactCard
        className="rectangular-card cursor-pointer !py-4"
        plan="Current Orders"
        note="Track all active bids and asks with real-time status updates"
        features={[]}
      />
      <ContactCard
        className="rectangular-card cursor-pointer !py-4"
        plan="Order History"
        note="View your complete transaction log with dates, prices, and fees."
        features={[]}
      />
    </div>

  </div>
</section>
    </LayoutContent>
</SmoothScrollerProvider>

</>
  )
}

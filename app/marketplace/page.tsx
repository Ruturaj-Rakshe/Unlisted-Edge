"use client";

import Search from "../components/Search";

export default function Marketplace(){
    return (
        <section className="bg-white h-screen w-full py-6">
  <div className="bg-blue-300 h-full flex flex-col items-center justify-center">
    <div className="-mt-40"> 
      <h1 className="text-5xl font-bold zalando-sans text-center">
        The Unlisted Marketplace
      </h1>

      <p className="text-center zalando-sans-italic font-semibold text-xl text-slate-500 pt-8 max-w-3xl">
        Discover, analyze and invest in India's most promising unlisted companies
        with cutting-edge data and insights.
      </p>

       <div className="flex items-center justify-center">
            <Search />
       </div>
      
    </div>
  </div>
</section>

    )
}
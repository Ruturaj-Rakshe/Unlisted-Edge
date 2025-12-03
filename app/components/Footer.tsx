"use client";
import Button from "./Button";
import Social from "./Social";

export const Footeer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-4 sm:px-6 md:px-10 w-full overflow-x-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 items-start">

    {/* About Us */}
    <div className="flex flex-col items-center sm:items-start">
      <h2 className="text-xl font-bold text-white mb-4 zalando-sans-expanded text-center sm:text-left">
        Come grow with Us
      </h2>
      <div className="bg-white rounded-2xl shadow-2xl p-0.5 w-full max-w-xs sm:max-w-sm flex justify-center items-center overflow-hidden">
        <video
          src="/videos/graphs.mp4"
          muted
          playsInline
          autoPlay
          loop
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Quick Links */}
    <div className="flex flex-col items-center sm:items-start w-full">
      <h2 className="text-xl font-bold mb-4 text-white zalando-sans-expanded text-center sm:text-left">
        Quick Links
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 text-xl mt-2 w-full justify-center sm:justify-start flex-wrap">
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <Button
            label="About"
            className="rounded-full text-[#2c9caf] outline outline-2 outline-[#2c9caf] hover:bg-[#2c9caf]"
            onClick={() => {}}
          />
          <Button
            label="Contact"
            className="rounded-full text-[#2c9caf] outline outline-2 outline-[#2c9caf] hover:bg-[#2c9caf]"
            onClick={() => {}}
          />
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <Button
            label="Orders"
            className="rounded-full text-[#2c9caf] outline outline-2 outline-[#2c9caf] hover:bg-[#2c9caf]"
            onClick={() => {}}
          />
          <Button
            label="Marketplace"
            className="rounded-full text-[#2c9caf] outline outline-2 outline-[#2c9caf] hover:bg-[#2c9caf]"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>

    {/* Follow Us */}
    <div className="flex flex-col items-center sm:items-start w-full">
      <h2 className="text-xl font-bold mb-4 text-white zalando-sans-expanded text-center sm:text-left">
        Check us out on our socials
      </h2>
      <Social
        label="CONNECT"
        instagramLink="https://instagram.com/"
        twitterLink="https://twitter.com/"
        discordLink="https://discord.com/"
        githubLink="https://github.com/"
      />
    </div>
  </div>

  {/* Divider + Copyright */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
    © 2025 Unlisted-Edge. All rights reserved.
  </div>
</footer>

  );
};

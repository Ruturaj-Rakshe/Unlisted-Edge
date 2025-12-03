"use client";
import React from "react";
import "./social.css"; 

interface SocialProps {
  label?: string;
  instagramLink?: string;
  twitterLink?: string;
  discordLink?: string;
  githubLink?: string;
}

const Social: React.FC<SocialProps> = ({
  label = "FOLLOW",
  instagramLink = "#",
  twitterLink = "#",
  discordLink = "#",
  githubLink = "#",
}) => {
  return (
    <div className="card">
      <div className="background"></div>

      <h2 className="logo">{label}</h2>

      {/* Instagram */}
      <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="box box1 p-3 rounded-full outline outline-2 outline-[#2c9caf] text-[#2c9caf] hover:bg-[#2c9caf] hover:text-black transition">
        <span className="icon">
          <svg className="svg" viewBox="0 0 24 24">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 
            5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 
            1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 
            3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 
            110 6 3 3 0 010-6zm5.5-.25a1.25 1.25 0 
            11-2.5 0 1.25 1.25 0 012.5 0z"></path>
          </svg>
        </span>
      </a>

      {/* Twitter */}
      <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="box box2 p-3 rounded-full outline outline-2 outline-[#2c9caf] text-[#2c9caf] hover:bg-[#2c9caf] hover:text-black transition">
        <span className="icon">
          <svg className="svg" viewBox="0 0 24 24">
            <path d="M24 4.557a9.93 9.93 0 
            01-2.828.775A4.932 4.932 0 
            0023.338 3a9.864 9.864 0 
            01-3.127 1.195A4.918 4.918 0 
            0016.616 3c-2.724 0-4.932 2.208-4.932 
            4.932 0 .386.042.76.127 1.122C7.728 
            8.846 4.1 6.88 1.671 3.904a4.93 4.93 0 
            00-.666 2.48c0 1.71.87 3.216 2.188 
            4.099a4.903 4.903 0 01-2.231-.616v.062c0 
            2.388 1.698 4.377 3.946 4.83a4.996 4.996 0 
            01-2.224.084c.626 1.956 2.444 3.381 4.6 
            3.423A9.867 9.867 0 010 19.54a13.934 13.934 
            0 007.548 2.212c9.057 0 14.01-7.507 
            14.01-14.01 0-.213-.005-.425-.014-.636A9.953 
            9.953 0 0024 4.557z"></path>
          </svg>
        </span>
      </a>

      {/* Discord */}
      <a href={discordLink} target="_blank" rel="noopener noreferrer" className="box box3 p-3 rounded-full outline outline-2 outline-[#2c9caf] text-[#2c9caf] hover:bg-[#2c9caf] hover:text-black transition">
        <span className="icon">
          <svg className="svg" viewBox="0 0 24 24">
            <path d="M19.54 5.23a16.18 16.18 0 00-4.13-1.27.06.06 0 
            00-.06.03c-.18.33-.39.76-.53 1.09a15.09 15.09 0 
            00-4.72 0c-.14-.36-.37-.8-.56-1.13a.06.06 0 
            00-.06-.03A16.26 16.26 0 003.46 5.23a.06.06 0 
            00-.03.02A20.53 20.53 0 001 17.67a.06.06 0 
            00.02.04 16.32 16.32 0 005.03 2.55.06.06 0 
            00.07-.02c.39-.53.74-1.09 1.05-1.68a.06.06 0 
            00-.03-.09 13.36 13.36 0 01-2-.96.06.06 0 
            010-.1c.13-.1.26-.21.38-.32a.06.06 0 
            01.06-.01 14 14 0 0012.84 0 .06.06 0 
            01.06.01c.12.11.25.22.38.32a.06.06 0 
            010 .1 13.6 13.6 0 01-2 .96.06.06 0 
            00-.03.09c.31.59.66 1.15 1.05 1.68a.06.06 0 
            00.07.02 16.24 16.24 0 005.03-2.55.06.06 0 
            00.02-.04 20.53 20.53 0 00-2.43-12.42.06.06 0 
            00-.03-.02zm-11.31 9.32c-1.01 0-1.83-.9-1.83-2s.82-2 
            1.83-2 1.83.9 1.83 2-.82 2-1.83 2zm7.54 0c-1.01 0-1.83-.9-1.83-2s.82-2 
            1.83-2 1.83.9 1.83 2-.82 2-1.83 2z"></path>
          </svg>
        </span>
      </a>

      {/* GitHub */}
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full outline outline-2 outline-[#2c9caf] text-[#2c9caf] hover:bg-[#2c9caf] hover:text-black transition">
        <span className="icon">
          <svg className="svg" viewBox="0 0 24 24">
            <path d="M12 .5A12 12 0 000 12.59c0 5.34 3.44 9.86 8.2 
            11.47.6.11.82-.27.82-.59v-2.06c-3.34.74-4.03-1.66-4.03-1.66-.55-1.43-1.34-1.81-1.34-1.81-1.09-.78.08-.77.08-.77 
            1.2.08 1.84 1.26 1.84 1.26 1.08 1.92 2.84 1.36 3.53 1.04.11-.81.42-1.36.76-1.68-2.66-.31-5.46-1.39-5.46-6.18 
            0-1.36.47-2.47 1.24-3.34-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.27a11.22 
            11.22 0 016 0c2.28-1.6 3.29-1.27 3.29-1.27.67 1.71.25 2.97.12 3.28.77.87 
            1.23 1.98 1.23 3.34 0 4.81-2.8 5.86-5.48 6.17.43.39.82 1.17.82 2.36v3.49c0 
            .32.21.71.82.59A12.1 12.1 0 0024 12.59 12 12 0 0012 .5z"></path>
          </svg>
        </span>
      </a>
    </div>
  );
};

export default Social;

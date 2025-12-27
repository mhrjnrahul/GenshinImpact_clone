import React from "react";
import Music from "./Music";

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="w-full px-6 mx-auto h-(66px) flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Music />
          <img
            src="genshin_logo.png"
            alt="logo"
            className="object-contain -ml-18"
          />

          {/* Links */}
          <div className="flex items-center gap-4 font-(--font-ui) text-gray-300 text-sm ml-10">
            <a href="#">HOME</a>
            <a href="#">NEWS</a>
            <a href="#">CHARACTERS</a>
            <a href="#">EXPLORE</a>
            <a href="#">HoYoLAB</a>
            <a href="#">TOP-UP</a>
            <a href="#">REDEEM CODE</a>
          </div>
        </div>

        {/* Download/login */}
        <div className="flex justify-end items-center gap-5 h-full">
          <a href="#">Log In</a>

          <button className="h-full font-(--font-ui) bg-yellow-300 text-amber-700 w-50 px-3 py-5 z-55 tracking-wide -mr-6">
            Download
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import Music from "./Music";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "text-yellow-300 underline" : "hover:text-yellow-300";

  return (
    <header className="absolute top-0 w-full z-50 bg-linear-to-b from-black/20 to-transparent font-(--font-ui)">
      <nav className="w-full px-6 mx-auto h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Music />
          <img
            src="genshin_logo.png"
            alt="logo"
            className="object-contain -ml-18"
          />

          {/* Links */}
          <div className="flex items-center gap-5 text-white font-semibold text-sm ml-10">
            <NavLink to="/" className={linkClass}>HOME</NavLink>
            <NavLink to="/news" className={linkClass}>NEWS</NavLink>
            <NavLink to="/characters" className={linkClass}>CHARACTERS</NavLink>
            <NavLink to="/explore" className={linkClass}>EXPLORE</NavLink>
            <NavLink to="/hoyolab" className={linkClass}>HoYoLAB</NavLink>
            <NavLink to="/topup" className={linkClass}>TOP-UP</NavLink>
            <NavLink to="/redeem" className={linkClass}>REDEEM CODE</NavLink>
          </div>
        </div>

        {/* Download/login */}
        <div className="flex justify-end items-center gap-5 h-full">
          <a href="#">Log In</a>

          <button className="h-full font-(--font-ui) bg-yellow-300 text-amber-700 w-50 px-3 py-6 z-55 tracking-wide -mr-6">
            Download
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

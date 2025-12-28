import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaReddit,
  FaTwitch,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full">
      <div className="social-icons footer-top h-16 flex justify-center items-center gap-20 text-3xl bg-black text-gray-300 border-b border-gray-700">
        <FaXTwitter className="hover:text-white" />
        <FaTiktok className="hover:text-white" />
        <FaYoutube className="hover:text-white" />
        <FaFacebook className="hover:text-white" />
        <FaInstagram className="hover:text-white" />
        <FaDiscord className="hover:text-white" />
        <FaReddit className="hover:text-white" />
        <FaTwitch className="hover:text-white" />
        <FaFacebookMessenger className="hover:text-white" />
        <FaWhatsapp className="hover:text-white" />
      </div>

      <section className="news-letter flex justify-between mx-auto items-center px-20 pt-10 pb-15 bg-[#111] text-white">
        <div className="w-full">
          <h4 className="mb-3 tracking-tight text-2xl font-bold">Subscribe for the Latest News</h4>
          <p className="tracking-tight w-130">
            Subscribe to Paimon's official Genshin Impact news to stay up to
            date with the latest information, character intel, and limited-time
            event rewards.
          </p>
        </div>

        <div className="w-full">
          <div className="flex gap-5 items-center mb-3">
            <input
              type="text"
              placeholder="Email"
              className="border-[#323339] bg-[#212226] px-3 py-3 rounded rounded-3 w-100"
            />
            <button className="border-[#cdbb98] text-[#3B4354] px-5 py-3 rounded-xl bg-[#cdbb98] tracking-tight">
              Subscribe Now
            </button>
          </div>
          <div className="w-80 flex gap-3 justify-center items-center">
            <input type="radio" className="self-start mt-1" />
            <span className="text-xs ">
              I agree for my personal data to be collected and used to receive
              event invitations and other game info.
            </span>
          </div>
        </div>
      </section>

      <section className="footer-bottom bg-black h-full">
        {/* logo */}
        <div>
          <img
            src="genshin_logo.png"
            alt="Genshin Impact Logo"
            className="object-contain mx-auto mb-5 pt-10 w-50"
          />
        </div>

        <div className="text-gray-400 mx-auto flex gap-5 justify-center items-center text-xs pb-10">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Help Center</a>
        </div>

        <div>
          <img
            src="footer_disc.png"
            alt="Footer Discord Logo"
            className="mx-auto w-80 pb-10"
          />
        </div>

        <div className="texts text-gray-400 mx-auto text-xs flex flex-col gap-2 w-3/4 pb-10 justify-center items-center text-center">
          <span>
            "PlayStation Family Mark" and "PS5 logo" are registered trademarks
            or trademarks of Sony Interactive Entertainment Inc.
          </span>
          <span>
            Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and
            Epic Online Services are trademarks and/or registered trademarks of
            Epic Games. All other trademarks are the property of their
            respective owners.
          </span>
        </div>

        <div className="bottom pb-10">
            <img src="hoyo_logo.png" alt="hoyolab logo" className="mx-auto pb-5 w-80" />
            <span className="text-white mx-auto text-xs flex justify-center items-center">Copyright © COGNOSPHERE. All Rights Reserved.</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

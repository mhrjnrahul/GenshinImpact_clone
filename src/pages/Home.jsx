import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        src="/video/genshin_hero.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default Home;

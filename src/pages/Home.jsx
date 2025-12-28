import React from "react";
import City from "../components/City";
import Footer from "../components/Footer";

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

      <div className="cities">
        <City image="/cities/mondstadt.png" name="Mondstadt" />
        <City image="/cities/liyue.png" name="Liyue" />
        <City image="/cities/inazuma.png" name="Inazuma" />
        <City image="/cities/sumeru.png" name="Sumeru" />
        <City image="/cities/fontaine.png" name="Fontaine" />
        <City image="/cities/natlan.png" name="Natlan" />
        <City image="/cities/nodkrai.png" name="Nod-Krai" />
        <City image="/cities/coming.png" name="Coming Soon"/>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

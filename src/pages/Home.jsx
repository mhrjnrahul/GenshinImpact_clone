import React from "react";
import City from "../components/City";
import Footer from "../components/Footer";

const Home = () => {
  const cities = [
  { image: "/cities/mondstadt.png", name: "Mondstadt" },
  { image: "/cities/liyue.png", name: "Liyue" },
  { image: "/cities/inazuma.png", name: "Inazuma" },
  { image: "/cities/sumeru.png", name: "Sumeru" },
  { image: "/cities/fontaine.png", name: "Fontaine" },
  { image: "/cities/natlan.png", name: "Natlan" },
  { image: "/cities/nodkrai.png", name: "Nod-Krai" },
  { image: "/cities/coming.png", name: "Coming Soon" },
];


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
        {cities.map((city, index) => (
          <City key={index} image={city.image} name={city.name} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

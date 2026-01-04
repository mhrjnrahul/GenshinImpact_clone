import React from "react";
import City from "../components/City";
import Footer from "../components/Footer";

const Home = () => {
  const cities = [
  { image: "/cities/mondstadt.png", name: "Mondstadt", icon:"/cities/jean.png" },
  { image: "/cities/liyue.png", name: "Liyue", icon: "/cities/xiao.png" },
  { image: "/cities/inazuma.png", name: "Inazuma", icon:"/cities/ayaka.png" },
  { image: "/cities/sumeru.png", name: "Sumeru", icon:"/cities/tighnari.png" },
  { image: "/cities/fontaine.png", name: "Fontaine", icon:"/cities/furina.png" },
  { image: "/cities/natlan.png", name: "Natlan", icon:"cities/mualani.png" },
  { image: "/cities/nodkrai.png", name: "Nod-Krai", icon:"cities/lauma.png" },
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
          <City key={index} image={city.image} name={city.name} icon={city.icon}/>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

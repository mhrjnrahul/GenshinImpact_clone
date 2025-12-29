import React from "react";
import NewsCard from "../components/NewsCard";

const News = () => {
  const news = [
    {
     image: "news/news1.png",
     description: "The web event Mili Snow Resort, Party in Wonderland!",
    },
    {
      image: "news/news2.png",
      description: "Event Coming Soon!",
    },
    {
      image: "news/news3.png",
      description: "New Weapon Released!",
    }
  ];

  return (
    <div className="w-full h-screen" style={{backgroundImage: 'url(/news/news_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="news-grid w-full h-full flex items-center justify-center">
        <div className="news-items flex gap-6">
          {news.map((item, index) => (
            <NewsCard key={index} image={item.image} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

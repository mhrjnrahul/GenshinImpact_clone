import React from "react";
import NewsCard from "../components/NewsCard";

const News = () => {
  const news = [
    {
     image: "news/news1.png",
     description: "The web event Mili Snow Resort, Party in Wonderland!",
     date: "Dec 30, 2025",
     extra: "Events"
    },
    {
      image: "news/news2.png",
      description: "Cutscene Animation: Where the Moon Belongs | Genshin Impact",
      date: "Dec 21, 2025",
      extra: "Info"
    },
    {
      image: "news/news3.png",
      description: "New Event: New Year's Advice from Teyvat",
      date: "Dec 12, 2025",
      extra: "Info"
    }
  ];

  return (
    <div className="w-full h-screen" style={{backgroundImage: 'url(/news/news_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="news-grid w-full h-full flex items-center justify-center">
        <div className="news-items grid grid-cols-3 gap-6 items-stretch mx-25">
          {news.map((item, index) => (
            <NewsCard key={index} image={item.image} description={item.description} date={item.date} extra={item.extra} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

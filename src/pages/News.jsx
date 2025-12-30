import React from "react";
import NewsCard from "../components/NewsCard";
import Button from "../components/Button";
import Footer from "../components/Footer";

const News = () => {
  const news = [
    {
      image: "news/news1.png",
      description: "The web event Mili Snow Resort, Party in Wonderland!",
      date: "Dec 30, 2025",
      extra: "Events",
    },
    {
      image: "news/news2.png",
      description:
        "Cutscene Animation: Where the Moon Belongs | Genshin Impact",
      date: "Dec 21, 2025",
      extra: "Info",
    },
    {
      image: "news/news3.png",
      description: "New Event: New Year's Advice from Teyvat",
      date: "Dec 12, 2025",
      extra: "Info",
    },
  ];

  const buttons = [
    {
      buttonName: "Latest",
    },
    {
      buttonName: "Info",
    },
    {
      buttonName: "Updates",
    },
    {
      buttonName: "Events",
    },
  ];

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: "url(/news/news_bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="news-grid max-w-7xl w-full mx-auto  h-full flex items-center justify-center">
          <div className="news-items grid grid-cols-3 gap-6 items-stretch">
            {news.map((item, index) => (
              <NewsCard
                key={index}
                image={item.image}
                description={item.description}
                date={item.date}
                extra={item.extra}
                variant="default"
              />
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#f0f0f0]">
        <div className="w-full max-w-7xl h-screen mx-auto px-4 mb-5 py-5">
          <div className="flex gap-4 mb-6">
            {buttons.map((btn, index) => (
              <Button key={index} buttonName={btn.buttonName} />
            ))}
          </div>

          <div className="news-container mt-2 w-full">
            <div className="flex flex-col gap-2">
              {news.map((item, index) => (
                <NewsCard
                  key={index}
                  image={item.image}
                  description={item.description}
                  date={item.date}
                  extra={item.extra}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

    
  );
};

export default News;

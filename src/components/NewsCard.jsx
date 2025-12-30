import React from "react";

const NewsCard = ({ image, description, date, extra, variant = "default" }) => {
  const isCompact = variant === "compact";

  return (
    <div
      className={`
        rounded h-full
        ${
          isCompact
            ? "flex flex-row gap-5 py-4 px-5 w-full bg-white"
            : "flex flex-col p-5 bg-black/60"
        }
      `}
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={description}
        className={`
          object-cover rounded
          ${isCompact ? "w-[30%] h-40" : "w-full h-48"}
        `}
      />

      {/* CONTENT */}
      <div
        className={`
          flex flex-col 
          ${isCompact ? "w-[70%]" : "text-white"}
        `}
      >
        <p className={`${isCompact ? "" : "mt-2"}`}>{description}</p>

        <div className="w-full flex justify-between mt-auto pt-4 text-sm">
          <span>{date}</span>
          <span>{extra}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

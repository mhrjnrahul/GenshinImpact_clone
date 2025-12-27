import React, { useRef, useState } from "react";
import { FaMusic } from "react-icons/fa6";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="cursor-pointer z-100 ml-4"
      onClick={toggleMusic}
    >
      <FaMusic
        size={25}
        className={`${
          isPlaying ? "text-yellow-300" : "text-gray-300"
        }`}
      />

      <audio ref={audioRef} src="/audio/genshin_maintheme.mp3">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Music;

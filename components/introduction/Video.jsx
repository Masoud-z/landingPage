"use client";

import { useState } from "react";
import Image from "next/image";

import playImg from "@/public/play.svg";

function Video() {
  const [showPlay, setShowPlay] = useState(true);
  const playPause = (e) => {
    if (e.target.paused) {
      e.target.play();
      setShowPlay(false);
    } else {
      e.target.pause();
      setShowPlay(true);
    }
  };
  return (
    <div className="flex justify-center items-center relative">
      <video
        loop
        src="/video.mp4"
        className="w-[85vw] md:w-[75vw] -mt-[15vh] md:-mt-[42vh] hover:cursor-pointer"
        onClick={playPause}
      ></video>
      {showPlay && (
        <Image
          src={playImg}
          width="100"
          height="100"
          className="absolute bottom-1/2 md:bottom-3/4 hover:cursor-pointer pointerEvent"
          alt="play btn"
        />
      )}
    </div>
  );
}

export default Video;

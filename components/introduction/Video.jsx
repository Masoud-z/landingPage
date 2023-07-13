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
        className="w-[75vw] -mt-[42vh] hover:cursor-pointer"
        onClick={playPause}
      ></video>
      {showPlay && (
        <Image
          src={playImg}
          width="100"
          height="100"
          className="absolute bottom-3/4 hover:cursor-pointer pointerEvent"
        />
      )}
    </div>
  );
}

export default Video;

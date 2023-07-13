"use client";

import { useState } from "react";
import Image from "next/image";

import playImg from "@/public/play.svg";

function Video() {
  const [showPlay, setShowPlay] = useState(true);
  const playPause = (e) => {
    e.target.play();
  };
  return (
    <div className="flex justify-center items-center relative">
      <video
        src="/video.mp4"
        className="w-[75vw] -mt-[42vh]"
        onClick={playPause}
      ></video>
      <Image src={playImg} width="100" height="100" className="absolute " />
    </div>
  );
}

export default Video;

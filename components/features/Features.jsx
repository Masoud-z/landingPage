import React from "react";

const features = [
  {
    img: "/f1.jpg",
    title: "feature 1",
    description:
      "Talk about some of the details of your offer with a focus on the value people get back.",
  },
  {
    img: "/f2.jpg",
    title: "feature 2",
    description:
      "Talk about some of the details of your offer with a focus on the value people get back.",
  },
  {
    img: "/f3.jpg",
    title: "feature 3",
    description:
      "Talk about some of the details of your offer with a focus on the value people get back.",
  },
];

function Features() {
  return <main className="mt-[30vh] px-[10%] grid-cols-3 gap-3"></main>;
}

export default Features;

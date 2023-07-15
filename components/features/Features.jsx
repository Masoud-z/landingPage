import React from "react";
import Attribute from "./Attribute";

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
  return (
    <main className="mt-20 md:mt-[30vh] px-[4%] md:px-[10%] grid grid-cols-1 md:grid-cols-3 gap-9 md:gap-3">
      {features.map((feature) => (
        <Attribute
          img={feature.img}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </main>
  );
}

export default Features;

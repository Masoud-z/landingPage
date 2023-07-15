import Recommendation from "./Recommendation";

const recommendations = [
  {
    star: 5,
    text: "Share a real testimonial that hits some of your benefits (but isn't too sales-y).",
    img: "/recommender.jpg",
    name: "Alexa Rita",
    location: "LondOff",
  },
  {
    star: 4.5,
    text: "Share a real testimonial that hits some of your benefits (but isn't too sales-y).",
    img: "/recommender2.jpg",
    name: "Linda Alfonso",
    location: "FromKio",
  },
];

function Testimonials() {
  return (
    <main className="flex flex-col justify-center items-center gap-10 md:gap-20 mt-20 md:mt-[30vh] px-[4%] md:px-[10%]">
      <header className="text-xs font-semibold text-cyan-500">
        DON'T JUST TAKE OUR WORD FOR IT
      </header>
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-16 md:gap-0">
        {recommendations.map((recom) => (
          <Recommendation
            star={recom.star}
            text={recom.text}
            img={recom.img}
            name={recom.name}
            location={recom.location}
          />
        ))}
      </div>
    </main>
  );
}

export default Testimonials;

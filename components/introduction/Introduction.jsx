import Video from "./Video";

function Introduction() {
  return (
    <main className="mt-10 md:mt-[30vh] ">
      <section className="w-full h-[60vh] md:h-[100vh] px-3 flex flex-col justify-center items-center gap-7 md:gap-10 bg-emerald-50">
        <h1 className="text-3xl md:text-5xl font-semibold text-center -mt-[14vh] md:-mt-[35vh]">
          Show visitors what <br /> they're signing up for
        </h1>
        <p className="font-normal text-lg text-stone-800/80 text-center">
          Include a video or photo from one of your sessions to help <br />
          people understand your service (or just to hype ‘em up).
        </p>
      </section>
      <Video />
    </main>
  );
}

export default Introduction;

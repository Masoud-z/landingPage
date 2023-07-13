"use client";

function Introduction() {
  const playPause = (e) => {
    e.target.play();
  };

  return (
    <main className="my-[30vh]">
      <section className="w-full h-[100vh] flex flex-col justify-center items-center gap-10 bg-emerald-50">
        <h1 className="text-5xl font-semibold text-center -mt-[35vh]">
          Show visitors what <br /> they're signing up for
        </h1>
        <p className="font-normal text-lg text-stone-800/80 text-center">
          Include a video or photo from one of your sessions to help <br />
          people understand your service (or just to hype ‘em up).
        </p>
      </section>
      <div className="flex justify-center items-center">
        <video
          src="/video.mp4"
          className="w-[75vw] -mt-[42vh]"
          onClick={playPause}
        ></video>
      </div>
    </main>
  );
}

export default Introduction;

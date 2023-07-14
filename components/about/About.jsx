import Image from "next/image";

function About() {
  return (
    <main className="mt-[30vh] px-[10%] grid grid-cols-2 justify-center content-center gap-[5vw]">
      <section className="relative min-h-[400px] w-full">
        <Image src="/about.jpg" fill={true} />
      </section>
      <section className="flex flex-col justify-center items-start gap-8 text-teal-900">
        <h2 className="text-cyan-500 font-semibold text-xs">About</h2>
        <h3 className="font-semibold text-3xl ">
          Some more information about your business
        </h3>
        <p className="font-normal text-sm">
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </p>
      </section>
    </main>
  );
}

export default About;

import Image from "next/image";

import backgroundImg from "@/public/bg.jpg";

function Main() {
  return (
    <main className="px-[10%]">
      <Image
        src={backgroundImg}
        objectFit="cover"
        fill={true}
        alt="Background picture"
        className="-z-10"
      />
      <section className="mt-[5vh] flex flex-col gap-7 w-3/5">
        <div className="logo">Masoud</div>
        <div className="font-semibold text-7xl leading-[85px]">
          Our Business is to grow Yours.
        </div>
        <div className="text-xl font-normal leading-7">
          Discussions with founders, investors and executives on how they
          achieved success and growth with their companies. Part inspiration,
          part practical playbook - Growth Stories delivers the real-life
          experiences & advice from those who have built global teams and
          scalable businesses.
        </div>
      </section>
    </main>
  );
}

export default Main;

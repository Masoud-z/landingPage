import Image from "next/image";

import Form from "./Form";

import backgroundImg from "@/public/bg.jpg";
import screenImg from "@/public/screen.svg";
import heartImg from "@/public/heart.svg";
import badgeImg from "@/public/badge.svg";

function Main() {
  return (
    <main className="px-[4%] md:px-[10%] ">
      <Image
        src={backgroundImg}
        objectFit="cover"
        fill={true}
        alt="Background picture"
        className="-z-10"
      />
      <section className="mt-[5vh] flex flex-col gap-7 md:w-3/5">
        <div className="logo">Masoud</div>
        <h1 className="font-semibold text-6xl md:text-7xl md:leading-[85px]">
          Our Business is to grow Yours.
        </h1>
        <p className="text-xl font-normal leading-7 md:w-4/5">
          Discussions with founders, investors and executives on how they
          achieved success and growth with their companies.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-24 justify-center items-center md:items-end">
        <div className="order-2 md:order-1 flex flex-col gap-20 justify-center items-end mb-10 md:w-[40vw]">
          <div className="flex flex-row gap-3 justify-center items-start">
            <Image src={screenImg} width="40" height="35" alt="screen" />

            <div className="flex flex-col gap-1 justify-start items-start">
              <h4 className="text-xl font-semibold -mt-1.5">Benefit 1</h4>
              <p className="text-base font-normal text-stone-800/80">
                Highlight the benefits of signing up for an appointment, online
                class, or video consultation.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-center items-start">
            <Image src={heartImg} width="40" height="35" alt="heart" />

            <div className="flex flex-col gap-1 justify-start items-start">
              <h4 className="text-xl font-semibold -mt-1.5">Benefit 2</h4>
              <p className="text-base font-normal text-stone-800/80">
                Highlight the benefits of signing up for an appointment, online
                class, or video consultation.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-center items-start">
            <Image src={badgeImg} width="40" height="35" alt="badge" />

            <div className="flex flex-col gap-1 justify-start items-start">
              <h4 className="text-xl font-semibold -mt-1.5">Benefit 3</h4>
              <p className="text-base font-normal text-stone-800/80">
                Highlight the benefits of signing up for an appointment, online
                class, or video consultation.
              </p>
            </div>
          </div>
        </div>
        <Form className="order-1 md:order-2" />
      </section>
    </main>
  );
}

export default Main;

import Image from "next/image";

import backgroundImg from "@/public/bg.jpg";
import screenImg from "@/public/screen.svg";
import heartImg from "@/public/heart.svg";
import badgeImg from "@/public/badge.svg";

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

      <section className="flex flex-row gap-20 justify-center items-end">
        <div className="flex flex-col gap-5 justify-center items-end mb-3 w-[40vw]">
          <div className="flex flex-row gap-3 justify-center items-start">
            <Image src={screenImg} width="40" height="35" />

            <div className="flex flex-col gap-1 justify-start items-start">
              <h4 className="text-xl font-semibold -mt-1.5">Benefit 1</h4>
              <p className="text-base font-normal text-stone-800/80">
                Highlight the benefits of signing up for an appointment, online
                class, or video consultation.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-center items-start">
            <Image src={heartImg} width="40" height="35" />

            <div className="flex flex-col gap-1 justify-start items-start">
              <h4 className="text-xl font-semibold -mt-1.5">Benefit 2</h4>
              <p className="text-base font-normal text-stone-800/80">
                Highlight the benefits of signing up for an appointment, online
                class, or video consultation.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-center items-start">
            <Image src={badgeImg} width="40" height="35" />

            <div className="flex flex-col gap-1 justify-start items-start">
              <h4 className="text-xl font-semibold -mt-1.5">Benefit 3</h4>
              <p className="text-base font-normal text-stone-800/80">
                Highlight the benefits of signing up for an appointment, online
                class, or video consultation.
              </p>
            </div>
          </div>
        </div>

        
      </section>
    </main>
  );
}

export default Main;

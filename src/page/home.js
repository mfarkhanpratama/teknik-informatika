import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import CardCount from "../components/cardCount";

import React from "react";
import RevealOnScroll from "../components/effectScroll";

const images = [
  "/asset/images/kemitraan/1.png",
  "/asset/images/kemitraan/2.png",
  "/asset/images/kemitraan/3.png",
  "/asset/images/kemitraan/4.png",
  "/asset/images/kemitraan/5.png",
  "/asset/images/kemitraan/6.png",
  "/asset/images/kemitraan/7.png",
  "/asset/images/kemitraan/8.png",
];

const konsentrasi = [
  { name: "KCV", href: "/asset/images/kcv.jpg", alt: "kcv" },
  { name: "RPL", href: "/asset/images/rpl.jpg", alt: "rpl" },
  { name: "KBJ", href: "/asset/images/kbj.jpg", alt: "kbj" },
];

function Home() {
  return (
    <>
      {/* header */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img
          src="/asset/images/latarUnri.png"
          alt="test"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src="/asset/images/logoti.png"
                alt="logo"
                className="w-[250px] h-auto"
              />
              <div className=" flex-col items-start justify-center">
                <h2 className="text-2xl font-medium text-orange-600 mb-8 tracking-[.75em]">
                  PROGRAM STUDI S1
                </h2>
                <h2 className="text-6xl font-bold text-white mb-8 tracking-[.20em]">
                  TEKNIK INFORMATIKA
                </h2>
                <h2 className="text-5xl font-semibold text-white font-serif">
                  Universitas Riau
                </h2>
              </div>
            </div>

            <div className="flex gap-10 justify-center items-center mt-8">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 w-[250px] h-[50px] flex justify-center items-center text-xl">
                  Profil
                </span>
              </button>

              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 w-[250px] h-[50px] flex justify-center items-center text-xl">
                  Kurikulum
                  <ArrowLongRightIcon
                    strokeWidth={2}
                    className="h-5 w-5 bg-white rounded-full text-gray-900 ml-2"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* content */}

      <section class="h-[650px] flex items-center justify-center">
        <div class=" w-2/3 mx-auto text-center space-y-12">
          <h1 class="text-[40px] font-bold">
            A purposeful informatics engineering study program in University of
            Riau
          </h1>
          <p class="text-[30px] font-normal">
            Stanford was founded almost 150 years ago on a bedrock of societal
            purpose. Our mission is to contribute to the world by educating
            students for lives of leadership and purposeful contribution;
            advancing fundamental knowledge and cultivating creativity; and
            accelerating solutions and amplifying their impact.
          </p>
          <button class="px-4 py-2 bg-slate-800 text-white text-[20px]">
            MORE ABOUT TI UNRI
          </button>
        </div>
      </section>
      <section class="h-[850px] flex items-center justify-center bg-slate-700">
        <div class=" w-2/3 mx-auto text-center space-y-12">
          <h1 class="text-[40px] font-bold text-white">
            Our interdisciplinary curriculum offers a rare combination of degree
            programs in
          </h1>
          <p class="text-[30px] font-normal text-white">
            LIBERAL ARTS AND ENGINEERING
          </p>
          <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 " />
          <p className="text-white">
            Build your future with 51 majors and 41 minors.
          </p>
          <div
            className="flex justify-center gap-9
           items-center"
          >
            {konsentrasi.map((item) => (
              <div className="relative">
                <div
                  className="rounded-full overflow-hidden transition-all duration-150
              cursor-pointer filter grayscale hover:grayscale-0 h-60 w-60"
                >
                  <img
                    src={item.href}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-center text-white font-semibold text-2xl">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[345px] flex items-center justify-center bg-white">
        <CardCount target={10} />
        <CardCount target={10} />
        <CardCount target={10} />
      </section>

      <section className="h-[345px] flex items-center justify-center bg-white">
        {images.map((item) => (
          <img src={item} alt={item} className="h-24" />
        ))}
      </section>

      <section>
        <RevealOnScroll />
      </section>
    </>
  );
}

export default Home;

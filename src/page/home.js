import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import CardCount from "../components/cardCount";

import React from "react";
import QuoteSection from "../components/quotesSection";

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
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src="/asset/images/logoTi.png
                "
                alt="logo"
                className="w-12 md:w-[250px] h-auto mr-2"
              />
              <div className=" flex-col items-start justify-center">
                <h2 className="text-[11px] md:text-2xl font-medium text-orange-600 md:mb-8 tracking-[.30em] md:tracking-[.75em]">
                  PROGRAM STUDI S1
                </h2>
                <h2 className="text-[16px] md:text-6xl font-bold text-white md:mb-8 tracking-[.10em] md:tracking-[.20em]">
                  TEKNIK INFORMATIKA
                </h2>
                <h2 className="text-md md:text-5xl font-medium text-white font-serif">
                  Universitas Riau
                </h2>
              </div>
            </div>

            <div className="flex gap-3 md:gap-10 justify-center items-center mt-8">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 w-[100px] h-[20px] md:w-[250px] md:h-[50px] flex justify-center items-center text-md md:text-xl">
                  Profil
                </span>
              </button>

              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 w-[100px] h-[20px] md:w-[250px] md:h-[50px] flex justify-center items-center text-md md:text-xl">
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

      <section class="h-auto flex items-center justify-center py-12 md:py-36">
        <div class=" w-2/3 mx-auto text-center space-y-12">
          <h1 class="md:text-[40px] font-bold text-[20px] ">
            A purposeful informatics engineering study program in University of
            Riau
          </h1>
          <p class="md:text-[30px] text-[15px] font-normal">
            Menghasilkan lulusan berkualitas dengan kemampuan mengaplikasikan
            ilmu dasar, matematika, komputer dan informasi teknologi untuk
            menyelesaikan persoalan-persoalan teknis teknologi informasi dan
            pengelolaannya.
          </p>
          <button class="px-4 py-2 bg-slate-800 text-white text-[20px]">
            MORE ABOUT TI UNRI
          </button>
        </div>
      </section>
      <section class="h-auto flex items-center justify-center md:py-36  py-12 bg-slate-700">
        <div class=" w-2/3 mx-auto text-center space-y-12">
          <h1 class="md:text-[40px]  text-[20px] font-bold text-white">
            Our interdisciplinary curriculum offers a rare combination of
            concentration
          </h1>
          <p class="md:text-[30px] text-[15px] font-normal text-white">
            COMPUTER ENGGINERING
          </p>
          <hr class="h-[2px] mx-auto  bg-gray-100 border-0 rounded md:my-10 " />
          <p className="text-white">Build your future with 3 minors.</p>
          <div
            className="flex justify-center md:gap-9 gap-3
           items-center"
          >
            {konsentrasi.map((item) => (
              <div className="relative">
                <div
                  className="rounded-full overflow-hidden transition-all duration-150
              cursor-pointer filter grayscale hover:grayscale-0 md:h-60 md:w-60 w-24 h-24"
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

      <section className="h-auto py-6 flex items-start justify-center bg-white gap-2 md:gap-4 my-6 md:my-24">
        <CardCount target={400} context="Mahasiswa Aktif" />
        <CardCount target={12} context="Dosen Pengampu" />
        <CardCount target={800} context="Alumni" />
        <CardCount target={30} context="Mata Kuliah" />
      </section>

      <section>
        <QuoteSection
          backgroundImage="/asset/images/rpl.jpg"
          profileImage="/asset/images/people/manto.png"
          quote="I’m an optimist about our ability to cope with climate change. As I’ve moved forward in my career, what I see are more and more opportunities to address the challenge, to put in place solutions that lead to better lives for individuals and communities."
          person="Dr. Dahliyusmanto S.Kom., M.Sc."
          job="dosen"
        />
      </section>

      <section className="w-screen h-auto 2xl:flex 2xl:items-center 2xl:justify-center grid grid-cols-4 gap-2 py-11 md:py-28 bg-white">
        {images.map((item) => (
          <img src={item} alt={item} className="md:h-28 h-8" />
        ))}
      </section>
      <img src="/asset/images/latarfooter.jpg" alt="" />
    </>
  );
}

export default Home;

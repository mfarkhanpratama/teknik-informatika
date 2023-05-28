import React from "react";
import SubLatar from "../components/sublatar";
import NewsCard from "../components/newsCard";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Berita() {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  return (
    <div className="flex-col flex items-center bg-[#F6F4F0]">
      <SubLatar judul={"Berita"} />
      <section className="lg:max-w-[1400px]  mt-5">
        <div className="w-full lg:mb-[400px]">
          <div className="relative p-3 w-screen lg:w-full">
            <img
              src="/asset/images/photo/b1.jpg"
              alt="berita-1"
              className=" w-screen h-auto  md:object-cover "
            />
            {isMobile ? (
              <div className="w-screen">
                <p className="my-2 text-xs ">
                  Farkhan Pratama - 10 januari 2003
                </p>
                <h1 className=" font-serif mb-3 text-lg">
                  Ani Mardhatillah, mahasiswa Teknik Informatika Juara 1 Lomba
                  MTQ Kecamatan
                </h1>
                <p>
                  Ani Mardhatillah, mahasiswa Teknik Informatika UNRI menjadi
                  juara 1 pada lomba Musabaqah Tilawatil Quran (MTQ) ke IV
                  Tingkat Kecamatann Bathin Solapan, Kabupaten Bengkalis.
                </p>
                <Link to="/halaman-lain" className="mt-16">
                  <ArrowLongRightIcon className=" ml-[400px]  h-7 w-7 " />
                </Link>
              </div>
            ) : (
              <p>
                <div className="absolute bg-[#F6F4F0] p-3 lg:px-12 lg:py-14 text-[#2B2D42] lg:-bottom-[170px] -bottom-[250px] lg:left-10 left-40 w-2/3 lg:w-[1000px] md:">
                  <p className="my-2 text-xs ">
                    Farkhan Pratama - 10 januari 2003
                  </p>
                  <h1 className="lg:text-4xl font-serif mb-3 text-lg">
                    Ani Mardhatillah, mahasiswa Teknik Informatika Juara 1 Lomba
                    MTQ Kecamatan
                  </h1>
                  {isMobile ? (
                    <p>
                      Ani Mardhatillah, mahasiswa Teknik Informatika UNRI
                      menjadi juara 1 pada lomba Musabaqah Tilawatil Quran (MTQ)
                      ke IV Tingkat Kecamatann Bathin Solapan, Kabupaten
                      Bengkalis.
                    </p>
                  ) : (
                    <p>
                      Ani Mardhatillah, mahasiswa Teknik Informatika UNRI
                      menjadi juara 1 pada lomba Musabaqah Tilawatil Quran (MTQ)
                      ke IV Tingkat Kecamatann Bathin Solapan, Kabupaten
                      Bengkalis. Acara ini diselenggarakan mulai tanggal 16-23
                      September 2022 di Kantor Camat Bathin Solapan. Ketua Prodi
                      Teknik Informatika, Dr. Feri Candra turut mengapresiasi
                      perolehan ini "Capaian ini sangat positif, dari Prodi
                      mendukung berbagai bentuk prestasi Mahasiswa baik dibidang
                      akademis maupun non akademis".
                    </p>
                  )}
                  <Link to="/halaman-lain" className="mt-16">
                    <ArrowLongRightIcon className="lg:h-[50px] ml-[400px] lg:ml-[830px] h-7 w-7 " />
                  </Link>
                </div>
              </p>
            )}
          </div>
          <hr className="border-[#2B2D42] border-3 md:mt-[250px] mt-4 " />
          <NewsCard
            author="Farkhan Pratama"
            date="10 Januari 2003"
            title="Dr. Irsan Taufik Ali, ST., MT dosen Prodi Teknik Informatika meraih gelar Doktor di bidang Deep Learning."
            imageSrc="/asset/images/photo/b2.jpg"
            imageAlt="berita-2"
            link="/news-details"
          />
          <NewsCard
            author="Farkhan Pratama"
            date="10 Januari 2003"
            title="Dr. Irsan Taufik Ali, ST., MT dosen Prodi Teknik Informatika meraih gelar Doktor di bidang Deep Learning."
            imageSrc="/asset/images/photo/b2.jpg"
            imageAlt="berita-2"
            link="/news-details"
          />
          <NewsCard
            author="Farkhan Pratama"
            date="10 Januari 2003"
            title="Dr. Irsan Taufik Ali, ST., MT dosen Prodi Teknik Informatika meraih gelar Doktor di bidang Deep Learning."
            imageSrc="/asset/images/photo/b2.jpg"
            imageAlt="berita-2"
            link="/news-details"
          />
        </div>
      </section>
    </div>
  );
}

export default Berita;

import React from "react";
import SubLatar from "../components/sublatar";
import NewsCard from "../components/newsCard";

function Berita() {
  return (
    <div className="flex-col flex items-center bg-[#F6F4F0]">
      <SubLatar judul={"Berita"} />
      <section className="max-w-[1400px] mt-5">
        <div className="w-full mb-[400px]">
          <div></div>
          <div className="relative">
            <div>
              <img
                src="/asset/images/photo/b1.jpg"
                alt="berita-1"
                className="w-full h-auto"
              />
              <div className="absolute bg-[#F6F4F0] px-12 py-14 text-[#2B2D42] -bottom-[170px] left-10 w-[1000px]">
                <p className="my-2">Farkhan Pratama - 10 januari 2003</p>
                <h1 className="text-4xl font-serif mb-3">
                  Ani Mardhatillah, mahasiswa Teknik Informatika Juara 1 Lomba
                  MTQ Kecamatan
                </h1>
                <p>
                  Ani Mardhatillah, mahasiswa Teknik Informatika UNRI menjadi
                  juara 1 pada lomba Musabaqah Tilawatil Quran (MTQ) ke IV
                  Tingkat Kecamatann Bathin Solapan, Kabupaten Bengkalis. Acara
                  ini diselenggarakan mulai tanggal 16-23 September 2022 di
                  Kantor Camat Bathin Solapan. Ketua Prodi Teknik Informatika,
                  Dr. Feri Candra turut mengapresiasi perolehan ini "Capaian ini
                  sangat positif, dari Prodi mendukung berbagai bentuk prestasi
                  Mahasiswa baik dibidang akademis maupun non akademis".
                </p>
              </div>
            </div>
          </div>
          <hr className="border-[#2B2D42] border-3 mt-[250px]" />
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

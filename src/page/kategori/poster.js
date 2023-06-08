import React from "react";

import { Link } from "react-router-dom";
import SubLatar from "../../components/sublatar";
import NewsCard from "../../components/newsCard";

function Poster() {
  return (
    <div className="flex-col flex items-center bg-[#F6F4F0]">
      <SubLatar judul={"Poster"} />
      <section className="lg:max-w-[1400px]  mt-5">
        <NewsCard
          author="Farkhan Pratama"
          date="10 Januari 2003"
          title="Dr. Irsan Taufik Ali, ST., MT dosen Prodi Teknik Informatika meraih gelar Doktor di bidang Deep Learning."
          imageSrc="/asset/images/kemitraan/poster1.jpg"
          imageAlt="berita-2"
          link="/news-details"
        />
        <NewsCard
          author="Farkhan Pratama"
          date="10 Januari 2003"
          title="Dr. Irsan Taufik Ali, ST., MT dosen Prodi Teknik Informatika meraih gelar Doktor di bidang Deep Learning."
          imageSrc="/asset/images/kemitraan/poster1.jpg"
          imageAlt="berita-2"
          link="/news-details"
        />
        <NewsCard
          author="Farkhan Pratama"
          date="10 Januari 2003"
          title="Dr. Irsan Taufik Ali, ST., MT dosen Prodi Teknik Informatika meraih gelar Doktor di bidang Deep Learning."
          imageSrc="/asset/images/kemitraan/poster1.jpg"
          imageAlt="berita-2"
          link="/news-details"
        />
      </section>
    </div>
  );
}

export default Poster;

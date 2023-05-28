import React from "react";
import SubLatar from "../../components/sublatar";
import SectionComponent from "../../components/sectionComponent";

const sectionParagraphs = [
  "Visi : ",
  "Menjadi Program Studi Teknik Informatika Terkemuka Berbasis Riset dan Teknologi yang Bermartabat di Kawasan Asia Tenggara pada Tahun 2035.",
  "Misi :",
];

const sectionListItems = [
  "Menyelenggarakan pendidikan Sarjana dalam bidang ilmu Teknik Informatika, berbasis penelitian dan pengembangan untuk menghasilkan lulusan unggul, profesional dan kompetitif berlandaskan ketaqwaan kepada Tuhan Yang Maha Esa.",
  "Melaksanakan kegiatan penelitian dan pengembangan dalam bidang Teknik Informatika berbasis riset  dan Teknologi, Innovatif dan Kreatif baik di lingkungan Nasional maupun Internasional.",
  "Melaksanakan pengabdian kepada masyarakat dalam menerapkan teknologi berbasis penelitian berlandaskan budaya Daerah dan Nasional.",
  "Menghasilkan publikasi ilmiah, teknologi dan paten dalam bidang Ilmu Teknik Informatika.",
  "Mengembangkan kerjasama yang luas dengan lembaga pendidikan tinggi, instansi pemerintahan dan lembaga lain dalam dan luar negeri.",
];

function visiMisi() {
  return (
    <div className="flex-col flex items-center ">
      <SubLatar judul={"visi dan misi"} />

      <section className="max-w-[1300px] md:my-16 my-4">
        <SectionComponent
          paragraphs={sectionParagraphs}
          listItems={sectionListItems}
        />
      </section>
    </div>
  );
}

export default visiMisi;

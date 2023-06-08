import React from "react";
import SubLatar from "../../components/sublatar";
import SectionComponent from "../../components/sectionComponent";

const sectionParagraphs = [
  "Mikrotik Academy Universitas Riau (UNRI) adalah program kerjasama antara Fakultas Teknik dengan MikroTik untuk dapat menyelenggarakan pendidikan/pelatihan Mikrotik bagi mahasiswa UNRI beserta penyelenggaraan ujian sertifikasi internasional Mikrotik (MTCNA-MikroTik Certified Network Associate).",
  "Saat ini Mikrotik Academy UNRI memiliki 2 kategori kelas yaitu:",
  "Kelas Regular: Kelas yang diperuntukkan khusus untuk mahasiswa pordi S1 Teknik Informatika dimana materi mikrotik sudah tergabung dengan kurikulum prodi.",
  "Kelas Request: Kelas yang diperuntukkan bagi mahasiswa UNRI diluar prodi Teknik Informatika, dengan bentuk pelatihan/ ekstrakurikuler dengan jangka waktu tertentu.",
  `Mikrotik Academy telah memiliki Tenaga Pengajar yang tersertifikasi dari mikrotik dan telah berpengalaman dalam bidang networking :
  Linna Oktaviana Sari, ST.,MT (MTCNA, MTCRE)`,
];

const sectionListItems = [];

function mikrotik() {
  return (
    <div className="flex-col flex items-center">
      <SubLatar judul={"Mikrotik"} />
      <section className="max-w-[1300px] md:my-16 my-4">
        <img src="/asset/images/mikrotik.png" alt="mikrotik" />
        <SectionComponent
          paragraphs={sectionParagraphs}
          listItems={sectionListItems}
        />
      </section>
    </div>
  );
}

export default mikrotik;

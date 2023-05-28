import React from "react";
import SubLatar from "../../components/sublatar";
import SectionComponent from "../../components/sectionComponent";

const sectionParagraphs = [];

const sectionListItems = [
  "Memiliki VMTS yang realistik dan disosialisasikan ke seluruh alumni dan stakeholder dalam dan luar negeri.",
  "Organisasi sehat, dinamis dan tanggap terhadap perubahan telah berjalan secara efektif.",
  "Bertambahnya jumlah penerimaan mahasiswa jalur seleksi Nasional dan peningkatan kualitas akademik mahasiswa.",
  "Memiliki sumber daya manusia yang berkualitas dengan jumlah yang cukup dan memenuhi standar.",
  "Memiliki kurikulum berbasis kompetensi yang menghasilkan lulusan yang berdaya saing tinggi.",
  "Memiliki perangkat pembelajaran yang efisien dan efektif.",
  "Terciptanya suasana akademik yang kondusif.",
  "Penggunaan sarana dan prasarana pendidikan yang optimal.",
  "Peningkatan perolehan paten, publikasi ilmiah dan tulisan berbentuk karya ilmiah Nasional dan Internasional.",
  "Adanya buku ajar untuk setiap mata kuliah.",
  "Program studi memiliki perencaraan alokasi dan pengelolaan dana sesuai dengan proporsionalitas pendapatan.",
  "Dana operasional bagi kegiatan pendidikan, penelitian dan pengabdian pada masyarakat yang sesuai standar.",
  "Tersedianya fasilitas, ruang, sarana dan prasarana untuk kegiatan pendidikan, penelitian dan pengabdian pada masyarakat yang sesuai standar.",
  "Meningkatnya prestasi mahasiswa.",
  "Meningkatnya jumlah dan kualitas prasarana dalam proses pembelajaran (bahan kepustakaan, sarana pembelajaran) dan penelitian sesuai dengan standar.",
  "Meningkatnya jumlah dan kualitas sarana dan prasarana laboratorium baik untuk tujuan pembelajaran maupun untuk tujuan penelitian sesuai dengan standar.",
  "Bertambahnya dana operasional untuk perawatan sarana dan prasarana pendidikan, penelitian dan pengabdian kepada masyarakat.",
  "Meningkatnya sistem informasi, fasilitas e-learning untuk keperluan pendidikan, penelitian dan pengabdian kepada masyaratakat.",
  "Menghasilkan produktivitas dan mutu yang baik dari hasil penelitian dosen serta keterlibatan mahasiswa dalam kegiatan tersebut.",
  "Menghasilkan kegiatan pelayanan/pengabdian kepada masyarakat yang dilakukan oleh dosen dan mahasiswa dan bermanfaat bagi stakeholder.",
  "Menghasilkan sejumlah publikasi ilmiah berupa impact factor/indexscopus yang dapat menaikkan akreditasi prodi Sarjana Teknik Informatika.",
  "Menghasilkan sejumlah paten dalam bidang ilmu Teknik Informatika yang sesuai dengan perhitungan nilai akreditasi yang baik.",
  "Menghasilkan jumlah dan mutu kerjasama yang efektif untuk mendukung pelaksanaan misi Fakultas.",
];

function Sasaran() {
  return (
    <div className="flex-col flex items-center ">
      <SubLatar judul={"Sasaran"} />
      <section className="max-w-[1300px] md:my-16 my-4">
        <SectionComponent
          paragraphs={sectionParagraphs}
          listItems={sectionListItems}
        />
      </section>
    </div>
  );
}

export default Sasaran;

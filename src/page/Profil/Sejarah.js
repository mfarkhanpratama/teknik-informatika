import React from "react";
import SubLatar from "../../components/sublatar";
import SectionComponent from "../../components/sectionComponent";

const sectionParagraphs = [
  "Program Studi Teknik Informatika merupakan salah satu program studi sarjana yang ada di Universitas Riau (UNRI). Program Studi Teknik Informatika berada di bawah Jurusan Teknik Elektro. Program Studi Teknik Informatika bisa dikatakan sebagai program studi yang masih muda dibandingkan dengan Program Studi lain yang ada di Fakultas Teknik.",
  "Program Studi Teknik Informatika didirikan pada tahun 2013 dengan SK No: 485/E/O/2013. SK pendiriannya tertanggal 18 Oktober 2013. Kemudian Program Studi Teknik Informatika mulai beroperasi pada bulan Juli 2014 sampai dengan sekarang.",
  "Program Studi Teknik Informatika memiliki 3 konsentrasi, yaitu Komputasi Cerdas dan Visualisasi (KCV), Rekayasa Perangkat Lunak (RPL), dan Komputasi Berbasis Jaringan (KBJ). Lulusan Program Studi Teknik Informatika mendapatkan gelar S.T. (Sarjana Teknik). Program Studi Teknik Informatika menghasilkan lulusanya yang unggul.",
  "Tahun 2019 Program Studi Teknik Informatika sudah mendapatkan akreditas “B” dengan SK BAN-PT No. 2693/SK/BAN-PT/Akred/S/VII/2019.",
];

const sectionListItems = [];

function sejarah() {
  return (
    <div className="flex-col flex items-center">
      <SubLatar judul={"Sejarah"} />
      <section className="max-w-[1300px] md:my-16 my-4">
        <SectionComponent
          paragraphs={sectionParagraphs}
          listItems={sectionListItems}
        />
      </section>
    </div>
  );
}

export default sejarah;

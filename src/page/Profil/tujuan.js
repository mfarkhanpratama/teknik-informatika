import React from "react";
import SubLatar from "../../components/sublatar";
import SectionComponent from "../../components/sectionComponent";

const sectionParagraphs = [];

const sectionListItems = [
  "Menghasilkan lulusan berkualitas dengan kemampuan mengaplikasikan ilmu dasar, matematika, komputer dan informasi teknologi untuk menyelesaikan persoalan-persoalan teknis teknologi informasi dan pengelolaannya.",
  "Menghasilkan lulusan yang memiliki daya saing tinggi dan keunggulan sehingga mampu bersaing dengan lulusan perguruan tinggi lain.",
  "Menghasilkan lulusan yang bermoral dalam kehidupan bermasyarakat dan beragama.",
  "Menghasilkan lulusan yang berkemampuanuntuk melanjutkan studi pada jenjang yang lebih tinggi.",
  "Menghasilkan lulusan yang memiliki kemampuan untuk mengembangkan keprofesionalan, seperti berkomunikasi, bekerja dalam tim, mengerti kode etik profesi serta dapat menjadi seorang wirausaha tangguh.",
  "Menghasilkan lulusan dengan kemampuan untuk memenuhi tantangan zaman yang berkembang secara cepat dan kompleks, dan kesadaran akan dampak teknologi terhadap masyarakat.",
  "Menghasilkan lulusan yang memiliki kemampuan mengembangkan dan menyebarluaskan ilmu pengetahuan dan teknologi, terutama dalam kajian Ilmu Komputer, Sistem dan Teknologi Informasi serta mengupayakan penggunaannya untuk meningkatkan kesejahteraan umat manusia.",
  "Menghasilkan lulusan yang memiliki kemampuan terkini dalam bidang ilmu Teknik Informatika.",
  "Menghasilkan lulusan yang memiliki pengetahuan ilmu Teknik Informatika dan siap bersaing secara Nasional dan Internasional.",
  "Mendukung pembangunan masyarakat melalui penemuan-penemuan dalam bidang ilmu Teknik Informatika. ",
  "Menghasilkan publikasi dengan kualitas yang baik dan diakui secara Nasional maupun Internasional.",
];

function Tujuan() {
  return (
    <div className="flex-col flex items-center ">
      <SubLatar judul={"Tujuan"} />
      <section className="max-w-[1300px] md:my-16 my-4">
        <SectionComponent
          paragraphs={sectionParagraphs}
          listItems={sectionListItems}
        />
      </section>
    </div>
  );
}

export default Tujuan;

import React from "react";
import SubLatar from "../../components/sublatar";
import CardPeople from "../../components/cardPeople";

const peopleData = [
  {
    nama: "Dr. Feri Candra, S.T., M.T.",
    job: "Koordinator Prodi",
    pendidikan: [
      "S1-Institut Sains Dan Teknologi Nasional",
      "S2-Universitas Indonesia",
      "S3-Universiti Teknologi Malaysia",
    ],
    bidang: ["Machine Learning", "Computer Vision", "Robotic"],
    imageSrc: "/asset/images/people/feri.png",
  },
  {
    nama: "Dr. Dahliyusmanto S.Kom., M.Sc.",
    job: "",
    pendidikan: [
      "S1-Universitas Putra Indonesia",
      "S2-Universiti Teknologi Malaysia",
      "S3-Universiti Teknologi Malaysia",
    ],
    bidang: [
      "Computer and Network Security",
      "Data Mining",
      "Image Processing",
    ],
    imageSrc: "/asset/images/people/manto.png",
  },
  {
    nama: "Dr. Irsan Taufik Ali, S.T., M.T.",
    job: "",
    pendidikan: [
      "S1-Universitas Islam Indonesia",
      "S2-Universitas Gadjah Mada",
      "S3-Universitas Indonesia",
    ],
    bidang: [
      "Sistem Informasi",
      "Internet of Things",
      "Mechine Learning (Deep Learning)",
    ],
    imageSrc: "/asset/images/people/irsan.png",
  },
  {
    nama: "Noveri Lysbetti Marpaung, S.T., M.Sc.",
    job: "",
    pendidikan: ["S1-Universitas Sumatera Utara", "S2-Newcastle University"],
    bidang: ["Bidang 1", "Bidang 2", "Bidang 3"],
    imageSrc: "/asset/images/people/noveri.png",
  },
  {
    nama: "Rahyul Amri, S.T., M.T.",
    job: "Kepada Laboratorium Rekayasa Perangkat Lunak",
    pendidikan: [
      "S1-Universitas Islam Sumatera Utara",
      "S2-Institut Teknologi Sepuluh Nopember",
    ],
    bidang: ["Internet of Things", "Microcontroller", "Software Engineering"],
    imageSrc: "/asset/images/people/botak.png",
  },
  {
    nama: "Linna Oktaviana Sari, S.T., M.T.",
    job: "Kepala Laboratorium Komputer dan Jaringan",
    pendidikan: [
      "S1-Universitas Pancasila",
      "S2-Universitas Indonesia",
      "Pendidikan 3",
    ],
    bidang: ["Jaringan Komunikasi", "Telekomunikasi", "Wireless Communication"],
    imageSrc: "/asset/images/people/lina.png",
  },
  {
    nama: "Salhazan Nasution, S.Kom., MIT.",
    job: "",
    pendidikan: [
      "S1-Universitas Islam Indonesia",
      "S2-Universiti Kebangsaan Malaysia",
    ],
    bidang: ["Information System", "Software Engineering", "Usability"],
    imageSrc: "/asset/images/people/salhazan.png",
  },
  {
    nama: "T. Yudi Hadiwandra, S.Kom., M.Kom.",
    job: "",
    pendidikan: ["S1-Universitas Gunadarma", "S2-Universitas Gadjah Mada"],
    bidang: ["Artificial Intelligence", "Computer Vision", "Data Mining"],
    imageSrc: "/asset/images/people/yudi.png",
  },
  {
    nama: "Rahmat Rizal Andhi, S.T., M.T.",
    job: "",
    pendidikan: ["S1-Universitas Pasundan", "S2-Institut Teknologi Bandung"],
    bidang: [
      "Animation",
      "Augmented Reality & Virtual Reality",
      "Mobile App & Game Development",
    ],
    imageSrc: "/asset/images/people/rahmat.png",
  },
  {
    nama: "Edi Susilo, S.Pd., M.Kom., M.Eng.",
    job: "Koordinator Skripsi dan KP",
    pendidikan: [
      "S1-Universitas Negeri Yogyakarta",
      "S2-Universitas Amikom Yogyakarta",
      "S2-Universitas Gadjah Mada",
    ],
    bidang: ["Software Engineering", "Human-Computer Interaction", "UI/UX"],
    imageSrc: "/asset/images/people/edi.png",
  },
  {
    nama: "Dian Ramadhani, S.T., M.T.",
    job: "",
    pendidikan: [
      "S1-Universitas Islam Negeri Sultan Syarif Kasim",
      "S2-Institut Teknologi Bandung",
    ],
    bidang: ["Data Mining", "Data Warehouse", "Business Intelligence"],
    imageSrc: "/asset/images/people/dian.png",
  },
  {
    nama: "Dr. Dewi Nasien, S.T., M.Sc.",
    job: "Dosen Luar Biasa",
    pendidikan: [
      "S1-Universitas Islam Negeri Sultan Syarif Kasim",
      "S2-Universiti Teknologi Malaysia",
      "S3-Universiti Teknologi Malaysia",
    ],
    bidang: ["Machine learning", "Pattern recognition", "Image processing"],
    imageSrc: "/asset/images/people/dewi.png",
  },
];

function People() {
  return (
    <div>
      <SubLatar judul={"People"} />
      <section className=" flex items-center justify-center h-auto my-9">
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-4">
          {peopleData.map((person, index) => (
            <CardPeople
              key={index}
              nama={person.nama}
              job={person.job}
              pendidikan={person.pendidikan}
              bidang={person.bidang}
              imageSrc={person.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default People;

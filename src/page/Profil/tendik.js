import React from "react";
import SubLatar from "../../components/sublatar";
import CardPeople from "../../components/cardPeople";

const peopleData = [
  {
    nama: "Jatwoko , S.T.",
    job: "PLP Laboratorium Komputer dan Jaringan",

    imageSrc: "/asset/images/people/jatwoko.png",
  },
  {
    nama: "Zainal Asri",
    job: "Staf Administrasi",

    imageSrc: "/asset/images/people/zainal.png",
  },
];

function Tendik() {
  return (
    <div className="flex-col flex items-center">
      <SubLatar judul={"Tenaga Pendidik"} />
      <section className=" flex items-center justify-center h-auto my-9">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
          {peopleData.map((person, index) => (
            <CardPeople
              key={index}
              nama={person.nama}
              job={person.job}
              imageSrc={person.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tendik;

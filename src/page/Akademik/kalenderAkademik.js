import React from "react";
import SubLatar from "../../components/sublatar";

const kalender = [
  "/asset/images/kalender/k1.jpg",
  "/asset/images/kalender/k2.jpg",
  "/asset/images/kalender/k3.jpg",
  "/asset/images/kalender/k4.jpg",
  "/asset/images/kalender/k5.jpg",
  "/asset/images/kalender/k6.jpg",
];

function KalenderAkademik() {
  return (
    <div>
      <SubLatar judul={"Kalender Akademik"} />

      <section className=" w-2/3 mx-auto my-10">
        {kalender.map((item) => (
          <img src={item} alt="" />
        ))}
      </section>
    </div>
  );
}

export default KalenderAkademik;

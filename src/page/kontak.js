import React from "react";
import SubLatar from "../components/sublatar";

function Kontak() {
  return (
    <div>
      <SubLatar judul={"Kontak"} />
      <section className="w-[1600px] flex-col justify-center items-center my-[100px] mx-auto ">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.721623604019!2d101.36313753955079!3d0.476395000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aea1f427ab57%3A0x74d49c35acbd10e1!2sUniversitas%20Riau!5e0!3m2!1sid!2sid!4v1684079661071!5m2!1sid!2sid"
          width="1600"
          height="450"
          className=" border-none"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="w-full my-10">
          <p>
            <span className=" font-semibold">Alamat :</span>
            Gedung C lantai 2 Fakultas Teknik Universitas Riau Kampus Binawidya
            Jl. HR Soebrantas KM. 12.5, Simpang Baru, Binawidya Pekanbaru –
            28293
          </p>
          <p>
            <span className=" font-semibold">Email :</span>
            informatika@eng.unri.ac.id
          </p>
        </div>
      </section>
    </div>
  );
}

export default Kontak;

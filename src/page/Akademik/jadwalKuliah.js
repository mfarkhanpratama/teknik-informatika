import React from "react";
import SubLatar from "../../components/sublatar";

function JadwalKuliah() {
  return (
    <div>
      <SubLatar judul={"Jadwal Kuliah"} />

      <section className=" w-[1600px] flex justify-center items-center my-[100px]">
        <iframe
          title="jadwal-kuliah"
          src="/asset/pdf/jadwal.pdf"
          width="1200"
          height="1200"
        ></iframe>
      </section>
    </div>
  );
}

export default JadwalKuliah;

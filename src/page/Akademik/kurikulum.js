import React from "react";
import SubLatar from "../../components/sublatar";

function Kurikulum() {
  return (
    <div>
      <SubLatar judul={"Kurikulum"} />

      <section className=" w-[1600px] flex justify-center items-center my-[100px]">
        <iframe
          title="jadwal-kuliah"
          src="/asset/pdf/kurikulum.pdf"
          width="1200"
          height="1200"
        ></iframe>
      </section>
    </div>
  );
}

export default Kurikulum;

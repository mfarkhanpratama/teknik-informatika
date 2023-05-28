import React from "react";
import SubLatar from "../../components/sublatar";

function VirtualTour() {
  return (
    <div>
      <SubLatar judul={"Virtual Tour"} />
      <section className=" flex justify-center items-center my-[100px]">
        <iframe
          title="virtual-tour"
          src="https://informatika.ft.unri.ac.id/file/virtualtour-ti/"
          width="100%"
          height="800"
          frameborder="0"
        ></iframe>
      </section>
    </div>
  );
}

export default VirtualTour;

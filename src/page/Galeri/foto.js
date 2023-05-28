import React from "react";
import SubLatar from "../../components/sublatar";
import PhotoComponent from "../../components/photoComponent";

const images = [
  {
    url: "/asset/images/photo/1.jpg",
    title: "test",
  },
  {
    url: "/asset/images/photo/2.jpg",
    title: "test",
  },
  {
    url: "/asset/images/photo/3.jpg",
    title: "test",
  },
  {
    url: "/asset/images/photo/4.jpg",
    title: "test",
  },
  {
    url: "/asset/images/photo/5.jpg",
    title: "test",
  },
  {
    url: "/asset/images/photo/6.jpg",
    title: "test",
  },
  {
    url: "/asset/images/photo/7.jpg",
    title: "test",
  },
  {
    url: "/asset/images/photo/8.jpg",
    title: "test",
  },
  {
    url: "/asset/images/photo/9.jpg",
    title: "test",
  },
];

function Foto() {
  return (
    <div>
      <SubLatar judul={"Foto"} />

      <div className="grid grid-cols-4 gap-4">
        {images.map((item) => (
          <PhotoComponent image={item.url} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Foto;

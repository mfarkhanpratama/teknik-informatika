import React from "react";

const SubLatar = ({ judul }) => {
  return (
    <div className=" relative w-full h-[150px]  md:h-[400px]">
      <img
        src="/asset/images/unri.jpg"
        alt="latar-unri"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <h1 className="md:mt-[250px] mt-[80px] md:ml-[50px] ml-[20px]  md:text-[80px] text-[40px] font-bold text-white absolute inset-0">
        {judul}
      </h1>
    </div>
  );
};

export default SubLatar;

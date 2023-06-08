import React from "react";

const CardPeople = ({
  nama = "",
  job = "",
  pendidikan = [],
  bidang = [],
  imageSrc = "",
}) => {
  return (
    <div className="bg-green-300 w-[300px] md:w-[355px] h-[620px] m-8 static rounded-lg">
      <div className="bg-white w-[300px] md:w-[355px] h-[620px] hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
        <div className="flex-col flex items-center justify-center">
          <img
            src={imageSrc}
            alt=""
            className="rounded-full my-4 w-[250px] h-[250px]"
          />
          <p className="font-bold text-lg text-center px-1">{nama}</p>
          <p className="font-semibold text-md text-center mx-8">{job}</p>
        </div>

        <hr className="m-4 rounded-2xl border-t-2" />
        {pendidikan.length > 0 && (
          <p className="m-4 text-sm">
            <span className="text-md font-semibold ">pendidikan :</span>
            <ol className="mt-1">
              {pendidikan.map((item) => (
                <li className="ml-4 mb-[2px]">{item}</li>
              ))}
            </ol>
          </p>
        )}
        {bidang.length > 0 && (
          <p className="m-4 text-sm">
            <span className="text-md font-semibold ">bidang keahlian :</span>
            <ol className="mt-1">
              {bidang.map((item) => (
                <li className="ml-4 mb-[2px]">{item}</li>
              ))}
            </ol>
          </p>
        )}
      </div>
    </div>
  );
};

export default CardPeople;

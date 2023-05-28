import React from "react";
import { useNavigate } from "react-router-dom";

function NewsCard({ author, date, title, imageSrc, imageAlt, link }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(link);
  };

  return (
    <div
      className="flex justify-between lg:gap-5 p-4 lg:p-10 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300"
      onClick={handleCardClick}
    >
      <div className="text-[#2B2D42]">
        <p className="mb-6 text-xs ">
          {author} - {date}
        </p>
        <h1 className="lg:text-5xl text-md font-serif ">{title}</h1>
      </div>

      <img
        src={imageSrc}
        alt={imageAlt}
        className="lg:w-[750px] lg:h-[440px] w-2/5 h-auto object-contain"
      />
    </div>
  );
}

export default NewsCard;

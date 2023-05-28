import React from "react";
import { useNavigate } from "react-router-dom";

function NewsCard({ author, date, title, imageSrc, imageAlt, link }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(link);
  };

  return (
    <div
      className="flex justify-between gap-5 p-10 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300"
      onClick={handleCardClick}
    >
      <div className="text-[#2B2D42]">
        <p className="mb-7">
          {author} - {date}
        </p>
        <h1 className="text-5xl font-serif mb-3">{title}</h1>
      </div>
      <img src={imageSrc} alt={imageAlt} className="w-[750px] h-[440px]" />
    </div>
  );
}

export default NewsCard;

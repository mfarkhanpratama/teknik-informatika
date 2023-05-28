import React from "react";

const PhotoComponent = ({ image, title }) => {
  return (
    <div className="relative group">
      <img className="w-full" src={image} alt={title} />
      <div className="overlay absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-black">
        <div className="text-container absolute bottom-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoComponent;

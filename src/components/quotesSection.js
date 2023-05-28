import React, { useState, useEffect, useRef } from "react";

const QuoteSection = ({
  backgroundImage,
  profileImage,
  quote,
  person,
  job,
}) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const componentRef = useRef(null);

  const handleScroll = () => {
    const componentPosition = componentRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollThreshold = windowHeight / 3;

    setIsBlurred(componentPosition.top <= scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className="relative bg-cover bg-center bg-no-repeat md:h-full h-[700px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={`w-full h-[700px] md:h-full absolute transition-all duration-500 ${
          isBlurred ? "backdrop-blur-lg" : ""
        }`}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <img
          src={profileImage}
          alt="Profile"
          className={` w-32 h-32 md:w-[220px] md:h-[220px] object-cover rounded-full mb-4 ${
            isBlurred ? "opacity-100" : "opacity-0"
          }`}
        />
        <blockquote
          className={`text-lg px-4 md:text-4xl text-center max-w-4xl  font-light ${
            isBlurred ? "opacity-100" : "opacity-0"
          }`}
        >
          {"“" + quote + "”"}
        </blockquote>
        <p
          className={`text-center text-xl md:text-2xl font-bold mt-8  ${
            isBlurred ? "opacity-100" : "opacity-0"
          }`}
        >
          {person}
        </p>
        <p
          className={`text-center text-xl md:text-2xl font-extralight italic   ${
            isBlurred ? "opacity-100" : "opacity-0"
          }`}
        >
          {job}
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;

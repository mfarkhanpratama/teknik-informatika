import React, { useState, useEffect } from "react";

const CardCount = ({ target, context }) => {
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const componentHeight = window.innerHeight / 3;

    if (scrollPosition >= componentHeight) {
      setStartCounting(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (startCounting && count < target) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < target) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [startCounting, count, target]);

  useEffect(() => {
    if (!startCounting) {
      setCount(0);
    }
  }, [startCounting]);

  return (
    <div className="md:p-6 p-1 text-gray-800">
      <div className="text-center font-roboto text-lg md:text-3xl relative">
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="relative font-roboto font-extrabold italic text-3xl md:text-7xl">
            {count}
            <span className="absolute top-0 right-0 transform translate-x-4 -translate-y-2 font-roboto font-extrabold italic text-xl md:text-4xl text-[#EA821E]">
              +
            </span>
          </span>
        </span>
      </div>
      <div className="text-center font-roboto text-md md:text-3xl mt-4 md:mt-[40px]">
        {context}
      </div>
    </div>
  );
};

export default CardCount;

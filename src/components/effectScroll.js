import React, { useEffect, useState } from "react";

const RevealOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const viewportHeight = window.innerHeight;
      const elementPosition = document.getElementById("myComponent").offsetTop;

      if (scrollPosition > elementPosition + viewportHeight / 3) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="myComponent"
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src="/asset/images/rpl.jpg" alt="" />
    </div>
  );
};

export default RevealOnScroll;

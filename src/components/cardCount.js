import React, { useState, useEffect } from "react";

const CardCount = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [target]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="text-4xl font-bold text-center mb-4">{count}</div>
      <div className="text-center">
        {count < target ? "Counting..." : "Target Reached!"}
      </div>
    </div>
  );
};

export default CardCount;

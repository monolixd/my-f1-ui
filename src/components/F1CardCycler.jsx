import React, { useState } from "react";
import { F1Card } from "./F1Card";

export const F1CardCycler = ({ driversList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % driversList.length;
    setCurrentIndex(nextIndex);
  };

  const currentDriver = driversList[currentIndex];

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <F1Card driver={currentDriver} />
    </div>
  );
};

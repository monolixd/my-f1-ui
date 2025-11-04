import React, { useState } from "react";
import { F1Card } from "./F1Card";

//Component ใหม่นี้จะรับ "รายชื่อ" (List)
export const F1CardCycler = ({ driversList }) => {
  //"useState" นี่คือ 'ความจำ' ของ Component นี้
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % driversList.length;
    setCurrentIndex(nextIndex);
  };

  //"ดึง" ข้อมูลนักแข่งคนปัจจุบันออกมาจาก List
  const currentDriver = driversList[currentIndex];

  //"Return" UI
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <F1Card driver={currentDriver} />
    </div>
  );
};

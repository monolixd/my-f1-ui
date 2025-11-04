import React, { useState } from "react";
import { Modal } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"], 
};


export const InteractiveModal = {

  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        {/* 1. ปุ่มสำหรับเปิด Modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Open Modal
        </button>

        {/* 2. ตัว Modal Component */}
        {/* เราส่ง props (args) ที่ได้รับมา และ state ของเราเข้าไป */}
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
  // กำหนด args เริ่มต้นสำหรับ Story นี้
  args: {
    title: "Test Modal",
    children: (
      <p>นี่คือเนื้อหาภายใน Modal คุณสามารถใส่ Component อื่นๆ ได้ที่นี่</p>
    ),
  },
};

// --- Story รองสำหรับดูตอนที่เปิดค้างไว้ (สำหรับเทส UI) ---

export const DefaultOpen = {
  args: {
    isOpen: true, // กำหนดให้เปิดค้างไว้เลย
    title: "Modal (Open by Default)",
    children: <p>Modal นี้จะเปิดค้างไว้เพื่อดู UI โดยเฉพาะ</p>,
  },
};

import React from "react";

export const Modal = ({ isOpen, onClose, title, children }) => {
  // ถ้าไม่ isOpen ก็ไม่ต้อง render อะไรเลย
  if (!isOpen) return null;

  return (
    // Backdrop (พื้นหลังสีเทา)
    <div
      onClick={onClose} // คลิกที่พื้นหลังเพื่อปิด
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* Modal Content (กล่องเนื้อหา) */}
      <div
        onClick={(e) => e.stopPropagation()} // ป้องกันการคลิกใน Modal แล้วปิด
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            {/* ไอคอน 'X' (SVG หรือ FontAwesome ก็ได้) */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="mt-4">{children}</div>

        {/* Footer (ตัวอย่าง) */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

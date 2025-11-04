import React from "react";

export const Input = ({
  label,
  placeholder = "กรอกข้อความ...",
  value,
  onChange,
  disabled = false,
  type = "text",
}) => {
  // สร้าง ID ที่ไม่ซ้ำกัน เพื่อเชื่อม <label> กับ <input>
  // นี่เป็นสิ่งที่ดีสำหรับ Accessibility (ให้โปรแกรมอ่านจอรู้ว่า label นี้เป็นของ input ไหน)
  const inputId = React.useId();

  return (
    <div className="w-full max-w-xs">
      {/* 1. ส่วนของ Label (ป้ายกำกับ) */}
      {/* ทำไมต้องมี label?
        - มันบอกผู้ใช้ว่า Input นี้ใช้กรอกอะไร
        - `htmlFor={inputId}` จะเชื่อมกับ `id={inputId}` ของ <input>
        - ผลที่ได้: เมื่อคุณคลิกที่ "Label" (เช่นคำว่า "ชื่อ"), cursor จะกระโดดไปที่ช่อง Input ให้อัตโนมัติ
      */}
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      {/* 2. ส่วนของ Input (ช่องกรอก) */}
      <input
        id={inputId} // เชื่อมกับ label
        type={type}
        value={value} // 'ค่า' ที่แสดงในช่อง
        onChange={onChange} // 'ฟังก์ชัน' ที่จะทำงานเมื่อมีการพิมพ์
        placeholder={placeholder} // ข้อความจางๆ ที่บอกใบ้
        disabled={disabled} // ปิดการใช้งาน (เป็น true/false)
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:opacity-70 disabled:cursor-not-allowed"
      />
    </div>
  );
};

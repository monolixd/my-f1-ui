import React from "react";

export const Input = ({
  label,
  placeholder = "กรอกข้อความ...",
  value,
  onChange,
  disabled = false,
  type = "text",
}) => {
  const inputId = React.useId();

  return (
    <div className="w-full max-w-xs">
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        id={inputId} 
        type={type}
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        disabled={disabled} 
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:opacity-70 disabled:cursor-not-allowed"
      />
    </div>
  );
};

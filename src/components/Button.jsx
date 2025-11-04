import React from "react";


export default function Button({
  label,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition duration-200 focus:outline-none";

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <div>
      <button
        className={`${base} ${sizes[size]} ${variants[variant]} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
}

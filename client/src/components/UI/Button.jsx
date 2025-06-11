import React from "react";

const Button = ({ size, onClick, bg, color, type, children }) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={`
        rounded-md
        font-semibold
        hover:shadow-md
        transition-all duration-200
        ${bg ? bg : "bg-primary"} ${color ? color : "text-white"}
        ${
          size === "sm"
            ? "text-sm px-3 py-1.5"
            : size === "xs"
            ? "text-xs px-2 py-1"
            : "text-base px-4 py-2"
        }`}
    >
      {children}
    </button>
  );
};

export default Button;

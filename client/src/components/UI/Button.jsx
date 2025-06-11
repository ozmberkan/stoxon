import React from "react";

const Button = ({
  size,
  onClick,
  border = false,
  borderColor,
  bg,
  color,
  type,
  children,
  noShadow = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={`
        ${border ? `border ${borderColor}` : ""}
        rounded-md
        font-semibold
        ${noShadow ? "" : "hover:shadow-md"}
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

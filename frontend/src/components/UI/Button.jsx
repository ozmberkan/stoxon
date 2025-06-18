import React from "react";

const Button = ({
  type = "button",
  theme = "dark",
  size = "base",
  Icon = null,
  clickHandle,
  children,
}) => {
  const baseClasses = "px-3 py-1.5 rounded-md";
  const themeClasses =
    theme === "light"
      ? "bg-light-bg text-light-text hover:bg-border-color/75 border border-border-color"
      : theme === "dark"
      ? "bg-dark-bg text-dark-text border border-border-dark-color hover:bg-dark-bg/95"
      : theme === "outline"
      ? "border border-border-color text-light-text hover:bg-gray-100"
      : "bg-dark-bg text-dark-text hover:bg-dark-bg/90";
  const sizeClasses =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";

  return (
    <button
      type={type}
      onClick={clickHandle}
      className={`${baseClasses} ${themeClasses} ${sizeClasses} cursor-pointer transition-colors duration-300 shadow flex items-center gap-1.5`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;

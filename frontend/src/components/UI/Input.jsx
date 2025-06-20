import React from "react";

const Input = ({
  type,
  placeholder,
  name = null,
  value = null,
  className = null,
  label = null,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label ?? "Label"}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className={`${className} px-3 placeholder:text-sm py-1.5 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
      />
    </div>
  );
};

export default Input;

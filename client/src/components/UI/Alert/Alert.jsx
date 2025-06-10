import React from "react";

const Alert = ({ head, content, headColor, textColor, Icon }) => {
  return (
    <div className="w-full border border-border rounded-lg p-2 bg-neutral-100">
      <div
        className={`${
          headColor ? headColor : ""
        } flex items-center gap-1  rounded-lg `}
      >
        {Icon && <Icon size={15} className="text-text" />}
        {head || "Dikkat!"}
      </div>
      <p
        className={`${textColor ? textColor : "text-text"} font-medium text-sm`}
      >
        {content || ""}
      </p>
    </div>
  );
};

export default Alert;

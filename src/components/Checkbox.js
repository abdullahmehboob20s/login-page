import React from "react";

function Checkbox({
  className = "flex items-center space-x-3",
  inputClassName,
  name,
  id,
  title,
  defaultChecked = false,
}) {
  return (
    <div className={`checkbox ${className}`}>
      <input
        type={"checkbox"}
        name={name}
        id={id}
        className={`min-w-[16px] outline-none h-4 rounded transition-all duration-200 bg-white checked:bg-link ${inputClassName}`}
        defaultChecked={defaultChecked}
      />
      {title && (
        <label htmlFor={id} className="text-sm text-text cursor-pointer">
          {title && title}
        </label>
      )}
    </div>
  );
}

export default Checkbox;

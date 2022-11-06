import React from "react";

function LabelAndInput({
  id,
  name,
  placeholder,
  label,
  type = "text",
  LabelRightComponent,
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-sm text-text font-semibold cursor-pointer w-fit block"
        >
          {label}
        </label>

        {LabelRightComponent && <LabelRightComponent />}
      </div>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input outline-none px-4 py-2 rounded border-1px border-[rgba(0,0,0,.2)] w-full block transition-all duration-150 text-text"
      />
    </div>
  );
}

export default LabelAndInput;

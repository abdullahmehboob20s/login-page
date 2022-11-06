import React from "react";

function Button({ label }) {
  return (
    <button className="bg-link shadow-active outline-none rounded w-full text-center transition-all duration-200 h-11 text-white font-semibold">
      {label}
    </button>
  );
}

export default Button;

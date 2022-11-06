import React from "react";

const VARIANT_1 = "text-link hover:text-text";
const VARIANT_2 = "text-gray-500 hover:text-gray-900";

const variants = [VARIANT_1, VARIANT_2];

function Link({ to, label, weight = "600", variant = 0 }) {
  return (
    <a
      href={to}
      className={`text-sm outline-none focus:shadow-focus transition-all duration-200 rounded cursor-pointer ${variants[variant]}`}
      style={{ fontWeight: weight }}
    >
      {label}
    </a>
  );
}

export default Link;

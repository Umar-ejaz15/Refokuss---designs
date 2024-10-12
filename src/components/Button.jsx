import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const Button = ({ text }) => {
  return (
    <button className="flex items-center gap-2 bg-white text-black px-4 py-1 text-sm rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
      {text}
      <FaArrowTrendUp size={12} />
    </button>
  );
};

export default Button;
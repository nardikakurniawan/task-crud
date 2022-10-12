import React from "react";

const Button = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-1 px-6 bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 rounded-md text-white hover:text-gray-400 font-bold inline-flex"
    >
      {children}
    </button>
  );
};

export default Button;

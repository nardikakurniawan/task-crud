import React from "react";

const Input = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="p-1 px-2 outline-none text-gray-500 focus:shadow-md rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

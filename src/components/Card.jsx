import React from "react";

const Card = ({ item }) => {
  return (
    <div className="lg:w-3/12 md:w-4/12 w-full p-2 ">
      <div className="bg-black-gradient p-2 rounded-md tracking-tight leading-none shadow-md hover:shadow-xl">
        <h3 className="text-lg font-bold  ">{item.name}</h3>
        <span className="text-xs ">{item.company.name}</span>
        <p className="text-sm">{item.email}</p>
        <p className="text-sm">{item.address.city}</p>
      </div>
    </div>
  );
};

export default Card;

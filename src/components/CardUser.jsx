import React from "react";
import { Link } from "react-router-dom";

const CardUser = ({ item, handleDelete }) => {
  return (
    <div className="lg:w-3/12 md:w-4/12 w-full p-2 ">
      <div className="bg-black-gradient p-2 rounded-md tracking-tight leading-none shadow-md hover:shadow-xl relative">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm lowercase">{item.email}</p>
        <p className="text-sm">{item.phone}</p>

        <div className="absolute top-1 right-1">
          <Link
            to={`/edit-data/${item.id}`}
            className="text-cyan-500 hover:text-cyan-700"
          >
            <span className="material-icons">edit</span>
          </Link>

          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(item.id)}
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardUser;

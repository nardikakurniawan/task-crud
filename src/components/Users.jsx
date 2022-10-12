import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "../api/axios";

import CardUser from "./CardUser";

const Posts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, [users]);

  const handleDelete = (id) => {
    axios.delete(`/users/${id}`).then(() => {
      console.log("Deleted");
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 uppercase">
        List Users
      </h1>

      <div className="px-2 mb-4">
        <Link
          to="/add-data"
          className="py-2 px-6 bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 rounded-lg text-white font-bold"
        >
          Add Data
        </Link>
      </div>

      <div className="flex flex-wrap">
        {users.map((item) => (
          <CardUser key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

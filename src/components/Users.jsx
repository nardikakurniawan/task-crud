import React, { useState, useEffect } from "react";

import axios from "../api/axios";

import Card from "./Card";

const Posts = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 uppercase">
        List Users
      </h1>

      <div className="flex flex-wrap">
        {users.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

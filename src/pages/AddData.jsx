import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../api/axios";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function AddData() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
    };

    axios.post("/users", data).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div>
      <div className="container mx-auto px-4 mb-10">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 mb-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 uppercase">Add User</h1>
        <div className="lg:w-4/12 md:w-7/12 w-full p-5 shadow-lg rounded-lg bg-black-gradient">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-3">
              <label htmlFor="name" className="mb-1 font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="p-1 px-2 outline-none text-gray-500 focus:shadow-md rounded-md"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="email" className="mb-1 font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-1 px-2 outline-none text-gray-500 focus:shadow-md rounded-md"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="phone" className="mb-1 font-bold">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="p-1 px-2 outline-none text-gray-500 focus:shadow-md rounded-md"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

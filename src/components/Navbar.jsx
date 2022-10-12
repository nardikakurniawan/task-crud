import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { close, menu } from "../assets/images";

const navLinks = [
  {
    id: "1",
    to: "/",
    name: "Home",
  },
  {
    id: "2",
    to: "/comments",
    name: "Comments",
  },
  {
    id: "3",
    to: "/albums",
    name: "Albums",
  },
  {
    id: "4",
    to: "/posts",
    name: "Posts",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 ">
      <div className="flex items-center gap-2">
        <img src="/logo192.png" alt="logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">CRUD</h1>
      </div>

      <ul className="sm:flex hidden items-center gap-8">
        {navLinks.map((item) => (
          <li className="text-gray-500 hover:text-blue-800" key={item.id}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer duration-150"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"} 
          p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[150px] rounded-xl sidebar`}
        >
          <ul>
            {navLinks.map((item) => (
              <li className="text-gray-700 hover:text-blue-800" key={item.id}>
                <a href={item.to}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

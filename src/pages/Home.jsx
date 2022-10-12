import React from "react";
import Navbar from "../components/Navbar";
import Users from "../components/Users";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 mb-10">
        <Navbar />
      </div>

      <div className="container mx-auto px-4 mb-10">
        <Users />
      </div>
    </div>
  );
}

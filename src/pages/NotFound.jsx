import React from "react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-white to-gray-400">
      <div className="text-3xl font-bold text-gray-800 animate-pulse mb-6">
        404 | Not Found
      </div>
      <a href="/" className="text-gray-500 hover:text-gray-700">
        back to home
      </a>
    </div>
  );
}

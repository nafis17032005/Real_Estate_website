// src/components/AuthPage.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome</h1>

      <div className="flex space-x-6">
        <NavLink
          to="/login"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
};

export default AuthPage;

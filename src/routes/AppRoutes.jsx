import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Homepage from "../pages/Homepage";

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />; // redirect if not logged in
  }
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
]);

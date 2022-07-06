import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = "/login", children }) => {
  const isLogged = localStorage.getItem("userData") === null;

  if (!user && isLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;

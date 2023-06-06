import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin, isLoading] = useAdmin();

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (users && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;

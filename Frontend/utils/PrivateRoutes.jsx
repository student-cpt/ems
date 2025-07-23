

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../src/context/authContext";
const PrivateRoutes = () => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" />;
};


export default PrivateRoutes;

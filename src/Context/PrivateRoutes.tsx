import React from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { useUserContext } from "./UserContext";

const PrivateRoutes = () => {
  const { token } = useUserContext();
  if (!token) return <Navigate to="/home" />;
  return <Outlet />;
};

export default PrivateRoutes;

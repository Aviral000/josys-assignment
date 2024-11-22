import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import RoleContext from "./RoleContext";

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
  const context = useContext(RoleContext);

  if (!context) {
    return <Navigate to="/login" />;
  }

  const { role } = context;

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

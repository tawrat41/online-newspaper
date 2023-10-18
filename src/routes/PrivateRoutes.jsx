/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  console.log(location)

  if (user) {
    return children;
  } else {
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
  }
};

export default PrivateRoutes;

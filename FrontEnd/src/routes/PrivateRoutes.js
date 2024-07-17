// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem("TOKEN");
    console.log("isAUTH", isAuthenticated);

    return isAuthenticated ? element : <Navigate to="/Login" />;
};

export default PrivateRoute;

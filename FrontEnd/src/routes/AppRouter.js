import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../components/Auth/LoginIn';
import RegisterPage from '../components/Auth/RegisterPage';
import Home from '../components/Home';
import PrivateRoute from './PrivateRoutes';
import NotFound from '../components/NotFound';

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Home" element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;
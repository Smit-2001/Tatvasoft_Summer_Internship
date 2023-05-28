import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { useAuthContext } from '../context/auth';
import { RoutePaths } from '../utils/enum';

import Login from '../pages/Login';
import Register from '../pages/Register';

const MainNavigation = () => {
  // const authContext = useAuthContext();

  const Redirect = <Navigate to={RoutePaths.Login} />;

  return (
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path={RoutePaths.Register} element={<Register />} />
      </Routes>
  );
};

export default MainNavigation;

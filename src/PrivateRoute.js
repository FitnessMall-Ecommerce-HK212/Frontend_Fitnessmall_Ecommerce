import React, { useState,useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from "axios";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const check=window.localStorage.getItem('isAuthenticated');
  return (
    <Route
      {...rest}
      render={(props) => (!check ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;

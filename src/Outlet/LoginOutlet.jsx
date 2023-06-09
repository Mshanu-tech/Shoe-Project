import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedin } from '../api/user';

export default function LoginOutlet() {
  // if (isLoggedin()) {
  //   return <Outlet/>;
  // } else {
  //   return <Navigate to="/Login" />;
  // }

  return  <Outlet/>
}

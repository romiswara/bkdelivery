import React, { useState } from 'react'
import './App.css';
import { RouterProvider, useRouteError, createBrowserRouter } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
function App({children}) {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/accounts/login",
      element: <LoginPage />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/accounts/register",
      element: <RegisterPage />,
      // errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;

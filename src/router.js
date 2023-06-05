import {createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

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

  export default router
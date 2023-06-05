import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MenusPage from "./pages/MenusPage";
import NewsPage from "./pages/NewsPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TosPage from "./pages/TosPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/menus",
        element: <MenusPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/menus/:slug",
        element: <MenusPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/news",
        element: <NewsPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/news/:slug",
        element: <NewsPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/about-us",
        element: <AboutUsPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/terms-and-conditions",
        element: <TosPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
        // errorElement: <ErrorPage />,
    },
    {
        path: "/products",
        element: <ProductsPage />,
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
    {
        path: "/accounts/register",
        element: <RegisterPage />,
        // errorElement: <ErrorPage />,
    },
]);

export default router
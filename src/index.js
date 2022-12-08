import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// GENERAL
import App from './components/General/App';
import ErrorPage from './components/General/ErrorPage';
import Home from './components/General/Home';
// PROFILE
import Login from './components/Profile/Login';
import Register from './components/Profile/Register';
import Profile from './components/Profile/Profile';
import Orders from './components/Profile/Orders';
import Reviews from './components/Profile/Reviews';
import Addresses from './components/Profile/Addresses';
import Settings from './components/Profile/Settings';
import Admin from './components/Profile/Admin';
// SHOP
import Products from './components/Shop/Products';
import ProductDetails from './components/Shop/ProductDetails';
import Cart from './components/Shop/Cart';
import Checkout from './components/Shop/Checkout';
import CheckoutSuccess from './components/Shop/CheckoutSuccess';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Home />
            },
            // PROFILE
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "profile/orders",
                element: <Orders />
            },
            {
                path: "profile/reviews",
                element: <Reviews />
            },
            {
                path: "profile/addresses",
                element: <Addresses />
            },
            {
                path: "profile/settings",
                element: <Settings />
            },
            {
                path: "profile/admin",
                element: <Admin />
            },
            // SHOP
            {
                path: "shop",
                element: <Navigate to="page/1" />
            },
            {
                path: "shop/page/:page",
                element: <Products />
            },
            {
                path: "shop/item/:id",
                element: <ProductDetails />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "checkout",
                element:<Checkout />
            },
            {
                path: "checkout-success",
                element:<CheckoutSuccess />
            }
        ]
    }
]);

const root = createRoot( document.getElementById("app") );
root.render( <RouterProvider router={router} /> );
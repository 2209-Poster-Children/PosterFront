import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
// SHOP
import Products from './components/Shop/Products';
import ProductDetails from './components/Shop/ProductDetails';
import Cart from './components/Shop/Cart';

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
            // SHOP
            {
                path: "shop",
                element: <Products />
            },
            {
                path: "shop/:id",
                element: <ProductDetails />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
]);

const root = createRoot( document.getElementById("app") );
root.render( <RouterProvider router={router} /> );
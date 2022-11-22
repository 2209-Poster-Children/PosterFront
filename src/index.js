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
// SHOP
import Products from './components/Shop/Products';

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
            // SHOP
            {
                path: "shop",
                element: <Products />
            }
        ]
    }
]);

const root = createRoot( document.getElementById("app") );
root.render( <RouterProvider router={router} /> );
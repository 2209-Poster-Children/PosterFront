import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HompePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import Index from './components/Index';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HompePage />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <Index />
            }
        ]
    }
]);

const root = createRoot( document.getElementById("app") );
root.render( <RouterProvider router={router} /> );
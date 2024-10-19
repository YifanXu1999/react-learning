import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/', element: <div>Hello world!</div>
    },
    {
        path: '/about', element: <div>About</div>
    }
]);

const root = ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <RouterProvider router={router}>
        </RouterProvider>
    )


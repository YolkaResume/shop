import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Admin from './admin/Admin';
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
        path:"/admin",
        element:<Admin></Admin>
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
         <RouterProvider router={router} />
    </Provider>
);

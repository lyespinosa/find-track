import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Goals from './pages/Goals/Goals';
import SavingsAccounts from './pages/SavingsAccounts/SavingsAccounts';
import SharedCosts from './pages/SharedCosts/SharedCosts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "goals",
        element: <Goals/>,
      },
      {
        path: "savings-accounts",
        element: <SavingsAccounts />,
      },
      {
        path: "shared-costs",
        element: <SharedCosts />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)

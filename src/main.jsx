import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./Route/Route.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import Home from "./Components/Home/Home";
import CardDetails from "./Components/CardDetails/CardDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/cards.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("/cards.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

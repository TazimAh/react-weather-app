import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LocationProvider } from "./context/LocationContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error.jsx";
import Weather from "./components/Weather.jsx";
import Cities from "./components/Cities.jsx";
import Map from "./components/Map.jsx";
import Settings from "./components/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Weather />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocationProvider>
      <RouterProvider router={router} />
    </LocationProvider>
  </React.StrictMode>
);

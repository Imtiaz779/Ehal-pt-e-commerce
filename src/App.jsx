import React from "react";
import { Home } from "@/components/Pages/Home";
import { MainLayouts } from "@/Layouts/MainLayouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

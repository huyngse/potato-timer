import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VNRPage from "./pages/VNRPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      { path: "vnr", element: <VNRPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import "@/styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const VNRPage = lazy(() => import("./pages/vnr/VNRPage.tsx"));
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

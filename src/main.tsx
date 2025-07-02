import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import "@/styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VietnamReformGame from "./pages/doi-moi-sim/components/VietnamReformGame.tsx";

const VNRPage = lazy(() => import("./pages/vnr/VNRPage.tsx"));
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      { path: "vnr", element: <VNRPage /> },
      { path: "doi-moi-simulator", element: <VietnamReformGame /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

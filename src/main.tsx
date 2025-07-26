import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import "@/styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VietnamReformGame from "./pages/doi-moi-sim/components/VietnamReformGame.tsx";
import TemPhieuChronicles from "./pages/tem-phieu-chronicles/TemPhieuChronicles.tsx";
import CloudNote from "./pages/cloudnote/cloudnote.tsx";
import WheelOfFortunePage from "./pages/wheel-o-fortune/WheelOfFortunePage.tsx";
import MessengerMemeCreator from "./messenger-meme-creator/MessengerMemeCreator.tsx";

const VNRPage = lazy(() => import("./pages/vnr/VNRPage.tsx"));
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      { path: "vnr", element: <VNRPage /> },
      { path: "doi-moi-simulator", element: <VietnamReformGame /> },
      { path: "tem-phieu-su-ki", element: <TemPhieuChronicles /> },
      { path: "cloudnote", element: <CloudNote /> },
      { path: "wheel-o-fortune", element: <WheelOfFortunePage /> },
      { path: "messenger-meme-creator", element: <MessengerMemeCreator /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

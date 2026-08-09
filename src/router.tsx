import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/index";

export const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "*", element: <Home /> },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/" },
);

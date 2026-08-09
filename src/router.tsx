import { createHashRouter } from "react-router-dom";
import Home from "./routes/index";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

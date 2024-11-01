// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Index from "../views/index/index";
// import Login from "../views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
//   {
//     path: "/login",
//     element: <Login />,
//   },
]);

export default router;

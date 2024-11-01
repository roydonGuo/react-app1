// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Index from "../views/index/index";
import Form from "../views/form/index";
// import Login from "../views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

export default router;

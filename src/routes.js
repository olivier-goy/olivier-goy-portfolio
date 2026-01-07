import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from "./Pages/404/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default routes;

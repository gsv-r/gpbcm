import { createHashRouter, RouterProvider } from "react-router-dom";

import Practice from "../screens/practice";
import Online from "../screens/online";

const router = createHashRouter([
  {
    path: "/",
    element: <Practice />,
  },
  {
    path: "/online",
    element: <Online />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
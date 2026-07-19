import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/public/HomePage";
import ComingSoon from "../pages/public/ComingSoon";
import NotFound from "../pages/error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "features",
        element: <ComingSoon />,
      },
      {
        path: "pricing",
        element: <ComingSoon />,
      },
      {
        path: "about",
        element: <ComingSoon />,
      },
      {
        path: "testimonials",
        element: <ComingSoon />,
      },
      {
        path: "faq",
        element: <ComingSoon />,
      },
      {
        path: "contact",
        element: <ComingSoon />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

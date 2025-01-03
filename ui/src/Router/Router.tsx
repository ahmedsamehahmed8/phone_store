import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Mainlayout from "../layout/Mainlayout";

// import Home from "../pages/Home";
// import Brands from "../pages/Brands";
// import Products from "../pages/Products";
// import Card_page from "../pages/Card_page";
// import Signin from "src/pages/Signin";
// import Signup from "src/pages/Signup";
import { lazy, Suspense } from "react";

import Loading from "../compontes/common/ainmation/Loading.tsx";
import Error from "@compontes/common/ainmation/Error";
import Protected_route from "@compontes/auth/protected_route/Protected_route.tsx";
import BBrand from "../pages/BBrand.tsx";

const Home = lazy(() => import("../pages/Home"));
const Brands = lazy(() => import("../pages/Brands"));
// const Brand = lazy(() => import("../pages/BBrand.tsx"));
const Products = lazy(() => import("../pages/Products"));
const Card_page = lazy(() => import("../pages/Card_page"));
const Signup = lazy(() => import("src/pages/Signup"));
const Signin = lazy(() => import("src/pages/Signin"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Mainlayout />,
      </Suspense>
    ),
    errorElement: <Error message="this page not found" />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />,
          </Suspense>
        ),
      },
      {
        path: "/brands",
        element: (
          <Suspense fallback={<Loading />}>
            <Brands />,
          </Suspense>
        ),
      },
      {
        path: "/brands/:brand",
        element: (
          <Suspense fallback={<Loading />}>
            <BBrand />,
          </Suspense>
        ),
      },
      {
        path: "/card",
        element: (
          <Protected_route>
            <Suspense fallback={<Loading />}>
              <Card_page />,
            </Suspense>
          </Protected_route>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />,
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<Loading />}>
            <Signin />,
          </Suspense>
        ),
        children: [
          {
            path: ":newacc",
            element: (
              <Suspense fallback={<Loading />}>
                <Signin />,
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loading />}>
            <Signup />,
          </Suspense>
        ),
      },
    ],
  },
]);

const Approuterr = () => {
  return <RouterProvider router={router} />;
};

export default Approuterr;

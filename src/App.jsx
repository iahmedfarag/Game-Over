import { Login, JoinFree, Layout, All, Home, SingleGame } from "./Pages";

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Platform from "./Components/Platform/Platform.jsx";
import Sort from "./Components/Sort/Sort.jsx";
import Category from "./Components/Category/Category.jsx";
import Protected from "./Protected.jsx";

const App = () => {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Protected>
              <Home />
            </Protected>
          ),
        },
        {
          path: "logIn",
          element: <Login />,
        },
        {
          path: "JoinFree",
          element: <JoinFree />,
        },
        {
          path: "all",
          element: (
            <Protected>
              <All />
            </Protected>
          ),
        },
        {
          path: "home",
          element: (
            <Protected>
              <Home />
            </Protected>
          ),
        },
        {
          path: "SingleGame/:id",
          element: (
            <Protected>
              <SingleGame />
            </Protected>
          ),
        },
        {
          path: "Platform/:platform",
          element: (
            <Protected>
              <Platform />
            </Protected>
          ),
        },
        {
          path: "sort-by/:sort",
          element: (
            <Protected>
              <Sort />
            </Protected>
          ),
        },
        {
          path: "category/:category",
          element: (
            <Protected>
              <Category />
            </Protected>
          ),
        },
        { path: "*", element: <h1>no found</h1> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contactus from "./Components/Contactus";
import About from "./Components/About";
import Error from "./Components/Error";
import { lazy, Suspense } from "react";
import Restaurantmenu from "./Components/Restaurantmenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./ReduxUtilis/appStore";
import Cartpage from "./Components/CartPage";
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="bg-zinc-50">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu />,
      },
      {
        path: "/Cartpage",
        element: <Cartpage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

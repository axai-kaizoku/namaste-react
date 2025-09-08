import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Body } from "./components/body/body";
import { Contact } from "./components/contact";
import { Error } from "./components/error";
import { Header } from "./components/header";
import LoginPage from "./components/login/login-page";
import ResMenu from "./components/restaurant/res-menu";
import appStore from "./utils/store/app-store";
import { UserContextProvider } from "./utils/user-context";
import { CartPage } from "./components/cart/cart-page";

const About = lazy(() => import("./components/about"));
const Grocery = lazy(() => import("./components/grocery"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContextProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="max-w-7xl mx-auto p-5 flex w-full grow gap-5">
            <Outlet />
          </div>
        </div>
      </UserContextProvider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <ResMenu />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

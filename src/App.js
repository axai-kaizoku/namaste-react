import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/header"
import { Body } from "./components/body"
import About from "./components/about"
import { Contact } from "./components/contact"
import { Error } from "./components/error"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import ResMenu from "./components/res-menu"

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Outlet />
      </div>
    </div>
  )
}

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/res/:id",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)

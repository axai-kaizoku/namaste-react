import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/header"
import { Body } from "./components/body"
import About from "./components/about"
import { Contact } from "./components/contact"
import { Error } from "./components/error"
import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router"

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)

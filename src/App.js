import React, { lazy, Suspense, useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import { Body } from "./components/body/body"
import { Contact } from "./components/contact"
import { Error } from "./components/error"
import { Header } from "./components/header"
import ResMenu from "./components/restaurant/res-menu"
import { applyTheme, getStoredTheme } from "./utils/theme-config"
import UserContext from "./utils/user-context"

const About = lazy(() => import("./components/about"))
const Grocery = lazy(() => import("./components/grocery"))

const AppLayout = () => {
  const [userName, setUserName] = useState()

  //authentication
  useEffect(() => {
    //sending username and password
    // User Details
    const data = { name: "Akshay Yelle" }
    setUserName(data.name)
  }, [])

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="flex min-h-screen flex-col">
        {/* <UserContext.Provider value={{ loggedInUser: "Roronoa Zoro" }}> */}
        <Header />
        {/* </UserContext.Provider> */}
        <div className="max-w-7xl mx-auto p-5 flex w-full grow gap-5">
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
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
    ],
    errorElement: <Error />,
  },
])

// Theme provider wrapper
const ThemedApp = () => {
  useEffect(() => {
    // Initialize theme on app load
    const storedTheme = getStoredTheme()
    applyTheme(storedTheme)
  }, [])

  return <RouterProvider router={router} />
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<ThemedApp />)

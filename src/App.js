import React, { lazy, Suspense, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import { Body } from "./components/body"
import { Contact } from "./components/contact"
import { Error } from "./components/error"
import { Header } from "./components/header"
import ResMenu from "./components/restaurant/res-menu"
import { useTheme } from "./hooks/use-theme"
import { getStoredTheme, applyTheme } from "./utils/theme-config"
import { cn } from "./utils/utils"

const About = lazy(() => import("./components/about"))
const Grocery = lazy(() => import("./components/grocery"))

const AppLayout = () => {
  const { theme } = useTheme()

  return (
    <div className={cn("w-full h-full bg-background  text-foreground transition-colors", theme === "dark" && "dark")}>
      <Header />
      <div className="">
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

import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/header"
import { Body } from "./components/body"
import { BrowserRouter, Route, Routes } from "react-router"
import About from "./components/about"

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)

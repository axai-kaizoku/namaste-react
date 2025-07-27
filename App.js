import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/021/953/308/non_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
          alt="logo"
          width="56"
          height="56"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">// Restaurant cart</div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)

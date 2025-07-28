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

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        width="240"
        height="160"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.theimagecompany.in%2Fuploads%2Ftheimagecompanycom%2F2-Mutton-Biryani.jpg&f=1&nofb=1&ipt=457ed9f04cbf51dc0c5506b0fa1c3864a74b980e840346c6f2fda13c8e741a3c"
        alt="food"
      />
      <h3>{props.name}</h3>
      <h4>{props.cusines}</h4>
      <h5>{props.rating} stars</h5>
      <h6>{props.estTime} minutes</h6>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        <RestaurantCard name="Meghana Foods" cusines="Biryani, South indian food" rating={4.4} estTime={38} />
        <RestaurantCard name="KFC" cusines="Burger, Fast food" rating={4.2} estTime={28} />
        <RestaurantCard name="Burger King" cusines="Burger, Fast food" rating={4.1} estTime={28} />
      </div>
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

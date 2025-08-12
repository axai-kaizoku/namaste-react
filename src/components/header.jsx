import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router"
import { useOnlineStatus } from "../hooks/use-online-status"

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")

  const onlineState = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" width="56" height="56" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online State: {onlineState ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

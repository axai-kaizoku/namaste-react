import { useState } from "react";
import { Link } from "react-router";
import { useOnlineStatus } from "../hooks/use-online-status";
import { useUser } from "../hooks/use-user";
import { LOGO_URL } from "../utils/constants";
import ThemeToggle from "./theme-toggle";
import { useSelector } from "react-redux";

export const Header = () => {
  const onlineState = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const data = useUser();
  const cart = useSelector((store) => store.cart.items);

  return (
    <>
      <header className="sticky top-0 z-10 bg-card shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-5 px-5 py-3">
          <Link to="/" className="text-2xl font-bold text-primary">
            <img src={LOGO_URL} alt="logo" width="56" height="56" className="rounded" />
          </Link>
          <ul className="hidden items-center gap-5 sm:flex">
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
              <a href="https://github.com/axai-kaizoku/namaste-react" target="blank" className="cursor-pointer">
                Github
              </a>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">🛒 ({cart.length} Items)</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <button
              className="login-btn"
              onClick={() => {
                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>

            <li>
              <Link to="/login">{data?.loggedInUser ? data.loggedInUser : "Login"}</Link>
            </li>

            <li></li>
          </ul>
        </div>
      </header>
      {/* <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" width="56" height="56" />
        </Link>
      </div>
      <div className="nav-items">
       
      </div>
    </div> */}
    </>
  );
};

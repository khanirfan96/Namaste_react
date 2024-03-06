import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header render");

  // 1.) if no dependency array => useEffect is called on every render
  // 2.) if empty dependency array([]) => useEffect is called on initial render(just once)
  // 3.) if dependency array is ([btnName]) => called everytime btnName is updated

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

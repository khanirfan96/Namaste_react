import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedinUser} = useContext(UserContext);

  // 1.) if no dependency array => useEffect is called on every render
  // 2.) if empty dependency array([]) => useEffect is called on initial render(just once)
  // 3.) if dependency array is ([btnName]) => called everytime btnName is updated

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="flex justify-between shadow-lg bg-green-200">
      <div className="logo-container">
        <img className="w-18" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about"> About us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
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
          <li className="px-4 font-bold">
            {loggedinUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

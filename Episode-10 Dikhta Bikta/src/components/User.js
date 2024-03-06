// import React from "react";
import { useState } from "react";

const User = ({ name, location, learning }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>
      <h1> {name}</h1>
      <h2> {learning} </h2>
      <h3> {location} </h3>
    </div>
  );
};

export default User;

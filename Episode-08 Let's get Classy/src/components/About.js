import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { constrainedMemory } from "process";

function About() {
  
  return (
    <div>
      <h1>About Component</h1>
      <h2>This is my First Project....</h2>

      {/* <User
        name={"Irfan Khan (Function Comp...)"}
        location={"Allahabad U.P (Function Comp...)"}
        learning={"Learning React (Function Comp...)"}
      /> */}

      <UserClass
        name={"Irfan Khan (Class Comp...)"}
        location={"Allahabad U.P (Class Comp...)"}
        learning={"Learning React (Class Comp...)"}
      />
    </div>
  );
}

export default About;

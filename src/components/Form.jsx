import React from "react";
import Input from "./Input";

const Form = (props) => {
  // return props.isRegistered ? (
  //   <form className="form">
  //     <Input type="text" placeholder="Username" />
  //     <Input type="password" placeholder="Password" />
  //     <button type="submit">Signup</button>
  //   </form>
  // ) : (
  //   <form className="form">
  //     <Input type="text" placeholder="Username" />
  //     <Input type="password" placeholder="Password" />
  //     <Input type="password" placeholder="Confirm Password" />
  //     <button type="submit">Register</button>
  //   </form>
  // );

  // -------------------------OR-------------------------
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
};

document.getElementById("root").style.textDecoration = "line-through";

export default Form;
